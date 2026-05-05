/**
 * Replace instances of company name, name of embedded workflow builder, etc., with
 * user-defined phrases
 */

import type {
  MarkdownPreprocessor,
  ParseFrontMatter,
} from "@docusaurus/types/src/config";
import siteConfig from "../site-config";

export const contentProcessPhrases: MarkdownPreprocessor = ({ fileContent }) => {
  let content = fileContent;
  for (const [key, replacementValue] of Object.entries(siteConfig.phrases)) {
    content = content.replaceAll(key, replacementValue);
  }
  // Guard against mistyped phrases
  const extraneousPhrases = /%[A-Z_]*%/.exec(content);
  if (extraneousPhrases) {
    throw new Error(`Found extraneous phrase ${extraneousPhrases[0]}`);
  }
  return content;
};

const frontMatterKeys = ["title", "description"];

export const frontMatterProcessPhrases: ParseFrontMatter = async (params) => {
  const result = await params.defaultParseFrontMatter(params);
  for (const [replacementKey, replacementValue] of Object.entries(siteConfig.phrases)) {
    for (const frontMatterKey of frontMatterKeys) {
      if (typeof result.frontMatter[frontMatterKey] === "string") {
        result.frontMatter[frontMatterKey] = result.frontMatter[
          frontMatterKey
        ].replaceAll(replacementKey, replacementValue);
      }
    }
  }
  return result;
};
