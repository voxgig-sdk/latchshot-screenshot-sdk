# LatchshotScreenshot TypeScript SDK



The TypeScript SDK for the LatchshotScreenshot API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Health()` — each with a small set of operations (`load`, `create`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/latchshot-screenshot-sdk/releases](https://github.com/voxgig-sdk/latchshot-screenshot-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { LatchshotScreenshotSDK } from '@voxgig-sdk/latchshot-screenshot'

const client = new LatchshotScreenshotSDK({
  apikey: process.env.LATCHSHOT_SCREENSHOT_APIKEY,
})
```

### 3. Load a health

`load()` returns the entity directly and throws on failure:

```ts
try {
  const health = await client.Health().load()
  console.log(health)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const health = await client.Health().load()
  console.log(health)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = LatchshotScreenshotSDK.test()

const health = await client.Health().load()
// health is a bare entity populated with mock response data
console.log(health)
```

You can also use the instance method:

```ts
const client = new LatchshotScreenshotSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Health()

// First call runs the operation and stores its result
await entity.load()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new LatchshotScreenshotSDK({
  apikey: '...',
  extend: [logger],
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
cd ts && npm test
```


## Reference

### LatchshotScreenshotSDK

#### Constructor

```ts
new LatchshotScreenshotSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Health(data?)` | `HealthEntity` | Create a Health entity instance. |
| `MonitoringRequest(data?)` | `MonitoringRequestEntity` | Create a MonitoringRequest entity instance. |
| `PilotRequest(data?)` | `PilotRequestEntity` | Create a PilotRequest entity instance. |
| `Render(data?)` | `RenderEntity` | Create a Render entity instance. |
| `Rendering(data?)` | `RenderingEntity` | Create a Rendering entity instance. |
| `SafetyReviewRequest(data?)` | `SafetyReviewRequestEntity` | Create a SafetyReviewRequest entity instance. |
| `Trial(data?)` | `TrialEntity` | Create a Trial entity instance. |
| `Upgrade(data?)` | `UpgradeEntity` | Create an Upgrade entity instance. |
| `Usage(data?)` | `UsageEntity` | Create an Usage entity instance. |
| `tester(testopts?, sdkopts?)` | `LatchshotScreenshotSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `LatchshotScreenshotSDK.test(testopts?, sdkopts?)` | `LatchshotScreenshotSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): LatchshotScreenshotSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` and `create` resolve to a single entity object.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### Health

| Field | Description |
| --- | --- |
| `ok` |  |
| `render` |  |
| `service` |  |

Operations: load.

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

Operations: create.

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

Operations: create.

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

Operations: create.

API path: `/v1/render`

#### Rendering

| Field | Description |
| --- | --- |

Operations: load.

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

Operations: create.

API path: `/api/safety-review-requests`

#### Trial

| Field | Description |
| --- | --- |
| `consent` |  |
| `email` |  |
| `expected_render` |  |
| `name` |  |
| `use_case` |  |

Operations: create.

API path: `/api/trials`

#### Upgrade

| Field | Description |
| --- | --- |
| `consent` |  |
| `note` |  |
| `notice` |  |
| `request` |  |
| `requested_plan` |  |

Operations: create.

API path: `/v1/upgrade-requests`

#### Usage

| Field | Description |
| --- | --- |
| `customer` |  |
| `link` |  |
| `upgrade_request` |  |
| `usage` |  |

Operations: load.

API path: `/v1/usage`



## Entities


### Health

Create an instance: `const health = client.Health()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ok` | `boolean` |  |
| `render` | `Record<string, any>` |  |
| `service` | `string` |  |

#### Example: Load

```ts
const health = await client.Health().load()
```


### MonitoringRequest

Create an instance: `const monitoring_request = client.MonitoringRequest()`

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
| `public_page_authority` | `boolean` |  |
| `reply_consent` | `boolean` |  |
| `request` | `Record<string, any>` |  |
| `safety_acknowledged` | `boolean` |  |
| `start_boundary_acknowledged` | `boolean` |  |

#### Example: Create

```ts
const monitoring_request = await client.MonitoringRequest().create({
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


### PilotRequest

Create an instance: `const pilot_request = client.PilotRequest()`

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
| `reply_consent` | `boolean` |  |
| `repository_authority` | `boolean` |  |
| `repository_url` | `string` |  |
| `request` | `Record<string, any>` |  |
| `required_behavior` | `string` |  |
| `safety_acknowledged` | `boolean` |  |
| `start_boundary_acknowledged` | `boolean` |  |

#### Example: Create

```ts
const pilot_request = await client.PilotRequest().create({
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


### Render

Create an instance: `const render = client.Render()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `block_ad` | `boolean` |  |
| `block_chat` | `boolean` |  |
| `block_tracker` | `boolean` |  |
| `dark_mode` | `boolean` |  |
| `delay` | `number` |  |
| `format` | `string` |  |
| `full_page` | `boolean` |  |
| `height` | `number` |  |
| `hide_cookie_banner` | `boolean` |  |
| `hide_popup` | `boolean` |  |
| `kind` | `string` |  |
| `landscape` | `boolean` |  |
| `paper` | `string` |  |
| `quality` | `number` |  |
| `reduced_motion` | `boolean` |  |
| `scale` | `number` |  |
| `scroll_page` | `boolean` |  |
| `timeout` | `number` |  |
| `url` | `string` |  |
| `wait_until` | `string` |  |
| `width` | `number` |  |

#### Example: Create

```ts
const render = await client.Render().create({
  url: 'example_url',
})
```


### Rendering

Create an instance: `const rendering = client.Rendering()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const rendering = await client.Rendering().load()
```


### SafetyReviewRequest

Create an instance: `const safety_review_request = client.SafetyReviewRequest()`

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
| `reply_consent` | `boolean` |  |
| `repository_authority` | `boolean` |  |
| `repository_url` | `string` |  |
| `request` | `Record<string, any>` |  |
| `route_path` | `string` |  |
| `runtime` | `string` |  |
| `safety_acknowledged` | `boolean` |  |
| `start_boundary_acknowledged` | `boolean` |  |
| `test_evidence` | `string` |  |

#### Example: Create

```ts
const safety_review_request = await client.SafetyReviewRequest().create({
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


### Trial

Create an instance: `const trial = client.Trial()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `consent` | `boolean` |  |
| `email` | `string` |  |
| `expected_render` | `string` |  |
| `name` | `string` |  |
| `use_case` | `string` |  |

#### Example: Create

```ts
const trial = await client.Trial().create({
  email: 'example_email',
})
```


### Upgrade

Create an instance: `const upgrade = client.Upgrade()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `consent` | `boolean` |  |
| `note` | `string` |  |
| `notice` | `string` |  |
| `request` | `Record<string, any>` |  |
| `requested_plan` | `string` |  |

#### Example: Create

```ts
const upgrade = await client.Upgrade().create({
  consent: true,
  notice: 'example_notice',
  request: {},
  requested_plan: 'example_requested_plan',
})
```


### Usage

Create an instance: `const usage = client.Usage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customer` | `Record<string, any>` |  |
| `link` | `Record<string, any>` |  |
| `upgrade_request` | `any` |  |
| `usage` | `Record<string, any>` |  |

#### Example: Load

```ts
const usage = await client.Usage().load()
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
latchshot-screenshot/
├── src/
│   ├── LatchshotScreenshotSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { LatchshotScreenshotSDK } from '@voxgig-sdk/latchshot-screenshot'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const health = client.Health()
await health.load()

// health.data() now returns the health data from the last `load`
// health.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
