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

func TestPilotRequestEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.PilotRequest(nil)
		if ent == nil {
			t.Fatal("expected non-nil PilotRequestEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := pilot_requestBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "pilot_request." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set LATCHSHOT_SCREENSHOT_TEST_PILOT_REQUEST_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		pilotRequestRef01Ent := client.PilotRequest(nil)
		pilotRequestRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "pilot_request"}, setup.data), "pilot_request_ref01"))

		pilotRequestRef01DataResult, err := pilotRequestRef01Ent.Create(pilotRequestRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		pilotRequestRef01Data = core.ToMapAny(entityData(pilotRequestRef01DataResult))
		if pilotRequestRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if pilotRequestRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

	})
}

func pilot_requestBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "pilot_request", "PilotRequestTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read pilot_request test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse pilot_request test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"pilot_request01", "pilot_request02", "pilot_request03"},
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
	entidEnvRaw := os.Getenv("LATCHSHOT_SCREENSHOT_TEST_PILOT_REQUEST_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"LATCHSHOT_SCREENSHOT_TEST_PILOT_REQUEST_ENTID": idmap,
		"LATCHSHOT_SCREENSHOT_TEST_LIVE":      "FALSE",
		"LATCHSHOT_SCREENSHOT_TEST_EXPLAIN":   "FALSE",
		"LATCHSHOT_SCREENSHOT_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["LATCHSHOT_SCREENSHOT_TEST_PILOT_REQUEST_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["LATCHSHOT_SCREENSHOT_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["LATCHSHOT_SCREENSHOT_APIKEY"],
			},
			extra,
		})
		client = sdk.NewLatchshotScreenshotSDK(core.ToMapAny(mergedOpts))
	}

	live := env["LATCHSHOT_SCREENSHOT_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["LATCHSHOT_SCREENSHOT_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
