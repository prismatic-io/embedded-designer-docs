---
title: "%COMPANY_POSSESSIVE% %EMBEDDED_DESIGNER%"
description: Build new %INTEGRATION_PLURAL% using %COMPANY_POSSESSIVE% %EMBEDDED_DESIGNER%
slug: /
---

**%COMPANY_POSSESSIVE% %EMBEDDED_DESIGNER%** is a low-code integration designer your team can use to build %INTEGRATION_PLURAL% that sync data between %COMPANY_CORE_PRODUCT% and other applications and services you use.

An %INTEGRATION% is made up of one or more [flows](./flows.md), and each flow is a series of steps that runs in response to a [trigger](./triggering.md).
Each flow connects to third-party applications using built-in **connectors**.
You can query data in a third-party application to import into %COMPANY_CORE_PRODUCT%, or you can export data from %COMPANY_CORE_PRODUCT% to another service.

When you publish an %INTEGRATION%, you deploy a **%INSTANCE%** of it - the production-ready, running copy of the %INTEGRATION%.
You configure each %INSTANCE% by working through a [Config Wizard](./config-wizard/overview.md) you design - authorizing third-party applications and providing the configuration values your %INTEGRATION% needs to run.
You can deploy multiple %INSTANCE_PLURAL% of the same %INTEGRATION% (one for each environment, for example) and configure each one independently.

If you're syncing data between %COMPANY_CORE_PRODUCT% and a proprietary system you've built, you can leverage the generic [HTTP connector](./connectors/http.md) to make [requests](./http-requests.md) to any API that does not already have a built-in connector.

If you'd like to write code to help solve your problem, you can add JavaScript [code steps](./custom-code.md) to your %INTEGRATION% to manipulate data, make additional requests, or perform any other custom logic you need.

To get started building, check out our [getting started guide](./get-started.md).
