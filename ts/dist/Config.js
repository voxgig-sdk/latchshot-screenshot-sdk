"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'LatchshotScreenshot',
        slug: "latchshot-screenshot",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://latchshot.fly.dev",
        auth: {
            prefix: 'Bearer',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            health: {},
            monitoring_request: {},
            pilot_request: {},
            render: {},
            rendering: {},
            safety_review_request: {},
            trial: {},
            upgrade: {},
            usage: {},
        }
    };
    entity = {
        "health": {
            "fields": [
                {
                    "name": "active",
                    "req": true,
                    "type": "`$INTEGER`"
                },
                {
                    "name": "concurrency",
                    "req": true,
                    "type": "`$INTEGER`"
                },
                {
                    "name": "pending",
                    "req": true,
                    "type": "`$INTEGER`"
                }
            ],
            "name": "health",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/healthz",
                            "segments": [
                                {
                                    "lit": "healthz"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.render`"
                            },
                            "parts": [
                                "healthz"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "monitoring_request": {
            "fields": [
                {
                    "name": "changeContext",
                    "short": "Optional non-sensitive description of what the weekly owner-written note should call out.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "createdAt",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "format": "email",
                    "name": "email",
                    "req": true,
                    "short": "Address the owner may use only to reply about this monitoring request.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "req": true,
                    "type": "`$INTEGER`"
                },
                {
                    "name": "monitoringGoal",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "pageCount",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "format": "uri",
                    "name": "pageUrl",
                    "req": true,
                    "short": "One exact public HTTP or HTTPS example page on port 80 or 443, without credentials, query data, or a fragment.",
                    "type": "`$STRING`"
                },
                {
                    "name": "publicPageAuthority",
                    "req": true,
                    "short": "Confirms authority to request recurring captures of every proposed public page.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "replyConsent",
                    "req": true,
                    "short": "Allows the owner to email only about this monitoring-pilot request.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "safetyAcknowledged",
                    "req": true,
                    "short": "Confirms removal of credentials, query secrets, customer data, signed links, and sensitive information.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "startBoundaryAcknowledged",
                    "req": true,
                    "short": "Confirms that scope, delivery, retention, payment, and monitoring start require separate owner confirmation.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "status",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updatedAt",
                    "req": true,
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "monitoring_request",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/monitoring-requests",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "monitoring-requests"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.request`"
                            },
                            "parts": [
                                "api",
                                "monitoring-requests"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "pilot_request": {
            "fields": [
                {
                    "name": "acceptanceSample",
                    "short": "Optional safe description of one maintainer-approved public page and required artifact shape.",
                    "type": "`$STRING`"
                },
                {
                    "name": "callSite",
                    "op": {
                        "create": {
                            "type": "`$STRING`"
                        }
                    },
                    "req": true,
                    "short": "Optional relative repository file path for the existing backend provider call.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "createdAt",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "currentContract",
                    "short": "Optional non-secret current request, synchronous output, and application-owned byte handling.",
                    "type": "`$STRING`"
                },
                {
                    "format": "email",
                    "name": "email",
                    "req": true,
                    "short": "Address the owner may use only to reply about this pilot request.",
                    "type": "`$STRING`"
                },
                {
                    "name": "expectedRenders",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "req": true,
                    "type": "`$INTEGER`"
                },
                {
                    "name": "language",
                    "type": "`$STRING`"
                },
                {
                    "name": "provider",
                    "type": "`$STRING`"
                },
                {
                    "name": "replyConsent",
                    "req": true,
                    "short": "Allows the owner to email only about this pilot request.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "repositoryAuthority",
                    "req": true,
                    "short": "Confirms authority to review, merge, deploy, and roll back the public repository change.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "format": "uri",
                    "name": "repositoryUrl",
                    "req": true,
                    "short": "Exact public GitHub repository under the requester's control.",
                    "type": "`$STRING`"
                },
                {
                    "name": "requiredBehavior",
                    "short": "Optional provider behavior that must be preserved.",
                    "type": "`$STRING`"
                },
                {
                    "name": "safetyAcknowledged",
                    "req": true,
                    "short": "Confirms removal of credentials, private or signed URLs, customer data, payment details, and sensitive artifacts.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "startBoundaryAcknowledged",
                    "req": true,
                    "short": "Confirms that no payment or work starts before separate owner confirmation.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "status",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updatedAt",
                    "req": true,
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "pilot_request",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/pilot-requests",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "pilot-requests"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.request`"
                            },
                            "parts": [
                                "api",
                                "pilot-requests"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "render": {
            "fields": [
                {
                    "name": "blockAds",
                    "short": "Best-effort blocking of requests to known third-party ad hosts.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "blockChats",
                    "short": "Best-effort blocking and hiding of known third-party chat widgets.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "blockTrackers",
                    "short": "Best-effort blocking of requests to known third-party analytics and tracker hosts.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "darkMode",
                    "short": "Emulate a dark color-scheme preference.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "delay",
                    "short": "Additional bounded wait in milliseconds after the lifecycle event.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "format",
                    "short": "Exact artifact format.",
                    "type": "`$STRING`"
                },
                {
                    "name": "fullPage",
                    "short": "Capture the bounded full document height for screenshots.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "height",
                    "short": "Viewport height in CSS pixels.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "hideCookieBanners",
                    "short": "Hide common cookie-consent overlays after loading.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "hidePopups",
                    "short": "Hide common newsletter, signup, and discount popups without clicking, submitting, or setting state.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "kind",
                    "short": "Artifact family to return.",
                    "type": "`$STRING`"
                },
                {
                    "name": "landscape",
                    "short": "Use landscape orientation for PDF rendering.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "paper",
                    "short": "Paper size used for PDF rendering.",
                    "type": "`$STRING`"
                },
                {
                    "name": "quality",
                    "short": "JPEG encoding quality.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "reducedMotion",
                    "short": "Emulate reduced motion to improve capture stability.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "scale",
                    "short": "Device scale factor used for image capture.",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "scrollPage",
                    "short": "Deterministically scroll before capture to activate lazy content.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "timeout",
                    "short": "Navigation timeout in milliseconds.",
                    "type": "`$INTEGER`"
                },
                {
                    "format": "uri",
                    "name": "url",
                    "req": true,
                    "short": "Public HTTP or HTTPS page URL.",
                    "type": "`$STRING`"
                },
                {
                    "name": "waitUntil",
                    "short": "Browser lifecycle event awaited before the optional delay.",
                    "type": "`$STRING`"
                },
                {
                    "name": "width",
                    "short": "Viewport width in CSS pixels.",
                    "type": "`$INTEGER`"
                }
            ],
            "name": "render",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/render",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "render"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "render"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "rendering": {
            "fields": [],
            "name": "rendering",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "block_ad",
                                        "orig": "block_ad",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "block_chat",
                                        "orig": "block_chat",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "block_tracker",
                                        "orig": "block_tracker",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "dark_mode",
                                        "orig": "dark_mode",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "png",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "full_page",
                                        "orig": "full_page",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": 900,
                                        "kind": "query",
                                        "name": "height",
                                        "orig": "height",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "hide_cookie_banner",
                                        "orig": "hide_cookie_banner",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "hide_popup",
                                        "orig": "hide_popup",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": 85,
                                        "kind": "query",
                                        "name": "quality",
                                        "orig": "quality",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "scroll_page",
                                        "orig": "scroll_page",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "https://example.com",
                                        "kind": "query",
                                        "name": "url",
                                        "orig": "url",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 1440,
                                        "kind": "query",
                                        "name": "width",
                                        "orig": "width",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/screenshot",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "screenshot"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "block_ad",
                                    "block_chat",
                                    "block_tracker",
                                    "dark_mode",
                                    "format",
                                    "full_page",
                                    "height",
                                    "hide_cookie_banner",
                                    "hide_popup",
                                    "quality",
                                    "scroll_page",
                                    "url",
                                    "width"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "v1",
                                "screenshot"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "safety_review_request": {
            "fields": [
                {
                    "format": "date-time",
                    "name": "createdAt",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "currentControls",
                    "req": true,
                    "short": "Non-secret current URL, network, browser, resource, and caller controls.",
                    "type": "`$STRING`"
                },
                {
                    "name": "desiredOutcome",
                    "req": true,
                    "short": "Requested risk report, focused patch, regression tests, and handoff outcome.",
                    "type": "`$STRING`"
                },
                {
                    "format": "email",
                    "name": "email",
                    "req": true,
                    "short": "Address the owner may use only to reply about this safety-review request.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "req": true,
                    "type": "`$INTEGER`"
                },
                {
                    "name": "language",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "primaryConcern",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "replyConsent",
                    "req": true,
                    "short": "Allows the owner to email only about this safety-review request.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "repositoryAuthority",
                    "req": true,
                    "short": "Confirms authority to review, merge, deploy, and roll back the public repository change.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "format": "uri",
                    "name": "repositoryUrl",
                    "req": true,
                    "short": "Exact public GitHub repository under the requester's control.",
                    "type": "`$STRING`"
                },
                {
                    "name": "routePath",
                    "req": true,
                    "short": "One relative repository file path for the existing screenshot endpoint or worker.",
                    "type": "`$STRING`"
                },
                {
                    "name": "runtime",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "safetyAcknowledged",
                    "req": true,
                    "short": "Confirms removal of credentials, private or signed URLs, customer data, production details, payment information, and sensitive artifacts.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "startBoundaryAcknowledged",
                    "req": true,
                    "short": "Confirms that no payment or work starts before separate owner confirmation.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "status",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "testEvidence",
                    "req": true,
                    "short": "Non-sensitive description of current happy-path and rejection tests, or none.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updatedAt",
                    "req": true,
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "safety_review_request",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/safety-review-requests",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "safety-review-requests"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.request`"
                            },
                            "parts": [
                                "api",
                                "safety-review-requests"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "trial": {
            "fields": [
                {
                    "name": "consent",
                    "short": "Optional permission for the owner to send product-fit guidance.",
                    "type": "`$BOOLEAN`"
                },
                {
                    "format": "email",
                    "name": "email",
                    "req": true,
                    "short": "Email used to enforce one lifetime Free-plan key.",
                    "type": "`$STRING`"
                },
                {
                    "name": "expectedRenders",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "Optional display name for owner review.",
                    "type": "`$STRING`"
                },
                {
                    "name": "useCase",
                    "short": "Optional public-page capture use case.",
                    "type": "`$STRING`"
                }
            ],
            "name": "trial",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/api/trials",
                            "segments": [
                                {
                                    "lit": "api"
                                },
                                {
                                    "lit": "trials"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.trial`"
                            },
                            "parts": [
                                "api",
                                "trials"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "upgrade": {
            "fields": [
                {
                    "name": "consent",
                    "req": true,
                    "type": "`$BOOLEAN`"
                },
                {
                    "format": "date-time",
                    "name": "createdAt",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "currentPlan",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "req": true,
                    "type": "`$INTEGER`"
                },
                {
                    "name": "note",
                    "type": "`$STRING`"
                },
                {
                    "name": "requestedPlan",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "status",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "format": "date-time",
                    "name": "updatedAt",
                    "req": true,
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "upgrade",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/v1/upgrade-requests",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "upgrade-requests"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.request`"
                            },
                            "parts": [
                                "v1",
                                "upgrade-requests"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "usage": {
            "fields": [
                {
                    "name": "customer",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "links",
                    "req": true,
                    "short": "Stable self-serve continuation links.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "upgradeRequest",
                    "req": true,
                    "short": "Latest paid-plan request attached to this key, or null when none exists.",
                    "type": "`$ANY`"
                },
                {
                    "name": "usage",
                    "req": true,
                    "type": "`$OBJECT`"
                }
            ],
            "name": "usage",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "GET",
                            "orig": "/v1/usage",
                            "segments": [
                                {
                                    "lit": "v1"
                                },
                                {
                                    "lit": "usage"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.usage`"
                            },
                            "parts": [
                                "v1",
                                "usage"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map