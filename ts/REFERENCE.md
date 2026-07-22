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
| `ok` | `boolean` | Yes |  |
| `render` | `Record<string, any>` | Yes |  |
| `service` | `string` | Yes |  |

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
| `change_context` | `string` | No |  |
| `email` | `string` | Yes |  |
| `monitoring_goal` | `string` | Yes |  |
| `notice` | `string` | Yes |  |
| `page_count` | `string` | Yes |  |
| `page_url` | `string` | Yes |  |
| `public_page_authority` | `boolean` | Yes |  |
| `reply_consent` | `boolean` | Yes |  |
| `request` | `Record<string, any>` | Yes |  |
| `safety_acknowledged` | `boolean` | Yes |  |
| `start_boundary_acknowledged` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.MonitoringRequest().create({
  email: 'example_email',
  monitoring_goal: 'example_monitoring_goal',
  notice: 'example_notice',
  page_count: 'example_page_count',
  page_url: 'example_page_url',
  public_page_authority: true,
  reply_consent: true,
  request: {},
  safety_acknowledged: true,
  start_boundary_acknowledged: true,
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
| `acceptance_sample` | `string` | No |  |
| `call_site` | `string` | No |  |
| `current_contract` | `string` | No |  |
| `email` | `string` | Yes |  |
| `expected_render` | `string` | No |  |
| `language` | `string` | No |  |
| `notice` | `string` | Yes |  |
| `provider` | `string` | No |  |
| `reply_consent` | `boolean` | Yes |  |
| `repository_authority` | `boolean` | Yes |  |
| `repository_url` | `string` | Yes |  |
| `request` | `Record<string, any>` | Yes |  |
| `required_behavior` | `string` | No |  |
| `safety_acknowledged` | `boolean` | Yes |  |
| `start_boundary_acknowledged` | `boolean` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PilotRequest().create({
  email: 'example_email',
  notice: 'example_notice',
  reply_consent: true,
  repository_authority: true,
  repository_url: 'example_repository_url',
  request: {},
  safety_acknowledged: true,
  start_boundary_acknowledged: true,
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
| `block_ad` | `boolean` | No |  |
| `block_chat` | `boolean` | No |  |
| `block_tracker` | `boolean` | No |  |
| `dark_mode` | `boolean` | No |  |
| `delay` | `number` | No |  |
| `format` | `string` | No |  |
| `full_page` | `boolean` | No |  |
| `height` | `number` | No |  |
| `hide_cookie_banner` | `boolean` | No |  |
| `hide_popup` | `boolean` | No |  |
| `kind` | `string` | No |  |
| `landscape` | `boolean` | No |  |
| `paper` | `string` | No |  |
| `quality` | `number` | No |  |
| `reduced_motion` | `boolean` | No |  |
| `scale` | `number` | No |  |
| `scroll_page` | `boolean` | No |  |
| `timeout` | `number` | No |  |
| `url` | `string` | Yes |  |
| `wait_until` | `string` | No |  |
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
| `current_control` | `string` | Yes |  |
| `desired_outcome` | `string` | Yes |  |
| `email` | `string` | Yes |  |
| `language` | `string` | Yes |  |
| `notice` | `string` | Yes |  |
| `primary_concern` | `string` | Yes |  |
| `reply_consent` | `boolean` | Yes |  |
| `repository_authority` | `boolean` | Yes |  |
| `repository_url` | `string` | Yes |  |
| `request` | `Record<string, any>` | Yes |  |
| `route_path` | `string` | Yes |  |
| `runtime` | `string` | Yes |  |
| `safety_acknowledged` | `boolean` | Yes |  |
| `start_boundary_acknowledged` | `boolean` | Yes |  |
| `test_evidence` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SafetyReviewRequest().create({
  current_control: 'example_current_control',
  desired_outcome: 'example_desired_outcome',
  email: 'example_email',
  language: 'example_language',
  notice: 'example_notice',
  primary_concern: 'example_primary_concern',
  reply_consent: true,
  repository_authority: true,
  repository_url: 'example_repository_url',
  request: {},
  route_path: 'example_route_path',
  runtime: 'example_runtime',
  safety_acknowledged: true,
  start_boundary_acknowledged: true,
  test_evidence: 'example_test_evidence',
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
| `expected_render` | `string` | No |  |
| `name` | `string` | No |  |
| `use_case` | `string` | No |  |

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
| `note` | `string` | No |  |
| `notice` | `string` | Yes |  |
| `request` | `Record<string, any>` | Yes |  |
| `requested_plan` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Upgrade().create({
  consent: true,
  notice: 'example_notice',
  request: {},
  requested_plan: 'example_requested_plan',
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
| `link` | `Record<string, any>` | Yes |  |
| `upgrade_request` | `any` | Yes |  |
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

