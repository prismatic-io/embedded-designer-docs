---
title: Building %INTEGRATION_PLURAL%
description: Build new %INTEGRATION_PLURAL% using %COMPANY_POSSESSIVE% %EMBEDDED_DESIGNER%
---

%COMPANY_POSSESSIVE% %EMBEDDED_DESIGNER% lets you build %INTEGRATION_PLURAL% that connect %COMPANY_CORE_PRODUCT% to other applications and services you use.
This article describes how to build %INTEGRATION_PLURAL%.

If you have not done so yet, please first review the [Getting Started](./get-started.md) guide.

## Creating a new %INTEGRATION%

To create a new %INTEGRATION%, first log in to [%COMPANY_CORE_PRODUCT%](%APP_LOGIN_URL%).
Next, %NAVIGATING_TO_BUILDER%.
Here, you will see all of the %INTEGRATION_PLURAL% that you've built.

To create a new %INTEGRATION%, click **+ Add Integration**.
You'll be prompted to provide a **name** for your %INTEGRATION% and select a trigger for its first flow.
The trigger determines when your %INTEGRATION%'s flow will run, and you can modify it at any time.

## %INTEGRATION% structure

%INTEGRATION_PLURAL% in the %EMBEDDED_DESIGNER% are made up of three primary building blocks:

- **[Flows](./flows.md)**: A single %INTEGRATION% can contain one or more flows.
  Each flow has its own trigger and its own series of steps that run when the trigger fires.
- **[Steps](./steps.md)**: Each flow is a sequence of steps that run in order.
  Each step performs an action, such as fetching data from an API or sending a message to Slack.
- **[Config Wizard](./config-wizard/overview.md)**: When you deploy a %INSTANCE% of your %INTEGRATION%, you work through a configuration wizard that you design.
  In the wizard, you authenticate with third-party applications and provide the configuration values that vary between %INSTANCE_PLURAL% (different credentials, endpoints, channel names, and so on).

## Assigning an icon to an %INTEGRATION%

To add an icon to an %INTEGRATION% in the designer, click the icon space to the left of your %INTEGRATION%'s name.
Icons make %INTEGRATION_PLURAL% easier to recognize at a glance in your %INTEGRATION% list.

## Assigning labels and categories

You can assign multiple labels and a category to an %INTEGRATION% through the **Integration details** menu in the designer.
Categorizing %INTEGRATION_PLURAL% helps your team find and filter %INTEGRATION_PLURAL% in the %INTEGRATION% list.

## Publishing an %INTEGRATION%

**Publishing** an %INTEGRATION% marks a version of it as ready to deploy as a %INSTANCE%.

To publish an %INTEGRATION%, open the **Version history** tab on the left side of the page.
If you have unpublished changes, you'll see an **Unpublished Draft** listed among the %INTEGRATION%'s versions.
Enter a note describing your changes, then click **Save & Publish** to release a new version.

%INTEGRATION% versions can be marked **Available** or **Unavailable** using the toggles to the right of each version.
Marking a version **Unavailable** prevents it from being deployed as a new %INSTANCE%.

For more on deploying a %INSTANCE% from a published version, see [Publishing and Deploying](./enabling.md).

## %INTEGRATION% attachments and internal documentation

Your team can share %INTEGRATION%-related documents and notes by clicking the **Documentation & attachments** button on the left side of the designer.
This space allows you to share notes, links, and other documentation with your team.
