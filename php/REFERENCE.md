# LatchshotScreenshot PHP SDK Reference

Complete API reference for the LatchshotScreenshot PHP SDK.


## LatchshotScreenshotSDK

### Constructor

```php
require_once __DIR__ . '/latchshotscreenshot_sdk.php';

$client = new LatchshotScreenshotSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `LatchshotScreenshotSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = LatchshotScreenshotSDK::test();
```


### Instance Methods

#### `Health($data = null)`

Create a new `HealthEntity` instance. Pass `null` for no initial data.

#### `MonitoringRequest($data = null)`

Create a new `MonitoringRequestEntity` instance. Pass `null` for no initial data.

#### `PilotRequest($data = null)`

Create a new `PilotRequestEntity` instance. Pass `null` for no initial data.

#### `Render($data = null)`

Create a new `RenderEntity` instance. Pass `null` for no initial data.

#### `Rendering($data = null)`

Create a new `RenderingEntity` instance. Pass `null` for no initial data.

#### `SafetyReviewRequest($data = null)`

Create a new `SafetyReviewRequestEntity` instance. Pass `null` for no initial data.

#### `Trial($data = null)`

Create a new `TrialEntity` instance. Pass `null` for no initial data.

#### `Upgrade($data = null)`

Create a new `UpgradeEntity` instance. Pass `null` for no initial data.

#### `Usage($data = null)`

Create a new `UsageEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): LatchshotScreenshotUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## HealthEntity

```php
$health = $client->Health();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `int` | Yes |  |
| `concurrency` | `int` | Yes |  |
| `pending` | `int` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Health()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HealthEntity`

Create a new `HealthEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MonitoringRequestEntity

```php
$monitoring_request = $client->MonitoringRequest();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->MonitoringRequest()->create([
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

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MonitoringRequestEntity`

Create a new `MonitoringRequestEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PilotRequestEntity

```php
$pilot_request = $client->PilotRequest();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PilotRequest()->create([
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

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PilotRequestEntity`

Create a new `PilotRequestEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RenderEntity

```php
$render = $client->Render();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Render()->create([
  "url" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RenderEntity`

Create a new `RenderEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RenderingEntity

```php
$rendering = $client->Rendering();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Rendering()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RenderingEntity`

Create a new `RenderingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SafetyReviewRequestEntity

```php
$safety_review_request = $client->SafetyReviewRequest();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SafetyReviewRequest()->create([
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

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SafetyReviewRequestEntity`

Create a new `SafetyReviewRequestEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TrialEntity

```php
$trial = $client->Trial();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Trial()->create([
  "email" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TrialEntity`

Create a new `TrialEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UpgradeEntity

```php
$upgrade = $client->Upgrade();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Upgrade()->create([
  "consent" => null, // bool
  "createdAt" => null, // string
  "currentPlan" => null, // string
  "id" => null, // int
  "requestedPlan" => null, // string
  "status" => null, // string
  "updatedAt" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UpgradeEntity`

Create a new `UpgradeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UsageEntity

```php
$usage = $client->Usage();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer` | `array` | Yes |  |
| `links` | `array` | Yes |  |
| `upgradeRequest` | `mixed` | Yes |  |
| `usage` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Usage()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UsageEntity`

Create a new `UsageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new LatchshotScreenshotSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

