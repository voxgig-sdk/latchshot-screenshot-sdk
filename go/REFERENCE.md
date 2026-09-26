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
| `changeContext` | `string` | No | Optional non-sensitive description of what the weekly owner-written note should call out. |
| `createdAt` | `string` | Yes |  |
| `email` | `string` | Yes | Address the owner may use only to reply about this monitoring request. |
| `id` | `int` | Yes |  |
| `monitoringGoal` | `string` | Yes |  |
| `pageCount` | `string` | Yes |  |
| `pageUrl` | `string` | Yes | One exact public HTTP or HTTPS example page on port 80 or 443, without credentials, query data, or a fragment. |
| `publicPageAuthority` | `bool` | Yes | Confirms authority to request recurring captures of every proposed public page. |
| `replyConsent` | `bool` | Yes | Allows the owner to email only about this monitoring-pilot request. |
| `safetyAcknowledged` | `bool` | Yes | Confirms removal of credentials, query secrets, customer data, signed links, and sensitive information. |
| `startBoundaryAcknowledged` | `bool` | Yes | Confirms that scope, delivery, retention, payment, and monitoring start require separate owner confirmation. |
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
| `acceptanceSample` | `string` | No | Optional safe description of one maintainer-approved public page and required artifact shape. |
| `callSite` | `string` | Yes | Optional relative repository file path for the existing backend provider call. |
| `createdAt` | `string` | Yes |  |
| `currentContract` | `string` | No | Optional non-secret current request, synchronous output, and application-owned byte handling. |
| `email` | `string` | Yes | Address the owner may use only to reply about this pilot request. |
| `expectedRenders` | `string` | No |  |
| `id` | `int` | Yes |  |
| `language` | `string` | No |  |
| `provider` | `string` | No |  |
| `replyConsent` | `bool` | Yes | Allows the owner to email only about this pilot request. |
| `repositoryAuthority` | `bool` | Yes | Confirms authority to review, merge, deploy, and roll back the public repository change. |
| `repositoryUrl` | `string` | Yes | Exact public GitHub repository under the requester's control. |
| `requiredBehavior` | `string` | No | Optional provider behavior that must be preserved. |
| `safetyAcknowledged` | `bool` | Yes | Confirms removal of credentials, private or signed URLs, customer data, payment details, and sensitive artifacts. |
| `startBoundaryAcknowledged` | `bool` | Yes | Confirms that no payment or work starts before separate owner confirmation. |
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
| `blockAds` | `bool` | No | Best-effort blocking of requests to known third-party ad hosts. |
| `blockChats` | `bool` | No | Best-effort blocking and hiding of known third-party chat widgets. |
| `blockTrackers` | `bool` | No | Best-effort blocking of requests to known third-party analytics and tracker hosts. |
| `darkMode` | `bool` | No | Emulate a dark color-scheme preference. |
| `delay` | `int` | No | Additional bounded wait in milliseconds after the lifecycle event. |
| `format` | `string` | No | Exact artifact format. |
| `fullPage` | `bool` | No | Capture the bounded full document height for screenshots. |
| `height` | `int` | No | Viewport height in CSS pixels. |
| `hideCookieBanners` | `bool` | No | Hide common cookie-consent overlays after loading. |
| `hidePopups` | `bool` | No | Hide common newsletter, signup, and discount popups without clicking, submitting, or setting state. |
| `kind` | `string` | No | Artifact family to return. |
| `landscape` | `bool` | No | Use landscape orientation for PDF rendering. |
| `paper` | `string` | No | Paper size used for PDF rendering. |
| `quality` | `int` | No | JPEG encoding quality. |
| `reducedMotion` | `bool` | No | Emulate reduced motion to improve capture stability. |
| `scale` | `int` | No | Device scale factor used for image capture. |
| `scrollPage` | `bool` | No | Deterministically scroll before capture to activate lazy content. |
| `timeout` | `int` | No | Navigation timeout in milliseconds. |
| `url` | `string` | Yes | Public HTTP or HTTPS page URL. |
| `waitUntil` | `string` | No | Browser lifecycle event awaited before the optional delay. |
| `width` | `int` | No | Viewport width in CSS pixels. |

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
result, err := client.Rendering(nil).Load(map[string]any{"url": "url"}, nil)
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
| `currentControls` | `string` | Yes | Non-secret current URL, network, browser, resource, and caller controls. |
| `desiredOutcome` | `string` | Yes | Requested risk report, focused patch, regression tests, and handoff outcome. |
| `email` | `string` | Yes | Address the owner may use only to reply about this safety-review request. |
| `id` | `int` | Yes |  |
| `language` | `string` | Yes |  |
| `primaryConcern` | `string` | Yes |  |
| `replyConsent` | `bool` | Yes | Allows the owner to email only about this safety-review request. |
| `repositoryAuthority` | `bool` | Yes | Confirms authority to review, merge, deploy, and roll back the public repository change. |
| `repositoryUrl` | `string` | Yes | Exact public GitHub repository under the requester's control. |
| `routePath` | `string` | Yes | One relative repository file path for the existing screenshot endpoint or worker. |
| `runtime` | `string` | Yes |  |
| `safetyAcknowledged` | `bool` | Yes | Confirms removal of credentials, private or signed URLs, customer data, production details, payment information, and sensitive artifacts. |
| `startBoundaryAcknowledged` | `bool` | Yes | Confirms that no payment or work starts before separate owner confirmation. |
| `status` | `string` | Yes |  |
| `testEvidence` | `string` | Yes | Non-sensitive description of current happy-path and rejection tests, or none. |
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
| `consent` | `bool` | No | Optional permission for the owner to send product-fit guidance. |
| `email` | `string` | Yes | Email used to enforce one lifetime Free-plan key. |
| `expectedRenders` | `string` | No |  |
| `name` | `string` | No | Optional display name for owner review. |
| `useCase` | `string` | No | Optional public-page capture use case. |

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
| `links` | `map[string]any` | Yes | Stable self-serve continuation links. |
| `upgradeRequest` | `any` | Yes | Latest paid-plan request attached to this key, or null when none exists. |
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
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```go
client := sdk.NewLatchshotScreenshotSDK(map[string]any{
    "feature": map[string]any{
        "ratelimit": map[string]any{"active": true},
        "retry": map[string]any{"active": true},
        "test": map[string]any{"active": true},
        "timeout": map[string]any{"active": true},
    },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `ratelimit`

Rate limiting.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Retry.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Timeout.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

