-- LatchshotScreenshot SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "LatchshotScreenshot",
      slug = "latchshot-screenshot",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
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
            ["title"] = "Active",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
          },
          {
            ["name"] = "concurrency",
            ["title"] = "Concurrency",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
          },
          {
            ["name"] = "pending",
            ["title"] = "Pending",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
          },
        },
        ["name"] = "health",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/healthz",
                ["segments"] = {
                  {
                    ["lit"] = "healthz",
                  },
                },
                ["parts"] = {
                  "healthz",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.render`",
                },
                ["args"] = {},
                ["select"] = {},
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
            ["title"] = "Change Context",
            ["type"] = "`$STRING`",
            ["short"] = "Optional non-sensitive description of what the weekly owner-written note should call out.",
          },
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["format"] = "date-time",
          },
          {
            ["name"] = "email",
            ["title"] = "Email",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Address the owner may use only to reply about this monitoring request.",
            ["format"] = "email",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
          },
          {
            ["name"] = "monitoringGoal",
            ["title"] = "Monitoring Goal",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "pageCount",
            ["title"] = "Page Count",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "pageUrl",
            ["title"] = "Page Url",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "One exact public HTTP or HTTPS example page on port 80 or 443, without credentials, query data, or a fragment.",
            ["format"] = "uri",
          },
          {
            ["name"] = "publicPageAuthority",
            ["title"] = "Public Page Authority",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Confirms authority to request recurring captures of every proposed public page.",
          },
          {
            ["name"] = "replyConsent",
            ["title"] = "Reply Consent",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Allows the owner to email only about this monitoring-pilot request.",
          },
          {
            ["name"] = "safetyAcknowledged",
            ["title"] = "Safety Acknowledged",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Confirms removal of credentials, query secrets, customer data, signed links, and sensitive information.",
          },
          {
            ["name"] = "startBoundaryAcknowledged",
            ["title"] = "Start Boundary Acknowledged",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Confirms that scope, delivery, retention, payment, and monitoring start require separate owner confirmation.",
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["format"] = "date-time",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "monitoring_request",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/monitoring-requests",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "monitoring-requests",
                  },
                },
                ["parts"] = {
                  "api",
                  "monitoring-requests",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.request`",
                },
                ["args"] = {},
                ["select"] = {},
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
            ["title"] = "Acceptance Sample",
            ["type"] = "`$STRING`",
            ["short"] = "Optional safe description of one maintainer-approved public page and required artifact shape.",
          },
          {
            ["name"] = "callSite",
            ["title"] = "Call Site",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["create"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "Optional relative repository file path for the existing backend provider call.",
          },
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["format"] = "date-time",
          },
          {
            ["name"] = "currentContract",
            ["title"] = "Current Contract",
            ["type"] = "`$STRING`",
            ["short"] = "Optional non-secret current request, synchronous output, and application-owned byte handling.",
          },
          {
            ["name"] = "email",
            ["title"] = "Email",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Address the owner may use only to reply about this pilot request.",
            ["format"] = "email",
          },
          {
            ["name"] = "expectedRenders",
            ["title"] = "Expected Renders",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
          },
          {
            ["name"] = "language",
            ["title"] = "Language",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "provider",
            ["title"] = "Provider",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "replyConsent",
            ["title"] = "Reply Consent",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Allows the owner to email only about this pilot request.",
          },
          {
            ["name"] = "repositoryAuthority",
            ["title"] = "Repository Authority",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Confirms authority to review, merge, deploy, and roll back the public repository change.",
          },
          {
            ["name"] = "repositoryUrl",
            ["title"] = "Repository Url",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Exact public GitHub repository under the requester's control.",
            ["format"] = "uri",
          },
          {
            ["name"] = "requiredBehavior",
            ["title"] = "Required Behavior",
            ["type"] = "`$STRING`",
            ["short"] = "Optional provider behavior that must be preserved.",
          },
          {
            ["name"] = "safetyAcknowledged",
            ["title"] = "Safety Acknowledged",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Confirms removal of credentials, private or signed URLs, customer data, payment details, and sensitive artifacts.",
          },
          {
            ["name"] = "startBoundaryAcknowledged",
            ["title"] = "Start Boundary Acknowledged",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Confirms that no payment or work starts before separate owner confirmation.",
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["format"] = "date-time",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "pilot_request",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/pilot-requests",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "pilot-requests",
                  },
                },
                ["parts"] = {
                  "api",
                  "pilot-requests",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.request`",
                },
                ["args"] = {},
                ["select"] = {},
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
            ["title"] = "Block Ads",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Best-effort blocking of requests to known third-party ad hosts.",
          },
          {
            ["name"] = "blockChats",
            ["title"] = "Block Chats",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Best-effort blocking and hiding of known third-party chat widgets.",
          },
          {
            ["name"] = "blockTrackers",
            ["title"] = "Block Trackers",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Best-effort blocking of requests to known third-party analytics and tracker hosts.",
          },
          {
            ["name"] = "darkMode",
            ["title"] = "Dark Mode",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Emulate a dark color-scheme preference.",
          },
          {
            ["name"] = "delay",
            ["title"] = "Delay",
            ["type"] = "`$INTEGER`",
            ["short"] = "Additional bounded wait in milliseconds after the lifecycle event.",
          },
          {
            ["name"] = "format",
            ["title"] = "Format",
            ["type"] = "`$STRING`",
            ["short"] = "Exact artifact format.",
          },
          {
            ["name"] = "fullPage",
            ["title"] = "Full Page",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Capture the bounded full document height for screenshots.",
          },
          {
            ["name"] = "height",
            ["title"] = "Height",
            ["type"] = "`$INTEGER`",
            ["short"] = "Viewport height in CSS pixels.",
          },
          {
            ["name"] = "hideCookieBanners",
            ["title"] = "Hide Cookie Banners",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Hide common cookie-consent overlays after loading.",
          },
          {
            ["name"] = "hidePopups",
            ["title"] = "Hide Popups",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Hide common newsletter, signup, and discount popups without clicking, submitting, or setting state.",
          },
          {
            ["name"] = "kind",
            ["title"] = "Kind",
            ["type"] = "`$STRING`",
            ["short"] = "Artifact family to return.",
          },
          {
            ["name"] = "landscape",
            ["title"] = "Landscape",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Use landscape orientation for PDF rendering.",
          },
          {
            ["name"] = "paper",
            ["title"] = "Paper",
            ["type"] = "`$STRING`",
            ["short"] = "Paper size used for PDF rendering.",
          },
          {
            ["name"] = "quality",
            ["title"] = "Quality",
            ["type"] = "`$INTEGER`",
            ["short"] = "JPEG encoding quality.",
          },
          {
            ["name"] = "reducedMotion",
            ["title"] = "Reduced Motion",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Emulate reduced motion to improve capture stability.",
          },
          {
            ["name"] = "scale",
            ["title"] = "Scale",
            ["type"] = "`$INTEGER`",
            ["short"] = "Device scale factor used for image capture.",
          },
          {
            ["name"] = "scrollPage",
            ["title"] = "Scroll Page",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Deterministically scroll before capture to activate lazy content.",
          },
          {
            ["name"] = "timeout",
            ["title"] = "Timeout",
            ["type"] = "`$INTEGER`",
            ["short"] = "Navigation timeout in milliseconds.",
          },
          {
            ["name"] = "url",
            ["title"] = "Url",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Public HTTP or HTTPS page URL.",
            ["format"] = "uri",
          },
          {
            ["name"] = "waitUntil",
            ["title"] = "Wait Until",
            ["type"] = "`$STRING`",
            ["short"] = "Browser lifecycle event awaited before the optional delay.",
          },
          {
            ["name"] = "width",
            ["title"] = "Width",
            ["type"] = "`$INTEGER`",
            ["short"] = "Viewport width in CSS pixels.",
          },
        },
        ["name"] = "render",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/v1/render",
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "render",
                  },
                },
                ["parts"] = {
                  "v1",
                  "render",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {},
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
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/screenshot",
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "screenshot",
                  },
                },
                ["parts"] = {
                  "v1",
                  "screenshot",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "block_ad",
                      ["orig"] = "block_ad",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "block_chat",
                      ["orig"] = "block_chat",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "block_tracker",
                      ["orig"] = "block_tracker",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "dark_mode",
                      ["orig"] = "dark_mode",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "png",
                    },
                    {
                      ["name"] = "full_page",
                      ["orig"] = "full_page",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "height",
                      ["orig"] = "height",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 900,
                    },
                    {
                      ["name"] = "hide_cookie_banner",
                      ["orig"] = "hide_cookie_banner",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "hide_popup",
                      ["orig"] = "hide_popup",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "quality",
                      ["orig"] = "quality",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 85,
                    },
                    {
                      ["name"] = "scroll_page",
                      ["orig"] = "scroll_page",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "https://example.com",
                    },
                    {
                      ["name"] = "width",
                      ["orig"] = "width",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 1440,
                    },
                  },
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
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["format"] = "date-time",
          },
          {
            ["name"] = "currentControls",
            ["title"] = "Current Controls",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Non-secret current URL, network, browser, resource, and caller controls.",
          },
          {
            ["name"] = "desiredOutcome",
            ["title"] = "Desired Outcome",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Requested risk report, focused patch, regression tests, and handoff outcome.",
          },
          {
            ["name"] = "email",
            ["title"] = "Email",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Address the owner may use only to reply about this safety-review request.",
            ["format"] = "email",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
          },
          {
            ["name"] = "language",
            ["title"] = "Language",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "primaryConcern",
            ["title"] = "Primary Concern",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "replyConsent",
            ["title"] = "Reply Consent",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Allows the owner to email only about this safety-review request.",
          },
          {
            ["name"] = "repositoryAuthority",
            ["title"] = "Repository Authority",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Confirms authority to review, merge, deploy, and roll back the public repository change.",
          },
          {
            ["name"] = "repositoryUrl",
            ["title"] = "Repository Url",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Exact public GitHub repository under the requester's control.",
            ["format"] = "uri",
          },
          {
            ["name"] = "routePath",
            ["title"] = "Route Path",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "One relative repository file path for the existing screenshot endpoint or worker.",
          },
          {
            ["name"] = "runtime",
            ["title"] = "Runtime",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "safetyAcknowledged",
            ["title"] = "Safety Acknowledged",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Confirms removal of credentials, private or signed URLs, customer data, production details, payment information, and sensitive artifacts.",
          },
          {
            ["name"] = "startBoundaryAcknowledged",
            ["title"] = "Start Boundary Acknowledged",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
            ["short"] = "Confirms that no payment or work starts before separate owner confirmation.",
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "testEvidence",
            ["title"] = "Test Evidence",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Non-sensitive description of current happy-path and rejection tests, or none.",
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["format"] = "date-time",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "safety_review_request",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/safety-review-requests",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "safety-review-requests",
                  },
                },
                ["parts"] = {
                  "api",
                  "safety-review-requests",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.request`",
                },
                ["args"] = {},
                ["select"] = {},
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
            ["title"] = "Consent",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Optional permission for the owner to send product-fit guidance.",
          },
          {
            ["name"] = "email",
            ["title"] = "Email",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["short"] = "Email used to enforce one lifetime Free-plan key.",
            ["format"] = "email",
          },
          {
            ["name"] = "expectedRenders",
            ["title"] = "Expected Renders",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["short"] = "Optional display name for owner review.",
          },
          {
            ["name"] = "useCase",
            ["title"] = "Use Case",
            ["type"] = "`$STRING`",
            ["short"] = "Optional public-page capture use case.",
          },
        },
        ["name"] = "trial",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/api/trials",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "trials",
                  },
                },
                ["parts"] = {
                  "api",
                  "trials",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.trial`",
                },
                ["args"] = {},
                ["select"] = {},
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
            ["title"] = "Consent",
            ["type"] = "`$BOOLEAN`",
            ["req"] = true,
          },
          {
            ["name"] = "createdAt",
            ["title"] = "Created At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["format"] = "date-time",
          },
          {
            ["name"] = "currentPlan",
            ["title"] = "Current Plan",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$INTEGER`",
            ["req"] = true,
          },
          {
            ["name"] = "note",
            ["title"] = "Note",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "requestedPlan",
            ["title"] = "Requested Plan",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "updatedAt",
            ["title"] = "Updated At",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["format"] = "date-time",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "upgrade",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/v1/upgrade-requests",
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "upgrade-requests",
                  },
                },
                ["parts"] = {
                  "v1",
                  "upgrade-requests",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.request`",
                },
                ["args"] = {},
                ["select"] = {},
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
            ["title"] = "Customer",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "links",
            ["title"] = "Links",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
            ["short"] = "Stable self-serve continuation links.",
          },
          {
            ["name"] = "upgradeRequest",
            ["title"] = "Upgrade Request",
            ["type"] = "`$ANY`",
            ["req"] = true,
            ["short"] = "Latest paid-plan request attached to this key, or null when none exists.",
          },
          {
            ["name"] = "usage",
            ["title"] = "Usage",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
        },
        ["name"] = "usage",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/v1/usage",
                ["segments"] = {
                  {
                    ["lit"] = "v1",
                  },
                  {
                    ["lit"] = "usage",
                  },
                },
                ["parts"] = {
                  "v1",
                  "usage",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.usage`",
                },
                ["args"] = {},
                ["select"] = {},
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
