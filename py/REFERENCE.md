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
| `ok` | `bool` | Yes |  |
| `render` | `dict` | Yes |  |
| `service` | `str` | Yes |  |

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
| `change_context` | `str` | No |  |
| `email` | `str` | Yes |  |
| `monitoring_goal` | `str` | Yes |  |
| `notice` | `str` | Yes |  |
| `page_count` | `str` | Yes |  |
| `page_url` | `str` | Yes |  |
| `public_page_authority` | `bool` | Yes |  |
| `reply_consent` | `bool` | Yes |  |
| `request` | `dict` | Yes |  |
| `safety_acknowledged` | `bool` | Yes |  |
| `start_boundary_acknowledged` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.MonitoringRequest().create({
    "email": "example_email",  # str
    "monitoring_goal": "example_monitoring_goal",  # str
    "notice": "example_notice",  # str
    "page_count": "example_page_count",  # str
    "page_url": "example_page_url",  # str
    "public_page_authority": True,  # bool
    "reply_consent": True,  # bool
    "request": {},  # dict
    "safety_acknowledged": True,  # bool
    "start_boundary_acknowledged": True,  # bool
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
| `acceptance_sample` | `str` | No |  |
| `call_site` | `str` | No |  |
| `current_contract` | `str` | No |  |
| `email` | `str` | Yes |  |
| `expected_render` | `str` | No |  |
| `language` | `str` | No |  |
| `notice` | `str` | Yes |  |
| `provider` | `str` | No |  |
| `reply_consent` | `bool` | Yes |  |
| `repository_authority` | `bool` | Yes |  |
| `repository_url` | `str` | Yes |  |
| `request` | `dict` | Yes |  |
| `required_behavior` | `str` | No |  |
| `safety_acknowledged` | `bool` | Yes |  |
| `start_boundary_acknowledged` | `bool` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PilotRequest().create({
    "email": "example_email",  # str
    "notice": "example_notice",  # str
    "reply_consent": True,  # bool
    "repository_authority": True,  # bool
    "repository_url": "example_repository_url",  # str
    "request": {},  # dict
    "safety_acknowledged": True,  # bool
    "start_boundary_acknowledged": True,  # bool
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
| `block_ad` | `bool` | No |  |
| `block_chat` | `bool` | No |  |
| `block_tracker` | `bool` | No |  |
| `dark_mode` | `bool` | No |  |
| `delay` | `int` | No |  |
| `format` | `str` | No |  |
| `full_page` | `bool` | No |  |
| `height` | `int` | No |  |
| `hide_cookie_banner` | `bool` | No |  |
| `hide_popup` | `bool` | No |  |
| `kind` | `str` | No |  |
| `landscape` | `bool` | No |  |
| `paper` | `str` | No |  |
| `quality` | `int` | No |  |
| `reduced_motion` | `bool` | No |  |
| `scale` | `int` | No |  |
| `scroll_page` | `bool` | No |  |
| `timeout` | `int` | No |  |
| `url` | `str` | Yes |  |
| `wait_until` | `str` | No |  |
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
| `current_control` | `str` | Yes |  |
| `desired_outcome` | `str` | Yes |  |
| `email` | `str` | Yes |  |
| `language` | `str` | Yes |  |
| `notice` | `str` | Yes |  |
| `primary_concern` | `str` | Yes |  |
| `reply_consent` | `bool` | Yes |  |
| `repository_authority` | `bool` | Yes |  |
| `repository_url` | `str` | Yes |  |
| `request` | `dict` | Yes |  |
| `route_path` | `str` | Yes |  |
| `runtime` | `str` | Yes |  |
| `safety_acknowledged` | `bool` | Yes |  |
| `start_boundary_acknowledged` | `bool` | Yes |  |
| `test_evidence` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SafetyReviewRequest().create({
    "current_control": "example_current_control",  # str
    "desired_outcome": "example_desired_outcome",  # str
    "email": "example_email",  # str
    "language": "example_language",  # str
    "notice": "example_notice",  # str
    "primary_concern": "example_primary_concern",  # str
    "reply_consent": True,  # bool
    "repository_authority": True,  # bool
    "repository_url": "example_repository_url",  # str
    "request": {},  # dict
    "route_path": "example_route_path",  # str
    "runtime": "example_runtime",  # str
    "safety_acknowledged": True,  # bool
    "start_boundary_acknowledged": True,  # bool
    "test_evidence": "example_test_evidence",  # str
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
| `expected_render` | `str` | No |  |
| `name` | `str` | No |  |
| `use_case` | `str` | No |  |

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
| `note` | `str` | No |  |
| `notice` | `str` | Yes |  |
| `request` | `dict` | Yes |  |
| `requested_plan` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Upgrade().create({
    "consent": True,  # bool
    "notice": "example_notice",  # str
    "request": {},  # dict
    "requested_plan": "example_requested_plan",  # str
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
| `link` | `dict` | Yes |  |
| `upgrade_request` | `Any` | Yes |  |
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

