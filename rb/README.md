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
  # load returns the bare Health record (raises on error).
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

# Entity ops return the bare mock record (raises on error).
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
| `ok` |  |
| `render` |  |
| `service` |  |

Operations: Load.

API path: `/healthz`

#### MonitoringRequest

| Field | Description |
| --- | --- |
| `change_context` |  |
| `email` |  |
| `monitoring_goal` |  |
| `notice` |  |
| `page_count` |  |
| `page_url` |  |
| `public_page_authority` |  |
| `reply_consent` |  |
| `request` |  |
| `safety_acknowledged` |  |
| `start_boundary_acknowledged` |  |

Operations: Create.

API path: `/api/monitoring-requests`

#### PilotRequest

| Field | Description |
| --- | --- |
| `acceptance_sample` |  |
| `call_site` |  |
| `current_contract` |  |
| `email` |  |
| `expected_render` |  |
| `language` |  |
| `notice` |  |
| `provider` |  |
| `reply_consent` |  |
| `repository_authority` |  |
| `repository_url` |  |
| `request` |  |
| `required_behavior` |  |
| `safety_acknowledged` |  |
| `start_boundary_acknowledged` |  |

Operations: Create.

API path: `/api/pilot-requests`

#### Render

| Field | Description |
| --- | --- |
| `block_ad` |  |
| `block_chat` |  |
| `block_tracker` |  |
| `dark_mode` |  |
| `delay` |  |
| `format` |  |
| `full_page` |  |
| `height` |  |
| `hide_cookie_banner` |  |
| `hide_popup` |  |
| `kind` |  |
| `landscape` |  |
| `paper` |  |
| `quality` |  |
| `reduced_motion` |  |
| `scale` |  |
| `scroll_page` |  |
| `timeout` |  |
| `url` |  |
| `wait_until` |  |
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
| `current_control` |  |
| `desired_outcome` |  |
| `email` |  |
| `language` |  |
| `notice` |  |
| `primary_concern` |  |
| `reply_consent` |  |
| `repository_authority` |  |
| `repository_url` |  |
| `request` |  |
| `route_path` |  |
| `runtime` |  |
| `safety_acknowledged` |  |
| `start_boundary_acknowledged` |  |
| `test_evidence` |  |

Operations: Create.

API path: `/api/safety-review-requests`

#### Trial

| Field | Description |
| --- | --- |
| `consent` |  |
| `email` |  |
| `expected_render` |  |
| `name` |  |
| `use_case` |  |

Operations: Create.

API path: `/api/trials`

#### Upgrade

| Field | Description |
| --- | --- |
| `consent` |  |
| `note` |  |
| `notice` |  |
| `request` |  |
| `requested_plan` |  |

Operations: Create.

API path: `/v1/upgrade-requests`

#### Usage

| Field | Description |
| --- | --- |
| `customer` |  |
| `link` |  |
| `upgrade_request` |  |
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
| `ok` | `Boolean` |  |
| `render` | `Hash` |  |
| `service` | `String` |  |

#### Example: Load

