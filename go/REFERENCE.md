# LatchshotScreenshot Golang SDK Reference

Complete API reference for the LatchshotScreenshot Golang SDK.


## LatchshotScreenshotSDK

### Constructor

```go
func NewLatchshotScreenshotSDK(options map[string]any) *LatchshotScreenshotSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *LatchshotScreenshotSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *LatchshotScreenshotSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Health(data map[string]any) LatchshotScreenshotEntity`

Create a new `Health` entity instance. Pass `nil` for no initial data.

#### `MonitoringRequest(data map[string]any) LatchshotScreenshotEntity`

Create a new `MonitoringRequest` entity instance. Pass `nil` for no initial data.

#### `PilotRequest(data map[string]any) LatchshotScreenshotEntity`

Create a new `PilotRequest` entity instance. Pass `nil` for no initial data.

#### `Render(data map[string]any) LatchshotScreenshotEntity`

Create a new `Render` entity instance. Pass `nil` for no initial data.

#### `Rendering(data map[string]any) LatchshotScreenshotEntity`

Create a new `Rendering` entity instance. Pass `nil` for no initial data.

#### `SafetyReviewRequest(data map[string]any) LatchshotScreenshotEntity`

Create a new `SafetyReviewRequest` entity instance. Pass `nil` for no initial data.

#### `Trial(data map[string]any) LatchshotScreenshotEntity`

Create a new `Trial` entity instance. Pass `nil` for no initial data.

#### `Upgrade(data map[string]any) LatchshotScreenshotEntity`

Create a new `Upgrade` entity instance. Pass `nil` for no initial data.

#### `Usage(data map[string]any) LatchshotScreenshotEntity`

Create a new `Usage` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## HealthEntity

```go
health := client.Health(nil)
fmt.Println(health.GetName()) // "health"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ok` | `bool` | Yes |  |
| `render` | `map[string]any` | Yes |  |
| `service` | `string` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Health(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `HealthEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MonitoringRequestEntity

```go
monitoringRequest := client.MonitoringRequest(nil)
fmt.Println(monitoringRequest.GetName()) // "monitoring_request"
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
| `public_page_authority` | `bool` | Yes |  |
| `reply_consent` | `bool` | Yes |  |
| `request` | `map[string]any` | Yes |  |
| `safety_acknowledged` | `bool` | Yes |  |
| `start_boundary_acknowledged` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.MonitoringRequest(nil).Create(map[string]any{
    "email": "example_email",
    "monitoring_goal": "example_monitoring_goal",
    "notice": "example_notice",
    "page_count": "example_page_count",
    "page_url": "example_page_url",
    "public_page_authority": true,
    "reply_consent": true,
    "request": map[string]any{},
    "safety_acknowledged": true,
    "start_boundary_acknowledged": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MonitoringRequestEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PilotRequestEntity

```go
pilotRequest := client.PilotRequest(nil)
fmt.Println(pilotRequest.GetName()) // "pilot_request"
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
| `reply_consent` | `bool` | Yes |  |
| `repository_authority` | `bool` | Yes |  |
| `repository_url` | `string` | Yes |  |
| `request` | `map[string]any` | Yes |  |
| `required_behavior` | `string` | No |  |
| `safety_acknowledged` | `bool` | Yes |  |
| `start_boundary_acknowledged` | `bool` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PilotRequest(nil).Create(map[string]any{
    "email": "example_email",
    "notice": "example_notice",
    "reply_consent": true,
    "repository_authority": true,
    "repository_url": "example_repository_url",
    "request": map[string]any{},
    "safety_acknowledged": true,
    "start_boundary_acknowledged": true,
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PilotRequestEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RenderEntity

```go
render := client.Render(nil)
fmt.Println(render.GetName()) // "render"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `block_ad` | `bool` | No |  |
| `block_chat` | `bool` | No |  |
| `block_tracker` | `bool` | No |  |
| `dark_mode` | `bool` | No |  |
| `delay` | `int` | No |  |
| `format` | `string` | No |  |
| `full_page` | `bool` | No |  |
| `height` | `int` | No |  |
| `hide_cookie_banner` | `bool` | No |  |
| `hide_popup` | `bool` | No |  |
| `kind` | `string` | No |  |
| `landscape` | `bool` | No |  |
| `paper` | `string` | No |  |
| `quality` | `int` | No |  |
| `reduced_motion` | `bool` | No |  |
| `scale` | `int` | No |  |
| `scroll_page` | `bool` | No |  |
| `timeout` | `int` | No |  |
| `url` | `string` | Yes |  |
| `wait_until` | `string` | No |  |
| `width` | `int` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Render(nil).Create(map[string]any{
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RenderEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RenderingEntity

```go
rendering := client.Rendering(nil)
fmt.Println(rendering.GetName()) // "rendering"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Rendering(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RenderingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SafetyReviewRequestEntity

```go
safetyReviewRequest := client.SafetyReviewRequest(nil)
fmt.Println(safetyReviewRequest.GetName()) // "safety_review_request"
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
| `reply_consent` | `bool` | Yes |  |
| `repository_authority` | `bool` | Yes |  |
| `repository_url` | `string` | Yes |  |
| `request` | `map[string]any` | Yes |  |
| `route_path` | `string` | Yes |  |
| `runtime` | `string` | Yes |  |
| `safety_acknowledged` | `bool` | Yes |  |
| `start_boundary_acknowledged` | `bool` | Yes |  |
| `test_evidence` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.SafetyReviewRequest(nil).Create(map[string]any{
    "current_control": "example_current_control",
    "desired_outcome": "example_desired_outcome",
    "email": "example_email",
    "language": "example_language",
    "notice": "example_notice",
    "primary_concern": "example_primary_concern",
    "reply_consent": true,
    "repository_authority": true,
    "repository_url": "example_repository_url",
    "request": map[string]any{},
    "route_path": "example_route_path",
    "runtime": "example_runtime",
    "safety_acknowledged": true,
    "start_boundary_acknowledged": true,
    "test_evidence": "example_test_evidence",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SafetyReviewRequestEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TrialEntity

```go
trial := client.Trial(nil)
fmt.Println(trial.GetName()) // "trial"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `consent` | `bool` | No |  |
| `email` | `string` | Yes |  |
| `expected_render` | `string` | No |  |
| `name` | `string` | No |  |
| `use_case` | `string` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Trial(nil).Create(map[string]any{
    "email": "example_email",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TrialEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UpgradeEntity

```go
upgrade := client.Upgrade(nil)
fmt.Println(upgrade.GetName()) // "upgrade"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `consent` | `bool` | Yes |  |
| `note` | `string` | No |  |
| `notice` | `string` | Yes |  |
| `request` | `map[string]any` | Yes |  |
| `requested_plan` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Upgrade(nil).Create(map[string]any{
    "consent": true,
    "notice": "example_notice",
    "request": map[string]any{},
    "requested_plan": "example_requested_plan",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UpgradeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## UsageEntity

```go
usage := client.Usage(nil)
fmt.Println(usage.GetName()) // "usage"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer` | `map[string]any` | Yes |  |
| `link` | `map[string]any` | Yes |  |
| `upgrade_request` | `any` | Yes |  |
| `usage` | `map[string]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Usage(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `UsageEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewLatchshotScreenshotSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

