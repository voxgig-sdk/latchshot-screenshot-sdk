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
| `ok` | `boolean` | Yes |  |
| `render` | `table` | Yes |  |
| `service` | `string` | Yes |  |

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
| `change_context` | `string` | No |  |
| `email` | `string` | Yes |  |
| `monitoring_goal` | `string` | Yes |  |
| `notice` | `string` | Yes |  |
| `page_count` | `string` | Yes |  |
| `page_url` | `string` | Yes |  |
| `public_page_authority` | `boolean` | Yes |  |
| `reply_consent` | `boolean` | Yes |  |
| `request` | `table` | Yes |  |
| `safety_acknowledged` | `boolean` | Yes |  |
| `start_boundary_acknowledged` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:MonitoringRequest():create({
  email = --[[ string ]],
  monitoring_goal = --[[ string ]],
  notice = --[[ string ]],
  page_count = --[[ string ]],
  page_url = --[[ string ]],
  public_page_authority = --[[ boolean ]],
  reply_consent = --[[ boolean ]],
  request = --[[ table ]],
  safety_acknowledged = --[[ boolean ]],
  start_boundary_acknowledged = --[[ boolean ]],
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
| `acceptance_sample` | `string` | No |  |
| `call_site` | `string` | No |  |
| `current_contract` | `string` | No |  |
| `email` | `string` | Yes |  |
| `expected_render` | `string` | No |  |
| `language` | `string` | No |  |
| `notice` | `string` | Yes |  |
| `provider` | `string` | No |  |
| `reply_consent` | `boolean` | Yes |  |
| `repository_authority` | `boolean` | Yes |  |
| `repository_url` | `string` | Yes |  |
| `request` | `table` | Yes |  |
| `required_behavior` | `string` | No |  |
| `safety_acknowledged` | `boolean` | Yes |  |
| `start_boundary_acknowledged` | `boolean` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PilotRequest():create({
  email = --[[ string ]],
  notice = --[[ string ]],
  reply_consent = --[[ boolean ]],
  repository_authority = --[[ boolean ]],
  repository_url = --[[ string ]],
  request = --[[ table ]],
  safety_acknowledged = --[[ boolean ]],
  start_boundary_acknowledged = --[[ boolean ]],
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
| `block_ad` | `boolean` | No |  |
| `block_chat` | `boolean` | No |  |
| `block_tracker` | `boolean` | No |  |
| `dark_mode` | `boolean` | No |  |
| `delay` | `number` | No |  |
| `format` | `string` | No |  |
| `full_page` | `boolean` | No |  |
| `height` | `number` | No |  |
| `hide_cookie_banner` | `boolean` | No |  |
| `hide_popup` | `boolean` | No |  |
| `kind` | `string` | No |  |
| `landscape` | `boolean` | No |  |
| `paper` | `string` | No |  |
| `quality` | `number` | No |  |
| `reduced_motion` | `boolean` | No |  |
| `scale` | `number` | No |  |
| `scroll_page` | `boolean` | No |  |
| `timeout` | `number` | No |  |
| `url` | `string` | Yes |  |
| `wait_until` | `string` | No |  |
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
| `current_control` | `string` | Yes |  |
| `desired_outcome` | `string` | Yes |  |
| `email` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `notice` | `string` | Yes |  |
| `primary_concern` | `string` | Yes |  |
| `reply_consent` | `boolean` | Yes |  |
| `repository_authority` | `boolean` | Yes |  |
| `repository_url` | `string` | Yes |  |
| `request` | `table` | Yes |  |
| `route_path` | `string` | Yes |  |
| `runtime` | `string` | Yes |  |
| `safety_acknowledged` | `boolean` | Yes |  |
| `start_boundary_acknowledged` | `boolean` | Yes |  |
| `test_evidence` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SafetyReviewRequest():create({
  current_control = --[[ string ]],
  desired_outcome = --[[ string ]],
  email = --[[ string ]],
  language = --[[ string ]],
  notice = --[[ string ]],
  primary_concern = --[[ string ]],
  reply_consent = --[[ boolean ]],
  repository_authority = --[[ boolean ]],
  repository_url = --[[ string ]],
  request = --[[ table ]],
  route_path = --[[ string ]],
  runtime = --[[ string ]],
  safety_acknowledged = --[[ boolean ]],
  start_boundary_acknowledged = --[[ boolean ]],
  test_evidence = --[[ string ]],
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
| `expected_render` | `string` | No |  |
| `name` | `string` | No |  |
| `use_case` | `string` | No |  |

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
| `note` | `string` | No |  |
| `notice` | `string` | Yes |  |
| `request` | `table` | Yes |  |
| `requested_plan` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Upgrade():create({
  consent = --[[ boolean ]],
  notice = --[[ string ]],
  request = --[[ table ]],
  requested_plan = --[[ string ]],
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
| `link` | `table` | Yes |  |
| `upgrade_request` | `any` | Yes |  |
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

