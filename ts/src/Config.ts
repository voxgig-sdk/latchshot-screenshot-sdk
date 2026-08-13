
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'LatchshotScreenshot',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: 'https://latchshot.fly.dev',

    auth: {
      prefix: 'Bearer',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      health: {
      },

      monitoring_request: {
      },

      pilot_request: {
      },

      render: {
      },

      rendering: {
      },

      safety_review_request: {
      },

      trial: {
      },

      upgrade: {
      },

      usage: {
      },

    }
  }


  entity = {
    "health": {
      "fields": [
        {
          "active": true,
          "name": "active",
          "req": true,
          "type": "`$INTEGER`",
          "index$": 0
        },
        {
          "active": true,
          "name": "concurrency",
          "req": true,
          "type": "`$INTEGER`",
          "index$": 1
        },
        {
          "active": true,
          "name": "pending",
          "req": true,
          "type": "`$INTEGER`",
          "index$": 2
        }
      ],
      "name": "health",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/healthz",
              "parts": [
                "healthz"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.render`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "monitoring_request": {
      "fields": [
        {
          "active": true,
          "name": "changeContext",
          "req": false,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "createdAt",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "email",
          "req": true,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$INTEGER`",
          "index$": 3
        },
        {
          "active": true,
          "name": "monitoringGoal",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "pageCount",
          "req": true,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "pageUrl",
          "req": true,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "publicPageAuthority",
          "req": true,
          "type": "`$BOOLEAN`",
          "index$": 7
        },
        {
          "active": true,
          "name": "replyConsent",
          "req": true,
          "type": "`$BOOLEAN`",
          "index$": 8
        },
        {
          "active": true,
          "name": "safetyAcknowledged",
          "req": true,
          "type": "`$BOOLEAN`",
          "index$": 9
        },
        {
          "active": true,
          "name": "startBoundaryAcknowledged",
          "req": true,
          "type": "`$BOOLEAN`",
          "index$": 10
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$STRING`",
          "index$": 11
        },
        {
          "active": true,
          "name": "updatedAt",
          "req": true,
          "type": "`$STRING`",
          "index$": 12
        }
      ],
      "name": "monitoring_request",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/monitoring-requests",
              "parts": [
                "api",
                "monitoring-requests"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.request`"
              },
              "index$": 0
            }
          ],
          "key$": "create"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "pilot_request": {
      "fields": [
        {
          "active": true,
          "name": "acceptanceSample",
          "req": false,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "callSite",
          "op": {
            "create": {
              "req": false,
              "type": "`$STRING`"
            }
          },
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "createdAt",
          "req": true,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "currentContract",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "email",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "expectedRenders",
          "req": false,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$INTEGER`",
          "index$": 6
        },
        {
          "active": true,
          "name": "language",
          "req": false,
          "type": "`$STRING`",
          "index$": 7
        },
        {
          "active": true,
          "name": "provider",
          "req": false,
          "type": "`$STRING`",
          "index$": 8
        },
        {
          "active": true,
          "name": "replyConsent",
          "req": true,
          "type": "`$BOOLEAN`",
          "index$": 9
        },
        {
          "active": true,
          "name": "repositoryAuthority",
          "req": true,
          "type": "`$BOOLEAN`",
          "index$": 10
        },
        {
          "active": true,
          "name": "repositoryUrl",
          "req": true,
          "type": "`$STRING`",
          "index$": 11
        },
        {
          "active": true,
          "name": "requiredBehavior",
          "req": false,
          "type": "`$STRING`",
          "index$": 12
        },
        {
          "active": true,
          "name": "safetyAcknowledged",
          "req": true,
          "type": "`$BOOLEAN`",
          "index$": 13
        },
        {
          "active": true,
          "name": "startBoundaryAcknowledged",
          "req": true,
          "type": "`$BOOLEAN`",
          "index$": 14
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$STRING`",
          "index$": 15
        },
        {
          "active": true,
          "name": "updatedAt",
          "req": true,
          "type": "`$STRING`",
          "index$": 16
        }
      ],
      "name": "pilot_request",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/pilot-requests",
              "parts": [
                "api",
                "pilot-requests"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.request`"
              },
              "index$": 0
            }
          ],
          "key$": "create"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "render": {
      "fields": [
        {
          "active": true,
          "name": "blockAds",
          "req": false,
          "type": "`$BOOLEAN`",
          "index$": 0
        },
        {
          "active": true,
          "name": "blockChats",
          "req": false,
          "type": "`$BOOLEAN`",
          "index$": 1
        },
        {
          "active": true,
          "name": "blockTrackers",
          "req": false,
          "type": "`$BOOLEAN`",
          "index$": 2
        },
        {
          "active": true,
          "name": "darkMode",
          "req": false,
          "type": "`$BOOLEAN`",
          "index$": 3
        },
        {
          "active": true,
          "name": "delay",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 4
        },
        {
          "active": true,
          "name": "format",
          "req": false,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "fullPage",
          "req": false,
          "type": "`$BOOLEAN`",
          "index$": 6
        },
        {
          "active": true,
          "name": "height",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 7
        },
        {
          "active": true,
          "name": "hideCookieBanners",
          "req": false,
          "type": "`$BOOLEAN`",
          "index$": 8
        },
        {
          "active": true,
          "name": "hidePopups",
          "req": false,
          "type": "`$BOOLEAN`",
          "index$": 9
        },
        {
          "active": true,
          "name": "kind",
          "req": false,
          "type": "`$STRING`",
          "index$": 10
        },
        {
          "active": true,
          "name": "landscape",
          "req": false,
          "type": "`$BOOLEAN`",
          "index$": 11
        },
        {
          "active": true,
          "name": "paper",
          "req": false,
          "type": "`$STRING`",
          "index$": 12
        },
        {
          "active": true,
          "name": "quality",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 13
        },
        {
          "active": true,
          "name": "reducedMotion",
          "req": false,
          "type": "`$BOOLEAN`",
          "index$": 14
        },
        {
          "active": true,
          "name": "scale",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 15
        },
        {
          "active": true,
          "name": "scrollPage",
          "req": false,
          "type": "`$BOOLEAN`",
          "index$": 16
        },
        {
          "active": true,
          "name": "timeout",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 17
        },
        {
          "active": true,
          "name": "url",
          "req": true,
          "type": "`$STRING`",
          "index$": 18
        },
        {
          "active": true,
          "name": "waitUntil",
          "req": false,
          "type": "`$STRING`",
          "index$": 19
        },
        {
          "active": true,
          "name": "width",
          "req": false,
          "type": "`$INTEGER`",
          "index$": 20
        }
      ],
      "name": "render",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/v1/render",
              "parts": [
                "v1",
                "render"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "create"
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
              "active": true,
              "args": {
                "query": [
                  {
                    "active": true,
                    "example": false,
                    "kind": "query",
                    "name": "block_ad",
                    "orig": "block_ad",
                    "reqd": false,
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "active": true,
                    "example": false,
                    "kind": "query",
                    "name": "block_chat",
                    "orig": "block_chat",
                    "reqd": false,
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "active": true,
                    "example": false,
                    "kind": "query",
                    "name": "block_tracker",
                    "orig": "block_tracker",
                    "reqd": false,
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "active": true,
                    "example": false,
                    "kind": "query",
                    "name": "dark_mode",
                    "orig": "dark_mode",
                    "reqd": false,
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "active": true,
                    "example": "png",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": false,
                    "kind": "query",
                    "name": "full_page",
                    "orig": "full_page",
                    "reqd": false,
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "active": true,
                    "example": 900,
                    "kind": "query",
                    "name": "height",
                    "orig": "height",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "example": false,
                    "kind": "query",
                    "name": "hide_cookie_banner",
                    "orig": "hide_cookie_banner",
                    "reqd": false,
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "active": true,
                    "example": false,
                    "kind": "query",
                    "name": "hide_popup",
                    "orig": "hide_popup",
                    "reqd": false,
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "active": true,
                    "example": 85,
                    "kind": "query",
                    "name": "quality",
                    "orig": "quality",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "example": false,
                    "kind": "query",
                    "name": "scroll_page",
                    "orig": "scroll_page",
                    "reqd": false,
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "active": true,
                    "example": "https://example.com",
                    "kind": "query",
                    "name": "url",
                    "orig": "url",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": 1440,
                    "kind": "query",
                    "name": "width",
                    "orig": "width",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/v1/screenshot",
              "parts": [
                "v1",
                "screenshot"
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
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "safety_review_request": {
      "fields": [
        {
          "active": true,
          "name": "createdAt",
          "req": true,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "currentControls",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "desiredOutcome",
          "req": true,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "email",
          "req": true,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$INTEGER`",
          "index$": 4
        },
        {
          "active": true,
          "name": "language",
          "req": true,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "primaryConcern",
          "req": true,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "replyConsent",
          "req": true,
          "type": "`$BOOLEAN`",
          "index$": 7
        },
        {
          "active": true,
          "name": "repositoryAuthority",
          "req": true,
          "type": "`$BOOLEAN`",
          "index$": 8
        },
        {
          "active": true,
          "name": "repositoryUrl",
          "req": true,
          "type": "`$STRING`",
          "index$": 9
        },
        {
          "active": true,
          "name": "routePath",
          "req": true,
          "type": "`$STRING`",
          "index$": 10
        },
        {
          "active": true,
          "name": "runtime",
          "req": true,
          "type": "`$STRING`",
          "index$": 11
        },
        {
          "active": true,
          "name": "safetyAcknowledged",
          "req": true,
          "type": "`$BOOLEAN`",
          "index$": 12
        },
        {
          "active": true,
          "name": "startBoundaryAcknowledged",
          "req": true,
          "type": "`$BOOLEAN`",
          "index$": 13
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$STRING`",
          "index$": 14
        },
        {
          "active": true,
          "name": "testEvidence",
          "req": true,
          "type": "`$STRING`",
          "index$": 15
        },
        {
          "active": true,
          "name": "updatedAt",
          "req": true,
          "type": "`$STRING`",
          "index$": 16
        }
      ],
      "name": "safety_review_request",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/safety-review-requests",
              "parts": [
                "api",
                "safety-review-requests"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.request`"
              },
              "index$": 0
            }
          ],
          "key$": "create"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "trial": {
      "fields": [
        {
          "active": true,
          "name": "consent",
          "req": false,
          "type": "`$BOOLEAN`",
          "index$": 0
        },
        {
          "active": true,
          "name": "email",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "expectedRenders",
          "req": false,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "name",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "useCase",
          "req": false,
          "type": "`$STRING`",
          "index$": 4
        }
      ],
      "name": "trial",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/api/trials",
              "parts": [
                "api",
                "trials"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.trial`"
              },
              "index$": 0
            }
          ],
          "key$": "create"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "upgrade": {
      "fields": [
        {
          "active": true,
          "name": "consent",
          "req": true,
          "type": "`$BOOLEAN`",
          "index$": 0
        },
        {
          "active": true,
          "name": "createdAt",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "currentPlan",
          "req": true,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$INTEGER`",
          "index$": 3
        },
        {
          "active": true,
          "name": "note",
          "req": false,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "requestedPlan",
          "req": true,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "updatedAt",
          "req": true,
          "type": "`$STRING`",
          "index$": 7
        }
      ],
      "name": "upgrade",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/v1/upgrade-requests",
              "parts": [
                "v1",
                "upgrade-requests"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.request`"
              },
              "index$": 0
            }
          ],
          "key$": "create"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "usage": {
      "fields": [
        {
          "active": true,
          "name": "customer",
          "req": true,
          "type": "`$OBJECT`",
          "index$": 0
        },
        {
          "active": true,
          "name": "links",
          "req": true,
          "type": "`$OBJECT`",
          "index$": 1
        },
        {
          "active": true,
          "name": "upgradeRequest",
          "req": true,
          "type": "`$ANY`",
          "index$": 2
        },
        {
          "active": true,
          "name": "usage",
          "req": true,
          "type": "`$OBJECT`",
          "index$": 3
        }
      ],
      "name": "usage",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/v1/usage",
              "parts": [
                "v1",
                "usage"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.usage`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

