---
title: Triggering Flows
description: Each flow in your %INTEGRATION% has its own trigger that determines when the flow runs
---

Triggers determine when a flow runs.
Every flow in your %INTEGRATION% has its own trigger, and you can mix trigger types within the same %INTEGRATION% (one flow on a schedule, another responding to webhooks, etc.).

If you want a flow to run on a consistent schedule, use a [schedule trigger](#schedule-triggers).
If you want a flow to run in response to webhook requests, use a [webhook trigger](#webhook-triggers).
If you want a flow to run when a %INSTANCE% is deployed or removed, use an [instance management trigger](#instance-management-triggers).

## Selecting a trigger type

When you [create a new %INTEGRATION%](./building.md), you will be prompted to select a trigger type for the first flow.
To change the trigger type of an existing flow, click the trigger at the top of the flow editor and select **Change step action**.

When you [add a new flow](./flows.md) to your %INTEGRATION%, that flow will get its own trigger, independent of other flows in the %INTEGRATION%.

## Schedule triggers

Schedule triggers allow you to run a flow on a regular cadence (like "every 5 minutes" or "Mondays at 8:00 AM CST").
This is useful when a flow should run at a specific time.

To configure a schedule, click the trigger at the top of the flow editor and open the **Configure** drawer on the right side of the screen.
You can then select the frequency of the trigger, such as "every 5 minutes", "every hour", or "every day at a specific time".

> **Tip: Use Cron expressions for advanced scheduling**
>
> You can also set up more complex schedules using [cron expressions](https://en.wikipedia.org/wiki/Cron#CRON_expression) to specify exactly when the flow should run by selecting **Custom** as your **Schedule type**.
> For example, a custom schedule of `*/5 8-16 * * 1-5` would cause the flow to run every five minutes during business hours (8:00-16:55), Monday through Friday.
> For help computing a cron schedule, see this [Cron Calculator](https://crontab.guru/).

## Webhook triggers

Webhook triggers run a flow in response to incoming HTTP requests.
You can use the generic webhook trigger to receive requests from any external system, or use a connector-specific trigger that handles authentication and signature verification for a particular third-party application.

### What is a webhook?

A **webhook** is an automated message sent from one application to another when certain events occur.
Webhooks let applications notify one another in real time when something has changed in one system and can be used to trigger a flow so the change is reflected in another system.

A webhook consists of two main parts:

- The **event** that causes the webhook to fire.
  The event is usually a change to a record in an application.
  For example, you may have a `contact.changed` or `report.created` event.
- The **endpoint** where information about the event is sent.
  The endpoint is a URL that you provide to the application that will receive the webhook.

### Each flow has its own webhook URL

Because an %INTEGRATION% can contain [multiple flows](./flows.md), each flow has its own distinct webhook URL.
This lets a third-party application send different events to different flows in the same %INTEGRATION%.

Each flow has two URLs:

1. A **Test URL** you can use to test your webhook configuration within the %EMBEDDED_DESIGNER%.
2. A **Live URL** that is used when your %INTEGRATION% is [enabled](./enabling.md) and running in production.

Your flow URLs will each be unique and will look similar to `https://hooks.%WHITE_LABEL_BASE_URL%/trigger/SW5zEXAMPLE1234567890`

### Webhook request payloads

When a webhook fires, the application where the event occurred will generally send a POST request to the endpoint you provided.
Most applications will send a JSON payload in the request body that contains information about the event that occurred (though some, notably [Salesforce](./connectors/salesforce.md), send XML payloads).

Some payloads contain the entire record that changed, while others contain only the record's ID and you are expected to fetch the record yourself.

To test a webhook request, you can send a sample payload to the test URL using an HTTP client like [Postman](https://www.postman.com/) or [cURL](https://curl.se/).

#### Posting data to a webhook URL

Data is typically sent as a JSON object in the request body of the webhook request, though the webhook trigger also parses data from the following sources:

- The **request body** - the JSON (or other) data sent to the webhook as an [HTTP request body](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages#body).
- The **request headers** - the [HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages#headers).
- The **URL path** - The [path to resource](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL#path_to_resource) that follows the flow webhook URL.
- The **URL parameters** - The [parameters](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL#parameters) that follow the `?` in a URL.

Take, for example, this `curl` invocation:

```bash
curl \
  'https://hooks.%WHITE_LABEL_BASE_URL%/trigger/SW5zEXAMPLE1234567890==/my/custom/path?param-one=ParamValueOne&param-two=ParamValueTwo' \
  --header "header-one: First header value" \
  --header "header-two: Second header value" \
  --header "Content-Type: application/json" \
  --data '{"Payload Key 1":"Payload Value 1","Do Thing?":true,"quantity":123}'
```

- The request body - `{"Payload Key 1":"Payload Value 1","Do Thing?":true,"quantity":123}` - is parsed (if JSON) and is accessible by referencing the trigger's `results.body.data.KEY-NAME`.
  Non-JSON payloads (like XML, images, etc.) are accessible through `results.rawBody` and can be parsed in subsequent steps.
- The request headers are accessible through the trigger's `results.headers.HEADER-NAME`.
- The URL path - `my/custom/path` - is accessible through the trigger's `results.pathFragment`.
  You can pass that data into the built-in [split string](./connectors/text-manipulation.md#split) action and split on the `/` character to split the URL path into an array `['my','custom','path']`.
- The URL parameters - `?param-one=ParamValueOne&param-two=ParamValueTwo` are parsed and accessible through the trigger's `results.queryParameters.PARAMETER-NAME`.

#### Posting binary webhook data

If you have binary data (like an image or PDF) that you would like to post as part of your webhook invocation, you can pass that binary data as part of your request.
For example, if you have an image, `my-image.png`, you could invoke a test of a flow with:

```bash
curl 'https://hooks.%WHITE_LABEL_BASE_URL%/trigger/SW5zEXAMPLE1234567890' \
  --request POST \
  --header 'Content-Type: image/png' \
  --data-binary '@/path/to/my-image.png'
```

The binary file can be accessed by subsequent steps by referencing the trigger's `results.body.data`.

#### Posting multipart webhook data

It's useful to be able to post a combination of binary and text data to a flow.
For example, you might want to post information about a person, as well as an avatar image of the person, to be processed by your flow.
To do that, use a content type of `multipart/form-data` with your webhook invocation:

```bash
curl 'https://hooks.%WHITE_LABEL_BASE_URL%/trigger/SW5zEXAMPLE1234567890' \
  --request POST \
  --header "Content-Type: multipart/form-data" \
  --form person='{"firstname":"John","lastname":"Doe"};type=application/json' \
  --form photo=@johndoe.png
```

The first name in this example is accessible by referencing the trigger's `results.body.data.person.data.firstname`, and the avatar image is accessible by referencing `results.body.data.photo`.

### Webhook security

Webhooks are often secured using Hashed Message Authentication Codes (HMAC) to ensure that the request is coming from an expected source.
You can use the [Hash](./connectors/hash.md#hmacwebhooktrigger) connector's HMAC trigger to implement HMAC security for your webhook requests.
This trigger will reject any request that is not properly signed with the expected HMAC signature.

### Synchronous and asynchronous invocations

Flows are configured by default to run **asynchronously**.
That means that an external application makes a request to a flow's webhook URL, but does not wait for the flow to finish running.

Sometimes, though, it's useful for an application to get information back from the flow that was invoked.
In that case, you can choose to run the flow **synchronously**.

When a flow is invoked synchronously, the external application makes a request to the flow's webhook URL and waits for the flow to finish running before receiving a response.
The caller receives an HTTP response with the results of the _last step_ of the flow.

#### Default asynchronous webhook responses

By default, a flow runs **asynchronously** and its webhook trigger provides an HTTP code 200 ("OK") response to callers.
The body of the response contains the ID of the execution that was triggered.
Your request and response might look something like this:

```text
curl \
  --data '{}' \
  --header "Content-Type: application/json" \
  'https://hooks.%WHITE_LABEL_BASE_URL%/trigger/SW5zEXAMPLE1234567890'

{"executionId":"SW5zdGFuY2VFeGVjdXRpb25SZXN1bHQ6OTdiNWQxYmEtZGUyZi00ZDY4LWIyMTgtMDFlZGMwMTQxNTM5"}
```

#### Custom HTTP responses for asynchronous webhook requests

If you would like to provide a different HTTP status code in response to a webhook request, you have two options:

1. To provide a consistent HTTP status code for all asynchronous webhook requests, configure the default response code in the trigger configuration drawer on the right side of the designer.
   You can also provide a static text response body and response headers within the trigger configuration drawer.
2. To provide a dynamic HTTP response dependent on the request, write custom JavaScript code using a [Code Block Trigger](./connectors/code.md#runcodetrigger).

   ```javascript title="Custom JavaScript code for a trigger"
   module.exports = async ({ logger, configVars }, payload) => {
     let response = {};

     if (payload.body.data.quantity > 0) {
       response = {
         statusCode: 201,
         contentType: "application/json",
         body: JSON.stringify({ status: "Created" }),
       };
     } else {
       response = {
         statusCode: 400,
         contentType: "application/json",
         body: JSON.stringify({ error: "Quantity must be positive" }),
       };
     }

     return { payload, response };
   };
   ```

   In this example, the response will be a 201 ("Created") status code if the `quantity` in the request body is greater than 0, or a 400 ("Bad Request") status code if it is not.

#### HTTP responses for synchronous invocations

When a flow is invoked **synchronously**, the external application waits for the flow to finish running before receiving a response.
The response will contain the results of the _last step_ of the flow, usually in the form of a JSON object.

If you would like to return a custom HTTP status code, response body, or response headers, you can do so by using a [Code Block](./connectors/code.md#runcode) step at the end of your flow.

```javascript
module.exports = async (context, stepResults) => {
  return {
    statusCode: 202,
    contentType: "application/json",
    headers: { "X-Custom-Header": "foo" },
    body: JSON.stringify({ message: "Flow completed successfully" }),
  };
};
```

Read more about [using code blocks](./custom-code.md).

## Connector-specific app triggers

Some connectors include their own triggers that handle authentication, HMAC validation, and webhook setup with that third-party application.
For example, the [Asana](./connectors/asana.md) connector includes triggers for project events, and the [PagerDuty](./connectors/pagerduty.md) connector includes triggers for incident events.

If a connector includes its own trigger, you can select it when adding a flow trigger.
The trigger will use the [connection](./connections/overview.md) you have configured in your [Config Wizard](./config-wizard/overview.md) for that connector.

## Instance management triggers

Some flows should run as part of deploying or removing a %INSTANCE% of your %INTEGRATION%.
For example, you might want to register webhooks in a third-party application when a %INSTANCE% is first deployed, and clean those webhooks up when the %INSTANCE% is removed.

These flows use special triggers:

- **Instance Deploy** - runs once when a %INSTANCE% is activated.
- **Instance Remove** - runs once when a %INSTANCE% is removed.

You can configure these triggers like any other trigger by selecting them when you add or edit a flow.
