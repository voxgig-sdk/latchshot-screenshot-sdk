package voxgiglatchshotscreenshotsdk

import (
	"github.com/voxgig-sdk/latchshot-screenshot-sdk/go/core"
	"github.com/voxgig-sdk/latchshot-screenshot-sdk/go/entity"
	"github.com/voxgig-sdk/latchshot-screenshot-sdk/go/feature"
	_ "github.com/voxgig-sdk/latchshot-screenshot-sdk/go/utility"
)

// Type aliases preserve external API.
type LatchshotScreenshotSDK = core.LatchshotScreenshotSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type LatchshotScreenshotEntity = core.LatchshotScreenshotEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type LatchshotScreenshotError = core.LatchshotScreenshotError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewHealthEntityFunc = func(client *core.LatchshotScreenshotSDK, entopts map[string]any) core.LatchshotScreenshotEntity {
		return entity.NewHealthEntity(client, entopts)
	}
	core.NewMonitoringRequestEntityFunc = func(client *core.LatchshotScreenshotSDK, entopts map[string]any) core.LatchshotScreenshotEntity {
		return entity.NewMonitoringRequestEntity(client, entopts)
	}
	core.NewPilotRequestEntityFunc = func(client *core.LatchshotScreenshotSDK, entopts map[string]any) core.LatchshotScreenshotEntity {
		return entity.NewPilotRequestEntity(client, entopts)
	}
	core.NewRenderEntityFunc = func(client *core.LatchshotScreenshotSDK, entopts map[string]any) core.LatchshotScreenshotEntity {
		return entity.NewRenderEntity(client, entopts)
	}
	core.NewRenderingEntityFunc = func(client *core.LatchshotScreenshotSDK, entopts map[string]any) core.LatchshotScreenshotEntity {
		return entity.NewRenderingEntity(client, entopts)
	}
	core.NewSafetyReviewRequestEntityFunc = func(client *core.LatchshotScreenshotSDK, entopts map[string]any) core.LatchshotScreenshotEntity {
		return entity.NewSafetyReviewRequestEntity(client, entopts)
	}
	core.NewTrialEntityFunc = func(client *core.LatchshotScreenshotSDK, entopts map[string]any) core.LatchshotScreenshotEntity {
		return entity.NewTrialEntity(client, entopts)
	}
	core.NewUpgradeEntityFunc = func(client *core.LatchshotScreenshotSDK, entopts map[string]any) core.LatchshotScreenshotEntity {
		return entity.NewUpgradeEntity(client, entopts)
	}
	core.NewUsageEntityFunc = func(client *core.LatchshotScreenshotSDK, entopts map[string]any) core.LatchshotScreenshotEntity {
		return entity.NewUsageEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewLatchshotScreenshotSDK = core.NewLatchshotScreenshotSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewLatchshotScreenshotSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *LatchshotScreenshotSDK  { return NewLatchshotScreenshotSDK(nil) }
func Test() *LatchshotScreenshotSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
