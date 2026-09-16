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
| `changeContext` | `string` | No | Optional non-sensitive description of what the weekly owner-written note should call out. |
| `createdAt` | `string` | Yes |  |
| `email` | `string` | Yes | Address the owner may use only to reply about this monitoring request. |
| `id` | `int` | Yes |  |
| `monitoringGoal` | `string` | Yes |  |
| `pageCount` | `string` | Yes |  |
| `pageUrl` | `string` | Yes | One exact public HTTP or HTTPS example page on port 80 or 443, without credentials, query data, or a fragment. |
| `publicPageAuthority` | `bool` | Yes | Confirms authority to request recurring captures of every proposed public page. |
| `replyConsent` | `bool` | Yes | Allows the owner to email only about this monitoring-pilot request. |
| `safetyAcknowledged` | `bool` | Yes | Confirms removal of credentials, query secrets, customer data, signed links, and sensitive information. |
| `startBoundaryAcknowledged` | `bool` | Yes | Confirms that scope, delivery, retention, payment, and monitoring start require separate owner confirmation. |
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
| `acceptanceSample` | `string` | No | Optional safe description of one maintainer-approved public page and required artifact shape. |
| `callSite` | `string` | Yes | Optional relative repository file path for the existing backend provider call. |
| `createdAt` | `string` | Yes |  |
| `currentContract` | `string` | No | Optional non-secret current request, synchronous output, and application-owned byte handling. |
| `email` | `string` | Yes | Address the owner may use only to reply about this pilot request. |
| `expectedRenders` | `string` | No |  |
| `id` | `int` | Yes |  |
| `language` | `string` | No |  |
| `provider` | `string` | No |  |
| `replyConsent` | `bool` | Yes | Allows the owner to email only about this pilot request. |
| `repositoryAuthority` | `bool` | Yes | Confirms authority to review, merge, deploy, and roll back the public repository change. |
| `repositoryUrl` | `string` | Yes | Exact public GitHub repository under the requester's control. |
| `requiredBehavior` | `string` | No | Optional provider behavior that must be preserved. |
| `safetyAcknowledged` | `bool` | Yes | Confirms removal of credentials, private or signed URLs, customer data, payment details, and sensitive artifacts. |
| `startBoundaryAcknowledged` | `bool` | Yes | Confirms that no payment or work starts before separate owner confirmation. |
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
| `blockAds` | `bool` | No | Best-effort blocking of requests to known third-party ad hosts. |
| `blockChats` | `bool` | No | Best-effort blocking and hiding of known third-party chat widgets. |
| `blockTrackers` | `bool` | No | Best-effort blocking of requests to known third-party analytics and tracker hosts. |
| `darkMode` | `bool` | No | Emulate a dark color-scheme preference. |
| `delay` | `int` | No | Additional bounded wait in milliseconds after the lifecycle event. |
| `format` | `string` | No | Exact artifact format. |
| `fullPage` | `bool` | No | Capture the bounded full document height for screenshots. |
| `height` | `int` | No | Viewport height in CSS pixels. |
| `hideCookieBanners` | `bool` | No | Hide common cookie-consent overlays after loading. |
| `hidePopups` | `bool` | No | Hide common newsletter, signup, and discount popups without clicking, submitting, or setting state. |
| `kind` | `string` | No | Artifact family to return. |
| `landscape` | `bool` | No | Use landscape orientation for PDF rendering. |
| `paper` | `string` | No | Paper size used for PDF rendering. |
| `quality` | `int` | No | JPEG encoding quality. |
| `reducedMotion` | `bool` | No | Emulate reduced motion to improve capture stability. |
| `scale` | `int` | No | Device scale factor used for image capture. |
| `scrollPage` | `bool` | No | Deterministically scroll before capture to activate lazy content. |
| `timeout` | `int` | No | Navigation timeout in milliseconds. |
| `url` | `string` | Yes | Public HTTP or HTTPS page URL. |
| `waitUntil` | `string` | No | Browser lifecycle event awaited before the optional delay. |
| `width` | `int` | No | Viewport width in CSS pixels. |

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
$result = $client->Rendering()->load(["url" => "url"]);
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
| `currentControls` | `string` | Yes | Non-secret current URL, network, browser, resource, and caller controls. |
| `desiredOutcome` | `string` | Yes | Requested risk report, focused patch, regression tests, and handoff outcome. |
| `email` | `string` | Yes | Address the owner may use only to reply about this safety-review request. |
| `id` | `int` | Yes |  |
| `language` | `string` | Yes |  |
| `primaryConcern` | `string` | Yes |  |
| `replyConsent` | `bool` | Yes | Allows the owner to email only about this safety-review request. |
| `repositoryAuthority` | `bool` | Yes | Confirms authority to review, merge, deploy, and roll back the public repository change. |
| `repositoryUrl` | `string` | Yes | Exact public GitHub repository under the requester's control. |
| `routePath` | `string` | Yes | One relative repository file path for the existing screenshot endpoint or worker. |
| `runtime` | `string` | Yes |  |
| `safetyAcknowledged` | `bool` | Yes | Confirms removal of credentials, private or signed URLs, customer data, production details, payment information, and sensitive artifacts. |
| `startBoundaryAcknowledged` | `bool` | Yes | Confirms that no payment or work starts before separate owner confirmation. |
| `status` | `string` | Yes |  |
| `testEvidence` | `string` | Yes | Non-sensitive description of current happy-path and rejection tests, or none. |
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
| `consent` | `bool` | No | Optional permission for the owner to send product-fit guidance. |
| `email` | `string` | Yes | Email used to enforce one lifetime Free-plan key. |
| `expectedRenders` | `string` | No |  |
| `name` | `string` | No | Optional display name for owner review. |
| `useCase` | `string` | No | Optional public-page capture use case. |

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
| `links` | `array` | Yes | Stable self-serve continuation links. |
| `upgradeRequest` | `mixed` | Yes | Latest paid-plan request attached to this key, or null when none exists. |
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
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```php
$client = new LatchshotScreenshotSDK([
  "feature" => [
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
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

Client-side rate limiting via a token bucket.

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

Automatic retry of transient failures with exponential backoff.

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

In-memory mock transport for testing without a live server.

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

Per-request timeout with transport abort.

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

