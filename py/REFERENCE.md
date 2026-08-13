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
| `changeContext` | `str` | No |  |
| `createdAt` | `str` | Yes |  |
| `email` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `monitoringGoal` | `str` | Yes |  |
| `pageCount` | `str` | Yes |  |
| `pageUrl` | `str` | Yes |  |
| `publicPageAuthority` | `bool` | Yes |  |
| `replyConsent` | `bool` | Yes |  |
| `safetyAcknowledged` | `bool` | Yes |  |
| `startBoundaryAcknowledged` | `bool` | Yes |  |
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
| `acceptanceSample` | `str` | No |  |
| `callSite` | `str` | Yes |  |
| `createdAt` | `str` | Yes |  |
| `currentContract` | `str` | No |  |
| `email` | `str` | Yes |  |
| `expectedRenders` | `str` | No |  |
| `id` | `int` | Yes |  |
| `language` | `str` | No |  |
| `provider` | `str` | No |  |
| `replyConsent` | `bool` | Yes |  |
| `repositoryAuthority` | `bool` | Yes |  |
| `repositoryUrl` | `str` | Yes |  |
| `requiredBehavior` | `str` | No |  |
| `safetyAcknowledged` | `bool` | Yes |  |
| `startBoundaryAcknowledged` | `bool` | Yes |  |
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
| `blockAds` | `bool` | No |  |
| `blockChats` | `bool` | No |  |
| `blockTrackers` | `bool` | No |  |
| `darkMode` | `bool` | No |  |
| `delay` | `int` | No |  |
| `format` | `str` | No |  |
| `fullPage` | `bool` | No |  |
| `height` | `int` | No |  |
| `hideCookieBanners` | `bool` | No |  |
| `hidePopups` | `bool` | No |  |
| `kind` | `str` | No |  |
| `landscape` | `bool` | No |  |
| `paper` | `str` | No |  |
| `quality` | `int` | No |  |
| `reducedMotion` | `bool` | No |  |
| `scale` | `int` | No |  |
| `scrollPage` | `bool` | No |  |
| `timeout` | `int` | No |  |
| `url` | `str` | Yes |  |
| `waitUntil` | `str` | No |  |
| `width` | `int` | No |  |

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
result = client.Rendering().load()
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
| `currentControls` | `str` | Yes |  |
| `desiredOutcome` | `str` | Yes |  |
| `email` | `str` | Yes |  |
| `id` | `int` | Yes |  |
| `language` | `str` | Yes |  |
| `primaryConcern` | `str` | Yes |  |
| `replyConsent` | `bool` | Yes |  |
| `repositoryAuthority` | `bool` | Yes |  |
| `repositoryUrl` | `str` | Yes |  |
| `routePath` | `str` | Yes |  |
| `runtime` | `str` | Yes |  |
| `safetyAcknowledged` | `bool` | Yes |  |
| `startBoundaryAcknowledged` | `bool` | Yes |  |
| `status` | `str` | Yes |  |
| `testEvidence` | `str` | Yes |  |
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
| `consent` | `bool` | No |  |
| `email` | `str` | Yes |  |
| `expectedRenders` | `str` | No |  |
| `name` | `str` | No |  |
| `useCase` | `str` | No |  |

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
| `links` | `dict` | Yes |  |
| `upgradeRequest` | `Any` | Yes |  |
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

