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
    // load() returns the ENTITY — call data_get() for the Health record (throws on error).
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

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
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

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
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
| `active` |  |
| `concurrency` |  |
| `pending` |  |

Operations: Load.

API path: `/healthz`

#### MonitoringRequest

| Field | Description |
| --- | --- |
| `changeContext` |  |
| `createdAt` |  |
| `email` |  |
| `id` |  |
| `monitoringGoal` |  |
| `pageCount` |  |
| `pageUrl` |  |
| `publicPageAuthority` |  |
| `replyConsent` |  |
| `safetyAcknowledged` |  |
| `startBoundaryAcknowledged` |  |
| `status` |  |
| `updatedAt` |  |

Operations: Create.

API path: `/api/monitoring-requests`

#### PilotRequest

| Field | Description |
| --- | --- |
| `acceptanceSample` |  |
| `callSite` |  |
| `createdAt` |  |
| `currentContract` |  |
| `email` |  |
| `expectedRenders` |  |
| `id` |  |
| `language` |  |
| `provider` |  |
| `replyConsent` |  |
| `repositoryAuthority` |  |
| `repositoryUrl` |  |
| `requiredBehavior` |  |
| `safetyAcknowledged` |  |
| `startBoundaryAcknowledged` |  |
| `status` |  |
| `updatedAt` |  |

Operations: Create.

API path: `/api/pilot-requests`

#### Render

| Field | Description |
| --- | --- |
| `blockAds` |  |
| `blockChats` |  |
| `blockTrackers` |  |
| `darkMode` |  |
| `delay` |  |
| `format` |  |
| `fullPage` |  |
| `height` |  |
| `hideCookieBanners` |  |
| `hidePopups` |  |
| `kind` |  |
| `landscape` |  |
| `paper` |  |
| `quality` |  |
| `reducedMotion` |  |
| `scale` |  |
| `scrollPage` |  |
| `timeout` |  |
| `url` |  |
| `waitUntil` |  |
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
| `createdAt` |  |
| `currentControls` |  |
| `desiredOutcome` |  |
| `email` |  |
| `id` |  |
| `language` |  |
| `primaryConcern` |  |
| `replyConsent` |  |
| `repositoryAuthority` |  |
| `repositoryUrl` |  |
| `routePath` |  |
| `runtime` |  |
| `safetyAcknowledged` |  |
| `startBoundaryAcknowledged` |  |
| `status` |  |
| `testEvidence` |  |
| `updatedAt` |  |

Operations: Create.

API path: `/api/safety-review-requests`

#### Trial

| Field | Description |
| --- | --- |
| `consent` |  |
| `email` |  |
| `expectedRenders` |  |
| `name` |  |
| `useCase` |  |

Operations: Create.

API path: `/api/trials`

#### Upgrade

| Field | Description |
| --- | --- |
| `consent` |  |
| `createdAt` |  |
| `currentPlan` |  |
| `id` |  |
| `note` |  |
| `requestedPlan` |  |
| `status` |  |
| `updatedAt` |  |

Operations: Create.

API path: `/v1/upgrade-requests`

#### Usage

| Field | Description |
| --- | --- |
| `customer` |  |
| `links` |  |
| `upgradeRequest` |  |
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
| `active` | `int` |  |
| `concurrency` | `int` |  |
| `pending` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Health record (throws on error).
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
| `changeContext` | `string` |  |
| `createdAt` | `string` |  |
| `email` | `string` |  |
| `id` | `int` |  |
| `monitoringGoal` | `string` |  |
| `pageCount` | `string` |  |
| `pageUrl` | `string` |  |
| `publicPageAuthority` | `bool` |  |
| `replyConsent` | `bool` |  |
| `safetyAcknowledged` | `bool` |  |
| `startBoundaryAcknowledged` | `bool` |  |
| `status` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: Create

