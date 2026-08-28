# LatchshotScreenshot Python SDK Reference

Complete API reference for the LatchshotScreenshot Python SDK.


## LatchshotScreenshotSDK

### Constructor

```python
from latchshotscreenshot_sdk import LatchshotScreenshotSDK

client = LatchshotScreenshotSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `LatchshotScreenshotSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = LatchshotScreenshotSDK.test()
```


### Instance Methods

#### `Health(data=None)`

Create a new `HealthEntity` instance. Pass `None` for no initial data.

#### `MonitoringRequest(data=None)`

Create a new `MonitoringRequestEntity` instance. Pass `None` for no initial data.

#### `PilotRequest(data=None)`

Create a new `PilotRequestEntity` instance. Pass `None` for no initial data.

#### `Render(data=None)`

Create a new `RenderEntity` instance. Pass `None` for no initial data.

#### `Rendering(data=None)`

Create a new `RenderingEntity` instance. Pass `None` for no initial data.

#### `SafetyReviewRequest(data=None)`

Create a new `SafetyReviewRequestEntity` instance. Pass `None` for no initial data.

#### `Trial(data=None)`

Create a new `TrialEntity` instance. Pass `None` for no initial data.

#### `Upgrade(data=None)`

Create a new `UpgradeEntity` instance. Pass `None` for no initial data.

#### `Usage(data=None)`

Create a new `UsageEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## HealthEntity

