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
| `ok` | `bool` | Yes |  |
| `render` | `array` | Yes |  |
| `service` | `string` | Yes |  |

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
| `change_context` | `string` | No |  |
| `email` | `string` | Yes |  |
| `monitoring_goal` | `string` | Yes |  |
| `notice` | `string` | Yes |  |
| `page_count` | `string` | Yes |  |
| `page_url` | `string` | Yes |  |
| `public_page_authority` | `bool` | Yes |  |
| `reply_consent` | `bool` | Yes |  |
| `request` | `array` | Yes |  |
| `safety_acknowledged` | `bool` | Yes |  |
| `start_boundary_acknowledged` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->MonitoringRequest()->create([
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
| `acceptance_sample` | `string` | No |  |
| `call_site` | `string` | No |  |
| `current_contract` | `string` | No |  |
| `email` | `string` | Yes |  |
| `expected_render` | `string` | No |  |
| `language` | `string` | No |  |
| `notice` | `string` | Yes |  |
| `provider` | `string` | No |  |
| `reply_consent` | `bool` | Yes |  |
| `repository_authority` | `bool` | Yes |  |
| `repository_url` | `string` | Yes |  |
| `request` | `array` | Yes |  |
| `required_behavior` | `string` | No |  |
| `safety_acknowledged` | `bool` | Yes |  |
| `start_boundary_acknowledged` | `bool` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PilotRequest()->create([
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
| `block_ad` | `bool` | No |  |
| `block_chat` | `bool` | No |  |
| `block_tracker` | `bool` | No |  |
| `dark_mode` | `bool` | No |  |
| `delay` | `int` | No |  |
| `format` | `string` | No |  |
| `full_page` | `bool` | No |  |
| `height` | `int` | No |  |
| `hide_cookie_banner` | `bool` | No |  |
| `hide_popup` | `bool` | No |  |
| `kind` | `string` | No |  |
| `landscape` | `bool` | No |  |
| `paper` | `string` | No |  |
| `quality` | `int` | No |  |
| `reduced_motion` | `bool` | No |  |
| `scale` | `int` | No |  |
| `scroll_page` | `bool` | No |  |
| `timeout` | `int` | No |  |
| `url` | `string` | Yes |  |
| `wait_until` | `string` | No |  |
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
| `current_control` | `string` | Yes |  |
| `desired_outcome` | `string` | Yes |  |
| `email` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `notice` | `string` | Yes |  |
| `primary_concern` | `string` | Yes |  |
| `reply_consent` | `bool` | Yes |  |
| `repository_authority` | `bool` | Yes |  |
| `repository_url` | `string` | Yes |  |
| `request` | `array` | Yes |  |
| `route_path` | `string` | Yes |  |
| `runtime` | `string` | Yes |  |
| `safety_acknowledged` | `bool` | Yes |  |
| `start_boundary_acknowledged` | `bool` | Yes |  |
| `test_evidence` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SafetyReviewRequest()->create([
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
| `expected_render` | `string` | No |  |
| `name` | `string` | No |  |
| `use_case` | `string` | No |  |

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
| `note` | `string` | No |  |
| `notice` | `string` | Yes |  |
| `request` | `array` | Yes |  |
| `requested_plan` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Upgrade()->create([
  "consent" => null, // bool
  "notice" => null, // string
  "request" => null, // array
  "requested_plan" => null, // string
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
| `link` | `array` | Yes |  |
| `upgrade_request` | `mixed` | Yes |  |
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