```php
$monitoring_request = $client->MonitoringRequest()->create([
    "createdAt" => null, // string
    "email" => null, // string
    "id" => null, // int
    "monitoringGoal" => null, // string
    "pageCount" => null, // string
    "pageUrl" => null, // string
    "publicPageAuthority" => null, // bool
    "replyConsent" => null, // bool
    "safetyAcknowledged" => null, // bool
    "startBoundaryAcknowledged" => null, // bool
    "status" => null, // string
    "updatedAt" => null, // string
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
| `acceptanceSample` | `string` |  |
| `callSite` | `string` |  |
| `createdAt` | `string` |  |
| `currentContract` | `string` |  |
| `email` | `string` |  |
| `expectedRenders` | `string` |  |
| `id` | `int` |  |
| `language` | `string` |  |
| `provider` | `string` |  |
| `replyConsent` | `bool` |  |
| `repositoryAuthority` | `bool` |  |
| `repositoryUrl` | `string` |  |
| `requiredBehavior` | `string` |  |
| `safetyAcknowledged` | `bool` |  |
| `startBoundaryAcknowledged` | `bool` |  |
| `status` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: Create

```php
$pilot_request = $client->PilotRequest()->create([
    "callSite" => null, // string
    "createdAt" => null, // string
    "email" => null, // string
    "id" => null, // int
    "replyConsent" => null, // bool
    "repositoryAuthority" => null, // bool
    "repositoryUrl" => null, // string
    "safetyAcknowledged" => null, // bool
    "startBoundaryAcknowledged" => null, // bool
    "status" => null, // string
    "updatedAt" => null, // string
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
| `blockAds` | `bool` |  |
| `blockChats` | `bool` |  |
| `blockTrackers` | `bool` |  |
| `darkMode` | `bool` |  |
| `delay` | `int` |  |
| `format` | `string` |  |
| `fullPage` | `bool` |  |
| `height` | `int` |  |
| `hideCookieBanners` | `bool` |  |
| `hidePopups` | `bool` |  |
| `kind` | `string` |  |
| `landscape` | `bool` |  |
| `paper` | `string` |  |
| `quality` | `int` |  |
| `reducedMotion` | `bool` |  |
| `scale` | `int` |  |
| `scrollPage` | `bool` |  |
| `timeout` | `int` |  |
| `url` | `string` |  |
| `waitUntil` | `string` |  |
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
// load() returns the ENTITY — call data_get() for the Rendering record (throws on error).
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
| `createdAt` | `string` |  |
| `currentControls` | `string` |  |
| `desiredOutcome` | `string` |  |
| `email` | `string` |  |
| `id` | `int` |  |
| `language` | `string` |  |
| `primaryConcern` | `string` |  |
| `replyConsent` | `bool` |  |
| `repositoryAuthority` | `bool` |  |
| `repositoryUrl` | `string` |  |
| `routePath` | `string` |  |
| `runtime` | `string` |  |
| `safetyAcknowledged` | `bool` |  |
| `startBoundaryAcknowledged` | `bool` |  |
| `status` | `string` |  |
| `testEvidence` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: Create

```php
$safety_review_request = $client->SafetyReviewRequest()->create([
    "createdAt" => null, // string
    "currentControls" => null, // string
    "desiredOutcome" => null, // string
    "email" => null, // string
    "id" => null, // int
    "language" => null, // string
    "primaryConcern" => null, // string
    "replyConsent" => null, // bool
    "repositoryAuthority" => null, // bool
    "repositoryUrl" => null, // string
    "routePath" => null, // string
    "runtime" => null, // string
    "safetyAcknowledged" => null, // bool
    "startBoundaryAcknowledged" => null, // bool
    "status" => null, // string
    "testEvidence" => null, // string
    "updatedAt" => null, // string
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
| `expectedRenders` | `string` |  |
| `name` | `string` |  |
| `useCase` | `string` |  |

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
| `createdAt` | `string` |  |
| `currentPlan` | `string` |  |
| `id` | `int` |  |
| `note` | `string` |  |
| `requestedPlan` | `string` |  |
| `status` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: Create

```php
$upgrade = $client->Upgrade()->create([
    "consent" => null, // bool
    "createdAt" => null, // string
    "currentPlan" => null, // string
    "id" => null, // int
    "requestedPlan" => null, // string
    "status" => null, // string
    "updatedAt" => null, // string
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
| `links` | `array` |  |
| `upgradeRequest` | `mixed` |  |
| `usage` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Usage record (throws on error).
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
