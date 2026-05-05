---
title: Jira Service Management Connector
sidebar_label: Jira Service Management
description: Interact with the Jira Service Management API to manage service requests, issues, request types, queues, and approvals.
---

![Jira Service Management](./assets/jira-service-management.png#connector-icon)
Interact with the Jira Service Management API to manage service requests, issues, request types, queues, and approvals.

## Connections

### Basic Authentication {#jsmbasic}

Authenticate using an email address and API token.

| Input    | Comments                                                                                                                      | Default |
| -------- | ----------------------------------------------------------------------------------------------------------------------------- | ------- |
| Username | The Atlassian account email address used for authentication.                                                                  |         |
| API Key  | The Atlassian API token. Generate one at [Atlassian API Tokens](https://id.atlassian.com/manage-profile/security/api-tokens). |         |
| Host     | The Atlassian site hostname (without https://).                                                                               |         |

### OAuth 2.0 {#jsmoauth2}

Authenticate using OAuth 2.0.

This connection uses OAuth 2.0, a common authentication mechanism for integrations.
Read about how OAuth 2.0 works [here](../oauth2.md).

| Input               | Comments                                                                                                                                                                         | Default                                                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Authorize URL       | The OAuth 2.0 Authorization URL for Atlassian. The audience parameter is required for cloud APIs.                                                                                | https://auth.atlassian.com/authorize?audience=api.atlassian.com&prompt=consent                               |
| Token URL           | The OAuth 2.0 Token URL for Atlassian.                                                                                                                                           | https://auth.atlassian.com/oauth/token                                                                       |
| Scopes              | Space-delimited list of OAuth 2.0 scopes for Jira Service Management access.                                                                                                     | read:servicedesk-request write:servicedesk-request manage:servicedesk-customer read:jira-user offline_access |
| Client ID           | OAuth 2.0 Client ID from the Atlassian Developer Console.                                                                                                                        |                                                                                                              |
| Client Secret       | OAuth 2.0 Client Secret from the Atlassian Developer Console.                                                                                                                    |                                                                                                              |
| Atlassian Site Name | Optional Atlassian site name or URL to connect to. By default, connects to the first accessible site. Set this when the authenticated account has access to multiple Jira sites. |                                                                                                              |

## Actions

### Add Attachment {#addattachment}

Attaches a previously uploaded temporary file to a service request.

| Input             | Comments                                                                                                                                          | Default |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection        | The Jira Service Management connection to use.                                                                                                    |         |
| Issue ID or Key   | The ID or key of the service request issue (e.g., IT-42 or 10001). Use the Select Request data source or List Requests action to find this value. |         |
| Temporary File ID | The ID of the temporary file previously uploaded via the Upload Attachment action.                                                                |         |

### Add Comment {#addcomment}

Adds a comment to a service request.

| Input           | Comments                                                                                                                                          | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                                    |         |
| Issue ID or Key | The ID or key of the service request issue (e.g., IT-42 or 10001). Use the Select Request data source or List Requests action to find this value. |         |
| Comment Body    | The message to post on the request. Supports plain text and is rendered in the customer portal.                                                   |         |
| Public          | When true, the comment is visible to the customer. When false, the comment is internal only.                                                      | true    |

### Add Customers to Service Desk {#addcustomers}

Adds one or more existing customers to the specified service desk by accountId.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Account IDs     | The Atlassian accountIds to include in the request. Provide a JSON array of string identifiers.                                  |         |

### Add Organization to Service Desk {#addservicedeskorganization}

Links an organization to the specified service desk.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Organization ID | The unique identifier of the organization. Use the List Organizations action or the Organization data source.                    |         |

### Add Users to Organization {#addorganizationusers}

Adds users to an organization by accountId.

| Input           | Comments                                                                                                      | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                |         |
| Organization ID | The unique identifier of the organization. Use the List Organizations action or the Organization data source. |         |
| Account IDs     | The Atlassian accountIds to include in the request. Provide a JSON array of string identifiers.               |         |

### Approve or Decline Request {#approverequest}

Approves or declines a pending approval on a service request.

| Input           | Comments                                                                                                                                          | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                                    |         |
| Issue ID or Key | The ID or key of the service request issue (e.g., IT-42 or 10001). Use the Select Request data source or List Requests action to find this value. |         |
| Approval ID     | The ID of the approval to respond to. Use the List Approvals action or the Approval data source to find this value.                               |         |
| Decision        | Whether to approve or decline the request.                                                                                                        |         |

### Create Customer {#createcustomer}

Creates a portal-only customer account, adds them to the specified service desk, and sends an invite email.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Email           | The email address of the new portal-only customer.                                                                               |         |
| Display Name    | The full name shown for the customer in the portal and on issues they raise.                                                     |         |

### Create Organization {#createorganization}

Creates a new organization.

| Input             | Comments                                                                                  | Default |
| ----------------- | ----------------------------------------------------------------------------------------- | ------- |
| Connection        | The Jira Service Management connection to use.                                            |         |
| Organization Name | A unique display label for the organization, shown to agents and customers in the portal. |         |

### Create Portal-Only Customer {#createportalonlycustomer}

Creates a portal-only customer account without linking them to a service desk.

| Input        | Comments                                                                     | Default |
| ------------ | ---------------------------------------------------------------------------- | ------- |
| Connection   | The Jira Service Management connection to use.                               |         |
| Email        | The email address of the new portal-only customer.                           |         |
| Display Name | The full name shown for the customer in the portal and on issues they raise. |         |

### Create Request {#createrequest}

Creates a new service request in the specified service desk.

| Input              | Comments                                                                                                                          | Default |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection         | The Jira Service Management connection to use.                                                                                    |         |
| Service Desk ID    | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value.  |         |
| Request Type ID    | The ID of the request type to create the request as. Use the List Request Types action or the Request Type data source.           |         |
| Summary            | A brief, one-line subject shown in the portal and issue list.                                                                     |         |
| Description        | Additional detail about the request. Displayed on the request view for agents and customers.                                      |         |
| Field Values       | JSON object of additional request field values required by the request type. Keys are field IDs.                                  |         |
| Raise On Behalf Of | The accountId of the customer to raise the request on behalf of. If omitted, the request is raised by the authenticated user.     |         |
| Additional Fields  | Extra request body properties to merge into the payload alongside the standard inputs. Provide a JSON object keyed by field name. |         |

### Delete Organization {#deleteorganization}

Deletes an organization by ID.

| Input           | Comments                                                                                                      | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                |         |
| Organization ID | The unique identifier of the organization. Use the List Organizations action or the Organization data source. |         |

### Delete Organization Property {#deleteorganizationproperty}

Removes a custom property from an organization by key.

| Input           | Comments                                                                                                      | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                |         |
| Organization ID | The unique identifier of the organization. Use the List Organizations action or the Organization data source. |         |
| Property Key    | The key identifying the custom property to store against the organization.                                    |         |

### Get Organization {#getorganization}

Returns a single organization by ID.

| Input           | Comments                                                                                                      | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                |         |
| Organization ID | The unique identifier of the organization. Use the List Organizations action or the Organization data source. |         |

### Get Organization Property {#getorganizationproperty}

Returns the value of a single organization property.

| Input           | Comments                                                                                                      | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                |         |
| Organization ID | The unique identifier of the organization. Use the List Organizations action or the Organization data source. |         |
| Property Key    | The key identifying the custom property to store against the organization.                                    |         |

### Get Request {#getrequest}

Returns a single service request by issue ID or key.

| Input           | Comments                                                                                                                                          | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                                    |         |
| Issue ID or Key | The ID or key of the service request issue (e.g., IT-42 or 10001). Use the Select Request data source or List Requests action to find this value. |         |

### Get Request Type {#getrequesttype}

Returns a single request type for a service desk.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Request Type ID | The ID of the request type to create the request as. Use the List Request Types action or the Request Type data source.          |         |

### Get Service Desk {#getservicedesk}

Returns a single service desk by ID.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |

### List Approvals {#listapprovals}

Returns the approvals for a service request.

| Input           | Comments                                                                                                                                          | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                                    |         |
| Issue ID or Key | The ID or key of the service request issue (e.g., IT-42 or 10001). Use the Select Request data source or List Requests action to find this value. |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                                        | false   |
| Start           | The starting index of the returned items. First item is 0.                                                                                        | 0       |
| Limit           | The maximum number of items to return per page.                                                                                                   |         |

### List Comments {#listcomments}

Returns comments for a service request.

| Input           | Comments                                                                                                                                          | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                                    |         |
| Issue ID or Key | The ID or key of the service request issue (e.g., IT-42 or 10001). Use the Select Request data source or List Requests action to find this value. |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                                        | false   |
| Start           | The starting index of the returned items. First item is 0.                                                                                        | 0       |
| Limit           | The maximum number of items to return per page.                                                                                                   |         |

### List Customers {#listcustomers}

Returns customers associated with a service desk.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                       | false   |
| Start           | The starting index of the returned items. First item is 0.                                                                       | 0       |
| Limit           | The maximum number of items to return per page.                                                                                  |         |

### List Organization Properties {#listorganizationproperties}

Returns the property keys stored against an organization.

| Input           | Comments                                                                                                      | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                |         |
| Organization ID | The unique identifier of the organization. Use the List Organizations action or the Organization data source. |         |

### List Organizations {#listorganizations}

Returns all organizations in the Jira Service Management instance.

| Input      | Comments                                                                                                   | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Jira Service Management connection to use.                                                             |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true. | false   |
| Start      | The starting index of the returned items. First item is 0.                                                 | 0       |
| Limit      | The maximum number of items to return per page.                                                            |         |

### List Organization Users {#listorganizationusers}

Returns users associated with an organization.

| Input           | Comments                                                                                                      | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                |         |
| Organization ID | The unique identifier of the organization. Use the List Organizations action or the Organization data source. |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.    | false   |
| Start           | The starting index of the returned items. First item is 0.                                                    | 0       |
| Limit           | The maximum number of items to return per page.                                                               |         |

### List Queue Issues {#listqueueissues}

Returns the issues in a service desk queue.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Queue ID        | The unique identifier of the queue. Use the List Queues action or the Queue data source.                                         |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                       | false   |
| Start           | The starting index of the returned items. First item is 0.                                                                       | 0       |
| Limit           | The maximum number of items to return per page.                                                                                  |         |

### List Queues {#listqueues}

Returns queues for a service desk.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                       | false   |
| Start           | The starting index of the returned items. First item is 0.                                                                       | 0       |
| Limit           | The maximum number of items to return per page.                                                                                  |         |

### List Requests {#listrequests}

Returns service requests for the given service desk.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                       | false   |
| Start           | The starting index of the returned items. First item is 0.                                                                       | 0       |
| Limit           | The maximum number of items to return per page.                                                                                  |         |

### List Request Types {#listrequesttypes}

Returns all request types for a service desk.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                       | false   |
| Start           | The starting index of the returned items. First item is 0.                                                                       | 0       |
| Limit           | The maximum number of items to return per page.                                                                                  |         |

### List Service Desk Organizations {#listservicedeskorganizations}

Returns organizations linked to a service desk.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                       | false   |
| Start           | The starting index of the returned items. First item is 0.                                                                       | 0       |
| Limit           | The maximum number of items to return per page.                                                                                  |         |

### List Service Desks {#listservicedesks}

Returns all service desks in the Jira Service Management instance.

| Input      | Comments                                                                                                   | Default |
| ---------- | ---------------------------------------------------------------------------------------------------------- | ------- |
| Connection | The Jira Service Management connection to use.                                                             |         |
| Fetch All  | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true. | false   |
| Start      | The starting index of the returned items. First item is 0.                                                 | 0       |
| Limit      | The maximum number of items to return per page.                                                            |         |

### List SLA Information {#listsla}

Returns SLA information for a service request.

| Input           | Comments                                                                                                                                          | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                                    |         |
| Issue ID or Key | The ID or key of the service request issue (e.g., IT-42 or 10001). Use the Select Request data source or List Requests action to find this value. |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                                        | false   |
| Start           | The starting index of the returned items. First item is 0.                                                                                        | 0       |
| Limit           | The maximum number of items to return per page.                                                                                                   |         |

### List Transitions {#listtransitions}

Returns available status transitions for a service request.

| Input           | Comments                                                                                                                                          | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                                    |         |
| Issue ID or Key | The ID or key of the service request issue (e.g., IT-42 or 10001). Use the Select Request data source or List Requests action to find this value. |         |
| Fetch All       | When true, automatically fetches all pages of results using pagination. Ignores start and limit when true.                                        | false   |
| Start           | The starting index of the returned items. First item is 0.                                                                                        | 0       |
| Limit           | The maximum number of items to return per page.                                                                                                   |         |

### Raw Request {#rawrequest}

Send raw HTTP request to the Jira Service Management REST API.

| Input                   | Comments                                                                                                                                                                                         | Default |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| Connection              | The Jira Service Management connection to use.                                                                                                                                                   |         |
| URL                     | Input the path only (e.g., /servicedesk). The base URL is resolved from the connection automatically.                                                                                            |         |
| Method                  | The HTTP method to use.                                                                                                                                                                          |         |
| Data                    | The HTTP body payload to send to the URL.                                                                                                                                                        |         |
| Form Data               | The Form Data to be sent as a multipart form upload.                                                                                                                                             |         |
| File Data               | File Data to be sent as a multipart form upload.                                                                                                                                                 |         |
| File Data File Names    | File names to apply to the file data inputs. Keys must match the file data keys above.                                                                                                           |         |
| Query Parameter         | A list of query parameters to send with the request. This is the portion at the end of the URL similar to ?key1=value1&key2=value2.                                                              |         |
| Header                  | A list of headers to send with the request.                                                                                                                                                      |         |
| Response Type           | The type of data you expect in the response. You can request json, text, or binary data.                                                                                                         | json    |
| Timeout                 | The maximum time that a client will await a response to its request                                                                                                                              |         |
| Retry Delay (ms)        | The delay in milliseconds between retries. This is used when 'Use Exponential Backoff' is disabled.                                                                                              | 0       |
| Retry On All Errors     | If true, retries on all erroneous responses regardless of type. This is helpful when retrying after HTTP 429 or other 3xx or 4xx errors. Otherwise, only retries on HTTP 5xx and network errors. | false   |
| Max Retry Count         | The maximum number of retries to attempt. Specify 0 for no retries.                                                                                                                              | 0       |
| Use Exponential Backoff | Specifies whether to use a pre-defined exponential backoff strategy for retries. When enabled, 'Retry Delay (ms)' is ignored.                                                                    | false   |

### Remove Customers from Service Desk {#removecustomers}

Removes one or more customers from the specified service desk by accountId.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Account IDs     | The Atlassian accountIds to include in the request. Provide a JSON array of string identifiers.                                  |         |

### Remove Organization from Service Desk {#removeservicedeskorganization}

Unlinks an organization from the specified service desk.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| Organization ID | The unique identifier of the organization. Use the List Organizations action or the Organization data source.                    |         |

### Remove Users from Organization {#removeorganizationusers}

Removes users from an organization by accountId.

| Input           | Comments                                                                                                      | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                |         |
| Organization ID | The unique identifier of the organization. Use the List Organizations action or the Organization data source. |         |
| Account IDs     | The Atlassian accountIds to include in the request. Provide a JSON array of string identifiers.               |         |

### Revoke Portal-Only Access {#revokeportalaccess}

Revokes a user's portal-only access so they can no longer log in as a portal customer.

| Input      | Comments                                       | Default |
| ---------- | ---------------------------------------------- | ------- |
| Connection | The Jira Service Management connection to use. |         |
| Account ID | The Atlassian accountId of the customer.       |         |

### Set Organization Property {#setorganizationproperty}

Stores a custom JSON value against an organization under the specified property key.

| Input           | Comments                                                                                                      | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                |         |
| Organization ID | The unique identifier of the organization. Use the List Organizations action or the Organization data source. |         |
| Property Key    | The key identifying the custom property to store against the organization.                                    |         |
| Property Value  | JSON value to store for the property. Can be any valid JSON (object, array, string, number, or boolean).      |         |

### Transition Request {#transitionrequest}

Transitions a service request to a new status.

| Input           | Comments                                                                                                                                          | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                                    |         |
| Issue ID or Key | The ID or key of the service request issue (e.g., IT-42 or 10001). Use the Select Request data source or List Requests action to find this value. |         |
| Transition ID   | The ID of the transition to apply. Use the List Transitions action or the Transition data source to find available transitions.                   |         |
| Comment         | A message posted on the request when the transition is executed. Visible to the customer by default.                                              |         |

### Upload Temporary File {#uploadtemporaryfile}

Uploads a file as a temporary attachment for later use with Add Attachment.

| Input           | Comments                                                                                                                         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------- |
| Connection      | The Jira Service Management connection to use.                                                                                   |         |
| Service Desk ID | The unique identifier of the service desk. Use the List Service Desks action or the Service Desk data source to find this value. |         |
| File Contents   | The contents of the file to upload. Can be a string or binary data (e.g., image or PDF) from a previous step.                    |         |
| File Name       | The filename to associate with the uploaded attachment, including the extension (e.g., report.pdf).                              |         |
