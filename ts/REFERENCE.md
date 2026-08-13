# LatchshotScreenshot TypeScript SDK Reference

Complete API reference for the LatchshotScreenshot TypeScript SDK.


## LatchshotScreenshotSDK

### Constructor

```ts
new LatchshotScreenshotSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `LatchshotScreenshotSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = LatchshotScreenshotSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `LatchshotScreenshotSDK` instance in test mode.


### Instance Methods

#### `Health(data?: object)`

Create a new `Health` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `HealthEntity` instance.

#### `MonitoringRequest(data?: object)`

Create a new `MonitoringRequest` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MonitoringRequestEntity` instance.

#### `PilotRequest(data?: object)`

Create a new `PilotRequest` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PilotRequestEntity` instance.

#### `Render(data?: object)`

Create a new `Render` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RenderEntity` instance.

#### `Rendering(data?: object)`

Create a new `Rendering` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RenderingEntity` instance.

#### `SafetyReviewRequest(data?: object)`

Create a new `SafetyReviewRequest` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SafetyReviewRequestEntity` instance.

#### `Trial(data?: object)`

Create a new `Trial` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TrialEntity` instance.

#### `Upgrade(data?: object)`

Create a new `Upgrade` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpgradeEntity` instance.

#### `Usage(data?: object)`

Create a new `Usage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UsageEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `LatchshotScreenshotSDK.test()`.

**Returns:** `LatchshotScreenshotSDK` instance in test mode.


---

## HealthEntity

```ts
const health = client.Health()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `number` | Yes |  |
| `concurrency` | `number` | Yes |  |
| `pending` | `number` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Health().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `HealthEntity` instance with the same client and
options.

#### `client()`

Return the parent `LatchshotScreenshotSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MonitoringRequestEntity

```ts
const monitoring_request = client.MonitoringRequest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `changeContext` | `string` | No |  |
| `createdAt` | `string` | Yes |  |
| `email` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `monitoringGoal` | `string` | Yes |  |
| `pageCount` | `string` | Yes |  |
| `pageUrl` | `string` | Yes |  |
| `publicPageAuthority` | `boolean` | Yes |  |
| `replyConsent` | `boolean` | Yes |  |
| `safetyAcknowledged` | `boolean` | Yes |  |
| `startBoundaryAcknowledged` | `boolean` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.MonitoringRequest().create({
  createdAt: 'example_createdAt',
  email: 'example_email',
  id: 1,
  monitoringGoal: 'example_monitoringGoal',
  pageCount: 'example_pageCount',
  pageUrl: 'example_pageUrl',
  publicPageAuthority: true,
  replyConsent: true,
  safetyAcknowledged: true,
  startBoundaryAcknowledged: true,
  status: 'example_status',
  updatedAt: 'example_updatedAt',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MonitoringRequestEntity` instance with the same client and
options.

#### `client()`

