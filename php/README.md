# LatchshotScreenshot PHP SDK



The PHP SDK for the LatchshotScreenshot API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Health()` — with named operations (`load`/`create`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/latchshot-screenshot-sdk/releases](https://github.com/voxgig-sdk/latchshot-screenshot-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'latchshotscreenshot_sdk.php';

$client = new LatchshotScreenshotSDK([
    "apikey" => getenv("LATCHSHOT_SCREENSHOT_APIKEY"),
]);
```

### 3. Load a health

```php
try {
    // load() returns the bare Health record (throws on error).
    $health = $client->Health()->load();
    print_r($health);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $health = $client->Health()->load();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required:

```php
$client = LatchshotScreenshotSDK::test();

// Entity ops return the bare mock record (throws on error).
$health = $client->Health()->load();
print_r($health);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new LatchshotScreenshotSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
LATCHSHOT_SCREENSHOT_TEST_LIVE=TRUE
LATCHSHOT_SCREENSHOT_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### LatchshotScreenshotSDK

```php
require_once 'latchshotscreenshot_sdk.php';
$client = new LatchshotScreenshotSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = LatchshotScreenshotSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### LatchshotScreenshotSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Health` | `($data): HealthEntity` | Create a Health entity instance. |
| `MonitoringRequest` | `($data): MonitoringRequestEntity` | Create a MonitoringRequest entity instance. |
| `PilotRequest` | `($data): PilotRequestEntity` | Create a PilotRequest entity instance. |
| `Render` | `($data): RenderEntity` | Create a Render entity instance. |
| `Rendering` | `($data): RenderingEntity` | Create a Rendering entity instance. |
| `SafetyReviewRequest` | `($data): SafetyReviewRequestEntity` | Create a SafetyReviewRequest entity instance. |
| `Trial` | `($data): TrialEntity` | Create a Trial entity instance. |
| `Upgrade` | `($data): UpgradeEntity` | Create an Upgrade entity instance. |
| `Usage` | `($data): UsageEntity` | Create an Usage entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the bare result data (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$health = $client->Health();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `bool` |  |
| `render` | `array` |  |
| `service` | `string` |  |

#### Example: Load

```php
// load() returns the bare Health record (throws on error).
$health = $client->Health()->load();
```


### MonitoringRequest

Create an instance: `$monitoring_request = $client->MonitoringRequest();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `change_context` | `string` |  |
| `email` | `string` |  |
| `monitoring_goal` | `string` |  |
| `notice` | `string` |  |
| `page_count` | `string` |  |
| `page_url` | `string` |  |
| `public_page_authority` | `bool` |  |
| `reply_consent` | `bool` |  |
| `request` | `array` |  |
| `safety_acknowledged` | `bool` |  |
| `start_boundary_acknowledged` | `bool` |  |

#### Example: Create

```php
$monitoring_request = $client->MonitoringRequest()->create([
    "email" => null, // string
    "monitoring_goal" => null, // string
    "notice" => null, // string
    "page_count" => null, // string
    "page_url" => null, // string
    "public_page_authority" => null, // bool
    "reply_consent" => null, // bool
    "request" => null, // array
    "safety_acknowledged" => null, // bool
    "start_boundary_acknowledged" => null, // bool
]);
```


### PilotRequest

Create an instance: `$pilot_request = $client->PilotRequest();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acceptance_sample` | `string` |  |
| `call_site` | `string` |  |
| `current_contract` | `string` |  |
| `email` | `string` |  |
| `expected_render` | `string` |  |
| `language` | `string` |  |
| `notice` | `string` |  |
| `provider` | `string` |  |
| `reply_consent` | `bool` |  |
| `repository_authority` | `bool` |  |
| `repository_url` | `string` |  |
| `request` | `array` |  |
| `required_behavior` | `string` |  |
| `safety_acknowledged` | `bool` |  |
| `start_boundary_acknowledged` | `bool` |  |

#### Example: Create

```php
$pilot_request = $client->PilotRequest()->create([
    "email" => null, // string
    "notice" => null, // string
    "reply_consent" => null, // bool
    "repository_authority" => null, // bool
    "repository_url" => null, // string
    "request" => null, // array
    "safety_acknowledged" => null, // bool
    "start_boundary_acknowledged" => null, // bool
]);
```


### Render

Create an instance: `$render = $client->Render();`

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
| `format` | `string` |  |
| `full_page` | `bool` |  |
| `height` | `int` |  |
| `hide_cookie_banner` | `bool` |  |
| `hide_popup` | `bool` |  |
| `kind` | `string` |  |
| `landscape` | `bool` |  |
| `paper` | `string` |  |
| `quality` | `int` |  |
| `reduced_motion` | `bool` |  |
| `scale` | `int` |  |
| `scroll_page` | `bool` |  |
| `timeout` | `int` |  |
| `url` | `string` |  |
| `wait_until` | `string` |  |
| `width` | `int` |  |

#### Example: Create

```php
$render = $client->Render()->create([
    "url" => null, // string
]);
```


### Rendering

Create an instance: `$rendering = $client->Rendering();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare Rendering record (throws on error).
$rendering = $client->Rendering()->load();
```


### SafetyReviewRequest

Create an instance: `$safety_review_request = $client->SafetyReviewRequest();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `current_control` | `string` |  |
| `desired_outcome` | `string` |  |
| `email` | `string` |  |
| `language` | `string` |  |
| `notice` | `string` |  |
| `primary_concern` | `string` |  |
| `reply_consent` | `bool` |  |
| `repository_authority` | `bool` |  |
| `repository_url` | `string` |  |
| `request` | `array` |  |
| `route_path` | `string` |  |
| `runtime` | `string` |  |
| `safety_acknowledged` | `bool` |  |
| `start_boundary_acknowledged` | `bool` |  |
| `test_evidence` | `string` |  |

#### Example: Create

```php
$safety_review_request = $client->SafetyReviewRequest()->create([
    "current_control" => null, // string
    "desired_outcome" => null, // string
    "email" => null, // string
    "language" => null, // string
    "notice" => null, // string
    "primary_concern" => null, // string
    "reply_consent" => null, // bool
    "repository_authority" => null, // bool
    "repository_url" => null, // string
    "request" => null, // array
    "route_path" => null, // string
    "runtime" => null, // string
    "safety_acknowledged" => null, // bool
    "start_boundary_acknowledged" => null, // bool
    "test_evidence" => null, // string
]);
```


### Trial

Create an instance: `$trial = $client->Trial();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `consent` | `bool` |  |
| `email` | `string` |  |
| `expected_render` | `string` |  |
| `name` | `string` |  |
| `use_case` | `string` |  |

#### Example: Create

```php
$trial = $client->Trial()->create([
    "email" => null, // string
]);
```


### Upgrade

Create an instance: `$upgrade = $client->Upgrade();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `consent` | `bool` |  |
| `note` | `string` |  |
| `notice` | `string` |  |
| `request` | `array` |  |
| `requested_plan` | `string` |  |

#### Example: Create

```php
$upgrade = $client->Upgrade()->create([
    "consent" => null, // bool
    "notice" => null, // string
    "request" => null, // array
    "requested_plan" => null, // string
]);
```


### Usage

Create an instance: `$usage = $client->Usage();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customer` | `array` |  |
| `link` | `array` |  |
| `upgrade_request` | `mixed` |  |
| `usage` | `array` |  |

#### Example: Load

```php
// load() returns the bare Usage record (throws on error).
$usage = $client->Usage()->load();
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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── latchshotscreenshot_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`latchshotscreenshot_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$health = $client->Health();
$health->load();

// $health->data_get() now returns the health data from the last load
// $health->match_get() returns the last match criteria
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
