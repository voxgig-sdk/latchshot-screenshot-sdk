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
| `changeContext` | `String` | No | Optional non-sensitive description of what the weekly owner-written note should call out. |
| `createdAt` | `String` | Yes |  |
| `email` | `String` | Yes | Address the owner may use only to reply about this monitoring request. |
| `id` | `Integer` | Yes |  |
| `monitoringGoal` | `String` | Yes |  |
| `pageCount` | `String` | Yes |  |
| `pageUrl` | `String` | Yes | One exact public HTTP or HTTPS example page on port 80 or 443, without credentials, query data, or a fragment. |
| `publicPageAuthority` | `Boolean` | Yes | Confirms authority to request recurring captures of every proposed public page. |
| `replyConsent` | `Boolean` | Yes | Allows the owner to email only about this monitoring-pilot request. |
| `safetyAcknowledged` | `Boolean` | Yes | Confirms removal of credentials, query secrets, customer data, signed links, and sensitive information. |
| `startBoundaryAcknowledged` | `Boolean` | Yes | Confirms that scope, delivery, retention, payment, and monitoring start require separate owner confirmation. |
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
| `acceptanceSample` | `String` | No | Optional safe description of one maintainer-approved public page and required artifact shape. |
| `callSite` | `String` | Yes | Optional relative repository file path for the existing backend provider call. |
| `createdAt` | `String` | Yes |  |
| `currentContract` | `String` | No | Optional non-secret current request, synchronous output, and application-owned byte handling. |
| `email` | `String` | Yes | Address the owner may use only to reply about this pilot request. |
| `expectedRenders` | `String` | No |  |
| `id` | `Integer` | Yes |  |
| `language` | `String` | No |  |
| `provider` | `String` | No |  |
| `replyConsent` | `Boolean` | Yes | Allows the owner to email only about this pilot request. |
| `repositoryAuthority` | `Boolean` | Yes | Confirms authority to review, merge, deploy, and roll back the public repository change. |
| `repositoryUrl` | `String` | Yes | Exact public GitHub repository under the requester's control. |
| `requiredBehavior` | `String` | No | Optional provider behavior that must be preserved. |
| `safetyAcknowledged` | `Boolean` | Yes | Confirms removal of credentials, private or signed URLs, customer data, payment details, and sensitive artifacts. |
| `startBoundaryAcknowledged` | `Boolean` | Yes | Confirms that no payment or work starts before separate owner confirmation. |
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
| `blockAds` | `Boolean` | No | Best-effort blocking of requests to known third-party ad hosts. |
| `blockChats` | `Boolean` | No | Best-effort blocking and hiding of known third-party chat widgets. |
| `blockTrackers` | `Boolean` | No | Best-effort blocking of requests to known third-party analytics and tracker hosts. |
| `darkMode` | `Boolean` | No | Emulate a dark color-scheme preference. |
| `delay` | `Integer` | No | Additional bounded wait in milliseconds after the lifecycle event. |
| `format` | `String` | No | Exact artifact format. |
| `fullPage` | `Boolean` | No | Capture the bounded full document height for screenshots. |
| `height` | `Integer` | No | Viewport height in CSS pixels. |
| `hideCookieBanners` | `Boolean` | No | Hide common cookie-consent overlays after loading. |
| `hidePopups` | `Boolean` | No | Hide common newsletter, signup, and discount popups without clicking, submitting, or setting state. |
| `kind` | `String` | No | Artifact family to return. |
| `landscape` | `Boolean` | No | Use landscape orientation for PDF rendering. |
| `paper` | `String` | No | Paper size used for PDF rendering. |
| `quality` | `Integer` | No | JPEG encoding quality. |
| `reducedMotion` | `Boolean` | No | Emulate reduced motion to improve capture stability. |
| `scale` | `Integer` | No | Device scale factor used for image capture. |
| `scrollPage` | `Boolean` | No | Deterministically scroll before capture to activate lazy content. |
| `timeout` | `Integer` | No | Navigation timeout in milliseconds. |
| `url` | `String` | Yes | Public HTTP or HTTPS page URL. |
| `waitUntil` | `String` | No | Browser lifecycle event awaited before the optional delay. |
| `width` | `Integer` | No | Viewport width in CSS pixels. |

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
result = client.Rendering.load({ "url" => "url" })
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
| `currentControls` | `String` | Yes | Non-secret current URL, network, browser, resource, and caller controls. |
| `desiredOutcome` | `String` | Yes | Requested risk report, focused patch, regression tests, and handoff outcome. |
| `email` | `String` | Yes | Address the owner may use only to reply about this safety-review request. |
| `id` | `Integer` | Yes |  |
| `language` | `String` | Yes |  |
| `primaryConcern` | `String` | Yes |  |
| `replyConsent` | `Boolean` | Yes | Allows the owner to email only about this safety-review request. |
| `repositoryAuthority` | `Boolean` | Yes | Confirms authority to review, merge, deploy, and roll back the public repository change. |
| `repositoryUrl` | `String` | Yes | Exact public GitHub repository under the requester's control. |
| `routePath` | `String` | Yes | One relative repository file path for the existing screenshot endpoint or worker. |
| `runtime` | `String` | Yes |  |
| `safetyAcknowledged` | `Boolean` | Yes | Confirms removal of credentials, private or signed URLs, customer data, production details, payment information, and sensitive artifacts. |
| `startBoundaryAcknowledged` | `Boolean` | Yes | Confirms that no payment or work starts before separate owner confirmation. |
| `status` | `String` | Yes |  |
| `testEvidence` | `String` | Yes | Non-sensitive description of current happy-path and rejection tests, or none. |
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
| `consent` | `Boolean` | No | Optional permission for the owner to send product-fit guidance. |
| `email` | `String` | Yes | Email used to enforce one lifetime Free-plan key. |
| `expectedRenders` | `String` | No |  |
| `name` | `String` | No | Optional display name for owner review. |
| `useCase` | `String` | No | Optional public-page capture use case. |

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
| `links` | `Hash` | Yes | Stable self-serve continuation links. |
| `upgradeRequest` | `Object` | Yes | Latest paid-plan request attached to this key, or null when none exists. |
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


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

