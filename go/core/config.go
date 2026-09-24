package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "LatchshotScreenshot",
			"slug": "latchshot-screenshot",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://latchshot.fly.dev",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"health": map[string]any{},
				"monitoring_request": map[string]any{},
				"pilot_request": map[string]any{},
				"render": map[string]any{},
				"rendering": map[string]any{},
				"safety_review_request": map[string]any{},
				"trial": map[string]any{},
				"upgrade": map[string]any{},
				"usage": map[string]any{},
			},
		},
		"entity": map[string]any{
			"health": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"title": "Active",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "concurrency",
						"title": "Concurrency",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "pending",
						"title": "Pending",
						"type": "`$INTEGER`",
						"req": true,
					},
				},
				"name": "health",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/healthz",
								"segments": []any{
									map[string]any{
										"lit": "healthz",
									},
								},
								"parts": []any{
									"healthz",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.render`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"monitoring_request": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "changeContext",
						"title": "Change Context",
						"type": "`$STRING`",
						"short": "Optional non-sensitive description of what the weekly owner-written note should call out.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": "`$STRING`",
						"req": true,
						"short": "Address the owner may use only to reply about this monitoring request.",
						"format": "email",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "monitoringGoal",
						"title": "Monitoring Goal",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "pageCount",
						"title": "Page Count",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "pageUrl",
						"title": "Page Url",
						"type": "`$STRING`",
						"req": true,
						"short": "One exact public HTTP or HTTPS example page on port 80 or 443, without credentials, query data, or a fragment.",
						"format": "uri",
					},
					map[string]any{
						"name": "publicPageAuthority",
						"title": "Public Page Authority",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Confirms authority to request recurring captures of every proposed public page.",
					},
					map[string]any{
						"name": "replyConsent",
						"title": "Reply Consent",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Allows the owner to email only about this monitoring-pilot request.",
					},
					map[string]any{
						"name": "safetyAcknowledged",
						"title": "Safety Acknowledged",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Confirms removal of credentials, query secrets, customer data, signed links, and sensitive information.",
					},
					map[string]any{
						"name": "startBoundaryAcknowledged",
						"title": "Start Boundary Acknowledged",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Confirms that scope, delivery, retention, payment, and monitoring start require separate owner confirmation.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "monitoring_request",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/monitoring-requests",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "monitoring-requests",
									},
								},
								"parts": []any{
									"api",
									"monitoring-requests",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.request`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"pilot_request": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "acceptanceSample",
						"title": "Acceptance Sample",
						"type": "`$STRING`",
						"short": "Optional safe description of one maintainer-approved public page and required artifact shape.",
					},
					map[string]any{
						"name": "callSite",
						"title": "Call Site",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "Optional relative repository file path for the existing backend provider call.",
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "currentContract",
						"title": "Current Contract",
						"type": "`$STRING`",
						"short": "Optional non-secret current request, synchronous output, and application-owned byte handling.",
					},
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": "`$STRING`",
						"req": true,
						"short": "Address the owner may use only to reply about this pilot request.",
						"format": "email",
					},
					map[string]any{
						"name": "expectedRenders",
						"title": "Expected Renders",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "language",
						"title": "Language",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "replyConsent",
						"title": "Reply Consent",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Allows the owner to email only about this pilot request.",
					},
					map[string]any{
						"name": "repositoryAuthority",
						"title": "Repository Authority",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Confirms authority to review, merge, deploy, and roll back the public repository change.",
					},
					map[string]any{
						"name": "repositoryUrl",
						"title": "Repository Url",
						"type": "`$STRING`",
						"req": true,
						"short": "Exact public GitHub repository under the requester's control.",
						"format": "uri",
					},
					map[string]any{
						"name": "requiredBehavior",
						"title": "Required Behavior",
						"type": "`$STRING`",
						"short": "Optional provider behavior that must be preserved.",
					},
					map[string]any{
						"name": "safetyAcknowledged",
						"title": "Safety Acknowledged",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Confirms removal of credentials, private or signed URLs, customer data, payment details, and sensitive artifacts.",
					},
					map[string]any{
						"name": "startBoundaryAcknowledged",
						"title": "Start Boundary Acknowledged",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Confirms that no payment or work starts before separate owner confirmation.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "pilot_request",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/pilot-requests",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "pilot-requests",
									},
								},
								"parts": []any{
									"api",
									"pilot-requests",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.request`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"render": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "blockAds",
						"title": "Block Ads",
						"type": "`$BOOLEAN`",
						"short": "Best-effort blocking of requests to known third-party ad hosts.",
					},
					map[string]any{
						"name": "blockChats",
						"title": "Block Chats",
						"type": "`$BOOLEAN`",
						"short": "Best-effort blocking and hiding of known third-party chat widgets.",
					},
					map[string]any{
						"name": "blockTrackers",
						"title": "Block Trackers",
						"type": "`$BOOLEAN`",
						"short": "Best-effort blocking of requests to known third-party analytics and tracker hosts.",
					},
					map[string]any{
						"name": "darkMode",
						"title": "Dark Mode",
						"type": "`$BOOLEAN`",
						"short": "Emulate a dark color-scheme preference.",
					},
					map[string]any{
						"name": "delay",
						"title": "Delay",
						"type": "`$INTEGER`",
						"short": "Additional bounded wait in milliseconds after the lifecycle event.",
					},
					map[string]any{
						"name": "format",
						"title": "Format",
						"type": "`$STRING`",
						"short": "Exact artifact format.",
					},
					map[string]any{
						"name": "fullPage",
						"title": "Full Page",
						"type": "`$BOOLEAN`",
						"short": "Capture the bounded full document height for screenshots.",
					},
					map[string]any{
						"name": "height",
						"title": "Height",
						"type": "`$INTEGER`",
						"short": "Viewport height in CSS pixels.",
					},
					map[string]any{
						"name": "hideCookieBanners",
						"title": "Hide Cookie Banners",
						"type": "`$BOOLEAN`",
						"short": "Hide common cookie-consent overlays after loading.",
					},
					map[string]any{
						"name": "hidePopups",
						"title": "Hide Popups",
						"type": "`$BOOLEAN`",
						"short": "Hide common newsletter, signup, and discount popups without clicking, submitting, or setting state.",
					},
					map[string]any{
						"name": "kind",
						"title": "Kind",
						"type": "`$STRING`",
						"short": "Artifact family to return.",
					},
					map[string]any{
						"name": "landscape",
						"title": "Landscape",
						"type": "`$BOOLEAN`",
						"short": "Use landscape orientation for PDF rendering.",
					},
					map[string]any{
						"name": "paper",
						"title": "Paper",
						"type": "`$STRING`",
						"short": "Paper size used for PDF rendering.",
					},
					map[string]any{
						"name": "quality",
						"title": "Quality",
						"type": "`$INTEGER`",
						"short": "JPEG encoding quality.",
					},
					map[string]any{
						"name": "reducedMotion",
						"title": "Reduced Motion",
						"type": "`$BOOLEAN`",
						"short": "Emulate reduced motion to improve capture stability.",
					},
					map[string]any{
						"name": "scale",
						"title": "Scale",
						"type": "`$INTEGER`",
						"short": "Device scale factor used for image capture.",
					},
					map[string]any{
						"name": "scrollPage",
						"title": "Scroll Page",
						"type": "`$BOOLEAN`",
						"short": "Deterministically scroll before capture to activate lazy content.",
					},
					map[string]any{
						"name": "timeout",
						"title": "Timeout",
						"type": "`$INTEGER`",
						"short": "Navigation timeout in milliseconds.",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"req": true,
						"short": "Public HTTP or HTTPS page URL.",
						"format": "uri",
					},
					map[string]any{
						"name": "waitUntil",
						"title": "Wait Until",
						"type": "`$STRING`",
						"short": "Browser lifecycle event awaited before the optional delay.",
					},
					map[string]any{
						"name": "width",
						"title": "Width",
						"type": "`$INTEGER`",
						"short": "Viewport width in CSS pixels.",
					},
				},
				"name": "render",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/render",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "render",
									},
								},
								"parts": []any{
									"v1",
									"render",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"rendering": map[string]any{
				"fields": []any{},
				"name": "rendering",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/screenshot",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "screenshot",
									},
								},
								"parts": []any{
									"v1",
									"screenshot",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "block_ad",
											"orig": "block_ad",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "block_chat",
											"orig": "block_chat",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "block_tracker",
											"orig": "block_tracker",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "dark_mode",
											"orig": "dark_mode",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
											"kind": "query",
											"example": "png",
										},
										map[string]any{
											"name": "full_page",
											"orig": "full_page",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "height",
											"orig": "height",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 900,
										},
										map[string]any{
											"name": "hide_cookie_banner",
											"orig": "hide_cookie_banner",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "hide_popup",
											"orig": "hide_popup",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "quality",
											"orig": "quality",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 85,
										},
										map[string]any{
											"name": "scroll_page",
											"orig": "scroll_page",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "url",
											"orig": "url",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "https://example.com",
										},
										map[string]any{
											"name": "width",
											"orig": "width",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1440,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"safety_review_request": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "currentControls",
						"title": "Current Controls",
						"type": "`$STRING`",
						"req": true,
						"short": "Non-secret current URL, network, browser, resource, and caller controls.",
					},
					map[string]any{
						"name": "desiredOutcome",
						"title": "Desired Outcome",
						"type": "`$STRING`",
						"req": true,
						"short": "Requested risk report, focused patch, regression tests, and handoff outcome.",
					},
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": "`$STRING`",
						"req": true,
						"short": "Address the owner may use only to reply about this safety-review request.",
						"format": "email",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "language",
						"title": "Language",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "primaryConcern",
						"title": "Primary Concern",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "replyConsent",
						"title": "Reply Consent",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Allows the owner to email only about this safety-review request.",
					},
					map[string]any{
						"name": "repositoryAuthority",
						"title": "Repository Authority",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Confirms authority to review, merge, deploy, and roll back the public repository change.",
					},
					map[string]any{
						"name": "repositoryUrl",
						"title": "Repository Url",
						"type": "`$STRING`",
						"req": true,
						"short": "Exact public GitHub repository under the requester's control.",
						"format": "uri",
					},
					map[string]any{
						"name": "routePath",
						"title": "Route Path",
						"type": "`$STRING`",
						"req": true,
						"short": "One relative repository file path for the existing screenshot endpoint or worker.",
					},
					map[string]any{
						"name": "runtime",
						"title": "Runtime",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "safetyAcknowledged",
						"title": "Safety Acknowledged",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Confirms removal of credentials, private or signed URLs, customer data, production details, payment information, and sensitive artifacts.",
					},
					map[string]any{
						"name": "startBoundaryAcknowledged",
						"title": "Start Boundary Acknowledged",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "Confirms that no payment or work starts before separate owner confirmation.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "testEvidence",
						"title": "Test Evidence",
						"type": "`$STRING`",
						"req": true,
						"short": "Non-sensitive description of current happy-path and rejection tests, or none.",
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "safety_review_request",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/safety-review-requests",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "safety-review-requests",
									},
								},
								"parts": []any{
									"api",
									"safety-review-requests",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.request`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"trial": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "consent",
						"title": "Consent",
						"type": "`$BOOLEAN`",
						"short": "Optional permission for the owner to send product-fit guidance.",
					},
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": "`$STRING`",
						"req": true,
						"short": "Email used to enforce one lifetime Free-plan key.",
						"format": "email",
					},
					map[string]any{
						"name": "expectedRenders",
						"title": "Expected Renders",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Optional display name for owner review.",
					},
					map[string]any{
						"name": "useCase",
						"title": "Use Case",
						"type": "`$STRING`",
						"short": "Optional public-page capture use case.",
					},
				},
				"name": "trial",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/api/trials",
								"segments": []any{
									map[string]any{
										"lit": "api",
									},
									map[string]any{
										"lit": "trials",
									},
								},
								"parts": []any{
									"api",
									"trials",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.trial`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"upgrade": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "consent",
						"title": "Consent",
						"type": "`$BOOLEAN`",
						"req": true,
					},
					map[string]any{
						"name": "createdAt",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "currentPlan",
						"title": "Current Plan",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "note",
						"title": "Note",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "requestedPlan",
						"title": "Requested Plan",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "updatedAt",
						"title": "Updated At",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "upgrade",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/v1/upgrade-requests",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "upgrade-requests",
									},
								},
								"parts": []any{
									"v1",
									"upgrade-requests",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.request`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"usage": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "customer",
						"title": "Customer",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "links",
						"title": "Links",
						"type": "`$OBJECT`",
						"req": true,
						"short": "Stable self-serve continuation links.",
					},
					map[string]any{
						"name": "upgradeRequest",
						"title": "Upgrade Request",
						"type": "`$ANY`",
						"req": true,
						"short": "Latest paid-plan request attached to this key, or null when none exists.",
					},
					map[string]any{
						"name": "usage",
						"title": "Usage",
						"type": "`$OBJECT`",
						"req": true,
					},
				},
				"name": "usage",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/v1/usage",
								"segments": []any{
									map[string]any{
										"lit": "v1",
									},
									map[string]any{
										"lit": "usage",
									},
								},
								"parts": []any{
									"v1",
									"usage",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.usage`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
