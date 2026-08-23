# LatchshotScreenshot Golang SDK



The Golang SDK for the LatchshotScreenshot API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Health(nil)` — each with the same small set of operations (`Load`, `Create`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/latchshot-screenshot-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/latchshot-screenshot-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/latchshot-screenshot-sdk/go=../latchshot-screenshot-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/latchshot-screenshot-sdk/go"
)

func main() {
    client := sdk.NewLatchshotScreenshotSDK(map[string]any{
        "apikey": os.Getenv("LATCHSHOT_SCREENSHOT_APIKEY"),
    })

    // Load a single health — the value is the loaded record.
    health, err := client.Health(nil).Load(nil, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(health)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
health, err := client.Health(nil).Load(nil, nil)
if err != nil {
    // handle err
    return
}
_ = health
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

health, err := client.Health(nil).Load(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(health) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewLatchshotScreenshotSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewLatchshotScreenshotSDK

```go
func NewLatchshotScreenshotSDK(options map[string]any) *LatchshotScreenshotSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *LatchshotScreenshotSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### LatchshotScreenshotSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Health` | `(data map[string]any) LatchshotScreenshotEntity` | Create a Health entity instance. |
| `MonitoringRequest` | `(data map[string]any) LatchshotScreenshotEntity` | Create a MonitoringRequest entity instance. |
| `PilotRequest` | `(data map[string]any) LatchshotScreenshotEntity` | Create a PilotRequest entity instance. |
| `Render` | `(data map[string]any) LatchshotScreenshotEntity` | Create a Render entity instance. |
| `Rendering` | `(data map[string]any) LatchshotScreenshotEntity` | Create a Rendering entity instance. |
| `SafetyReviewRequest` | `(data map[string]any) LatchshotScreenshotEntity` | Create a SafetyReviewRequest entity instance. |
| `Trial` | `(data map[string]any) LatchshotScreenshotEntity` | Create a Trial entity instance. |
| `Upgrade` | `(data map[string]any) LatchshotScreenshotEntity` | Create an Upgrade entity instance. |
| `Usage` | `(data map[string]any) LatchshotScreenshotEntity` | Create an Usage entity instance. |

### Entity interface (LatchshotScreenshotEntity)

All entities implement the `LatchshotScreenshotEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` | the entity record (`map[string]any`) |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    health, err := client.Health(nil).Load(nil, nil)
    if err != nil { /* handle */ }
    // health is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Health

| Field | Description |
| --- | --- |
| `"active"` |  |
| `"concurrency"` |  |
| `"pending"` |  |

Operations: Load.

API path: `/healthz`

#### MonitoringRequest

| Field | Description |
| --- | --- |
| `"changeContext"` | Optional non-sensitive description of what the weekly owner-written note should call out. |
| `"createdAt"` |  |
| `"email"` | Address the owner may use only to reply about this monitoring request. |
| `"id"` |  |
| `"monitoringGoal"` |  |
| `"pageCount"` |  |
| `"pageUrl"` | One exact public HTTP or HTTPS example page on port 80 or 443, without credentials, query data, or a fragment. |
| `"publicPageAuthority"` | Confirms authority to request recurring captures of every proposed public page. |
| `"replyConsent"` | Allows the owner to email only about this monitoring-pilot request. |
| `"safetyAcknowledged"` | Confirms removal of credentials, query secrets, customer data, signed links, and sensitive information. |
| `"startBoundaryAcknowledged"` | Confirms that scope, delivery, retention, payment, and monitoring start require separate owner confirmation. |
| `"status"` |  |
| `"updatedAt"` |  |

Operations: Create.

API path: `/api/monitoring-requests`

#### PilotRequest

| Field | Description |
| --- | --- |
| `"acceptanceSample"` | Optional safe description of one maintainer-approved public page and required artifact shape. |
| `"callSite"` | Optional relative repository file path for the existing backend provider call. |
| `"createdAt"` |  |
| `"currentContract"` | Optional non-secret current request, synchronous output, and application-owned byte handling. |
| `"email"` | Address the owner may use only to reply about this pilot request. |
| `"expectedRenders"` |  |
| `"id"` |  |
| `"language"` |  |
| `"provider"` |  |
| `"replyConsent"` | Allows the owner to email only about this pilot request. |
| `"repositoryAuthority"` | Confirms authority to review, merge, deploy, and roll back the public repository change. |
| `"repositoryUrl"` | Exact public GitHub repository under the requester's control. |
| `"requiredBehavior"` | Optional provider behavior that must be preserved. |
| `"safetyAcknowledged"` | Confirms removal of credentials, private or signed URLs, customer data, payment details, and sensitive artifacts. |
| `"startBoundaryAcknowledged"` | Confirms that no payment or work starts before separate owner confirmation. |
| `"status"` |  |
| `"updatedAt"` |  |

