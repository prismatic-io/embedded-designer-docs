---
title: Connections Overview
description: Connections store credentials for the third-party applications your %INTEGRATION% talks to
---

A **connection** is a special type of [config variable](../config-wizard/config-variables.md) that captures the credentials needed to talk to a third-party application.
A connection might be a username/password pair, an API key, or a full OAuth 2.0 client configuration.

Unlike per-step credentials, connections in the %EMBEDDED_DESIGNER% are configured once in the [Config Wizard](../config-wizard/overview.md) and reused by every step (in every flow) that needs them.
You authenticate once per %INSTANCE% you deploy, and every step that uses Slack, Salesforce, etc. uses that same connection.

## Adding a connection

Connection config variables can only be added on the **first** page of your config wizard.
Subsequent pages can use the connection to dynamically populate dropdowns and other UI elements.

To add a connection:

1. Open the **Config Wizard Designer**.
2. On the first config page, click **+ Config Variable**.
3. Set the **Data Type** to **Connection**.
4. Choose the connector you want to connect to (e.g., Slack, Salesforce, HTTP).
5. Choose the authentication type the connector supports (API Key, OAuth 2.0, Basic Auth, etc.).
6. Configure any connector-specific connection inputs (such as OAuth 2.0 client ID and client secret).

## Referencing a connection from a step

Once a connection config variable exists, every step you add for that connector will let you select that connection as input.
For example, if you have a `Slack Connection` connection config variable, every Slack step you add to any flow will reference that single connection.

If your %INTEGRATION% talks to multiple accounts within the same application (for example, two different Slack workspaces), you can create multiple connection config variables of the same type and choose between them on each step.

## Authentication types

Different connectors support different authentication types.
Common types include:

- [**OAuth 2.0**](../oauth2.md) - you click a "Connect to App" button, log in to the third-party app, and consent to grant the %INTEGRATION% permissions.
- **API Key / Bearer Token** - you paste an API key generated in the third-party app.
- **Basic Auth** - you enter a username and password.
- **Custom** - some connectors define their own connection types tailored to the application's authentication requirements.

When you deploy a %INSTANCE%, you enter or click through the authentication for each connection in the config wizard.
Each %INSTANCE% has its own connection values, so you can deploy a separate %INSTANCE% per third-party account if you need to.
