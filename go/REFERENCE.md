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
| `active` | `int` | Yes |  |
| `concurrency` | `int` | Yes |  |
| `pending` | `int` | Yes |  |

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
| `changeContext` | `string` | No |  |
| `createdAt` | `string` | Yes |  |
| `email` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `monitoringGoal` | `string` | Yes |  |
| `pageCount` | `string` | Yes |  |
| `pageUrl` | `string` | Yes |  |
| `publicPageAuthority` | `bool` | Yes |  |
| `replyConsent` | `bool` | Yes |  |
| `safetyAcknowledged` | `bool` | Yes |  |
| `startBoundaryAcknowledged` | `bool` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.MonitoringRequest(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "email": "example_email",
    "id": 1,
    "monitoringGoal": "example_monitoringGoal",
    "pageCount": "example_pageCount",
    "pageUrl": "example_pageUrl",
    "publicPageAuthority": true,
    "replyConsent": true,
    "safetyAcknowledged": true,
    "startBoundaryAcknowledged": true,
    "status": "example_status",
    "updatedAt": "example_updatedAt",
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
| `acceptanceSample` | `string` | No |  |
| `callSite` | `string` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `currentContract` | `string` | No |  |
| `email` | `string` | Yes |  |
| `expectedRenders` | `string` | No |  |
| `id` | `int` | Yes |  |
| `language` | `string` | No |  |
| `provider` | `string` | No |  |
| `replyConsent` | `bool` | Yes |  |
| `repositoryAuthority` | `bool` | Yes |  |
| `repositoryUrl` | `string` | Yes |  |
| `requiredBehavior` | `string` | No |  |
| `safetyAcknowledged` | `bool` | Yes |  |
| `startBoundaryAcknowledged` | `bool` | Yes |  |
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PilotRequest(nil).Create(map[string]any{
    "callSite": "example_callSite",
    "createdAt": "example_createdAt",
    "email": "example_email",
    "id": 1,
    "replyConsent": true,
    "repositoryAuthority": true,
    "repositoryUrl": "example_repositoryUrl",
    "safetyAcknowledged": true,
    "startBoundaryAcknowledged": true,
    "status": "example_status",
    "updatedAt": "example_updatedAt",
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
| `blockAds` | `bool` | No |  |
| `blockChats` | `bool` | No |  |
| `blockTrackers` | `bool` | No |  |
| `darkMode` | `bool` | No |  |
| `delay` | `int` | No |  |
| `format` | `string` | No |  |
| `fullPage` | `bool` | No |  |
| `height` | `int` | No |  |
| `hideCookieBanners` | `bool` | No |  |
| `hidePopups` | `bool` | No |  |
| `kind` | `string` | No |  |
| `landscape` | `bool` | No |  |
| `paper` | `string` | No |  |
| `quality` | `int` | No |  |
| `reducedMotion` | `bool` | No |  |
| `scale` | `int` | No |  |
| `scrollPage` | `bool` | No |  |
| `timeout` | `int` | No |  |
| `url` | `string` | Yes |  |
| `waitUntil` | `string` | No |  |
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
| `createdAt` | `string` | Yes |  |
| `currentControls` | `string` | Yes |  |
| `desiredOutcome` | `string` | Yes |  |
| `email` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `language` | `string` | Yes |  |
| `primaryConcern` | `string` | Yes |  |
| `replyConsent` | `bool` | Yes |  |
| `repositoryAuthority` | `bool` | Yes |  |
| `repositoryUrl` | `string` | Yes |  |
| `routePath` | `string` | Yes |  |
| `runtime` | `string` | Yes |  |
| `safetyAcknowledged` | `bool` | Yes |  |
| `startBoundaryAcknowledged` | `bool` | Yes |  |
| `status` | `string` | Yes |  |
| `testEvidence` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.SafetyReviewRequest(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "currentControls": "example_currentControls",
    "desiredOutcome": "example_desiredOutcome",
    "email": "example_email",
    "id": 1,
    "language": "example_language",
    "primaryConcern": "example_primaryConcern",
    "replyConsent": true,
    "repositoryAuthority": true,
    "repositoryUrl": "example_repositoryUrl",
    "routePath": "example_routePath",
    "runtime": "example_runtime",
    "safetyAcknowledged": true,
    "startBoundaryAcknowledged": true,
    "status": "example_status",
    "testEvidence": "example_testEvidence",
    "updatedAt": "example_updatedAt",
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
| `expectedRenders` | `string` | No |  |
| `name` | `string` | No |  |
| `useCase` | `string` | No |  |

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
| `createdAt` | `string` | Yes |  |
| `currentPlan` | `string` | Yes |  |
| `id` | `int` | Yes |  |
| `note` | `string` | No |  |
| `requestedPlan` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Upgrade(nil).Create(map[string]any{
    "consent": true,
    "createdAt": "example_createdAt",
    "currentPlan": "example_currentPlan",
    "id": 1,
    "requestedPlan": "example_requestedPlan",
    "status": "example_status",
    "updatedAt": "example_updatedAt",
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
| `links` | `map[string]any` | Yes |  |
| `upgradeRequest` | `any` | Yes |  |
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

