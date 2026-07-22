package core

import (
	"fmt"

	vs "github.com/voxgig-sdk/latchshot-screenshot-sdk/go/utility/struct"
)

type LatchshotScreenshotSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewLatchshotScreenshotSDK(options map[string]any) *LatchshotScreenshotSDK {
	sdk := &LatchshotScreenshotSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := MakeConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath([]any{"feature", "test", "active"}, sdk.options) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath([]any{"__derived__", "featureorder"}, sdk.options).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *LatchshotScreenshotSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *LatchshotScreenshotSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *LatchshotScreenshotSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *LatchshotScreenshotSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

func (sdk *LatchshotScreenshotSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}


// Health returns a Health entity bound to this client.
// Idiomatic usage: client.Health(nil).List(nil, nil) or
// client.Health(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LatchshotScreenshotSDK) Health(data map[string]any) LatchshotScreenshotEntity {
	return NewHealthEntityFunc(sdk, data)
}


// MonitoringRequest returns a MonitoringRequest entity bound to this client.
// Idiomatic usage: client.MonitoringRequest(nil).List(nil, nil) or
// client.MonitoringRequest(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LatchshotScreenshotSDK) MonitoringRequest(data map[string]any) LatchshotScreenshotEntity {
	return NewMonitoringRequestEntityFunc(sdk, data)
}


// PilotRequest returns a PilotRequest entity bound to this client.
// Idiomatic usage: client.PilotRequest(nil).List(nil, nil) or
// client.PilotRequest(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LatchshotScreenshotSDK) PilotRequest(data map[string]any) LatchshotScreenshotEntity {
	return NewPilotRequestEntityFunc(sdk, data)
}


// Render returns a Render entity bound to this client.
// Idiomatic usage: client.Render(nil).List(nil, nil) or
// client.Render(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LatchshotScreenshotSDK) Render(data map[string]any) LatchshotScreenshotEntity {
	return NewRenderEntityFunc(sdk, data)
}


// Rendering returns a Rendering entity bound to this client.
// Idiomatic usage: client.Rendering(nil).List(nil, nil) or
// client.Rendering(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LatchshotScreenshotSDK) Rendering(data map[string]any) LatchshotScreenshotEntity {
	return NewRenderingEntityFunc(sdk, data)
}


// SafetyReviewRequest returns a SafetyReviewRequest entity bound to this client.
// Idiomatic usage: client.SafetyReviewRequest(nil).List(nil, nil) or
// client.SafetyReviewRequest(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LatchshotScreenshotSDK) SafetyReviewRequest(data map[string]any) LatchshotScreenshotEntity {
	return NewSafetyReviewRequestEntityFunc(sdk, data)
}


// Trial returns a Trial entity bound to this client.
// Idiomatic usage: client.Trial(nil).List(nil, nil) or
// client.Trial(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LatchshotScreenshotSDK) Trial(data map[string]any) LatchshotScreenshotEntity {
	return NewTrialEntityFunc(sdk, data)
}


// Upgrade returns a Upgrade entity bound to this client.
// Idiomatic usage: client.Upgrade(nil).List(nil, nil) or
// client.Upgrade(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LatchshotScreenshotSDK) Upgrade(data map[string]any) LatchshotScreenshotEntity {
	return NewUpgradeEntityFunc(sdk, data)
}


// Usage returns a Usage entity bound to this client.
// Idiomatic usage: client.Usage(nil).List(nil, nil) or
// client.Usage(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *LatchshotScreenshotSDK) Usage(data map[string]any) LatchshotScreenshotEntity {
	return NewUsageEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *LatchshotScreenshotSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewLatchshotScreenshotSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
