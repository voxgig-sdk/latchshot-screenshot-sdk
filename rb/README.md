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
| `changeContext` |  |
| `createdAt` |  |
| `email` |  |
| `id` |  |
| `monitoringGoal` |  |
| `pageCount` |  |
| `pageUrl` |  |
| `publicPageAuthority` |  |
| `replyConsent` |  |
| `safetyAcknowledged` |  |
| `startBoundaryAcknowledged` |  |
| `status` |  |
| `updatedAt` |  |

Operations: Create.

API path: `/api/monitoring-requests`

#### PilotRequest

| Field | Description |
| --- | --- |
| `acceptanceSample` |  |
| `callSite` |  |
| `createdAt` |  |
| `currentContract` |  |
| `email` |  |
| `expectedRenders` |  |
| `id` |  |
| `language` |  |
| `provider` |  |
| `replyConsent` |  |
| `repositoryAuthority` |  |
| `repositoryUrl` |  |
| `requiredBehavior` |  |
| `safetyAcknowledged` |  |
| `startBoundaryAcknowledged` |  |
| `status` |  |
| `updatedAt` |  |

Operations: Create.

API path: `/api/pilot-requests`

#### Render

| Field | Description |
| --- | --- |
| `blockAds` |  |
| `blockChats` |  |
| `blockTrackers` |  |
| `darkMode` |  |
| `delay` |  |
| `format` |  |
| `fullPage` |  |
| `height` |  |
| `hideCookieBanners` |  |
| `hidePopups` |  |
| `kind` |  |
| `landscape` |  |
| `paper` |  |
| `quality` |  |
| `reducedMotion` |  |
| `scale` |  |
| `scrollPage` |  |
| `timeout` |  |
| `url` |  |
| `waitUntil` |  |
| `width` |  |

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
| `currentControls` |  |
| `desiredOutcome` |  |
| `email` |  |
| `id` |  |
| `language` |  |
| `primaryConcern` |  |
| `replyConsent` |  |
| `repositoryAuthority` |  |
| `repositoryUrl` |  |
| `routePath` |  |
| `runtime` |  |
| `safetyAcknowledged` |  |
| `startBoundaryAcknowledged` |  |
| `status` |  |
| `testEvidence` |  |
| `updatedAt` |  |

Operations: Create.

API path: `/api/safety-review-requests`

#### Trial

| Field | Description |
| --- | --- |
| `consent` |  |
| `email` |  |
| `expectedRenders` |  |
| `name` |  |
| `useCase` |  |

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
| `links` |  |
| `upgradeRequest` |  |
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
| `changeContext` | `String` |  |
| `createdAt` | `String` |  |
| `email` | `String` |  |
| `id` | `Integer` |  |
| `monitoringGoal` | `String` |  |
| `pageCount` | `String` |  |
| `pageUrl` | `String` |  |
| `publicPageAuthority` | `Boolean` |  |
| `replyConsent` | `Boolean` |  |
| `safetyAcknowledged` | `Boolean` |  |
| `startBoundaryAcknowledged` | `Boolean` |  |
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
| `acceptanceSample` | `String` |  |
| `callSite` | `String` |  |
| `createdAt` | `String` |  |
| `currentContract` | `String` |  |
| `email` | `String` |  |
| `expectedRenders` | `String` |  |
| `id` | `Integer` |  |
| `language` | `String` |  |
| `provider` | `String` |  |
| `replyConsent` | `Boolean` |  |
| `repositoryAuthority` | `Boolean` |  |
| `repositoryUrl` | `String` |  |
| `requiredBehavior` | `String` |  |
| `safetyAcknowledged` | `Boolean` |  |
| `startBoundaryAcknowledged` | `Boolean` |  |
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
| `blockAds` | `Boolean` |  |
| `blockChats` | `Boolean` |  |
| `blockTrackers` | `Boolean` |  |
| `darkMode` | `Boolean` |  |
| `delay` | `Integer` |  |
| `format` | `String` |  |
| `fullPage` | `Boolean` |  |
| `height` | `Integer` |  |
| `hideCookieBanners` | `Boolean` |  |
| `hidePopups` | `Boolean` |  |
| `kind` | `String` |  |
| `landscape` | `Boolean` |  |
| `paper` | `String` |  |
| `quality` | `Integer` |  |
| `reducedMotion` | `Boolean` |  |
| `scale` | `Integer` |  |
| `scrollPage` | `Boolean` |  |
| `timeout` | `Integer` |  |
| `url` | `String` |  |
| `waitUntil` | `String` |  |
| `width` | `Integer` |  |

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
rendering = client.Rendering.load()
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
| `currentControls` | `String` |  |
| `desiredOutcome` | `String` |  |
| `email` | `String` |  |
| `id` | `Integer` |  |
| `language` | `String` |  |
| `primaryConcern` | `String` |  |
| `replyConsent` | `Boolean` |  |
| `repositoryAuthority` | `Boolean` |  |
| `repositoryUrl` | `String` |  |
| `routePath` | `String` |  |
| `runtime` | `String` |  |
| `safetyAcknowledged` | `Boolean` |  |
| `startBoundaryAcknowledged` | `Boolean` |  |
| `status` | `String` |  |
| `testEvidence` | `String` |  |
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
| `consent` | `Boolean` |  |
| `email` | `String` |  |
| `expectedRenders` | `String` |  |
| `name` | `String` |  |
| `useCase` | `String` |  |

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
| `links` | `Hash` |  |
| `upgradeRequest` | `Object` |  |
| `usage` | `Hash` |  |

#### Example: Load

```ruby
# load returns the ENTITY — call data_get for the Usage record (raises on error).
usage = client.Usage.load()
```


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

- **TestFeature**: In-memory mock transport for testing without a live server

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
