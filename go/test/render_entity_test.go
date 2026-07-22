package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/latchshot-screenshot-sdk/go"
	"github.com/voxgig-sdk/latchshot-screenshot-sdk/go/core"

	vs "github.com/voxgig-sdk/latchshot-screenshot-sdk/go/utility/struct"
)

func TestRenderEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Render(nil)
		if ent == nil {
			t.Fatal("expected non-nil RenderEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := renderBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "render." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set LATCHSHOTSCREENSHOT_TEST_RENDER_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		renderRef01Ent := client.Render(nil)
		renderRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "render"}, setup.data), "render_ref01"))

		renderRef01DataResult, err := renderRef01Ent.Create(renderRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		renderRef01Data = core.ToMapAny(renderRef01DataResult)
		if renderRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

	})
}

func renderBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "render", "RenderTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read render test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse render test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"render01", "render02", "render03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("LATCHSHOTSCREENSHOT_TEST_RENDER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LATCHSHOTSCREENSHOT_TEST_RENDER_ENTID": idmap,
		"LATCHSHOTSCREENSHOT_TEST_LIVE":      "FALSE",
		"LATCHSHOTSCREENSHOT_TEST_EXPLAIN":   "FALSE",
		"LATCHSHOTSCREENSHOT_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["LATCHSHOTSCREENSHOT_TEST_RENDER_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["LATCHSHOTSCREENSHOT_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["LATCHSHOTSCREENSHOT_APIKEY"],
			},
			extra,
		})
		client = sdk.NewLatchshotScreenshotSDK(core.ToMapAny(mergedOpts))
	}

	live := env["LATCHSHOTSCREENSHOT_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["LATCHSHOTSCREENSHOT_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
