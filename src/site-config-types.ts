/**
 * This defines types for a site-config/index.ts file.
 * See README.md
 */

import type { Config as DocusaurusConfig } from "@docusaurus/types";
import type { ColorModeConfig, Footer, Navbar } from "@docusaurus/theme-common";

/**
 * A list of phrases that will replace placeholders in markdown
 */
interface Phrases {
  /**
   * Your company's name
   * @example Acme Inc
   */
  "%COMPANY%": string;
  /**
   * Possessive version of your company's name
   * @example Acme Inc's
   */
  "%COMPANY_POSSESSIVE%": string;
  /**
   * The core product you build
   * @example Widget Tracker
   */
  "%COMPANY_CORE_PRODUCT%": string;
  /**
   * What you call the embedded integration designer internally
   * @example iConnect Designer
   */
  "%EMBEDDED_DESIGNER%": string;
  /**
   * What you call a single integration that your team builds
   * @example iConnect integration
   */
  "%INTEGRATION%": string;
  /**
   * What you call multiple integrations that your team builds
   * @example iConnect integrations
   */
  "%INTEGRATION_PLURAL%": string;
  /**
   * What you call a deployed copy of an integration for a specific customer
   * @example iConnect deployment
   */
  "%INSTANCE%": string;
  /**
   * Plural form of the deployed copy term
   * @example iConnect deployments
   */
  "%INSTANCE_PLURAL%": string;
  /**
   * Where your users should be directed to log in to your app
   * @example https://app.acme.com/login
   */
  "%APP_LOGIN_URL%": string;
  /**
   * White-label base URL that will be used to derive OAuth 2.0 callback and webhook URLs
   * @example integrations.acme.com
   */
  "%WHITE_LABEL_BASE_URL%": string;
  /**
   * Instructions to navigate to the embedded integration designer after logging in.
   * Appears on the top of the /building page
   */
  "%NAVIGATING_TO_BUILDER%": string;
}

export interface SiteConfig {
  /**
   * If docs will exist at https://docs.acme.com/path/to/docs, set
   * url to `https://docs.acme.com` and baseUrl to `/path/to/docs`
   */
  docsSite: {
    /** The base URL of your docs site. example:  https://docs.acme.com */
    url: string;
    /** The path where your site is hosted. If your docs will exist in https://docs.acme.com/path/to/docs, enter `/path/to/docs` */
    baseUrl: `/${string}`;
    /** The path to your favicon, stored in ./static/img/ */
    favicon?: `${string}.${"svg" | "ico" | "png"}`;
  };
  /** Docusaurus navbar items and title */
  navbar: Partial<Navbar>;

  /** Footer theme, items and copyright line */
  footer: Partial<Footer>;

  /** Support light mode, dark mode, or both */
  colorMode: ColorModeConfig;

  /**
   * Phrases, like company name, product name, etc, that will replace
   * placeholder strings in docs
   */
  phrases: Phrases;

  /**
   * Additional Docusaurus configuration. See https://docusaurus.io/docs/configuration
   */
  docusaurusConfig?: Partial<DocusaurusConfig>;
}
