package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewHealthEntityFunc func(client *LatchshotScreenshotSDK, entopts map[string]any) LatchshotScreenshotEntity

var NewMonitoringRequestEntityFunc func(client *LatchshotScreenshotSDK, entopts map[string]any) LatchshotScreenshotEntity

var NewPilotRequestEntityFunc func(client *LatchshotScreenshotSDK, entopts map[string]any) LatchshotScreenshotEntity

var NewRenderEntityFunc func(client *LatchshotScreenshotSDK, entopts map[string]any) LatchshotScreenshotEntity

var NewRenderingEntityFunc func(client *LatchshotScreenshotSDK, entopts map[string]any) LatchshotScreenshotEntity

var NewSafetyReviewRequestEntityFunc func(client *LatchshotScreenshotSDK, entopts map[string]any) LatchshotScreenshotEntity

var NewTrialEntityFunc func(client *LatchshotScreenshotSDK, entopts map[string]any) LatchshotScreenshotEntity

var NewUpgradeEntityFunc func(client *LatchshotScreenshotSDK, entopts map[string]any) LatchshotScreenshotEntity

var NewUsageEntityFunc func(client *LatchshotScreenshotSDK, entopts map[string]any) LatchshotScreenshotEntity