```python
health = client.Health()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `int` | Yes |  |
| `concurrency` | `int` | Yes |  |
| `pending` | `int` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Health().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HealthEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MonitoringRequestEntity

```python
monitoring_request = client.MonitoringRequest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `changeContext` | `str` | No | Optional non-sensitive description of what the weekly owner-written note should call out. |
| `createdAt` | `str` | Yes |  |
| `email` | `str` | Yes | Address the owner may use only to reply about this monitoring request. |
| `id` | `int` | Yes |  |
| `monitoringGoal` | `str` | Yes |  |
| `pageCount` | `str` | Yes |  |
| `pageUrl` | `str` | Yes | One exact public HTTP or HTTPS example page on port 80 or 443, without credentials, query data, or a fragment. |
| `publicPageAuthority` | `bool` | Yes | Confirms authority to request recurring captures of every proposed public page. |
| `replyConsent` | `bool` | Yes | Allows the owner to email only about this monitoring-pilot request. |
| `safetyAcknowledged` | `bool` | Yes | Confirms removal of credentials, query secrets, customer data, signed links, and sensitive information. |
| `startBoundaryAcknowledged` | `bool` | Yes | Confirms that scope, delivery, retention, payment, and monitoring start require separate owner confirmation. |
| `status` | `str` | Yes |  |
| `updatedAt` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.MonitoringRequest().create({
    "createdAt": "example_createdAt",  # str
    "email": "example_email",  # str
    "id": 1,  # int
    "monitoringGoal": "example_monitoringGoal",  # str
    "pageCount": "example_pageCount",  # str
    "pageUrl": "example_pageUrl",  # str
    "publicPageAuthority": True,  # bool
    "replyConsent": True,  # bool
    "safetyAcknowledged": True,  # bool
    "startBoundaryAcknowledged": True,  # bool
    "status": "example_status",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MonitoringRequestEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PilotRequestEntity

```python
pilot_request = client.PilotRequest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `acceptanceSample` | `str` | No | Optional safe description of one maintainer-approved public page and required artifact shape. |
| `callSite` | `str` | Yes | Optional relative repository file path for the existing backend provider call. |
| `createdAt` | `str` | Yes |  |
| `currentContract` | `str` | No | Optional non-secret current request, synchronous output, and application-owned byte handling. |
| `email` | `str` | Yes | Address the owner may use only to reply about this pilot request. |
| `expectedRenders` | `str` | No |  |
| `id` | `int` | Yes |  |
| `language` | `str` | No |  |
| `provider` | `str` | No |  |
| `replyConsent` | `bool` | Yes | Allows the owner to email only about this pilot request. |
| `repositoryAuthority` | `bool` | Yes | Confirms authority to review, merge, deploy, and roll back the public repository change. |
| `repositoryUrl` | `str` | Yes | Exact public GitHub repository under the requester's control. |
| `requiredBehavior` | `str` | No | Optional provider behavior that must be preserved. |
| `safetyAcknowledged` | `bool` | Yes | Confirms removal of credentials, private or signed URLs, customer data, payment details, and sensitive artifacts. |
| `startBoundaryAcknowledged` | `bool` | Yes | Confirms that no payment or work starts before separate owner confirmation. |
| `status` | `str` | Yes |  |
| `updatedAt` | `str` | Yes |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PilotRequest().create({
    "callSite": "example_callSite",  # str
    "createdAt": "example_createdAt",  # str
    "email": "example_email",  # str
    "id": 1,  # int
    "replyConsent": True,  # bool
    "repositoryAuthority": True,  # bool
    "repositoryUrl": "example_repositoryUrl",  # str
    "safetyAcknowledged": True,  # bool
    "startBoundaryAcknowledged": True,  # bool
    "status": "example_status",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PilotRequestEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RenderEntity

```python
render = client.Render()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blockAds` | `bool` | No | Best-effort blocking of requests to known third-party ad hosts. |
| `blockChats` | `bool` | No | Best-effort blocking and hiding of known third-party chat widgets. |
| `blockTrackers` | `bool` | No | Best-effort blocking of requests to known third-party analytics and tracker hosts. |
| `darkMode` | `bool` | No | Emulate a dark color-scheme preference. |
| `delay` | `int` | No | Additional bounded wait in milliseconds after the lifecycle event. |
| `format` | `str` | No | Exact artifact format. |
| `fullPage` | `bool` | No | Capture the bounded full document height for screenshots. |
| `height` | `int` | No | Viewport height in CSS pixels. |
| `hideCookieBanners` | `bool` | No | Hide common cookie-consent overlays after loading. |
| `hidePopups` | `bool` | No | Hide common newsletter, signup, and discount popups without clicking, submitting, or setting state. |
| `kind` | `str` | No | Artifact family to return. |
| `landscape` | `bool` | No | Use landscape orientation for PDF rendering. |
| `paper` | `str` | No | Paper size used for PDF rendering. |
| `quality` | `int` | No | JPEG encoding quality. |
| `reducedMotion` | `bool` | No | Emulate reduced motion to improve capture stability. |
| `scale` | `int` | No | Device scale factor used for image capture. |
| `scrollPage` | `bool` | No | Deterministically scroll before capture to activate lazy content. |
| `timeout` | `int` | No | Navigation timeout in milliseconds. |
| `url` | `str` | Yes | Public HTTP or HTTPS page URL. |
| `waitUntil` | `str` | No | Browser lifecycle event awaited before the optional delay. |
| `width` | `int` | No | Viewport width in CSS pixels. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Render().create({
    "url": "example_url",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RenderEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RenderingEntity

```python
rendering = client.Rendering()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Rendering().load({"url": "url"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RenderingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SafetyReviewRequestEntity

```python
safety_review_request = client.SafetyReviewRequest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `str` | Yes |  |
| `currentControls` | `str` | Yes | Non-secret current URL, network, browser, resource, and caller controls. |
| `desiredOutcome` | `str` | Yes | Requested risk report, focused patch, regression tests, and handoff outcome. |
| `email` | `str` | Yes | Address the owner may use only to reply about this safety-review request. |
| `id` | `int` | Yes |  |
| `language` | `str` | Yes |  |
| `primaryConcern` | `str` | Yes |  |
| `replyConsent` | `bool` | Yes | Allows the owner to email only about this safety-review request. |
| `repositoryAuthority` | `bool` | Yes | Confirms authority to review, merge, deploy, and roll back the public repository change. |
| `repositoryUrl` | `str` | Yes | Exact public GitHub repository under the requester's control. |
| `routePath` | `str` | Yes | One relative repository file path for the existing screenshot endpoint or worker. |
| `runtime` | `str` | Yes |  |
| `safetyAcknowledged` | `bool` | Yes | Confirms removal of credentials, private or signed URLs, customer data, production details, payment information, and sensitive artifacts. |
| `startBoundaryAcknowledged` | `bool` | Yes | Confirms that no payment or work starts before separate owner confirmation. |
| `status` | `str` | Yes |  |
| `testEvidence` | `str` | Yes | Non-sensitive description of current happy-path and rejection tests, or none. |
| `updatedAt` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SafetyReviewRequest().create({
    "createdAt": "example_createdAt",  # str
    "currentControls": "example_currentControls",  # str
    "desiredOutcome": "example_desiredOutcome",  # str
    "email": "example_email",  # str
    "id": 1,  # int
    "language": "example_language",  # str
    "primaryConcern": "example_primaryConcern",  # str
    "replyConsent": True,  # bool
    "repositoryAuthority": True,  # bool
    "repositoryUrl": "example_repositoryUrl",  # str
    "routePath": "example_routePath",  # str
    "runtime": "example_runtime",  # str
    "safetyAcknowledged": True,  # bool
    "startBoundaryAcknowledged": True,  # bool
    "status": "example_status",  # str
    "testEvidence": "example_testEvidence",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SafetyReviewRequestEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TrialEntity

```python
trial = client.Trial()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `consent` | `bool` | No | Optional permission for the owner to send product-fit guidance. |
| `email` | `str` | Yes | Email used to enforce one lifetime Free-plan key. |
| `expectedRenders` | `str` | No |  |
| `name` | `str` | No | Optional display name for owner review. |
| `useCase` | `str` | No | Optional public-page capture use case. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Trial().create({
    "email": "example_email",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TrialEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpgradeEntity

```python
upgrade = client.Upgrade()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `consent` | `bool` | Yes |  |
| `createdAt` | `str` | Yes |  |
| `currentPlan` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `note` | `str` | No |  |
| `requestedPlan` | `str` | Yes |  |
| `status` | `str` | Yes |  |
| `updatedAt` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Upgrade().create({
    "consent": True,  # bool
    "createdAt": "example_createdAt",  # str
    "currentPlan": "example_currentPlan",  # str
    "id": 1,  # int
    "requestedPlan": "example_requestedPlan",  # str
    "status": "example_status",  # str
    "updatedAt": "example_updatedAt",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpgradeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UsageEntity

```python
usage = client.Usage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer` | `dict` | Yes |  |
| `links` | `dict` | Yes | Stable self-serve continuation links. |
| `upgradeRequest` | `Any` | Yes | Latest paid-plan request attached to this key, or null when none exists. |
| `usage` | `dict` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Usage().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = LatchshotScreenshotSDK({
    "feature": {
        "test": {"active": True},
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