```ruby
# load returns the bare Health record (raises on error).
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
| `change_context` | `String` |  |
| `email` | `String` |  |
| `monitoring_goal` | `String` |  |
| `notice` | `String` |  |
| `page_count` | `String` |  |
| `page_url` | `String` |  |
| `public_page_authority` | `Boolean` |  |
| `reply_consent` | `Boolean` |  |
| `request` | `Hash` |  |
| `safety_acknowledged` | `Boolean` |  |
| `start_boundary_acknowledged` | `Boolean` |  |

#### Example: Create

```ruby
monitoring_request = client.MonitoringRequest.create({
  "email" => "example_email", # String
  "monitoring_goal" => "example_monitoring_goal", # String
  "notice" => "example_notice", # String
  "page_count" => "example_page_count", # String
  "page_url" => "example_page_url", # String
  "public_page_authority" => true, # Boolean
  "reply_consent" => true, # Boolean
  "request" => {}, # Hash
  "safety_acknowledged" => true, # Boolean
  "start_boundary_acknowledged" => true, # Boolean
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
| `acceptance_sample` | `String` |  |
| `call_site` | `String` |  |
| `current_contract` | `String` |  |
| `email` | `String` |  |
| `expected_render` | `String` |  |
| `language` | `String` |  |
| `notice` | `String` |  |
| `provider` | `String` |  |
| `reply_consent` | `Boolean` |  |
| `repository_authority` | `Boolean` |  |
| `repository_url` | `String` |  |
| `request` | `Hash` |  |
| `required_behavior` | `String` |  |
| `safety_acknowledged` | `Boolean` |  |
| `start_boundary_acknowledged` | `Boolean` |  |

#### Example: Create

```ruby
pilot_request = client.PilotRequest.create({
  "email" => "example_email", # String
  "notice" => "example_notice", # String
  "reply_consent" => true, # Boolean
  "repository_authority" => true, # Boolean
  "repository_url" => "example_repository_url", # String
  "request" => {}, # Hash
  "safety_acknowledged" => true, # Boolean
  "start_boundary_acknowledged" => true, # Boolean
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
| `block_ad` | `Boolean` |  |
| `block_chat` | `Boolean` |  |
| `block_tracker` | `Boolean` |  |
| `dark_mode` | `Boolean` |  |
| `delay` | `Integer` |  |
| `format` | `String` |  |
| `full_page` | `Boolean` |  |
| `height` | `Integer` |  |
| `hide_cookie_banner` | `Boolean` |  |
| `hide_popup` | `Boolean` |  |
| `kind` | `String` |  |
| `landscape` | `Boolean` |  |
| `paper` | `String` |  |
| `quality` | `Integer` |  |
| `reduced_motion` | `Boolean` |  |
| `scale` | `Integer` |  |
| `scroll_page` | `Boolean` |  |
| `timeout` | `Integer` |  |
| `url` | `String` |  |
| `wait_until` | `String` |  |
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
# load returns the bare Rendering record (raises on error).
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
| `current_control` | `String` |  |
| `desired_outcome` | `String` |  |
| `email` | `String` |  |
| `language` | `String` |  |
| `notice` | `String` |  |
| `primary_concern` | `String` |  |
| `reply_consent` | `Boolean` |  |
| `repository_authority` | `Boolean` |  |
| `repository_url` | `String` |  |
| `request` | `Hash` |  |
| `route_path` | `String` |  |
| `runtime` | `String` |  |
| `safety_acknowledged` | `Boolean` |  |
| `start_boundary_acknowledged` | `Boolean` |  |
| `test_evidence` | `String` |  |

#### Example: Create

```ruby
safety_review_request = client.SafetyReviewRequest.create({
  "current_control" => "example_current_control", # String
  "desired_outcome" => "example_desired_outcome", # String
  "email" => "example_email", # String
  "language" => "example_language", # String
  "notice" => "example_notice", # String
  "primary_concern" => "example_primary_concern", # String
  "reply_consent" => true, # Boolean
  "repository_authority" => true, # Boolean
  "repository_url" => "example_repository_url", # String
  "request" => {}, # Hash
  "route_path" => "example_route_path", # String
  "runtime" => "example_runtime", # String
  "safety_acknowledged" => true, # Boolean
  "start_boundary_acknowledged" => true, # Boolean
  "test_evidence" => "example_test_evidence", # String
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
| `expected_render` | `String` |  |
| `name` | `String` |  |
| `use_case` | `String` |  |

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
| `note` | `String` |  |
| `notice` | `String` |  |
| `request` | `Hash` |  |
| `requested_plan` | `String` |  |

#### Example: Create

```ruby
upgrade = client.Upgrade.create({
  "consent" => true, # Boolean
  "notice" => "example_notice", # String
  "request" => {}, # Hash
  "requested_plan" => "example_requested_plan", # String
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
| `link` | `Hash` |  |
| `upgrade_request` | `Object` |  |
| `usage` | `Hash` |  |

#### Example: Load

```ruby
# load returns the bare Usage record (raises on error).
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
