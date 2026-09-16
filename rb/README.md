# LatchshotScreenshot Ruby SDK



The Ruby SDK for the LatchshotScreenshot API — an entity-oriented client using idiomatic Ruby conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Health` — with named operations (`load`/`create`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to RubyGems. Install it from the
GitHub release tag (`rb/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/latchshot-screenshot-sdk/releases](https://github.com/voxgig-sdk/latchshot-screenshot-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ruby
require_relative "LatchshotScreenshot_sdk"

client = LatchshotScreenshotSDK.new({
  "apikey" => ENV["LATCHSHOT_SCREENSHOT_APIKEY"],
})
```

### 3. Load a health

```ruby
begin
  # load returns the ENTITY — call data_get for the Health record (raises on error).
  health = client.Health.load()
  puts health
rescue => err
  warn "load failed: #{err}"
end
```


## Error handling

Entity operations raise on failure, so rescue them:

```ruby
begin
  health = client.Health.load()
rescue => err
  warn "load failed: #{err}"
end
```

`direct` does **not** raise — it returns the result hash. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example_id" },
})

warn "request failed: #{result["err"] || "HTTP #{result["status"]}"}" unless result["ok"]
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ruby
result = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})

if result["ok"]
  puts result["status"]  # 200
  puts result["data"]    # response body
else
  # On an HTTP error status there is no err (only a transport failure sets
  # it), so fall back to the status code.
  warn(result["err"] || "HTTP #{result["status"]}")
end
```

### Prepare a request without sending it

```ruby
begin
  fetchdef = client.prepare({
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => { "id" => "example" },
  })
  puts fetchdef["url"]
  puts fetchdef["method"]
  puts fetchdef["headers"]
rescue => err
  warn "prepare failed: #{err}"
end
```

### Use test mode

Create a mock client for unit testing — no server required:

```ruby
client = LatchshotScreenshotSDK.test

# Entity ops return the ENTITY (raises on error);
# call data_get for the mock record.
health = client.Health.load()
puts health
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```ruby
mock_fetch = ->(url, init) {
  return {
    "status" => 200,
    "statusText" => "OK",
    "headers" => {},
    "json" => ->() { { "id" => "mock01" } },
  }, nil
}

client = LatchshotScreenshotSDK.new({
  "base" => "http://localhost:8080",
  "system" => {
    "fetch" => mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
LATCHSHOT_SCREENSHOT_TEST_LIVE=TRUE
LATCHSHOT_SCREENSHOT_APIKEY=<your-key>
```

Then run:

```bash
cd rb && ruby -Itest -e "Dir['test/*_test.rb'].each { |f| require_relative f }"
```


## Reference

### LatchshotScreenshotSDK

```ruby
require_relative "LatchshotScreenshot_sdk"
client = LatchshotScreenshotSDK.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `String` | API key for authentication. |
| `base` | `String` | Base URL of the API server. |
| `prefix` | `String` | URL path prefix prepended to all requests. |
| `suffix` | `String` | URL path suffix appended to all requests. |
| `feature` | `Hash` | Feature activation flags. |
| `extend` | `Hash` | Additional Feature instances to load. |
| `system` | `Hash` | System overrides (e.g. custom `fetch` lambda). |

### test

```ruby
client = LatchshotScreenshotSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### LatchshotScreenshotSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> Hash` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> Hash` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> Hash` | Build and send an HTTP request. Returns a result hash (`result["ok"]`); does not raise. |
| `Health` | `(data) -> HealthEntity` | Create a Health entity instance. |
| `MonitoringRequest` | `(data) -> MonitoringRequestEntity` | Create a MonitoringRequest entity instance. |
| `PilotRequest` | `(data) -> PilotRequestEntity` | Create a PilotRequest entity instance. |
| `Render` | `(data) -> RenderEntity` | Create a Render entity instance. |
| `Rendering` | `(data) -> RenderingEntity` | Create a Rendering entity instance. |
| `SafetyReviewRequest` | `(data) -> SafetyReviewRequestEntity` | Create a SafetyReviewRequest entity instance. |
| `Trial` | `(data) -> TrialEntity` | Create a Trial entity instance. |
| `Upgrade` | `(data) -> UpgradeEntity` | Create an Upgrade entity instance. |
| `Usage` | `(data) -> UsageEntity` | Create an Usage entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `data_get` | `() -> Hash` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> Hash` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> String` | Return the entity name. |

### Result shape

Entity operations return the result data directly. On failure they
raise a `LatchshotScreenshotError` (a `StandardError` subclass), so wrap
calls in `begin`/`rescue` where you need to handle errors.

The `direct` escape hatch is the exception: it never raises and instead
returns a result `Hash` with these keys:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `Boolean` | `true` if the HTTP status is 2xx. |
| `status` | `Integer` | HTTP status code. |
| `headers` | `Hash` | Response headers. |
| `data` | `any` | Parsed JSON response body. |
| `err` | `Error` | Present when `ok` is `false`. |

### Entities

#### Health

| Field | Description |
| --- | --- |
| `active` |  |
| `concurrency` |  |
| `pending` |  |

Operations: Load.

API path: `/healthz`

#### MonitoringRequest

| Field | Description |
| --- | --- |
| `changeContext` | Optional non-sensitive description of what the weekly owner-written note should call out. |
| `createdAt` |  |
| `email` | Address the owner may use only to reply about this monitoring request. |
| `id` |  |
| `monitoringGoal` |  |
| `pageCount` |  |
| `pageUrl` | One exact public HTTP or HTTPS example page on port 80 or 443, without credentials, query data, or a fragment. |
| `publicPageAuthority` | Confirms authority to request recurring captures of every proposed public page. |
| `replyConsent` | Allows the owner to email only about this monitoring-pilot request. |
| `safetyAcknowledged` | Confirms removal of credentials, query secrets, customer data, signed links, and sensitive information. |
| `startBoundaryAcknowledged` | Confirms that scope, delivery, retention, payment, and monitoring start require separate owner confirmation. |
| `status` |  |
| `updatedAt` |  |

Operations: Create.

API path: `/api/monitoring-requests`

#### PilotRequest

| Field | Description |
| --- | --- |
| `acceptanceSample` | Optional safe description of one maintainer-approved public page and required artifact shape. |
| `callSite` | Optional relative repository file path for the existing backend provider call. |
| `createdAt` |  |
| `currentContract` | Optional non-secret current request, synchronous output, and application-owned byte handling. |
| `email` | Address the owner may use only to reply about this pilot request. |
| `expectedRenders` |  |
| `id` |  |
| `language` |  |
| `provider` |  |
| `replyConsent` | Allows the owner to email only about this pilot request. |
| `repositoryAuthority` | Confirms authority to review, merge, deploy, and roll back the public repository change. |
| `repositoryUrl` | Exact public GitHub repository under the requester's control. |
| `requiredBehavior` | Optional provider behavior that must be preserved. |
| `safetyAcknowledged` | Confirms removal of credentials, private or signed URLs, customer data, payment details, and sensitive artifacts. |
| `startBoundaryAcknowledged` | Confirms that no payment or work starts before separate owner confirmation. |
| `status` |  |
| `updatedAt` |  |

Operations: Create.

API path: `/api/pilot-requests`

#### Render

| Field | Description |
| --- | --- |
| `blockAds` | Best-effort blocking of requests to known third-party ad hosts. |
| `blockChats` | Best-effort blocking and hiding of known third-party chat widgets. |
| `blockTrackers` | Best-effort blocking of requests to known third-party analytics and tracker hosts. |
| `darkMode` | Emulate a dark color-scheme preference. |
| `delay` | Additional bounded wait in milliseconds after the lifecycle event. |
| `format` | Exact artifact format. |
| `fullPage` | Capture the bounded full document height for screenshots. |
| `height` | Viewport height in CSS pixels. |
| `hideCookieBanners` | Hide common cookie-consent overlays after loading. |
| `hidePopups` | Hide common newsletter, signup, and discount popups without clicking, submitting, or setting state. |
| `kind` | Artifact family to return. |
| `landscape` | Use landscape orientation for PDF rendering. |
| `paper` | Paper size used for PDF rendering. |
| `quality` | JPEG encoding quality. |
| `reducedMotion` | Emulate reduced motion to improve capture stability. |
| `scale` | Device scale factor used for image capture. |
| `scrollPage` | Deterministically scroll before capture to activate lazy content. |
| `timeout` | Navigation timeout in milliseconds. |
| `url` | Public HTTP or HTTPS page URL. |
| `waitUntil` | Browser lifecycle event awaited before the optional delay. |
| `width` | Viewport width in CSS pixels. |

Operations: Create.

API path: `/v1/render`

#### Rendering

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/v1/screenshot`

#### SafetyReviewRequest

| Field | Description |
| --- | --- |
| `createdAt` |  |
| `currentControls` | Non-secret current URL, network, browser, resource, and caller controls. |
| `desiredOutcome` | Requested risk report, focused patch, regression tests, and handoff outcome. |
| `email` | Address the owner may use only to reply about this safety-review request. |
| `id` |  |
| `language` |  |
| `primaryConcern` |  |
| `replyConsent` | Allows the owner to email only about this safety-review request. |
| `repositoryAuthority` | Confirms authority to review, merge, deploy, and roll back the public repository change. |
| `repositoryUrl` | Exact public GitHub repository under the requester's control. |
| `routePath` | One relative repository file path for the existing screenshot endpoint or worker. |
| `runtime` |  |
| `safetyAcknowledged` | Confirms removal of credentials, private or signed URLs, customer data, production details, payment information, and sensitive artifacts. |
| `startBoundaryAcknowledged` | Confirms that no payment or work starts before separate owner confirmation. |
| `status` |  |
| `testEvidence` | Non-sensitive description of current happy-path and rejection tests, or none. |
| `updatedAt` |  |

Operations: Create.

API path: `/api/safety-review-requests`

#### Trial

| Field | Description |
| --- | --- |
| `consent` | Optional permission for the owner to send product-fit guidance. |
| `email` | Email used to enforce one lifetime Free-plan key. |
| `expectedRenders` |  |
| `name` | Optional display name for owner review. |
| `useCase` | Optional public-page capture use case. |

Operations: Create.

API path: `/api/trials`

#### Upgrade

| Field | Description |
| --- | --- |
| `consent` |  |
| `createdAt` |  |
| `currentPlan` |  |
| `id` |  |
| `note` |  |
| `requestedPlan` |  |
| `status` |  |
| `updatedAt` |  |

Operations: Create.

API path: `/v1/upgrade-requests`

#### Usage

| Field | Description |
| --- | --- |
| `customer` |  |
| `links` | Stable self-serve continuation links. |
| `upgradeRequest` | Latest paid-plan request attached to this key, or null when none exists. |
| `usage` |  |

Operations: Load.

API path: `/v1/usage`



## Entities


### Health

Create an instance: `health = client.Health`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `Integer` |  |
| `concurrency` | `Integer` |  |
| `pending` | `Integer` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Health record (raises on error).
health = client.Health.load()
```


### MonitoringRequest

Create an instance: `monitoring_request = client.MonitoringRequest`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `changeContext` | `String` | Optional non-sensitive description of what the weekly owner-written note should call out. |
| `createdAt` | `String` |  |
| `email` | `String` | Address the owner may use only to reply about this monitoring request. |
| `id` | `Integer` |  |
| `monitoringGoal` | `String` |  |
| `pageCount` | `String` |  |
| `pageUrl` | `String` | One exact public HTTP or HTTPS example page on port 80 or 443, without credentials, query data, or a fragment. |
| `publicPageAuthority` | `Boolean` | Confirms authority to request recurring captures of every proposed public page. |
| `replyConsent` | `Boolean` | Allows the owner to email only about this monitoring-pilot request. |
| `safetyAcknowledged` | `Boolean` | Confirms removal of credentials, query secrets, customer data, signed links, and sensitive information. |
| `startBoundaryAcknowledged` | `Boolean` | Confirms that scope, delivery, retention, payment, and monitoring start require separate owner confirmation. |
| `status` | `String` |  |
| `updatedAt` | `String` |  |

#### Example: Create

```ruby
monitoring_request = client.MonitoringRequest.create({
  "createdAt" => "example_createdAt", # String
  "email" => "example_email", # String
  "id" => 1, # Integer
  "monitoringGoal" => "example_monitoringGoal", # String
  "pageCount" => "example_pageCount", # String
  "pageUrl" => "example_pageUrl", # String
  "publicPageAuthority" => true, # Boolean
  "replyConsent" => true, # Boolean
  "safetyAcknowledged" => true, # Boolean
  "startBoundaryAcknowledged" => true, # Boolean
  "status" => "example_status", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### PilotRequest

Create an instance: `pilot_request = client.PilotRequest`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acceptanceSample` | `String` | Optional safe description of one maintainer-approved public page and required artifact shape. |
| `callSite` | `String` | Optional relative repository file path for the existing backend provider call. |
| `createdAt` | `String` |  |
| `currentContract` | `String` | Optional non-secret current request, synchronous output, and application-owned byte handling. |
| `email` | `String` | Address the owner may use only to reply about this pilot request. |
| `expectedRenders` | `String` |  |
| `id` | `Integer` |  |
| `language` | `String` |  |
| `provider` | `String` |  |
| `replyConsent` | `Boolean` | Allows the owner to email only about this pilot request. |
| `repositoryAuthority` | `Boolean` | Confirms authority to review, merge, deploy, and roll back the public repository change. |
| `repositoryUrl` | `String` | Exact public GitHub repository under the requester's control. |
| `requiredBehavior` | `String` | Optional provider behavior that must be preserved. |
| `safetyAcknowledged` | `Boolean` | Confirms removal of credentials, private or signed URLs, customer data, payment details, and sensitive artifacts. |
| `startBoundaryAcknowledged` | `Boolean` | Confirms that no payment or work starts before separate owner confirmation. |
| `status` | `String` |  |
| `updatedAt` | `String` |  |

#### Example: Create

```ruby
pilot_request = client.PilotRequest.create({
  "callSite" => "example_callSite", # String
  "createdAt" => "example_createdAt", # String
  "email" => "example_email", # String
  "id" => 1, # Integer
  "replyConsent" => true, # Boolean
  "repositoryAuthority" => true, # Boolean
  "repositoryUrl" => "example_repositoryUrl", # String
  "safetyAcknowledged" => true, # Boolean
  "startBoundaryAcknowledged" => true, # Boolean
  "status" => "example_status", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### Render

Create an instance: `render = client.Render`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blockAds` | `Boolean` | Best-effort blocking of requests to known third-party ad hosts. |
| `blockChats` | `Boolean` | Best-effort blocking and hiding of known third-party chat widgets. |
| `blockTrackers` | `Boolean` | Best-effort blocking of requests to known third-party analytics and tracker hosts. |
| `darkMode` | `Boolean` | Emulate a dark color-scheme preference. |
| `delay` | `Integer` | Additional bounded wait in milliseconds after the lifecycle event. |
| `format` | `String` | Exact artifact format. |
| `fullPage` | `Boolean` | Capture the bounded full document height for screenshots. |
| `height` | `Integer` | Viewport height in CSS pixels. |
| `hideCookieBanners` | `Boolean` | Hide common cookie-consent overlays after loading. |
| `hidePopups` | `Boolean` | Hide common newsletter, signup, and discount popups without clicking, submitting, or setting state. |
| `kind` | `String` | Artifact family to return. |
| `landscape` | `Boolean` | Use landscape orientation for PDF rendering. |
| `paper` | `String` | Paper size used for PDF rendering. |
| `quality` | `Integer` | JPEG encoding quality. |
| `reducedMotion` | `Boolean` | Emulate reduced motion to improve capture stability. |
| `scale` | `Integer` | Device scale factor used for image capture. |
| `scrollPage` | `Boolean` | Deterministically scroll before capture to activate lazy content. |
| `timeout` | `Integer` | Navigation timeout in milliseconds. |
| `url` | `String` | Public HTTP or HTTPS page URL. |
| `waitUntil` | `String` | Browser lifecycle event awaited before the optional delay. |
| `width` | `Integer` | Viewport width in CSS pixels. |

#### Example: Create

```ruby
render = client.Render.create({
  "url" => "example_url", # String
})
```


### Rendering

Create an instance: `rendering = client.Rendering`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Rendering record (raises on error).
rendering = client.Rendering.load({ "url" => "url" })
```


### SafetyReviewRequest

Create an instance: `safety_review_request = client.SafetyReviewRequest`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `String` |  |
| `currentControls` | `String` | Non-secret current URL, network, browser, resource, and caller controls. |
| `desiredOutcome` | `String` | Requested risk report, focused patch, regression tests, and handoff outcome. |
| `email` | `String` | Address the owner may use only to reply about this safety-review request. |
| `id` | `Integer` |  |
| `language` | `String` |  |
| `primaryConcern` | `String` |  |
| `replyConsent` | `Boolean` | Allows the owner to email only about this safety-review request. |
| `repositoryAuthority` | `Boolean` | Confirms authority to review, merge, deploy, and roll back the public repository change. |
| `repositoryUrl` | `String` | Exact public GitHub repository under the requester's control. |
| `routePath` | `String` | One relative repository file path for the existing screenshot endpoint or worker. |
| `runtime` | `String` |  |
| `safetyAcknowledged` | `Boolean` | Confirms removal of credentials, private or signed URLs, customer data, production details, payment information, and sensitive artifacts. |
| `startBoundaryAcknowledged` | `Boolean` | Confirms that no payment or work starts before separate owner confirmation. |
| `status` | `String` |  |
| `testEvidence` | `String` | Non-sensitive description of current happy-path and rejection tests, or none. |
| `updatedAt` | `String` |  |

#### Example: Create

```ruby
safety_review_request = client.SafetyReviewRequest.create({
  "createdAt" => "example_createdAt", # String
  "currentControls" => "example_currentControls", # String
  "desiredOutcome" => "example_desiredOutcome", # String
  "email" => "example_email", # String
  "id" => 1, # Integer
  "language" => "example_language", # String
  "primaryConcern" => "example_primaryConcern", # String
  "replyConsent" => true, # Boolean
  "repositoryAuthority" => true, # Boolean
  "repositoryUrl" => "example_repositoryUrl", # String
  "routePath" => "example_routePath", # String
  "runtime" => "example_runtime", # String
  "safetyAcknowledged" => true, # Boolean
  "startBoundaryAcknowledged" => true, # Boolean
  "status" => "example_status", # String
  "testEvidence" => "example_testEvidence", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### Trial

Create an instance: `trial = client.Trial`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `consent` | `Boolean` | Optional permission for the owner to send product-fit guidance. |
| `email` | `String` | Email used to enforce one lifetime Free-plan key. |
| `expectedRenders` | `String` |  |
| `name` | `String` | Optional display name for owner review. |
| `useCase` | `String` | Optional public-page capture use case. |

#### Example: Create

```ruby
trial = client.Trial.create({
  "email" => "example_email", # String
})
```


### Upgrade

Create an instance: `upgrade = client.Upgrade`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `consent` | `Boolean` |  |
| `createdAt` | `String` |  |
| `currentPlan` | `String` |  |
| `id` | `Integer` |  |
| `note` | `String` |  |
| `requestedPlan` | `String` |  |
| `status` | `String` |  |
| `updatedAt` | `String` |  |

#### Example: Create

```ruby
upgrade = client.Upgrade.create({
  "consent" => true, # Boolean
  "createdAt" => "example_createdAt", # String
  "currentPlan" => "example_currentPlan", # String
  "id" => 1, # Integer
  "requestedPlan" => "example_requestedPlan", # String
  "status" => "example_status", # String
  "updatedAt" => "example_updatedAt", # String
})
```


### Usage

Create an instance: `usage = client.Usage`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customer` | `Hash` |  |
| `links` | `Hash` | Stable self-serve continuation links. |
| `upgradeRequest` | `Object` | Latest paid-plan request attached to this key, or null when none exists. |
| `usage` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Usage record (raises on error).
usage = client.Usage.load()
```

## Features

This SDK ships 4 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Ruby class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as hashes

The Ruby SDK uses plain Ruby hashes throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers.to_map()` to safely validate that a value is a hash.

### Module structure

```
rb/
├── LatchshotScreenshot_sdk.rb       -- Main SDK module
├── config.rb                  -- Configuration
├── features.rb                -- Feature factory
├── core/                      -- Core types and context
├── entity/                    -- Entity implementations
├── feature/                   -- Built-in features (Base, Test, Log)
├── utility/                   -- Utility functions and struct library
└── test/                      -- Test suites
```

The main module (`LatchshotScreenshot_sdk`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```ruby
health = client.Health
health.load()

# health.data_get now returns the health data from the last load
# health.match_get returns the last match criteria
```

Call `make` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
