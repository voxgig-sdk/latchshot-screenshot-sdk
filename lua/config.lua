-- LatchshotScreenshot SDK configuration

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
            ["active"] = true,
            ["name"] = "ok",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "render",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "service",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
        },
        ["name"] = "health",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/healthz",
                ["parts"] = {
                  "healthz",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["monitoring_request"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "change_context",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "email",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "monitoring_goal",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "notice",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "page_count",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "page_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "public_page_authority",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "reply_consent",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "request",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "safety_acknowledged",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "start_boundary_acknowledged",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 10,
          },
        },
        ["name"] = "monitoring_request",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "POST",
                ["orig"] = "/api/monitoring-requests",
                ["parts"] = {
                  "api",
                  "monitoring-requests",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "create",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["pilot_request"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "acceptance_sample",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "call_site",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "current_contract",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "email",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "expected_render",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "language",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "notice",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "provider",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "reply_consent",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "repository_authority",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "repository_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 10,
          },
          {
            ["active"] = true,
            ["name"] = "request",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
            ["index$"] = 11,
          },
          {
            ["active"] = true,
            ["name"] = "required_behavior",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 12,
          },
          {
            ["active"] = true,
            ["name"] = "safety_acknowledged",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 13,
          },
          {
            ["active"] = true,
            ["name"] = "start_boundary_acknowledged",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 14,
          },
        },
        ["name"] = "pilot_request",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "POST",
                ["orig"] = "/api/pilot-requests",
                ["parts"] = {
                  "api",
                  "pilot-requests",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "create",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["render"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "block_ad",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "block_chat",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "block_tracker",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "dark_mode",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "delay",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "format",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "full_page",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "height",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "hide_cookie_banner",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "hide_popup",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "kind",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 10,
          },
          {
            ["active"] = true,
            ["name"] = "landscape",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 11,
          },
          {
            ["active"] = true,
            ["name"] = "paper",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 12,
          },
          {
            ["active"] = true,
            ["name"] = "quality",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 13,
          },
          {
            ["active"] = true,
            ["name"] = "reduced_motion",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 14,
          },
          {
            ["active"] = true,
            ["name"] = "scale",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 15,
          },
          {
            ["active"] = true,
            ["name"] = "scroll_page",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 16,
          },
          {
            ["active"] = true,
            ["name"] = "timeout",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 17,
          },
          {
            ["active"] = true,
            ["name"] = "url",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 18,
          },
          {
            ["active"] = true,
            ["name"] = "wait_until",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 19,
          },
          {
            ["active"] = true,
            ["name"] = "width",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 20,
          },
        },
        ["name"] = "render",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
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
                ["index$"] = 0,
              },
            },
            ["key$"] = "create",
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
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "block_ad",
                      ["orig"] = "block_ad",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "block_chat",
                      ["orig"] = "block_chat",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "block_tracker",
                      ["orig"] = "block_tracker",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "dark_mode",
                      ["orig"] = "dark_mode",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "png",
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "full_page",
                      ["orig"] = "full_page",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = 900,
                      ["kind"] = "query",
                      ["name"] = "height",
                      ["orig"] = "height",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "hide_cookie_banner",
                      ["orig"] = "hide_cookie_banner",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "hide_popup",
                      ["orig"] = "hide_popup",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = 85,
                      ["kind"] = "query",
                      ["name"] = "quality",
                      ["orig"] = "quality",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "scroll_page",
                      ["orig"] = "scroll_page",
                      ["reqd"] = false,
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "https://example.com",
                      ["kind"] = "query",
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = 1440,
                      ["kind"] = "query",
                      ["name"] = "width",
                      ["orig"] = "width",
                      ["reqd"] = false,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
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
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["safety_review_request"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "current_control",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "desired_outcome",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "email",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "language",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "notice",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "primary_concern",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "reply_consent",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "repository_authority",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "repository_url",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "request",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "route_path",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 10,
          },
          {
            ["active"] = true,
            ["name"] = "runtime",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 11,
          },
          {
            ["active"] = true,
            ["name"] = "safety_acknowledged",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 12,
          },
          {
            ["active"] = true,
            ["name"] = "start_boundary_acknowledged",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 13,
          },
          {
            ["active"] = true,
            ["name"] = "test_evidence",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 14,
          },
        },
        ["name"] = "safety_review_request",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "POST",
                ["orig"] = "/api/safety-review-requests",
                ["parts"] = {
                  "api",
                  "safety-review-requests",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "create",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["trial"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "consent",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "email",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "expected_render",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "name",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "use_case",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 4,
          },
        },
        ["name"] = "trial",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
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
                ["index$"] = 0,
              },
            },
            ["key$"] = "create",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["upgrade"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "consent",
            ["req"] = true,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "note",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "notice",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "request",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "requested_plan",
            ["req"] = true,
            ["type"] = "`$STRING`",
            ["index$"] = 4,
          },
        },
        ["name"] = "upgrade",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "POST",
                ["orig"] = "/v1/upgrade-requests",
                ["parts"] = {
                  "v1",
                  "upgrade-requests",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "create",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["usage"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "customer",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "link",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "upgrade_request",
            ["req"] = true,
            ["type"] = "`$ANY`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "usage",
            ["req"] = true,
            ["type"] = "`$OBJECT`",
            ["index$"] = 3,
          },
        },
        ["name"] = "usage",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
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
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
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
