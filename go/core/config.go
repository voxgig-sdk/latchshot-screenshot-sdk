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
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
								"parts": []any{
									"healthz",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.render`",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "createdAt",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "email",
						"req": true,
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
						"name": "pageUrl",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "publicPageAuthority",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "replyConsent",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "safetyAcknowledged",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "startBoundaryAcknowledged",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updatedAt",
						"req": true,
						"type": "`$STRING`",
					},
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
								"parts": []any{
									"api",
									"monitoring-requests",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.request`",
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "createdAt",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currentContract",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "email",
						"req": true,
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
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "repositoryAuthority",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "repositoryUrl",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "requiredBehavior",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "safetyAcknowledged",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "startBoundaryAcknowledged",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updatedAt",
						"req": true,
						"type": "`$STRING`",
					},
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
								"parts": []any{
									"api",
									"pilot-requests",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.request`",
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
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "blockChats",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "blockTrackers",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "darkMode",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "delay",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "format",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fullPage",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "height",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "hideCookieBanners",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "hidePopups",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "kind",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "landscape",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "paper",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "quality",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "reducedMotion",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "scale",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "scrollPage",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "timeout",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "url",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "waitUntil",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "width",
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
								"parts": []any{
									"v1",
									"render",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
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
								"parts": []any{
									"v1",
									"screenshot",
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
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currentControls",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "desiredOutcome",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "email",
						"req": true,
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
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "repositoryAuthority",
						"req": true,
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "repositoryUrl",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "routePath",
						"req": true,
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
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "startBoundaryAcknowledged",
						"req": true,
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
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "updatedAt",
						"req": true,
						"type": "`$STRING`",
					},
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
								"parts": []any{
									"api",
									"safety-review-requests",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.request`",
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
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "email",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "expectedRenders",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "useCase",
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
								"parts": []any{
									"api",
									"trials",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.trial`",
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
						"name": "updatedAt",
						"req": true,
						"type": "`$STRING`",
					},
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
								"parts": []any{
									"v1",
									"upgrade-requests",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.request`",
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "upgradeRequest",
						"req": true,
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
								"parts": []any{
									"v1",
									"usage",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.usage`",
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
