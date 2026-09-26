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
| `changeContext` | `string` | No | Optional non-sensitive description of what the weekly owner-written note should call out. |
| `createdAt` | `string` | Yes |  |
| `email` | `string` | Yes | Address the owner may use only to reply about this monitoring request. |
| `id` | `number` | Yes |  |
| `monitoringGoal` | `string` | Yes |  |
| `pageCount` | `string` | Yes |  |
| `pageUrl` | `string` | Yes | One exact public HTTP or HTTPS example page on port 80 or 443, without credentials, query data, or a fragment. |
| `publicPageAuthority` | `boolean` | Yes | Confirms authority to request recurring captures of every proposed public page. |
| `replyConsent` | `boolean` | Yes | Allows the owner to email only about this monitoring-pilot request. |
| `safetyAcknowledged` | `boolean` | Yes | Confirms removal of credentials, query secrets, customer data, signed links, and sensitive information. |
| `startBoundaryAcknowledged` | `boolean` | Yes | Confirms that scope, delivery, retention, payment, and monitoring start require separate owner confirmation. |
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
| `acceptanceSample` | `string` | No | Optional safe description of one maintainer-approved public page and required artifact shape. |
| `callSite` | `string` | Yes | Optional relative repository file path for the existing backend provider call. |
| `createdAt` | `string` | Yes |  |
| `currentContract` | `string` | No | Optional non-secret current request, synchronous output, and application-owned byte handling. |
| `email` | `string` | Yes | Address the owner may use only to reply about this pilot request. |
| `expectedRenders` | `string` | No |  |
| `id` | `number` | Yes |  |
| `language` | `string` | No |  |
| `provider` | `string` | No |  |
| `replyConsent` | `boolean` | Yes | Allows the owner to email only about this pilot request. |
| `repositoryAuthority` | `boolean` | Yes | Confirms authority to review, merge, deploy, and roll back the public repository change. |
| `repositoryUrl` | `string` | Yes | Exact public GitHub repository under the requester's control. |
| `requiredBehavior` | `string` | No | Optional provider behavior that must be preserved. |
| `safetyAcknowledged` | `boolean` | Yes | Confirms removal of credentials, private or signed URLs, customer data, payment details, and sensitive artifacts. |
| `startBoundaryAcknowledged` | `boolean` | Yes | Confirms that no payment or work starts before separate owner confirmation. |
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
| `blockAds` | `boolean` | No | Best-effort blocking of requests to known third-party ad hosts. |
| `blockChats` | `boolean` | No | Best-effort blocking and hiding of known third-party chat widgets. |
| `blockTrackers` | `boolean` | No | Best-effort blocking of requests to known third-party analytics and tracker hosts. |
| `darkMode` | `boolean` | No | Emulate a dark color-scheme preference. |
| `delay` | `number` | No | Additional bounded wait in milliseconds after the lifecycle event. |
| `format` | `string` | No | Exact artifact format. |
| `fullPage` | `boolean` | No | Capture the bounded full document height for screenshots. |
| `height` | `number` | No | Viewport height in CSS pixels. |
| `hideCookieBanners` | `boolean` | No | Hide common cookie-consent overlays after loading. |
| `hidePopups` | `boolean` | No | Hide common newsletter, signup, and discount popups without clicking, submitting, or setting state. |
| `kind` | `string` | No | Artifact family to return. |
| `landscape` | `boolean` | No | Use landscape orientation for PDF rendering. |
| `paper` | `string` | No | Paper size used for PDF rendering. |
| `quality` | `number` | No | JPEG encoding quality. |
| `reducedMotion` | `boolean` | No | Emulate reduced motion to improve capture stability. |
| `scale` | `number` | No | Device scale factor used for image capture. |
| `scrollPage` | `boolean` | No | Deterministically scroll before capture to activate lazy content. |
| `timeout` | `number` | No | Navigation timeout in milliseconds. |
| `url` | `string` | Yes | Public HTTP or HTTPS page URL. |
| `waitUntil` | `string` | No | Browser lifecycle event awaited before the optional delay. |
| `width` | `number` | No | Viewport width in CSS pixels. |

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
local result, err = client:Rendering():load({ url = "url" })
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
| `currentControls` | `string` | Yes | Non-secret current URL, network, browser, resource, and caller controls. |
| `desiredOutcome` | `string` | Yes | Requested risk report, focused patch, regression tests, and handoff outcome. |
| `email` | `string` | Yes | Address the owner may use only to reply about this safety-review request. |
| `id` | `number` | Yes |  |
| `language` | `string` | Yes |  |
| `primaryConcern` | `string` | Yes |  |
| `replyConsent` | `boolean` | Yes | Allows the owner to email only about this safety-review request. |
| `repositoryAuthority` | `boolean` | Yes | Confirms authority to review, merge, deploy, and roll back the public repository change. |
| `repositoryUrl` | `string` | Yes | Exact public GitHub repository under the requester's control. |
| `routePath` | `string` | Yes | One relative repository file path for the existing screenshot endpoint or worker. |
| `runtime` | `string` | Yes |  |
| `safetyAcknowledged` | `boolean` | Yes | Confirms removal of credentials, private or signed URLs, customer data, production details, payment information, and sensitive artifacts. |
| `startBoundaryAcknowledged` | `boolean` | Yes | Confirms that no payment or work starts before separate owner confirmation. |
| `status` | `string` | Yes |  |
| `testEvidence` | `string` | Yes | Non-sensitive description of current happy-path and rejection tests, or none. |
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
| `consent` | `boolean` | No | Optional permission for the owner to send product-fit guidance. |
| `email` | `string` | Yes | Email used to enforce one lifetime Free-plan key. |
| `expectedRenders` | `string` | No |  |
| `name` | `string` | No | Optional display name for owner review. |
| `useCase` | `string` | No | Optional public-page capture use case. |

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
| `links` | `table` | Yes | Stable self-serve continuation links. |
| `upgradeRequest` | `any` | Yes | Latest paid-plan request attached to this key, or null when none exists. |
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
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
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

