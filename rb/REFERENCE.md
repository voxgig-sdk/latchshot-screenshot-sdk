# LatchshotScreenshot Ruby SDK Reference

Complete API reference for the LatchshotScreenshot Ruby SDK.


## LatchshotScreenshotSDK

### Constructor

```ruby
require_relative 'LatchshotScreenshot_sdk'

client = LatchshotScreenshotSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `LatchshotScreenshotSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = LatchshotScreenshotSDK.test
```


### Instance Methods

#### `Health(data = nil)`

Create a new `Health` entity instance. Pass `nil` for no initial data.

#### `MonitoringRequest(data = nil)`

Create a new `MonitoringRequest` entity instance. Pass `nil` for no initial data.

#### `PilotRequest(data = nil)`

Create a new `PilotRequest` entity instance. Pass `nil` for no initial data.

#### `Render(data = nil)`

Create a new `Render` entity instance. Pass `nil` for no initial data.

#### `Rendering(data = nil)`

Create a new `Rendering` entity instance. Pass `nil` for no initial data.

#### `SafetyReviewRequest(data = nil)`

Create a new `SafetyReviewRequest` entity instance. Pass `nil` for no initial data.

#### `Trial(data = nil)`

Create a new `Trial` entity instance. Pass `nil` for no initial data.

#### `Upgrade(data = nil)`

Create a new `Upgrade` entity instance. Pass `nil` for no initial data.

#### `Usage(data = nil)`

Create a new `Usage` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## HealthEntity

```ruby
health = client.Health
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `Boolean` | Yes |  |
| `render` | `Hash` | Yes |  |
| `service` | `String` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Health.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `HealthEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MonitoringRequestEntity

```ruby
monitoring_request = client.MonitoringRequest
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `change_context` | `String` | No |  |
| `email` | `String` | Yes |  |
| `monitoring_goal` | `String` | Yes |  |
| `notice` | `String` | Yes |  |
| `page_count` | `String` | Yes |  |
| `page_url` | `String` | Yes |  |
| `public_page_authority` | `Boolean` | Yes |  |
| `reply_consent` | `Boolean` | Yes |  |
| `request` | `Hash` | Yes |  |
| `safety_acknowledged` | `Boolean` | Yes |  |
| `start_boundary_acknowledged` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.MonitoringRequest.create({
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

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MonitoringRequestEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PilotRequestEntity

```ruby
pilot_request = client.PilotRequest
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acceptance_sample` | `String` | No |  |
| `call_site` | `String` | No |  |
| `current_contract` | `String` | No |  |
| `email` | `String` | Yes |  |
| `expected_render` | `String` | No |  |
| `language` | `String` | No |  |
| `notice` | `String` | Yes |  |
| `provider` | `String` | No |  |
| `reply_consent` | `Boolean` | Yes |  |
| `repository_authority` | `Boolean` | Yes |  |
| `repository_url` | `String` | Yes |  |
| `request` | `Hash` | Yes |  |
| `required_behavior` | `String` | No |  |
| `safety_acknowledged` | `Boolean` | Yes |  |
| `start_boundary_acknowledged` | `Boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PilotRequest.create({
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

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PilotRequestEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RenderEntity

```ruby
render = client.Render
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `block_ad` | `Boolean` | No |  |
| `block_chat` | `Boolean` | No |  |
| `block_tracker` | `Boolean` | No |  |
| `dark_mode` | `Boolean` | No |  |
| `delay` | `Integer` | No |  |
| `format` | `String` | No |  |
| `full_page` | `Boolean` | No |  |
| `height` | `Integer` | No |  |
| `hide_cookie_banner` | `Boolean` | No |  |
| `hide_popup` | `Boolean` | No |  |
| `kind` | `String` | No |  |
| `landscape` | `Boolean` | No |  |
| `paper` | `String` | No |  |
| `quality` | `Integer` | No |  |
| `reduced_motion` | `Boolean` | No |  |
| `scale` | `Integer` | No |  |
| `scroll_page` | `Boolean` | No |  |
| `timeout` | `Integer` | No |  |
| `url` | `String` | Yes |  |
| `wait_until` | `String` | No |  |
| `width` | `Integer` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Render.create({
  "url" => "example_url", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RenderEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RenderingEntity

```ruby
rendering = client.Rendering
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Rendering.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RenderingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SafetyReviewRequestEntity

```ruby
safety_review_request = client.SafetyReviewRequest
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `current_control` | `String` | Yes |  |
| `desired_outcome` | `String` | Yes |  |
| `email` | `String` | Yes |  |
| `language` | `String` | Yes |  |
| `notice` | `String` | Yes |  |
| `primary_concern` | `String` | Yes |  |
| `reply_consent` | `Boolean` | Yes |  |
| `repository_authority` | `Boolean` | Yes |  |
| `repository_url` | `String` | Yes |  |
| `request` | `Hash` | Yes |  |
| `route_path` | `String` | Yes |  |
| `runtime` | `String` | Yes |  |
| `safety_acknowledged` | `Boolean` | Yes |  |
| `start_boundary_acknowledged` | `Boolean` | Yes |  |
| `test_evidence` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SafetyReviewRequest.create({
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

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SafetyReviewRequestEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TrialEntity

```ruby
trial = client.Trial
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `consent` | `Boolean` | No |  |
| `email` | `String` | Yes |  |
| `expected_render` | `String` | No |  |
| `name` | `String` | No |  |
| `use_case` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Trial.create({
  "email" => "example_email", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TrialEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UpgradeEntity

```ruby
upgrade = client.Upgrade
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `consent` | `Boolean` | Yes |  |
| `note` | `String` | No |  |
| `notice` | `String` | Yes |  |
| `request` | `Hash` | Yes |  |
| `requested_plan` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Upgrade.create({
  "consent" => true, # Boolean
  "notice" => "example_notice", # String
  "request" => {}, # Hash
  "requested_plan" => "example_requested_plan", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UpgradeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UsageEntity

```ruby
usage = client.Usage
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer` | `Hash` | Yes |  |
| `link` | `Hash` | Yes |  |
| `upgrade_request` | `Object` | Yes |  |
| `usage` | `Hash` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Usage.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UsageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = LatchshotScreenshotSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

