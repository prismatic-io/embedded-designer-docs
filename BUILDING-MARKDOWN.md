# Building Branded Markdown Files

The `docs/` directory contains markdown files that you can ingest into your own content management system or custom Docusaurus project.
These files are written in vanilla [Markdown](https://www.markdownguide.org/) and do not contain any Docusaurus-specific syntax.
However, they do contain placeholders like `%COMPANY%` and `%INTEGRATION%` that you can replace with your own values.

You can either write your own find-and-replace script to replace these placeholders, or you can follow these steps to generate branded markdown files.

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

You can ignore any docusaurus content in this configuration file, as it is not used when building branded markdown files.
Instead, concentrate on `phrases`, replacing things like `%COMPANY%` and `%INTEGRATION%` with your own values.

## Generate Branded Markdown Files

Now, run

```bash
npm run generate-branded-markdown
```

A new directory, `branded-docs/`, will be created, containing the branded markdown files.
You can ingest these files into your own content management system using whatever mechanism the CMS provides for importing markdown files.