Return the parent `LatchshotScreenshotSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PilotRequestEntity

```ts
const pilot_request = client.PilotRequest()
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
| `id` | `number` | Yes |  |
| `language` | `string` | No |  |
| `provider` | `string` | No |  |
| `replyConsent` | `boolean` | Yes |  |
| `repositoryAuthority` | `boolean` | Yes |  |
| `repositoryUrl` | `string` | Yes |  |
| `requiredBehavior` | `string` | No |  |
| `safetyAcknowledged` | `boolean` | Yes |  |
| `startBoundaryAcknowledged` | `boolean` | Yes |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PilotRequest().create({
  callSite: 'example_callSite',
  createdAt: 'example_createdAt',
  email: 'example_email',
  id: 1,
  replyConsent: true,
  repositoryAuthority: true,
  repositoryUrl: 'example_repositoryUrl',
  safetyAcknowledged: true,
  startBoundaryAcknowledged: true,
  status: 'example_status',
  updatedAt: 'example_updatedAt',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PilotRequestEntity` instance with the same client and
options.

#### `client()`

Return the parent `LatchshotScreenshotSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RenderEntity

```ts
const render = client.Render()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blockAds` | `boolean` | No |  |
| `blockChats` | `boolean` | No |  |
| `blockTrackers` | `boolean` | No |  |
| `darkMode` | `boolean` | No |  |
| `delay` | `number` | No |  |
| `format` | `string` | No |  |
| `fullPage` | `boolean` | No |  |
| `height` | `number` | No |  |
| `hideCookieBanners` | `boolean` | No |  |
| `hidePopups` | `boolean` | No |  |
| `kind` | `string` | No |  |
| `landscape` | `boolean` | No |  |
| `paper` | `string` | No |  |
| `quality` | `number` | No |  |
| `reducedMotion` | `boolean` | No |  |
| `scale` | `number` | No |  |
| `scrollPage` | `boolean` | No |  |
| `timeout` | `number` | No |  |
| `url` | `string` | Yes |  |
| `waitUntil` | `string` | No |  |
| `width` | `number` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Render().create({
  url: 'example_url',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RenderEntity` instance with the same client and
options.

#### `client()`

Return the parent `LatchshotScreenshotSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RenderingEntity

```ts
const rendering = client.Rendering()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Rendering().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RenderingEntity` instance with the same client and
options.

#### `client()`

Return the parent `LatchshotScreenshotSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SafetyReviewRequestEntity

```ts
const safety_review_request = client.SafetyReviewRequest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `createdAt` | `string` | Yes |  |
| `currentControls` | `string` | Yes |  |
| `desiredOutcome` | `string` | Yes |  |
| `email` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `language` | `string` | Yes |  |
| `primaryConcern` | `string` | Yes |  |
| `replyConsent` | `boolean` | Yes |  |
| `repositoryAuthority` | `boolean` | Yes |  |
| `repositoryUrl` | `string` | Yes |  |
| `routePath` | `string` | Yes |  |
| `runtime` | `string` | Yes |  |
| `safetyAcknowledged` | `boolean` | Yes |  |
| `startBoundaryAcknowledged` | `boolean` | Yes |  |
| `status` | `string` | Yes |  |
| `testEvidence` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SafetyReviewRequest().create({
  createdAt: 'example_createdAt',
  currentControls: 'example_currentControls',
  desiredOutcome: 'example_desiredOutcome',
  email: 'example_email',
  id: 1,
  language: 'example_language',
  primaryConcern: 'example_primaryConcern',
  replyConsent: true,
  repositoryAuthority: true,
  repositoryUrl: 'example_repositoryUrl',
  routePath: 'example_routePath',
  runtime: 'example_runtime',
  safetyAcknowledged: true,
  startBoundaryAcknowledged: true,
  status: 'example_status',
  testEvidence: 'example_testEvidence',
  updatedAt: 'example_updatedAt',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SafetyReviewRequestEntity` instance with the same client and
options.

#### `client()`

Return the parent `LatchshotScreenshotSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TrialEntity

```ts
const trial = client.Trial()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `consent` | `boolean` | No |  |
| `email` | `string` | Yes |  |
| `expectedRenders` | `string` | No |  |
| `name` | `string` | No |  |
| `useCase` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Trial().create({
  email: 'example_email',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TrialEntity` instance with the same client and
options.

#### `client()`

Return the parent `LatchshotScreenshotSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpgradeEntity

```ts
const upgrade = client.Upgrade()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `consent` | `boolean` | Yes |  |
| `createdAt` | `string` | Yes |  |
| `currentPlan` | `string` | Yes |  |
| `id` | `number` | Yes |  |
| `note` | `string` | No |  |
| `requestedPlan` | `string` | Yes |  |
| `status` | `string` | Yes |  |
| `updatedAt` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Upgrade().create({
  consent: true,
  createdAt: 'example_createdAt',
  currentPlan: 'example_currentPlan',
  id: 1,
  requestedPlan: 'example_requestedPlan',
  status: 'example_status',
  updatedAt: 'example_updatedAt',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpgradeEntity` instance with the same client and
options.

#### `client()`

Return the parent `LatchshotScreenshotSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UsageEntity

```ts
const usage = client.Usage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `customer` | `Record<string, any>` | Yes |  |
| `links` | `Record<string, any>` | Yes |  |
| `upgradeRequest` | `any` | Yes |  |
| `usage` | `Record<string, any>` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Usage().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UsageEntity` instance with the same client and
options.

#### `client()`

Return the parent `LatchshotScreenshotSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new LatchshotScreenshotSDK({
  feature: {
    test: { active: true },
  }
})
```

