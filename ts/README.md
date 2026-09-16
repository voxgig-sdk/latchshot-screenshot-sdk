# LatchshotScreenshot TypeScript SDK



The TypeScript SDK for the LatchshotScreenshot API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Health()` — each with a small set of operations (`load`, `create`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
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
import { LatchshotScreenshotSDK } from '@voxgig-sdk/latchshot-screenshot-sdk'

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
// health is the entity, populated with mock response data
// — call health.data() for the record itself
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

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


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
| `active` |  |
| `concurrency` |  |
| `pending` |  |

Operations: load.

API path: `/healthz`

#### MonitoringRequest

| Field | Description |
| --- | --- |
| `changeContext` | Optional non-sensitive description of what the weekly owner-written note should call out. |
| `createdAt` |  |
| `email` | Address the owner may use only to reply about this monitoring request. |
| `id` |  |
| `monitoringGoal` |  |
| `pageCount` |  |
| `pageUrl` | One exact public HTTP or HTTPS example page on port 80 or 443, without credentials, query data, or a fragment. |
| `publicPageAuthority` | Confirms authority to request recurring captures of every proposed public page. |
| `replyConsent` | Allows the owner to email only about this monitoring-pilot request. |
| `safetyAcknowledged` | Confirms removal of credentials, query secrets, customer data, signed links, and sensitive information. |
| `startBoundaryAcknowledged` | Confirms that scope, delivery, retention, payment, and monitoring start require separate owner confirmation. |
| `status` |  |
| `updatedAt` |  |

Operations: create.

API path: `/api/monitoring-requests`

#### PilotRequest

| Field | Description |
| --- | --- |
| `acceptanceSample` | Optional safe description of one maintainer-approved public page and required artifact shape. |
| `callSite` | Optional relative repository file path for the existing backend provider call. |
| `createdAt` |  |
| `currentContract` | Optional non-secret current request, synchronous output, and application-owned byte handling. |
| `email` | Address the owner may use only to reply about this pilot request. |
| `expectedRenders` |  |
| `id` |  |
| `language` |  |
| `provider` |  |
| `replyConsent` | Allows the owner to email only about this pilot request. |
| `repositoryAuthority` | Confirms authority to review, merge, deploy, and roll back the public repository change. |
| `repositoryUrl` | Exact public GitHub repository under the requester's control. |
| `requiredBehavior` | Optional provider behavior that must be preserved. |
| `safetyAcknowledged` | Confirms removal of credentials, private or signed URLs, customer data, payment details, and sensitive artifacts. |
| `startBoundaryAcknowledged` | Confirms that no payment or work starts before separate owner confirmation. |
| `status` |  |
| `updatedAt` |  |

Operations: create.

API path: `/api/pilot-requests`

#### Render

| Field | Description |
| --- | --- |
| `blockAds` | Best-effort blocking of requests to known third-party ad hosts. |
| `blockChats` | Best-effort blocking and hiding of known third-party chat widgets. |
| `blockTrackers` | Best-effort blocking of requests to known third-party analytics and tracker hosts. |
| `darkMode` | Emulate a dark color-scheme preference. |
| `delay` | Additional bounded wait in milliseconds after the lifecycle event. |
| `format` | Exact artifact format. |
| `fullPage` | Capture the bounded full document height for screenshots. |
| `height` | Viewport height in CSS pixels. |
| `hideCookieBanners` | Hide common cookie-consent overlays after loading. |
| `hidePopups` | Hide common newsletter, signup, and discount popups without clicking, submitting, or setting state. |
| `kind` | Artifact family to return. |
| `landscape` | Use landscape orientation for PDF rendering. |
| `paper` | Paper size used for PDF rendering. |
| `quality` | JPEG encoding quality. |
| `reducedMotion` | Emulate reduced motion to improve capture stability. |
| `scale` | Device scale factor used for image capture. |
| `scrollPage` | Deterministically scroll before capture to activate lazy content. |
| `timeout` | Navigation timeout in milliseconds. |
| `url` | Public HTTP or HTTPS page URL. |
| `waitUntil` | Browser lifecycle event awaited before the optional delay. |
| `width` | Viewport width in CSS pixels. |

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
| `createdAt` |  |
| `currentControls` | Non-secret current URL, network, browser, resource, and caller controls. |
| `desiredOutcome` | Requested risk report, focused patch, regression tests, and handoff outcome. |
| `email` | Address the owner may use only to reply about this safety-review request. |
| `id` |  |
| `language` |  |
| `primaryConcern` |  |
| `replyConsent` | Allows the owner to email only about this safety-review request. |
| `repositoryAuthority` | Confirms authority to review, merge, deploy, and roll back the public repository change. |
| `repositoryUrl` | Exact public GitHub repository under the requester's control. |
| `routePath` | One relative repository file path for the existing screenshot endpoint or worker. |
| `runtime` |  |
| `safetyAcknowledged` | Confirms removal of credentials, private or signed URLs, customer data, production details, payment information, and sensitive artifacts. |
| `startBoundaryAcknowledged` | Confirms that no payment or work starts before separate owner confirmation. |
| `status` |  |
| `testEvidence` | Non-sensitive description of current happy-path and rejection tests, or none. |
| `updatedAt` |  |

Operations: create.

API path: `/api/safety-review-requests`

#### Trial

| Field | Description |
| --- | --- |
| `consent` | Optional permission for the owner to send product-fit guidance. |
| `email` | Email used to enforce one lifetime Free-plan key. |
| `expectedRenders` |  |
| `name` | Optional display name for owner review. |
| `useCase` | Optional public-page capture use case. |

Operations: create.

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

Operations: create.

API path: `/v1/upgrade-requests`

#### Usage

| Field | Description |
| --- | --- |
| `customer` |  |
| `links` | Stable self-serve continuation links. |
| `upgradeRequest` | Latest paid-plan request attached to this key, or null when none exists. |
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
| `active` | `number` |  |
| `concurrency` | `number` |  |
| `pending` | `number` |  |

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
| `changeContext` | `string` | Optional non-sensitive description of what the weekly owner-written note should call out. |
| `createdAt` | `string` |  |
| `email` | `string` | Address the owner may use only to reply about this monitoring request. |
| `id` | `number` |  |
| `monitoringGoal` | `string` |  |
| `pageCount` | `string` |  |
| `pageUrl` | `string` | One exact public HTTP or HTTPS example page on port 80 or 443, without credentials, query data, or a fragment. |
| `publicPageAuthority` | `boolean` | Confirms authority to request recurring captures of every proposed public page. |
| `replyConsent` | `boolean` | Allows the owner to email only about this monitoring-pilot request. |
| `safetyAcknowledged` | `boolean` | Confirms removal of credentials, query secrets, customer data, signed links, and sensitive information. |
| `startBoundaryAcknowledged` | `boolean` | Confirms that scope, delivery, retention, payment, and monitoring start require separate owner confirmation. |
| `status` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: Create

```ts
const monitoring_request = await client.MonitoringRequest().create({
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


### PilotRequest

Create an instance: `const pilot_request = client.PilotRequest()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acceptanceSample` | `string` | Optional safe description of one maintainer-approved public page and required artifact shape. |
| `callSite` | `string` | Optional relative repository file path for the existing backend provider call. |
| `createdAt` | `string` |  |
| `currentContract` | `string` | Optional non-secret current request, synchronous output, and application-owned byte handling. |
| `email` | `string` | Address the owner may use only to reply about this pilot request. |
| `expectedRenders` | `string` |  |
| `id` | `number` |  |
| `language` | `string` |  |
| `provider` | `string` |  |
| `replyConsent` | `boolean` | Allows the owner to email only about this pilot request. |
| `repositoryAuthority` | `boolean` | Confirms authority to review, merge, deploy, and roll back the public repository change. |
| `repositoryUrl` | `string` | Exact public GitHub repository under the requester's control. |
| `requiredBehavior` | `string` | Optional provider behavior that must be preserved. |
| `safetyAcknowledged` | `boolean` | Confirms removal of credentials, private or signed URLs, customer data, payment details, and sensitive artifacts. |
| `startBoundaryAcknowledged` | `boolean` | Confirms that no payment or work starts before separate owner confirmation. |
| `status` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: Create

```ts
const pilot_request = await client.PilotRequest().create({
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


### Render

Create an instance: `const render = client.Render()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blockAds` | `boolean` | Best-effort blocking of requests to known third-party ad hosts. |
| `blockChats` | `boolean` | Best-effort blocking and hiding of known third-party chat widgets. |
| `blockTrackers` | `boolean` | Best-effort blocking of requests to known third-party analytics and tracker hosts. |
| `darkMode` | `boolean` | Emulate a dark color-scheme preference. |
| `delay` | `number` | Additional bounded wait in milliseconds after the lifecycle event. |
| `format` | `string` | Exact artifact format. |
| `fullPage` | `boolean` | Capture the bounded full document height for screenshots. |
| `height` | `number` | Viewport height in CSS pixels. |
| `hideCookieBanners` | `boolean` | Hide common cookie-consent overlays after loading. |
| `hidePopups` | `boolean` | Hide common newsletter, signup, and discount popups without clicking, submitting, or setting state. |
| `kind` | `string` | Artifact family to return. |
| `landscape` | `boolean` | Use landscape orientation for PDF rendering. |
| `paper` | `string` | Paper size used for PDF rendering. |
| `quality` | `number` | JPEG encoding quality. |
| `reducedMotion` | `boolean` | Emulate reduced motion to improve capture stability. |
| `scale` | `number` | Device scale factor used for image capture. |
| `scrollPage` | `boolean` | Deterministically scroll before capture to activate lazy content. |
| `timeout` | `number` | Navigation timeout in milliseconds. |
| `url` | `string` | Public HTTP or HTTPS page URL. |
| `waitUntil` | `string` | Browser lifecycle event awaited before the optional delay. |
| `width` | `number` | Viewport width in CSS pixels. |

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
const rendering = await client.Rendering().load({ url: 'url' })
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
| `createdAt` | `string` |  |
| `currentControls` | `string` | Non-secret current URL, network, browser, resource, and caller controls. |
| `desiredOutcome` | `string` | Requested risk report, focused patch, regression tests, and handoff outcome. |
| `email` | `string` | Address the owner may use only to reply about this safety-review request. |
| `id` | `number` |  |
| `language` | `string` |  |
| `primaryConcern` | `string` |  |
| `replyConsent` | `boolean` | Allows the owner to email only about this safety-review request. |
| `repositoryAuthority` | `boolean` | Confirms authority to review, merge, deploy, and roll back the public repository change. |
| `repositoryUrl` | `string` | Exact public GitHub repository under the requester's control. |
| `routePath` | `string` | One relative repository file path for the existing screenshot endpoint or worker. |
| `runtime` | `string` |  |
| `safetyAcknowledged` | `boolean` | Confirms removal of credentials, private or signed URLs, customer data, production details, payment information, and sensitive artifacts. |
| `startBoundaryAcknowledged` | `boolean` | Confirms that no payment or work starts before separate owner confirmation. |
| `status` | `string` |  |
| `testEvidence` | `string` | Non-sensitive description of current happy-path and rejection tests, or none. |
| `updatedAt` | `string` |  |

#### Example: Create

```ts
const safety_review_request = await client.SafetyReviewRequest().create({
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


### Trial

Create an instance: `const trial = client.Trial()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `consent` | `boolean` | Optional permission for the owner to send product-fit guidance. |
| `email` | `string` | Email used to enforce one lifetime Free-plan key. |
| `expectedRenders` | `string` |  |
| `name` | `string` | Optional display name for owner review. |
| `useCase` | `string` | Optional public-page capture use case. |

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
| `createdAt` | `string` |  |
| `currentPlan` | `string` |  |
| `id` | `number` |  |
| `note` | `string` |  |
| `requestedPlan` | `string` |  |
| `status` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: Create

```ts
const upgrade = await client.Upgrade().create({
  consent: true,
  createdAt: 'example_createdAt',
  currentPlan: 'example_currentPlan',
  id: 1,
  requestedPlan: 'example_requestedPlan',
  status: 'example_status',
  updatedAt: 'example_updatedAt',
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
| `links` | `Record<string, any>` | Stable self-serve continuation links. |
| `upgradeRequest` | `any` | Latest paid-plan request attached to this key, or null when none exists. |
| `usage` | `Record<string, any>` |  |

#### Example: Load

```ts
const usage = await client.Usage().load()
```

## Features

This SDK ships 4 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


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

- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

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
import { LatchshotScreenshotSDK } from '@voxgig-sdk/latchshot-screenshot-sdk'
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
