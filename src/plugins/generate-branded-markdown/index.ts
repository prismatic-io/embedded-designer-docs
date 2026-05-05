import { cpSync, globSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import type { CommanderStatic } from "commander";
import { rimraf } from "rimraf";
import parseMarkdown from "front-matter-markdown";
import { contentProcessPhrases } from "../../dynamicPhrases";

const rootPath = path.join(__dirname, "..", "..", "..");
const docsPath = path.join(rootPath, "docs");
const brandedDocsPath = path.join(rootPath, "branded-docs");

async function generateBrandedMarkdownFiles() {
  // Ensure the branded docs directory exists
  await rimraf(brandedDocsPath);
  mkdirSync(brandedDocsPath);

  // Process each markdown file in the docs directory
  const markdownFiles = globSync("**/*.md", { cwd: docsPath });
  for (const markdownFile of markdownFiles) {
    const sourceFilePath = path.join(docsPath, markdownFile);
    const targetFilePath = path.join(brandedDocsPath, markdownFile);

    // Read the markdown file, process it to replace phrases
    const brandedContent = contentProcessPhrases({
      fileContent: readFileSync(sourceFilePath, "utf-8"),
      filePath: sourceFilePath,
    });

    const markdown = parseMarkdown(brandedContent);

    // Ensure the target directory exists
    const targetDir = path.dirname(targetFilePath);
    mkdirSync(targetDir, { recursive: true });

    // Write the branded content to the target file, replacing frontmatter with a markdown title
    writeFileSync(targetFilePath, `# ${markdown.title}\n${markdown.content}`);
  }

  // Copy the assets directory from docs to branded-docs
  cpSync(path.join(docsPath, "assets"), path.join(brandedDocsPath, "assets"), {
    recursive: true,
  });

  // Copy connector assets directory from docs to branded-docs
  cpSync(
    path.join(docsPath, "connectors", "assets"),
    path.join(brandedDocsPath, "connectors", "assets"),
    { recursive: true },
  );
}

async function resizeScreenshotsPlugin() {
  return {
    name: "generate-branded-markdown",
    extendCli(cli: CommanderStatic) {
      const command = cli.command("generate-branded-markdown");
      command
        .description("Generate branded markdown files for docs")
        .action(generateBrandedMarkdownFiles);
    },
  };
}

module.exports = resizeScreenshotsPlugin;
