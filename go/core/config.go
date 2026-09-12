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
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
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
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "concurrency",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "pending",
						"req": true,
						"type": "`$INTEGER`",
					},
				},
				"name": "health",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/healthz",
								"segments": []any{
									map[string]any{
										"lit": "healthz",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.render`",
								},
								"parts": []any{
									"healthz",
								},
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
						"short": "Optional non-sensitive description of what the weekly owner-written note should call out.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "email",
						"name": "email",
						"req": true,
						"short": "Address the owner may use only to reply about this monitoring request.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "monitoringGoal",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pageCount",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "pageUrl",
						"req": true,
						"short": "One exact public HTTP or HTTPS example page on port 80 or 443, without credentials, query data, or a fragment.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "publicPageAuthority",
						"req": true,
						"short": "Confirms authority to request recurring captures of every proposed public page.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "replyConsent",
						"req": true,
						"short": "Allows the owner to email only about this monitoring-pilot request.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "safetyAcknowledged",
						"req": true,
						"short": "Confirms removal of credentials, query secrets, customer data, signed links, and sensitive information.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "startBoundaryAcknowledged",
						"req": true,
						"short": "Confirms that scope, delivery, retention, payment, and monitoring start require separate owner confirmation.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"type": "`$STRING`",
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
								"args": map[string]any{},
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
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.request`",
								},
								"parts": []any{
									"api",
									"monitoring-requests",
								},
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
						"short": "Optional safe description of one maintainer-approved public page and required artifact shape.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "callSite",
						"op": map[string]any{
							"create": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "Optional relative repository file path for the existing backend provider call.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currentContract",
						"short": "Optional non-secret current request, synchronous output, and application-owned byte handling.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "email",
						"name": "email",
						"req": true,
						"short": "Address the owner may use only to reply about this pilot request.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "expectedRenders",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "language",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "replyConsent",
						"req": true,
						"short": "Allows the owner to email only about this pilot request.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "repositoryAuthority",
						"req": true,
						"short": "Confirms authority to review, merge, deploy, and roll back the public repository change.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "uri",
						"name": "repositoryUrl",
						"req": true,
						"short": "Exact public GitHub repository under the requester's control.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "requiredBehavior",
						"short": "Optional provider behavior that must be preserved.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "safetyAcknowledged",
						"req": true,
						"short": "Confirms removal of credentials, private or signed URLs, customer data, payment details, and sensitive artifacts.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "startBoundaryAcknowledged",
						"req": true,
						"short": "Confirms that no payment or work starts before separate owner confirmation.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"type": "`$STRING`",
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
								"args": map[string]any{},
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
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.request`",
								},
								"parts": []any{
									"api",
									"pilot-requests",
								},
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
						"short": "Best-effort blocking of requests to known third-party ad hosts.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "blockChats",
						"short": "Best-effort blocking and hiding of known third-party chat widgets.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "blockTrackers",
						"short": "Best-effort blocking of requests to known third-party analytics and tracker hosts.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "darkMode",
						"short": "Emulate a dark color-scheme preference.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "delay",
						"short": "Additional bounded wait in milliseconds after the lifecycle event.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "format",
						"short": "Exact artifact format.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fullPage",
						"short": "Capture the bounded full document height for screenshots.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "height",
						"short": "Viewport height in CSS pixels.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "hideCookieBanners",
						"short": "Hide common cookie-consent overlays after loading.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "hidePopups",
						"short": "Hide common newsletter, signup, and discount popups without clicking, submitting, or setting state.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "kind",
						"short": "Artifact family to return.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "landscape",
						"short": "Use landscape orientation for PDF rendering.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "paper",
						"short": "Paper size used for PDF rendering.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "quality",
						"short": "JPEG encoding quality.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "reducedMotion",
						"short": "Emulate reduced motion to improve capture stability.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "scale",
						"short": "Device scale factor used for image capture.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "scrollPage",
						"short": "Deterministically scroll before capture to activate lazy content.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "timeout",
						"short": "Navigation timeout in milliseconds.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "uri",
						"name": "url",
						"req": true,
						"short": "Public HTTP or HTTPS page URL.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "waitUntil",
						"short": "Browser lifecycle event awaited before the optional delay.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "width",
						"short": "Viewport width in CSS pixels.",
						"type": "`$INTEGER`",
					},
				},
				"name": "render",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
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
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"render",
								},
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
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "block_ad",
											"orig": "block_ad",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "block_chat",
											"orig": "block_chat",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "block_tracker",
											"orig": "block_tracker",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "dark_mode",
											"orig": "dark_mode",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "png",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "full_page",
											"orig": "full_page",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": 900,
											"kind": "query",
											"name": "height",
											"orig": "height",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "hide_cookie_banner",
											"orig": "hide_cookie_banner",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "hide_popup",
											"orig": "hide_popup",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": 85,
											"kind": "query",
											"name": "quality",
											"orig": "quality",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "scroll_page",
											"orig": "scroll_page",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "https://example.com",
											"kind": "query",
											"name": "url",
											"orig": "url",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1440,
											"kind": "query",
											"name": "width",
											"orig": "width",
											"type": "`$INTEGER`",
										},
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"v1",
									"screenshot",
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
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currentControls",
						"req": true,
						"short": "Non-secret current URL, network, browser, resource, and caller controls.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "desiredOutcome",
						"req": true,
						"short": "Requested risk report, focused patch, regression tests, and handoff outcome.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "email",
						"name": "email",
						"req": true,
						"short": "Address the owner may use only to reply about this safety-review request.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "language",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "primaryConcern",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "replyConsent",
						"req": true,
						"short": "Allows the owner to email only about this safety-review request.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "repositoryAuthority",
						"req": true,
						"short": "Confirms authority to review, merge, deploy, and roll back the public repository change.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "uri",
						"name": "repositoryUrl",
						"req": true,
						"short": "Exact public GitHub repository under the requester's control.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "routePath",
						"req": true,
						"short": "One relative repository file path for the existing screenshot endpoint or worker.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "runtime",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "safetyAcknowledged",
						"req": true,
						"short": "Confirms removal of credentials, private or signed URLs, customer data, production details, payment information, and sensitive artifacts.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "startBoundaryAcknowledged",
						"req": true,
						"short": "Confirms that no payment or work starts before separate owner confirmation.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "testEvidence",
						"req": true,
						"short": "Non-sensitive description of current happy-path and rejection tests, or none.",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"type": "`$STRING`",
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
								"args": map[string]any{},
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
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.request`",
								},
								"parts": []any{
									"api",
									"safety-review-requests",
								},
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
						"short": "Optional permission for the owner to send product-fit guidance.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "email",
						"name": "email",
						"req": true,
						"short": "Email used to enforce one lifetime Free-plan key.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "expectedRenders",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Optional display name for owner review.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "useCase",
						"short": "Optional public-page capture use case.",
						"type": "`$STRING`",
					},
				},
				"name": "trial",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
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
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.trial`",
								},
								"parts": []any{
									"api",
									"trials",
								},
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
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "date-time",
						"name": "createdAt",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currentPlan",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "note",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "requestedPlan",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "updatedAt",
						"req": true,
						"type": "`$STRING`",
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
								"args": map[string]any{},
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
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.request`",
								},
								"parts": []any{
									"v1",
									"upgrade-requests",
								},
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
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "links",
						"req": true,
						"short": "Stable self-serve continuation links.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "upgradeRequest",
						"req": true,
						"short": "Latest paid-plan request attached to this key, or null when none exists.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "usage",
						"req": true,
						"type": "`$OBJECT`",
					},
				},
				"name": "usage",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
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
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.usage`",
								},
								"parts": []any{
									"v1",
									"usage",
								},
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
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
