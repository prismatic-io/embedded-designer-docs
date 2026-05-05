# Building Branded HTML Assets

This project leverages [Docusaurus](https://docusaurus.io/) to transform Markdown files into static HTML/CSS/JS assets.
If your documentation will be hosted as static HTML/CSS/JS on a web server, follow this guide.

## Setup

### Prerequisites

To run this project, ensure that you've installed [NodeJS](https://nodejs.org/en). You should be able to run `node --version` and `npm --version` from your command line.
Ensure that you're using NodeJS version 20.x or later.

### Fork this repository

In order to customize and white-label these docs, and plug them in to your own CI/CD pipeline, you will need your own copy of this repo.
[Fork](https://github.com/prismatic-io/embedded-designer-docs/fork) this repository to create your own copy, and clone your fork.

To keep your fork up to date, you can sync changes from this repository to your fork.
See [Syncing a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork).

### Install dependencies

This project uses the [Docusaurus](https://docusaurus.io/) static-site generator library to convert [Markdown](https://www.markdownguide.org/) into HTML/CSS/JS.
To install dependencies of this project, run

```bash
npm install
```

## Configuration

### White-label phrases

This project avoids using phrases like "Prismatic", "integration designer" or "instance".
You have words you use internally to describe your company and the integration designer.

Copy the directory `site-config.example` to `site-config` and fill in your values for each field in `site-config/index.ts`.
Your company's name and other details will automatically replace placeholders in documentation markdown files.

**Note:** the configuration file is not hot-reloaded. If you make changes to the config file, you will need to restart the Docusaurus server.

### Add your own favicon and logo (optional)

Save your own favicon (`.ico` file) to `static/img/favicon.ico`.

(optional) If you would like to have your own logo in the navbar alongside your site title, save a square SVG logo to `static/img/` and include `navbar.logo` in your `site-config/index.ts` configuration.
For example,

```typescript
siteConfig = {
  navbar: {
    logo: {
      src: "img/acme-logo.png",
      alt: "Acme logo",
    },
  },
};
```

### Extend Docusaurus (optional)

The file `docusaurus.config.ts` contains default Docusaurus-related configuration.
You can read about all of your configuration options [here](https://docusaurus.io/docs/api/docusaurus-config).

You may want to extend the default Docusaurus config (maybe add an [Algolia](https://docusaurus.io/docs/search#using-algolia-docsearch) search bar, or [navbar or footer menu items](https://docusaurus.io/docs/api/docusaurus-config#themeConfig)).

**To avoid merge conflicts, please do not edit `docusaurus.config.ts` directly.**
Instead, add additional Docusaurus configuration to your `site-config/index.ts` file under `docusaurusConfig`.

Values in your `site-config/index.ts` file will be merged with, and override, default values set in `docusaurus.config.ts`.

## Run locally

To run this project locally, run

```bash
npm run start
```

## Build static artifacts

To compile this project to static HTML/CSS/JS, run

```bash
npm run build
```

This will create a new directory, `build/` which will contain your built project.
You can upload the artifacts of this directory to a web server of your choice.

To view the built artifact in a browser, run

```bash
npm run serve
```

This will serve the contents of `build/` locally.

## Sync static artifacts with your web server

The `build/` directory now contains static HTML/CSS/JS artifacts that you can upload to your web server.
