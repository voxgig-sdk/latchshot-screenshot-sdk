# LatchshotScreenshot Lua SDK Reference

Complete API reference for the LatchshotScreenshot Lua SDK.


## LatchshotScreenshotSDK

### Constructor

```lua
local sdk = require("latchshot-screenshot_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Health(data)`

Create a new `Health` entity instance. Pass `nil` for no initial data.

#### `MonitoringRequest(data)`

Create a new `MonitoringRequest` entity instance. Pass `nil` for no initial data.

#### `PilotRequest(data)`

Create a new `PilotRequest` entity instance. Pass `nil` for no initial data.

#### `Render(data)`

Create a new `Render` entity instance. Pass `nil` for no initial data.

#### `Rendering(data)`

Create a new `Rendering` entity instance. Pass `nil` for no initial data.

#### `SafetyReviewRequest(data)`

Create a new `SafetyReviewRequest` entity instance. Pass `nil` for no initial data.

#### `Trial(data)`

Create a new `Trial` entity instance. Pass `nil` for no initial data.

#### `Upgrade(data)`

Create a new `Upgrade` entity instance. Pass `nil` for no initial data.

#### `Usage(data)`

Create a new `Usage` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## HealthEntity

```lua
local health = client:Health(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `number` | Yes |  |
| `concurrency` | `number` | Yes |  |
| `pending` | `number` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Health():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HealthEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MonitoringRequestEntity

```lua
local monitoring_request = client:MonitoringRequest(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `changeContext` | `string` | No |  |
| `createdAt` | `string` | Yes |  |
| `email` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `monitoringGoal` | `string` | Yes |  |
| `pageCount` | `string` | Yes |  |
| `pageUrl` | `string` | Yes |  |
| `publicPageAuthority` | `boolean` | Yes |  |
| `replyConsent` | `boolean` | Yes |  |
| `safetyAcknowledged` | `boolean` | Yes |  |
| `startBoundaryAcknowledged` | `boolean` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:MonitoringRequest():create({
  createdAt = --[[ string ]],
  email = --[[ string ]],
  id = --[[ number ]],
  monitoringGoal = --[[ string ]],
  pageCount = --[[ string ]],
  pageUrl = --[[ string ]],
  publicPageAuthority = --[[ boolean ]],
  replyConsent = --[[ boolean ]],
  safetyAcknowledged = --[[ boolean ]],
  startBoundaryAcknowledged = --[[ boolean ]],
  status = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MonitoringRequestEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PilotRequestEntity

```lua
local pilot_request = client:PilotRequest(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acceptanceSample` | `string` | No |  |
| `callSite` | `string` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `currentContract` | `string` | No |  |
| `email` | `string` | Yes |  |
| `expectedRenders` | `string` | No |  |
| `id` | `number` | Yes |  |
| `language` | `string` | No |  |
| `provider` | `string` | No |  |
| `replyConsent` | `boolean` | Yes |  |
| `repositoryAuthority` | `boolean` | Yes |  |
| `repositoryUrl` | `string` | Yes |  |
| `requiredBehavior` | `string` | No |  |
| `safetyAcknowledged` | `boolean` | Yes |  |
| `startBoundaryAcknowledged` | `boolean` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PilotRequest():create({
  callSite = --[[ string ]],
  createdAt = --[[ string ]],
  email = --[[ string ]],
  id = --[[ number ]],
  replyConsent = --[[ boolean ]],
  repositoryAuthority = --[[ boolean ]],
  repositoryUrl = --[[ string ]],
  safetyAcknowledged = --[[ boolean ]],
  startBoundaryAcknowledged = --[[ boolean ]],
  status = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PilotRequestEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RenderEntity

```lua
local render = client:Render(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blockAds` | `boolean` | No |  |
| `blockChats` | `boolean` | No |  |
| `blockTrackers` | `boolean` | No |  |
| `darkMode` | `boolean` | No |  |
| `delay` | `number` | No |  |
| `format` | `string` | No |  |
| `fullPage` | `boolean` | No |  |
| `height` | `number` | No |  |
| `hideCookieBanners` | `boolean` | No |  |
| `hidePopups` | `boolean` | No |  |
| `kind` | `string` | No |  |
| `landscape` | `boolean` | No |  |
| `paper` | `string` | No |  |
| `quality` | `number` | No |  |
| `reducedMotion` | `boolean` | No |  |
| `scale` | `number` | No |  |
| `scrollPage` | `boolean` | No |  |
| `timeout` | `number` | No |  |
| `url` | `string` | Yes |  |
| `waitUntil` | `string` | No |  |
| `width` | `number` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Render():create({
  url = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RenderEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RenderingEntity

```lua
local rendering = client:Rendering(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Rendering():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RenderingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SafetyReviewRequestEntity

```lua
local safety_review_request = client:SafetyReviewRequest(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `currentControls` | `string` | Yes |  |
| `desiredOutcome` | `string` | Yes |  |
| `email` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `language` | `string` | Yes |  |
| `primaryConcern` | `string` | Yes |  |
| `replyConsent` | `boolean` | Yes |  |
| `repositoryAuthority` | `boolean` | Yes |  |
| `repositoryUrl` | `string` | Yes |  |
| `routePath` | `string` | Yes |  |
| `runtime` | `string` | Yes |  |
| `safetyAcknowledged` | `boolean` | Yes |  |
| `startBoundaryAcknowledged` | `boolean` | Yes |  |
| `status` | `string` | Yes |  |
| `testEvidence` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SafetyReviewRequest():create({
  createdAt = --[[ string ]],
  currentControls = --[[ string ]],
  desiredOutcome = --[[ string ]],
  email = --[[ string ]],
  id = --[[ number ]],
  language = --[[ string ]],
  primaryConcern = --[[ string ]],
  replyConsent = --[[ boolean ]],
  repositoryAuthority = --[[ boolean ]],
  repositoryUrl = --[[ string ]],
  routePath = --[[ string ]],
  runtime = --[[ string ]],
  safetyAcknowledged = --[[ boolean ]],
  startBoundaryAcknowledged = --[[ boolean ]],
  status = --[[ string ]],
  testEvidence = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SafetyReviewRequestEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TrialEntity

```lua
local trial = client:Trial(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `consent` | `boolean` | No |  |
| `email` | `string` | Yes |  |
| `expectedRenders` | `string` | No |  |
| `name` | `string` | No |  |
| `useCase` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Trial():create({
  email = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TrialEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UpgradeEntity

```lua
local upgrade = client:Upgrade(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `consent` | `boolean` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `currentPlan` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `note` | `string` | No |  |
| `requestedPlan` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Upgrade():create({
  consent = --[[ boolean ]],
  createdAt = --[[ string ]],
  currentPlan = --[[ string ]],
  id = --[[ number ]],
  requestedPlan = --[[ string ]],
  status = --[[ string ]],
  updatedAt = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpgradeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UsageEntity

```lua
local usage = client:Usage(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer` | `table` | Yes |  |
| `links` | `table` | Yes |  |
| `upgradeRequest` | `any` | Yes |  |
| `usage` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Usage():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

