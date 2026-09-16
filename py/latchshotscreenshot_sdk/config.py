# LatchshotScreenshot SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "LatchshotScreenshot",
            "slug": "latchshot-screenshot",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://latchshot.fly.dev",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "health": {},
                "monitoring_request": {},
                "pilot_request": {},
                "render": {},
                "rendering": {},
                "safety_review_request": {},
                "trial": {},
                "upgrade": {},
                "usage": {},
            },
        },
        "entity": {
      "health": {
        "fields": [
          {
            "name": "active",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "concurrency",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "pending",
            "req": True,
            "type": "`$INTEGER`",
          },
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
                    "lit": "healthz",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.render`",
                },
                "parts": [
                  "healthz",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "monitoring_request": {
        "fields": [
          {
            "name": "changeContext",
            "short": "Optional non-sensitive description of what the weekly owner-written note should call out.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "createdAt",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "format": "email",
            "name": "email",
            "req": True,
            "short": "Address the owner may use only to reply about this monitoring request.",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "monitoringGoal",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "pageCount",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "format": "uri",
            "name": "pageUrl",
            "req": True,
            "short": "One exact public HTTP or HTTPS example page on port 80 or 443, without credentials, query data, or a fragment.",
            "type": "`$STRING`",
          },
          {
            "name": "publicPageAuthority",
            "req": True,
            "short": "Confirms authority to request recurring captures of every proposed public page.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "replyConsent",
            "req": True,
            "short": "Allows the owner to email only about this monitoring-pilot request.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "safetyAcknowledged",
            "req": True,
            "short": "Confirms removal of credentials, query secrets, customer data, signed links, and sensitive information.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "startBoundaryAcknowledged",
            "req": True,
            "short": "Confirms that scope, delivery, retention, payment, and monitoring start require separate owner confirmation.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "status",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "updatedAt",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "api",
                  },
                  {
                    "lit": "monitoring-requests",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.request`",
                },
                "parts": [
                  "api",
                  "monitoring-requests",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "pilot_request": {
        "fields": [
          {
            "name": "acceptanceSample",
            "short": "Optional safe description of one maintainer-approved public page and required artifact shape.",
            "type": "`$STRING`",
          },
          {
            "name": "callSite",
            "op": {
              "create": {
                "type": "`$STRING`",
              },
            },
            "req": True,
            "short": "Optional relative repository file path for the existing backend provider call.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "createdAt",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "currentContract",
            "short": "Optional non-secret current request, synchronous output, and application-owned byte handling.",
            "type": "`$STRING`",
          },
          {
            "format": "email",
            "name": "email",
            "req": True,
            "short": "Address the owner may use only to reply about this pilot request.",
            "type": "`$STRING`",
          },
          {
            "name": "expectedRenders",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "language",
            "type": "`$STRING`",
          },
          {
            "name": "provider",
            "type": "`$STRING`",
          },
          {
            "name": "replyConsent",
            "req": True,
            "short": "Allows the owner to email only about this pilot request.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "repositoryAuthority",
            "req": True,
            "short": "Confirms authority to review, merge, deploy, and roll back the public repository change.",
            "type": "`$BOOLEAN`",
          },
          {
            "format": "uri",
            "name": "repositoryUrl",
            "req": True,
            "short": "Exact public GitHub repository under the requester's control.",
            "type": "`$STRING`",
          },
          {
            "name": "requiredBehavior",
            "short": "Optional provider behavior that must be preserved.",
            "type": "`$STRING`",
          },
          {
            "name": "safetyAcknowledged",
            "req": True,
            "short": "Confirms removal of credentials, private or signed URLs, customer data, payment details, and sensitive artifacts.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "startBoundaryAcknowledged",
            "req": True,
            "short": "Confirms that no payment or work starts before separate owner confirmation.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "status",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "updatedAt",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "api",
                  },
                  {
                    "lit": "pilot-requests",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.request`",
                },
                "parts": [
                  "api",
                  "pilot-requests",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "render": {
        "fields": [
          {
            "name": "blockAds",
            "short": "Best-effort blocking of requests to known third-party ad hosts.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "blockChats",
            "short": "Best-effort blocking and hiding of known third-party chat widgets.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "blockTrackers",
            "short": "Best-effort blocking of requests to known third-party analytics and tracker hosts.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "darkMode",
            "short": "Emulate a dark color-scheme preference.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "delay",
            "short": "Additional bounded wait in milliseconds after the lifecycle event.",
            "type": "`$INTEGER`",
          },
          {
            "name": "format",
            "short": "Exact artifact format.",
            "type": "`$STRING`",
          },
          {
            "name": "fullPage",
            "short": "Capture the bounded full document height for screenshots.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "height",
            "short": "Viewport height in CSS pixels.",
            "type": "`$INTEGER`",
          },
          {
            "name": "hideCookieBanners",
            "short": "Hide common cookie-consent overlays after loading.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "hidePopups",
            "short": "Hide common newsletter, signup, and discount popups without clicking, submitting, or setting state.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "kind",
            "short": "Artifact family to return.",
            "type": "`$STRING`",
          },
          {
            "name": "landscape",
            "short": "Use landscape orientation for PDF rendering.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "paper",
            "short": "Paper size used for PDF rendering.",
            "type": "`$STRING`",
          },
          {
            "name": "quality",
            "short": "JPEG encoding quality.",
            "type": "`$INTEGER`",
          },
          {
            "name": "reducedMotion",
            "short": "Emulate reduced motion to improve capture stability.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "scale",
            "short": "Device scale factor used for image capture.",
            "type": "`$INTEGER`",
          },
          {
            "name": "scrollPage",
            "short": "Deterministically scroll before capture to activate lazy content.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "timeout",
            "short": "Navigation timeout in milliseconds.",
            "type": "`$INTEGER`",
          },
          {
            "format": "uri",
            "name": "url",
            "req": True,
            "short": "Public HTTP or HTTPS page URL.",
            "type": "`$STRING`",
          },
          {
            "name": "waitUntil",
            "short": "Browser lifecycle event awaited before the optional delay.",
            "type": "`$STRING`",
          },
          {
            "name": "width",
            "short": "Viewport width in CSS pixels.",
            "type": "`$INTEGER`",
          },
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
                    "lit": "v1",
                  },
                  {
                    "lit": "render",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "render",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
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
                      "example": False,
                      "kind": "query",
                      "name": "block_ad",
                      "orig": "block_ad",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": False,
                      "kind": "query",
                      "name": "block_chat",
                      "orig": "block_chat",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": False,
                      "kind": "query",
                      "name": "block_tracker",
                      "orig": "block_tracker",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": False,
                      "kind": "query",
                      "name": "dark_mode",
                      "orig": "dark_mode",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": "png",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                    },
                    {
                      "example": False,
                      "kind": "query",
                      "name": "full_page",
                      "orig": "full_page",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": 900,
                      "kind": "query",
                      "name": "height",
                      "orig": "height",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": False,
                      "kind": "query",
                      "name": "hide_cookie_banner",
                      "orig": "hide_cookie_banner",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": False,
                      "kind": "query",
                      "name": "hide_popup",
                      "orig": "hide_popup",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": 85,
                      "kind": "query",
                      "name": "quality",
                      "orig": "quality",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": False,
                      "kind": "query",
                      "name": "scroll_page",
                      "orig": "scroll_page",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": "https://example.com",
                      "kind": "query",
                      "name": "url",
                      "orig": "url",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "example": 1440,
                      "kind": "query",
                      "name": "width",
                      "orig": "width",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/v1/screenshot",
                "segments": [
                  {
                    "lit": "v1",
                  },
                  {
                    "lit": "screenshot",
                  },
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
                    "width",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "v1",
                  "screenshot",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "safety_review_request": {
        "fields": [
          {
            "format": "date-time",
            "name": "createdAt",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "currentControls",
            "req": True,
            "short": "Non-secret current URL, network, browser, resource, and caller controls.",
            "type": "`$STRING`",
          },
          {
            "name": "desiredOutcome",
            "req": True,
            "short": "Requested risk report, focused patch, regression tests, and handoff outcome.",
            "type": "`$STRING`",
          },
          {
            "format": "email",
            "name": "email",
            "req": True,
            "short": "Address the owner may use only to reply about this safety-review request.",
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "language",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "primaryConcern",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "replyConsent",
            "req": True,
            "short": "Allows the owner to email only about this safety-review request.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "repositoryAuthority",
            "req": True,
            "short": "Confirms authority to review, merge, deploy, and roll back the public repository change.",
            "type": "`$BOOLEAN`",
          },
          {
            "format": "uri",
            "name": "repositoryUrl",
            "req": True,
            "short": "Exact public GitHub repository under the requester's control.",
            "type": "`$STRING`",
          },
          {
            "name": "routePath",
            "req": True,
            "short": "One relative repository file path for the existing screenshot endpoint or worker.",
            "type": "`$STRING`",
          },
          {
            "name": "runtime",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "safetyAcknowledged",
            "req": True,
            "short": "Confirms removal of credentials, private or signed URLs, customer data, production details, payment information, and sensitive artifacts.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "startBoundaryAcknowledged",
            "req": True,
            "short": "Confirms that no payment or work starts before separate owner confirmation.",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "status",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "testEvidence",
            "req": True,
            "short": "Non-sensitive description of current happy-path and rejection tests, or none.",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "updatedAt",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "api",
                  },
                  {
                    "lit": "safety-review-requests",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.request`",
                },
                "parts": [
                  "api",
                  "safety-review-requests",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "trial": {
        "fields": [
          {
            "name": "consent",
            "short": "Optional permission for the owner to send product-fit guidance.",
            "type": "`$BOOLEAN`",
          },
          {
            "format": "email",
            "name": "email",
            "req": True,
            "short": "Email used to enforce one lifetime Free-plan key.",
            "type": "`$STRING`",
          },
          {
            "name": "expectedRenders",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "short": "Optional display name for owner review.",
            "type": "`$STRING`",
          },
          {
            "name": "useCase",
            "short": "Optional public-page capture use case.",
            "type": "`$STRING`",
          },
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
                    "lit": "api",
                  },
                  {
                    "lit": "trials",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.trial`",
                },
                "parts": [
                  "api",
                  "trials",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "upgrade": {
        "fields": [
          {
            "name": "consent",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "format": "date-time",
            "name": "createdAt",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "currentPlan",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "id",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "note",
            "type": "`$STRING`",
          },
          {
            "name": "requestedPlan",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "updatedAt",
            "req": True,
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "v1",
                  },
                  {
                    "lit": "upgrade-requests",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.request`",
                },
                "parts": [
                  "v1",
                  "upgrade-requests",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "usage": {
        "fields": [
          {
            "name": "customer",
            "req": True,
            "type": "`$OBJECT`",
          },
          {
            "name": "links",
            "req": True,
            "short": "Stable self-serve continuation links.",
            "type": "`$OBJECT`",
          },
          {
            "name": "upgradeRequest",
            "req": True,
            "short": "Latest paid-plan request attached to this key, or null when none exists.",
            "type": "`$ANY`",
          },
          {
            "name": "usage",
            "req": True,
            "type": "`$OBJECT`",
          },
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
                    "lit": "v1",
                  },
                  {
                    "lit": "usage",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.usage`",
                },
                "parts": [
                  "v1",
                  "usage",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