Operations: Create.

API path: `/api/pilot-requests`

#### Render

| Field | Description |
| --- | --- |
| `"blockAds"` | Best-effort blocking of requests to known third-party ad hosts. |
| `"blockChats"` | Best-effort blocking and hiding of known third-party chat widgets. |
| `"blockTrackers"` | Best-effort blocking of requests to known third-party analytics and tracker hosts. |
| `"darkMode"` | Emulate a dark color-scheme preference. |
| `"delay"` | Additional bounded wait in milliseconds after the lifecycle event. |
| `"format"` | Exact artifact format. |
| `"fullPage"` | Capture the bounded full document height for screenshots. |
| `"height"` | Viewport height in CSS pixels. |
| `"hideCookieBanners"` | Hide common cookie-consent overlays after loading. |
| `"hidePopups"` | Hide common newsletter, signup, and discount popups without clicking, submitting, or setting state. |
| `"kind"` | Artifact family to return. |
| `"landscape"` | Use landscape orientation for PDF rendering. |
| `"paper"` | Paper size used for PDF rendering. |
| `"quality"` | JPEG encoding quality. |
| `"reducedMotion"` | Emulate reduced motion to improve capture stability. |
| `"scale"` | Device scale factor used for image capture. |
| `"scrollPage"` | Deterministically scroll before capture to activate lazy content. |
| `"timeout"` | Navigation timeout in milliseconds. |
| `"url"` | Public HTTP or HTTPS page URL. |
| `"waitUntil"` | Browser lifecycle event awaited before the optional delay. |
| `"width"` | Viewport width in CSS pixels. |

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
| `"createdAt"` |  |
| `"currentControls"` | Non-secret current URL, network, browser, resource, and caller controls. |
| `"desiredOutcome"` | Requested risk report, focused patch, regression tests, and handoff outcome. |
| `"email"` | Address the owner may use only to reply about this safety-review request. |
| `"id"` |  |
| `"language"` |  |
| `"primaryConcern"` |  |
| `"replyConsent"` | Allows the owner to email only about this safety-review request. |
| `"repositoryAuthority"` | Confirms authority to review, merge, deploy, and roll back the public repository change. |
| `"repositoryUrl"` | Exact public GitHub repository under the requester's control. |
| `"routePath"` | One relative repository file path for the existing screenshot endpoint or worker. |
| `"runtime"` |  |
| `"safetyAcknowledged"` | Confirms removal of credentials, private or signed URLs, customer data, production details, payment information, and sensitive artifacts. |
| `"startBoundaryAcknowledged"` | Confirms that no payment or work starts before separate owner confirmation. |
| `"status"` |  |
| `"testEvidence"` | Non-sensitive description of current happy-path and rejection tests, or none. |
| `"updatedAt"` |  |

Operations: Create.

API path: `/api/safety-review-requests`

#### Trial

| Field | Description |
| --- | --- |
| `"consent"` | Optional permission for the owner to send product-fit guidance. |
| `"email"` | Email used to enforce one lifetime Free-plan key. |
| `"expectedRenders"` |  |
| `"name"` | Optional display name for owner review. |
| `"useCase"` | Optional public-page capture use case. |

Operations: Create.

API path: `/api/trials`

#### Upgrade

| Field | Description |
| --- | --- |
| `"consent"` |  |
| `"createdAt"` |  |
| `"currentPlan"` |  |
| `"id"` |  |
| `"note"` |  |
| `"requestedPlan"` |  |
| `"status"` |  |
| `"updatedAt"` |  |

Operations: Create.

API path: `/v1/upgrade-requests`

#### Usage

| Field | Description |
| --- | --- |
| `"customer"` |  |
| `"links"` | Stable self-serve continuation links. |
| `"upgradeRequest"` | Latest paid-plan request attached to this key, or null when none exists. |
| `"usage"` |  |

Operations: Load.

API path: `/v1/usage`



## Entities


### Health

