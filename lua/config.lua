-- LatchshotScreenshot SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "LatchshotScreenshot",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://latchshot.fly.dev",
      auth = {
        prefix = "Bearer",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["health"] = {},
        ["monitoring_request"] = {},
        ["pilot_request"] = {},
        ["render"] = {},
        ["rendering"] = {},
        ["safety_review_request"] = {},
        ["trial"] = {},
        ["upgrade"] = {},
        ["usage"] = {},
      },
    },
    entity = {
      ["health"] = {
        ["fields"] = {
          {
            ["name"] = "active",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "concurrency",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "pending",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "health",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/healthz",
                ["parts"] = {
                  "healthz",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.render`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["monitoring_request"] = {
        ["fields"] = {
          {
            ["name"] = "changeContext",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "createdAt",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "email",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "monitoringGoal",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pageCount",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pageUrl",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "publicPageAuthority",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "replyConsent",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "safetyAcknowledged",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "startBoundaryAcknowledged",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "status",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updatedAt",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "monitoring_request",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/monitoring-requests",
                ["parts"] = {
                  "api",
                  "monitoring-requests",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.request`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["pilot_request"] = {
        ["fields"] = {
          {
            ["name"] = "acceptanceSample",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "callSite",
            ["op"] = {
              ["create"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "createdAt",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "currentContract",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "email",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "expectedRenders",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "language",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "provider",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "replyConsent",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "repositoryAuthority",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "repositoryUrl",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "requiredBehavior",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "safetyAcknowledged",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "startBoundaryAcknowledged",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "status",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updatedAt",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "pilot_request",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/pilot-requests",
                ["parts"] = {
                  "api",
                  "pilot-requests",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.request`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["render"] = {
        ["fields"] = {
          {
            ["name"] = "blockAds",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "blockChats",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "blockTrackers",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "darkMode",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "delay",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "format",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "fullPage",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "height",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "hideCookieBanners",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "hidePopups",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "kind",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "landscape",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "paper",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "quality",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "reducedMotion",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "scale",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "scrollPage",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "timeout",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "url",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "waitUntil",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "width",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "render",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/v1/render",
                ["parts"] = {
                  "v1",
                  "render",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["rendering"] = {
        ["fields"] = {},
        ["name"] = "rendering",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "block_ad",
                      ["orig"] = "block_ad",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "block_chat",
                      ["orig"] = "block_chat",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "block_tracker",
                      ["orig"] = "block_tracker",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "dark_mode",
                      ["orig"] = "dark_mode",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = "png",
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "full_page",
                      ["orig"] = "full_page",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = 900,
                      ["kind"] = "query",
                      ["name"] = "height",
                      ["orig"] = "height",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "hide_cookie_banner",
                      ["orig"] = "hide_cookie_banner",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "hide_popup",
                      ["orig"] = "hide_popup",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = 85,
                      ["kind"] = "query",
                      ["name"] = "quality",
                      ["orig"] = "quality",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "scroll_page",
                      ["orig"] = "scroll_page",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = "https://example.com",
                      ["kind"] = "query",
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 1440,
                      ["kind"] = "query",
                      ["name"] = "width",
                      ["orig"] = "width",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/screenshot",
                ["parts"] = {
                  "v1",
                  "screenshot",
                },
                ["select"] = {
                  ["exist"] = {
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
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["safety_review_request"] = {
        ["fields"] = {
          {
            ["name"] = "createdAt",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "currentControls",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "desiredOutcome",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "email",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "language",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "primaryConcern",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "replyConsent",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "repositoryAuthority",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "repositoryUrl",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "routePath",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "runtime",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "safetyAcknowledged",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "startBoundaryAcknowledged",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "status",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "testEvidence",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updatedAt",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "safety_review_request",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/safety-review-requests",
                ["parts"] = {
                  "api",
                  "safety-review-requests",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.request`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["trial"] = {
        ["fields"] = {
          {
            ["name"] = "consent",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "email",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "expectedRenders",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "useCase",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "trial",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/trials",
                ["parts"] = {
                  "api",
                  "trials",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.trial`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["upgrade"] = {
        ["fields"] = {
          {
            ["name"] = "consent",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "createdAt",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "currentPlan",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "note",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "requestedPlan",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "updatedAt",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "upgrade",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/v1/upgrade-requests",
                ["parts"] = {
                  "v1",
                  "upgrade-requests",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.request`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["usage"] = {
        ["fields"] = {
          {
            ["name"] = "customer",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "links",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "upgradeRequest",
            ["req"] = true,
            ["type"] = "`$ANY`",
          },
          {
            ["name"] = "usage",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "usage",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/usage",
                ["parts"] = {
                  "v1",
                  "usage",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.usage`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
