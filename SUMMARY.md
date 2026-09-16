# Latchshot API

Render public HTTP and HTTPS web pages as PNG or JPEG screenshots and PDF documents. Targets are checked against private and special-use networks before rendering. Create one recurring Free-plan key per email, then send that key as an HTTPS Bearer token. Only successful renders consume monthly quota; automatic overages are disabled.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 9 entities and 9 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Health

Results: Healthy.

SDK operations: `load`.

### MonitoringRequest

Results: Existing request for this email and example page updated for owner review; New monitoring request recorded for owner review.

SDK operations: `create`.

Key fields to recognise:

- `changeContext`: Optional non-sensitive description of what the weekly owner-written note should call out.
- `email`: Address the owner may use only to reply about this monitoring request.
- `pageUrl`: One exact public HTTP or HTTPS example page on port 80 or 443, without credentials, query data, or a fragment.
- `publicPageAuthority`: Confirms authority to request recurring captures of every proposed public page.
- `replyConsent`: Allows the owner to email only about this monitoring-pilot request.

### PilotRequest

Results: Existing request for this email and repository updated for owner review; New pilot request recorded for owner review.

SDK operations: `create`.

Key fields to recognise:

- `acceptanceSample`: Optional safe description of one maintainer-approved public page and required artifact shape.
- `callSite`: Optional relative repository file path for the existing backend provider call.
- `currentContract`: Optional non-secret current request, synchronous output, and application-owned byte handling.
- `email`: Address the owner may use only to reply about this pilot request.
- `replyConsent`: Allows the owner to email only about this pilot request.

### Render

Results: Rendered image or PDF. Diagnostic, rate-limit, and quota values are returned in headers.

SDK operations: `create`.

Key fields to recognise:

- `blockAds`: Best-effort blocking of requests to known third-party ad hosts.
- `blockChats`: Best-effort blocking and hiding of known third-party chat widgets.
- `blockTrackers`: Best-effort blocking of requests to known third-party analytics and tracker hosts.
- `darkMode`: Emulate a dark color-scheme preference.
- `delay`: Additional bounded wait in milliseconds after the lifecycle event.

### Rendering

Results: Rendered image. Diagnostic, rate-limit, and quota values are returned in headers.

SDK operations: `load`.

### SafetyReviewRequest

Results: Existing request for this email and repository updated for owner review; New safety review request recorded for owner review.

SDK operations: `create`.

Key fields to recognise:

- `currentControls`: Non-secret current URL, network, browser, resource, and caller controls.
- `desiredOutcome`: Requested risk report, focused patch, regression tests, and handoff outcome.
- `email`: Address the owner may use only to reply about this safety-review request.
- `replyConsent`: Allows the owner to email only about this safety-review request.
- `repositoryAuthority`: Confirms authority to review, merge, deploy, and roll back the public repository change.

### Trial

Results: Free-plan key created; the plaintext key is returned only in this response.

SDK operations: `create`.

Key fields to recognise:

- `consent`: Optional permission for the owner to send product-fit guidance.
- `email`: Email used to enforce one lifetime Free-plan key.
- `name`: Optional display name for owner review.
- `useCase`: Optional public-page capture use case.

### Upgrade

Results: Existing open request updated; New paid-plan request recorded.

SDK operations: `create`.

### Usage

Results: Current plan, quota usage, optional paid-plan request, and informational continuation links.

SDK operations: `load`.

Key fields to recognise:

- `links`: Stable self-serve continuation links. They are informational and do not take payment, initiate an upgrade, or start implementation work.
- `upgradeRequest`: Latest paid-plan request attached to this key, or null when none exists.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Health | `load` | `GET /healthz` | Not required |
| MonitoringRequest | `create` | `POST /api/monitoring-requests` | Not required |
| PilotRequest | `create` | `POST /api/pilot-requests` | Not required |
| Render | `create` | `POST /v1/render` | Required |
| Rendering | `load` | `GET /v1/screenshot` | Required |
| SafetyReviewRequest | `create` | `POST /api/safety-review-requests` | Not required |
| Trial | `create` | `POST /api/trials` | Not required |
| Upgrade | `create` | `POST /v1/upgrade-requests` | Required |
| Usage | `load` | `GET /v1/usage` | Required |

## Connect to the API

- API server: `https://latchshot.fly.dev`

The default credential is sent in the `Authorization` header with the `Bearer` prefix.

Send the one-time Latchshot key in the Authorization header as Bearer YOUR_KEY. Keys are stored only as hashes.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

A read request without required parameters or authentication is `GET /healthz`. For example:

```sh
curl --fail-with-body --silent --show-error 'https://latchshot.fly.dev/healthz'
```

Inspect the response using the Health reference. This checks the public route; authenticated operations need their own credentials and request data.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `latchshot-screenshot_list`: List records for an entity. No active entity supports this operation.
- `latchshot-screenshot_load`: Load one record for an entity. Supported entities: `health`, `rendering`, `usage`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