Create an instance: `health := client.Health(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `int` |  |
| `concurrency` | `int` |  |
| `pending` | `int` |  |

#### Example: Load

```go
health, err := client.Health(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(health) // the loaded record
```


### MonitoringRequest

Create an instance: `monitoringRequest := client.MonitoringRequest(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `changeContext` | `string` | Optional non-sensitive description of what the weekly owner-written note should call out. |
| `createdAt` | `string` |  |
| `email` | `string` | Address the owner may use only to reply about this monitoring request. |
| `id` | `int` |  |
| `monitoringGoal` | `string` |  |
| `pageCount` | `string` |  |
| `pageUrl` | `string` | One exact public HTTP or HTTPS example page on port 80 or 443, without credentials, query data, or a fragment. |
| `publicPageAuthority` | `bool` | Confirms authority to request recurring captures of every proposed public page. |
| `replyConsent` | `bool` | Allows the owner to email only about this monitoring-pilot request. |
| `safetyAcknowledged` | `bool` | Confirms removal of credentials, query secrets, customer data, signed links, and sensitive information. |
| `startBoundaryAcknowledged` | `bool` | Confirms that scope, delivery, retention, payment, and monitoring start require separate owner confirmation. |
| `status` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: Create

```go
result, err := client.MonitoringRequest(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "email": "example_email",
    "id": 1,
    "monitoringGoal": "example_monitoringGoal",
    "pageCount": "example_pageCount",
    "pageUrl": "example_pageUrl",
    "publicPageAuthority": true,
    "replyConsent": true,
    "safetyAcknowledged": true,
    "startBoundaryAcknowledged": true,
    "status": "example_status",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PilotRequest

Create an instance: `pilotRequest := client.PilotRequest(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `acceptanceSample` | `string` | Optional safe description of one maintainer-approved public page and required artifact shape. |
| `callSite` | `string` | Optional relative repository file path for the existing backend provider call. |
| `createdAt` | `string` |  |
| `currentContract` | `string` | Optional non-secret current request, synchronous output, and application-owned byte handling. |
| `email` | `string` | Address the owner may use only to reply about this pilot request. |
| `expectedRenders` | `string` |  |
| `id` | `int` |  |
| `language` | `string` |  |
| `provider` | `string` |  |
| `replyConsent` | `bool` | Allows the owner to email only about this pilot request. |
| `repositoryAuthority` | `bool` | Confirms authority to review, merge, deploy, and roll back the public repository change. |
| `repositoryUrl` | `string` | Exact public GitHub repository under the requester's control. |
| `requiredBehavior` | `string` | Optional provider behavior that must be preserved. |
| `safetyAcknowledged` | `bool` | Confirms removal of credentials, private or signed URLs, customer data, payment details, and sensitive artifacts. |
| `startBoundaryAcknowledged` | `bool` | Confirms that no payment or work starts before separate owner confirmation. |
| `status` | `string` |  |
| `updatedAt` | `string` |  |

#### Example: Create

```go
result, err := client.PilotRequest(nil).Create(map[string]any{
    "callSite": "example_callSite",
    "createdAt": "example_createdAt",
    "email": "example_email",
    "id": 1,
    "replyConsent": true,
    "repositoryAuthority": true,
    "repositoryUrl": "example_repositoryUrl",
    "safetyAcknowledged": true,
    "startBoundaryAcknowledged": true,
    "status": "example_status",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Render

Create an instance: `render := client.Render(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blockAds` | `bool` | Best-effort blocking of requests to known third-party ad hosts. |
| `blockChats` | `bool` | Best-effort blocking and hiding of known third-party chat widgets. |
| `blockTrackers` | `bool` | Best-effort blocking of requests to known third-party analytics and tracker hosts. |
| `darkMode` | `bool` | Emulate a dark color-scheme preference. |
| `delay` | `int` | Additional bounded wait in milliseconds after the lifecycle event. |
| `format` | `string` | Exact artifact format. |
| `fullPage` | `bool` | Capture the bounded full document height for screenshots. |
| `height` | `int` | Viewport height in CSS pixels. |
| `hideCookieBanners` | `bool` | Hide common cookie-consent overlays after loading. |
| `hidePopups` | `bool` | Hide common newsletter, signup, and discount popups without clicking, submitting, or setting state. |
| `kind` | `string` | Artifact family to return. |
| `landscape` | `bool` | Use landscape orientation for PDF rendering. |
| `paper` | `string` | Paper size used for PDF rendering. |
| `quality` | `int` | JPEG encoding quality. |
| `reducedMotion` | `bool` | Emulate reduced motion to improve capture stability. |
| `scale` | `int` | Device scale factor used for image capture. |
| `scrollPage` | `bool` | Deterministically scroll before capture to activate lazy content. |
| `timeout` | `int` | Navigation timeout in milliseconds. |
| `url` | `string` | Public HTTP or HTTPS page URL. |
| `waitUntil` | `string` | Browser lifecycle event awaited before the optional delay. |
| `width` | `int` | Viewport width in CSS pixels. |

#### Example: Create

```go
result, err := client.Render(nil).Create(map[string]any{
    "url": "example_url",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Rendering

Create an instance: `rendering := client.Rendering(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
rendering, err := client.Rendering(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(rendering) // the loaded record
```


### SafetyReviewRequest

Create an instance: `safetyReviewRequest := client.SafetyReviewRequest(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `createdAt` | `string` |  |
| `currentControls` | `string` | Non-secret current URL, network, browser, resource, and caller controls. |
| `desiredOutcome` | `string` | Requested risk report, focused patch, regression tests, and handoff outcome. |
| `email` | `string` | Address the owner may use only to reply about this safety-review request. |
| `id` | `int` |  |
| `language` | `string` |  |
| `primaryConcern` | `string` |  |
| `replyConsent` | `bool` | Allows the owner to email only about this safety-review request. |
| `repositoryAuthority` | `bool` | Confirms authority to review, merge, deploy, and roll back the public repository change. |
| `repositoryUrl` | `string` | Exact public GitHub repository under the requester's control. |
| `routePath` | `string` | One relative repository file path for the existing screenshot endpoint or worker. |
| `runtime` | `string` |  |
| `safetyAcknowledged` | `bool` | Confirms removal of credentials, private or signed URLs, customer data, production details, payment information, and sensitive artifacts. |
| `startBoundaryAcknowledged` | `bool` | Confirms that no payment or work starts before separate owner confirmation. |
| `status` | `string` |  |
| `testEvidence` | `string` | Non-sensitive description of current happy-path and rejection tests, or none. |
| `updatedAt` | `string` |  |

#### Example: Create

```go
result, err := client.SafetyReviewRequest(nil).Create(map[string]any{
    "createdAt": "example_createdAt",
    "currentControls": "example_currentControls",
    "desiredOutcome": "example_desiredOutcome",
    "email": "example_email",
    "id": 1,
    "language": "example_language",
    "primaryConcern": "example_primaryConcern",
    "replyConsent": true,
    "repositoryAuthority": true,
    "repositoryUrl": "example_repositoryUrl",
    "routePath": "example_routePath",
    "runtime": "example_runtime",
    "safetyAcknowledged": true,
    "startBoundaryAcknowledged": true,
    "status": "example_status",
    "testEvidence": "example_testEvidence",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Trial

Create an instance: `trial := client.Trial(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `consent` | `bool` | Optional permission for the owner to send product-fit guidance. |
| `email` | `string` | Email used to enforce one lifetime Free-plan key. |
| `expectedRenders` | `string` |  |
| `name` | `string` | Optional display name for owner review. |
| `useCase` | `string` | Optional public-page capture use case. |

#### Example: Create

```go
result, err := client.Trial(nil).Create(map[string]any{
    "email": "example_email",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Upgrade

Create an instance: `upgrade := client.Upgrade(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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

```go
result, err := client.Upgrade(nil).Create(map[string]any{
    "consent": true,
    "createdAt": "example_createdAt",
    "currentPlan": "example_currentPlan",
    "id": 1,
    "requestedPlan": "example_requestedPlan",
    "status": "example_status",
    "updatedAt": "example_updatedAt",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Usage

Create an instance: `usage := client.Usage(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `customer` | `map[string]any` |  |
| `links` | `map[string]any` | Stable self-serve continuation links. |
| `upgradeRequest` | `any` | Latest paid-plan request attached to this key, or null when none exists. |
| `usage` | `map[string]any` |  |

#### Example: Load

```go
usage, err := client.Usage(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(usage) // the loaded record
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/latchshot-screenshot-sdk/go/
├── latchshot-screenshot.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/latchshot-screenshot-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
health := client.Health(nil)
health.Load(nil, nil)

// health.Data() now returns the health data from the last load
// health.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
