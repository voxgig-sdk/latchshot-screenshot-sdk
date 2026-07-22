# LatchshotScreenshot Python SDK



The Python SDK for the LatchshotScreenshot API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Health()` — each
carrying a small, uniform set of operations (`load`, `create`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/latchshot-screenshot-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from latchshotscreenshot_sdk import LatchshotScreenshotSDK

client = LatchshotScreenshotSDK({
    "apikey": os.environ.get("LATCHSHOT_SCREENSHOT_APIKEY"),
})
```

### 3. Load a health

`load()` returns the bare record (a `dict`) and raises on error.

```python
try:
    health = client.Health().load()
    print(health)
except Exception as err:
    print(f"load failed: {err}")
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    health = client.Health().load()
    print(health)
except Exception as err:
    print(f"load failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = LatchshotScreenshotSDK.test()

# Entity ops return the bare record and raise on error.
health = client.Health().load()
# health contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = LatchshotScreenshotSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
LATCHSHOT_SCREENSHOT_TEST_LIVE=TRUE
LATCHSHOT_SCREENSHOT_APIKEY=<your-key>
```

Then run:

```bash
cd py && pytest test/
```


## Reference

### LatchshotScreenshotSDK

```python
from latchshotscreenshot_sdk import LatchshotScreenshotSDK

client = LatchshotScreenshotSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = LatchshotScreenshotSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### LatchshotScreenshotSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `Health` | `(data) -> HealthEntity` | Create a Health entity instance. |
| `MonitoringRequest` | `(data) -> MonitoringRequestEntity` | Create a MonitoringRequest entity instance. |
| `PilotRequest` | `(data) -> PilotRequestEntity` | Create a PilotRequest entity instance. |
| `Render` | `(data) -> RenderEntity` | Create a Render entity instance. |
| `Rendering` | `(data) -> RenderingEntity` | Create a Rendering entity instance. |
| `SafetyReviewRequest` | `(data) -> SafetyReviewRequestEntity` | Create a SafetyReviewRequest entity instance. |
| `Trial` | `(data) -> TrialEntity` | Create a Trial entity instance. |
| `Upgrade` | `(data) -> UpgradeEntity` | Create an Upgrade entity instance. |
| `Usage` | `(data) -> UsageEntity` | Create an Usage entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the bare result data (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

### Entities

#### Health

| Field | Description |
| --- | --- |
| `ok` |  |
| `render` |  |
| `service` |  |

Operations: Load.

API path: `/healthz`

#### MonitoringRequest

| Field | Description |
| --- | --- |
| `change_context` |  |
| `email` |  |
| `monitoring_goal` |  |
| `notice` |  |
| `page_count` |  |
| `page_url` |  |
| `public_page_authority` |  |
| `reply_consent` |  |
| `request` |  |
| `safety_acknowledged` |  |
| `start_boundary_acknowledged` |  |

Operations: Create.

API path: `/api/monitoring-requests`

#### PilotRequest

| Field | Description |
| --- | --- |
| `acceptance_sample` |  |
| `call_site` |  |
| `current_contract` |  |
| `email` |  |
| `expected_render` |  |
| `language` |  |
| `notice` |  |
| `provider` |  |
| `reply_consent` |  |
| `repository_authority` |  |
| `repository_url` |  |
| `request` |  |
| `required_behavior` |  |
| `safety_acknowledged` |  |
| `start_boundary_acknowledged` |  |

Operations: Create.

API path: `/api/pilot-requests`

#### Render

| Field | Description |
| --- | --- |
| `block_ad` |  |
| `block_chat` |  |
| `block_tracker` |  |
| `dark_mode` |  |
| `delay` |  |
| `format` |  |
| `full_page` |  |
| `height` |  |
| `hide_cookie_banner` |  |
| `hide_popup` |  |
| `kind` |  |
| `landscape` |  |
| `paper` |  |
| `quality` |  |
| `reduced_motion` |  |
| `scale` |  |
| `scroll_page` |  |
| `timeout` |  |
| `url` |  |
| `wait_until` |  |
| `width` |  |

Operations: Create.

API path: `/v1/render`

#### Rendering

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/v1/screenshot`

#### SafetyReviewRequest

| Field | Description |
| --- | --- |
| `current_control` |  |
| `desired_outcome` |  |
| `email` |  |
| `language` |  |
| `notice` |  |
| `primary_concern` |  |
| `reply_consent` |  |
| `repository_authority` |  |
| `repository_url` |  |
| `request` |  |
| `route_path` |  |
| `runtime` |  |
| `safety_acknowledged` |  |
| `start_boundary_acknowledged` |  |
| `test_evidence` |  |

Operations: Create.

API path: `/api/safety-review-requests`

#### Trial

| Field | Description |
| --- | --- |
| `consent` |  |
| `email` |  |
| `expected_render` |  |
| `name` |  |
| `use_case` |  |

Operations: Create.

API path: `/api/trials`

#### Upgrade

