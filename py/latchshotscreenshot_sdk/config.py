# LatchshotScreenshot SDK configuration


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
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
                "parts": [
                  "healthz",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.render`",
                },
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
            "type": "`$STRING`",
          },
          {
            "name": "createdAt",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "email",
            "req": True,
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
            "name": "pageUrl",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "publicPageAuthority",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "replyConsent",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "safetyAcknowledged",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "startBoundaryAcknowledged",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "status",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "updatedAt",
            "req": True,
            "type": "`$STRING`",
          },
        ],
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
                "parts": [
                  "api",
                  "monitoring-requests",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.request`",
                },
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
            "type": "`$STRING`",
          },
          {
            "name": "createdAt",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "currentContract",
            "type": "`$STRING`",
          },
          {
            "name": "email",
            "req": True,
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
            "type": "`$BOOLEAN`",
          },
          {
            "name": "repositoryAuthority",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "repositoryUrl",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "requiredBehavior",
            "type": "`$STRING`",
          },
          {
            "name": "safetyAcknowledged",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "startBoundaryAcknowledged",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "status",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "updatedAt",
            "req": True,
            "type": "`$STRING`",
          },
        ],
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
                "parts": [
                  "api",
                  "pilot-requests",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.request`",
                },
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
            "type": "`$BOOLEAN`",
          },
          {
            "name": "blockChats",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "blockTrackers",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "darkMode",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "delay",
            "type": "`$INTEGER`",
          },
          {
            "name": "format",
            "type": "`$STRING`",
          },
          {
            "name": "fullPage",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "height",
            "type": "`$INTEGER`",
          },
          {
            "name": "hideCookieBanners",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "hidePopups",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "kind",
            "type": "`$STRING`",
          },
          {
            "name": "landscape",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "paper",
            "type": "`$STRING`",
          },
          {
            "name": "quality",
            "type": "`$INTEGER`",
          },
          {
            "name": "reducedMotion",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "scale",
            "type": "`$INTEGER`",
          },
          {
            "name": "scrollPage",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "timeout",
            "type": "`$INTEGER`",
          },
          {
            "name": "url",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "waitUntil",
            "type": "`$STRING`",
          },
          {
            "name": "width",
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
                "parts": [
                  "v1",
                  "render",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
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
                "parts": [
                  "v1",
                  "screenshot",
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
            "name": "createdAt",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "currentControls",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "desiredOutcome",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "email",
            "req": True,
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
            "type": "`$BOOLEAN`",
          },
          {
            "name": "repositoryAuthority",
            "req": True,
            "type": "`$BOOLEAN`",
          },
          {
            "name": "repositoryUrl",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "routePath",
            "req": True,
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
            "type": "`$BOOLEAN`",
          },
          {
            "name": "startBoundaryAcknowledged",
            "req": True,
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
            "type": "`$STRING`",
          },
          {
            "name": "updatedAt",
            "req": True,
            "type": "`$STRING`",
          },
        ],
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
                "parts": [
                  "api",
                  "safety-review-requests",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.request`",
                },
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
            "type": "`$BOOLEAN`",
          },
          {
            "name": "email",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "expectedRenders",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "useCase",
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
                "parts": [
                  "api",
                  "trials",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.trial`",
                },
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
            "name": "updatedAt",
            "req": True,
            "type": "`$STRING`",
          },
        ],
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
                "parts": [
                  "v1",
                  "upgrade-requests",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.request`",
                },
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
            "type": "`$OBJECT`",
          },
          {
            "name": "upgradeRequest",
            "req": True,
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
                "parts": [
                  "v1",
                  "usage",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.usage`",
                },
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
