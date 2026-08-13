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
| `active` | `Integer` | Yes |  |
| `concurrency` | `Integer` | Yes |  |
| `pending` | `Integer` | Yes |  |

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
| `changeContext` | `String` | No |  |
| `createdAt` | `String` | Yes |  |
| `email` | `String` | Yes |  |
| `id` | `Integer` | Yes |  |
| `monitoringGoal` | `String` | Yes |  |
| `pageCount` | `String` | Yes |  |
| `pageUrl` | `String` | Yes |  |
| `publicPageAuthority` | `Boolean` | Yes |  |
| `replyConsent` | `Boolean` | Yes |  |
| `safetyAcknowledged` | `Boolean` | Yes |  |
| `startBoundaryAcknowledged` | `Boolean` | Yes |  |
| `status` | `String` | Yes |  |
| `updatedAt` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.MonitoringRequest.create({
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
| `acceptanceSample` | `String` | No |  |
| `callSite` | `String` | Yes |  |
| `createdAt` | `String` | Yes |  |
| `currentContract` | `String` | No |  |
| `email` | `String` | Yes |  |
| `expectedRenders` | `String` | No |  |
| `id` | `Integer` | Yes |  |
| `language` | `String` | No |  |
| `provider` | `String` | No |  |
| `replyConsent` | `Boolean` | Yes |  |
| `repositoryAuthority` | `Boolean` | Yes |  |
| `repositoryUrl` | `String` | Yes |  |
| `requiredBehavior` | `String` | No |  |
| `safetyAcknowledged` | `Boolean` | Yes |  |
| `startBoundaryAcknowledged` | `Boolean` | Yes |  |
| `status` | `String` | Yes |  |
| `updatedAt` | `String` | Yes |  |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `acceptanceSample` | - |
| `callSite` | Yes |
| `createdAt` | - |
| `currentContract` | - |
| `email` | - |
| `expectedRenders` | - |
| `id` | - |
| `language` | - |
| `provider` | - |
| `replyConsent` | - |
| `repositoryAuthority` | - |
| `repositoryUrl` | - |
| `requiredBehavior` | - |
| `safetyAcknowledged` | - |
| `startBoundaryAcknowledged` | - |
| `status` | - |
| `updatedAt` | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PilotRequest.create({
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
| `blockAds` | `Boolean` | No |  |
| `blockChats` | `Boolean` | No |  |
| `blockTrackers` | `Boolean` | No |  |
| `darkMode` | `Boolean` | No |  |
| `delay` | `Integer` | No |  |
| `format` | `String` | No |  |
| `fullPage` | `Boolean` | No |  |
| `height` | `Integer` | No |  |
| `hideCookieBanners` | `Boolean` | No |  |
| `hidePopups` | `Boolean` | No |  |
| `kind` | `String` | No |  |
| `landscape` | `Boolean` | No |  |
| `paper` | `String` | No |  |
| `quality` | `Integer` | No |  |
| `reducedMotion` | `Boolean` | No |  |
| `scale` | `Integer` | No |  |
| `scrollPage` | `Boolean` | No |  |
| `timeout` | `Integer` | No |  |
| `url` | `String` | Yes |  |
| `waitUntil` | `String` | No |  |
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
| `createdAt` | `String` | Yes |  |
| `currentControls` | `String` | Yes |  |
| `desiredOutcome` | `String` | Yes |  |
| `email` | `String` | Yes |  |
| `id` | `Integer` | Yes |  |
| `language` | `String` | Yes |  |
| `primaryConcern` | `String` | Yes |  |
| `replyConsent` | `Boolean` | Yes |  |
| `repositoryAuthority` | `Boolean` | Yes |  |
| `repositoryUrl` | `String` | Yes |  |
| `routePath` | `String` | Yes |  |
| `runtime` | `String` | Yes |  |
| `safetyAcknowledged` | `Boolean` | Yes |  |
| `startBoundaryAcknowledged` | `Boolean` | Yes |  |
| `status` | `String` | Yes |  |
| `testEvidence` | `String` | Yes |  |
| `updatedAt` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.SafetyReviewRequest.create({
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
| `expectedRenders` | `String` | No |  |
| `name` | `String` | No |  |
| `useCase` | `String` | No |  |

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
| `createdAt` | `String` | Yes |  |
| `currentPlan` | `String` | Yes |  |
| `id` | `Integer` | Yes |  |
| `note` | `String` | No |  |
| `requestedPlan` | `String` | Yes |  |
| `status` | `String` | Yes |  |
| `updatedAt` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Upgrade.create({
  "consent" => true, # Boolean
  "createdAt" => "example_createdAt", # String
  "currentPlan" => "example_currentPlan", # String
  "id" => 1, # Integer
  "requestedPlan" => "example_requestedPlan", # String
  "status" => "example_status", # String
  "updatedAt" => "example_updatedAt", # String
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
| `links` | `Hash` | Yes |  |
| `upgradeRequest` | `Object` | Yes |  |
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