| Field | Description |
| --- | --- |
| `consent` |  |
| `note` |  |
| `notice` |  |
| `request` |  |
| `requested_plan` |  |

Operations: Create.

API path: `/v1/upgrade-requests`

#### Usage

| Field | Description |
| --- | --- |
| `customer` |  |
| `link` |  |
| `upgrade_request` |  |
| `usage` |  |

Operations: Load.

API path: `/v1/usage`



## Entities


### Health

Create an instance: `health = client.Health()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |
| `render` | `dict` |  |
| `service` | `str` |  |

#### Example: Load

```python
health = client.Health().load()
```


### MonitoringRequest

Create an instance: `monitoring_request = client.MonitoringRequest()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `change_context` | `str` |  |
| `email` | `str` |  |
| `monitoring_goal` | `str` |  |
| `notice` | `str` |  |
| `page_count` | `str` |  |
| `page_url` | `str` |  |
| `public_page_authority` | `bool` |  |
| `reply_consent` | `bool` |  |
| `request` | `dict` |  |
| `safety_acknowledged` | `bool` |  |
| `start_boundary_acknowledged` | `bool` |  |

#### Example: Create

```python
monitoring_request = client.MonitoringRequest().create({
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


### PilotRequest

Create an instance: `pilot_request = client.PilotRequest()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acceptance_sample` | `str` |  |
| `call_site` | `str` |  |
| `current_contract` | `str` |  |
| `email` | `str` |  |
| `expected_render` | `str` |  |
| `language` | `str` |  |
| `notice` | `str` |  |
| `provider` | `str` |  |
| `reply_consent` | `bool` |  |
| `repository_authority` | `bool` |  |
| `repository_url` | `str` |  |
| `request` | `dict` |  |
| `required_behavior` | `str` |  |
| `safety_acknowledged` | `bool` |  |
| `start_boundary_acknowledged` | `bool` |  |

#### Example: Create

```python
pilot_request = client.PilotRequest().create({
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


### Render

Create an instance: `render = client.Render()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `block_ad` | `bool` |  |
| `block_chat` | `bool` |  |
| `block_tracker` | `bool` |  |
| `dark_mode` | `bool` |  |
| `delay` | `int` |  |
| `format` | `str` |  |
| `full_page` | `bool` |  |
| `height` | `int` |  |
| `hide_cookie_banner` | `bool` |  |
| `hide_popup` | `bool` |  |
| `kind` | `str` |  |
| `landscape` | `bool` |  |
| `paper` | `str` |  |
| `quality` | `int` |  |
| `reduced_motion` | `bool` |  |
| `scale` | `int` |  |
| `scroll_page` | `bool` |  |
| `timeout` | `int` |  |
| `url` | `str` |  |
| `wait_until` | `str` |  |
| `width` | `int` |  |

#### Example: Create

```python
render = client.Render().create({
    "url": "example_url",  # str
})
```


### Rendering

Create an instance: `rendering = client.Rendering()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
rendering = client.Rendering().load()
```


### SafetyReviewRequest

Create an instance: `safety_review_request = client.SafetyReviewRequest()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_control` | `str` |  |
| `desired_outcome` | `str` |  |
| `email` | `str` |  |
| `language` | `str` |  |
| `notice` | `str` |  |
| `primary_concern` | `str` |  |
| `reply_consent` | `bool` |  |
| `repository_authority` | `bool` |  |
| `repository_url` | `str` |  |
| `request` | `dict` |  |
| `route_path` | `str` |  |
| `runtime` | `str` |  |
| `safety_acknowledged` | `bool` |  |
| `start_boundary_acknowledged` | `bool` |  |
| `test_evidence` | `str` |  |

#### Example: Create

```python
safety_review_request = client.SafetyReviewRequest().create({
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


### Trial

Create an instance: `trial = client.Trial()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `consent` | `bool` |  |
| `email` | `str` |  |
| `expected_render` | `str` |  |
| `name` | `str` |  |
| `use_case` | `str` |  |

#### Example: Create

```python
trial = client.Trial().create({
    "email": "example_email",  # str
})
```


### Upgrade

Create an instance: `upgrade = client.Upgrade()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `consent` | `bool` |  |
| `note` | `str` |  |
| `notice` | `str` |  |
| `request` | `dict` |  |
| `requested_plan` | `str` |  |

#### Example: Create

```python
upgrade = client.Upgrade().create({
    "consent": True,  # bool
    "notice": "example_notice",  # str
    "request": {},  # dict
    "requested_plan": "example_requested_plan",  # str
})
```


### Usage

Create an instance: `usage = client.Usage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customer` | `dict` |  |
| `link` | `dict` |  |
| `upgrade_request` | `Any` |  |
| `usage` | `dict` |  |

#### Example: Load

```python
usage = client.Usage().load()
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── latchshotscreenshot_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`latchshotscreenshot_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
health = client.Health()
health.load()

# health.data_get() now returns the health data from the last load
# health.match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
