// Typed models for the LatchshotScreenshot SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Health is the typed data model for the health entity.
type Health struct {
	Ok bool `json:"ok"`
	Render map[string]any `json:"render"`
	Service string `json:"service"`
}

// HealthLoadMatch is the typed request payload for Health.LoadTyped.
type HealthLoadMatch struct {
	Ok *bool `json:"ok,omitempty"`
	Render *map[string]any `json:"render,omitempty"`
	Service *string `json:"service,omitempty"`
}

// MonitoringRequest is the typed data model for the monitoring_request entity.
type MonitoringRequest struct {
	ChangeContext *string `json:"change_context,omitempty"`
	Email string `json:"email"`
	MonitoringGoal string `json:"monitoring_goal"`
	Notice string `json:"notice"`
	PageCount string `json:"page_count"`
	PageUrl string `json:"page_url"`
	PublicPageAuthority bool `json:"public_page_authority"`
	ReplyConsent bool `json:"reply_consent"`
	Request map[string]any `json:"request"`
	SafetyAcknowledged bool `json:"safety_acknowledged"`
	StartBoundaryAcknowledged bool `json:"start_boundary_acknowledged"`
}

// MonitoringRequestCreateData is the typed request payload for MonitoringRequest.CreateTyped.
type MonitoringRequestCreateData struct {
	ChangeContext *string `json:"change_context,omitempty"`
	Email string `json:"email"`
	MonitoringGoal string `json:"monitoring_goal"`
	Notice string `json:"notice"`
	PageCount string `json:"page_count"`
	PageUrl string `json:"page_url"`
	PublicPageAuthority bool `json:"public_page_authority"`
	ReplyConsent bool `json:"reply_consent"`
	Request map[string]any `json:"request"`
	SafetyAcknowledged bool `json:"safety_acknowledged"`
	StartBoundaryAcknowledged bool `json:"start_boundary_acknowledged"`
}

// PilotRequest is the typed data model for the pilot_request entity.
type PilotRequest struct {
	AcceptanceSample *string `json:"acceptance_sample,omitempty"`
	CallSite *string `json:"call_site,omitempty"`
	CurrentContract *string `json:"current_contract,omitempty"`
	Email string `json:"email"`
	ExpectedRender *string `json:"expected_render,omitempty"`
	Language *string `json:"language,omitempty"`
	Notice string `json:"notice"`
	Provider *string `json:"provider,omitempty"`
	ReplyConsent bool `json:"reply_consent"`
	RepositoryAuthority bool `json:"repository_authority"`
	RepositoryUrl string `json:"repository_url"`
	Request map[string]any `json:"request"`
	RequiredBehavior *string `json:"required_behavior,omitempty"`
	SafetyAcknowledged bool `json:"safety_acknowledged"`
	StartBoundaryAcknowledged bool `json:"start_boundary_acknowledged"`
}

// PilotRequestCreateData is the typed request payload for PilotRequest.CreateTyped.
type PilotRequestCreateData struct {
	AcceptanceSample *string `json:"acceptance_sample,omitempty"`
	CallSite *string `json:"call_site,omitempty"`
	CurrentContract *string `json:"current_contract,omitempty"`
	Email string `json:"email"`
	ExpectedRender *string `json:"expected_render,omitempty"`
	Language *string `json:"language,omitempty"`
	Notice string `json:"notice"`
	Provider *string `json:"provider,omitempty"`
	ReplyConsent bool `json:"reply_consent"`
	RepositoryAuthority bool `json:"repository_authority"`
	RepositoryUrl string `json:"repository_url"`
	Request map[string]any `json:"request"`
	RequiredBehavior *string `json:"required_behavior,omitempty"`
	SafetyAcknowledged bool `json:"safety_acknowledged"`
	StartBoundaryAcknowledged bool `json:"start_boundary_acknowledged"`
}

// Render is the typed data model for the render entity.
type Render struct {
	BlockAd *bool `json:"block_ad,omitempty"`
	BlockChat *bool `json:"block_chat,omitempty"`
	BlockTracker *bool `json:"block_tracker,omitempty"`
	DarkMode *bool `json:"dark_mode,omitempty"`
	Delay *int `json:"delay,omitempty"`
	Format *string `json:"format,omitempty"`
	FullPage *bool `json:"full_page,omitempty"`
	Height *int `json:"height,omitempty"`
	HideCookieBanner *bool `json:"hide_cookie_banner,omitempty"`
	HidePopup *bool `json:"hide_popup,omitempty"`
	Kind *string `json:"kind,omitempty"`
	Landscape *bool `json:"landscape,omitempty"`
	Paper *string `json:"paper,omitempty"`
	Quality *int `json:"quality,omitempty"`
	ReducedMotion *bool `json:"reduced_motion,omitempty"`
	Scale *int `json:"scale,omitempty"`
	ScrollPage *bool `json:"scroll_page,omitempty"`
	Timeout *int `json:"timeout,omitempty"`
	Url string `json:"url"`
	WaitUntil *string `json:"wait_until,omitempty"`
	Width *int `json:"width,omitempty"`
}

// RenderCreateData is the typed request payload for Render.CreateTyped.
type RenderCreateData struct {
	BlockAd *bool `json:"block_ad,omitempty"`
	BlockChat *bool `json:"block_chat,omitempty"`
	BlockTracker *bool `json:"block_tracker,omitempty"`
	DarkMode *bool `json:"dark_mode,omitempty"`
	Delay *int `json:"delay,omitempty"`
	Format *string `json:"format,omitempty"`
	FullPage *bool `json:"full_page,omitempty"`
	Height *int `json:"height,omitempty"`
	HideCookieBanner *bool `json:"hide_cookie_banner,omitempty"`
	HidePopup *bool `json:"hide_popup,omitempty"`
	Kind *string `json:"kind,omitempty"`
	Landscape *bool `json:"landscape,omitempty"`
	Paper *string `json:"paper,omitempty"`
	Quality *int `json:"quality,omitempty"`
	ReducedMotion *bool `json:"reduced_motion,omitempty"`
	Scale *int `json:"scale,omitempty"`
	ScrollPage *bool `json:"scroll_page,omitempty"`
	Timeout *int `json:"timeout,omitempty"`
	Url string `json:"url"`
	WaitUntil *string `json:"wait_until,omitempty"`
	Width *int `json:"width,omitempty"`
}

// Rendering is the typed data model for the rendering entity.
type Rendering struct {
}

// RenderingLoadMatch is the typed request payload for Rendering.LoadTyped.
type RenderingLoadMatch struct {
}

// SafetyReviewRequest is the typed data model for the safety_review_request entity.
type SafetyReviewRequest struct {
	CurrentControl string `json:"current_control"`
	DesiredOutcome string `json:"desired_outcome"`
	Email string `json:"email"`
	Language string `json:"language"`
	Notice string `json:"notice"`
	PrimaryConcern string `json:"primary_concern"`
	ReplyConsent bool `json:"reply_consent"`
	RepositoryAuthority bool `json:"repository_authority"`
	RepositoryUrl string `json:"repository_url"`
	Request map[string]any `json:"request"`
	RoutePath string `json:"route_path"`
	Runtime string `json:"runtime"`
	SafetyAcknowledged bool `json:"safety_acknowledged"`
	StartBoundaryAcknowledged bool `json:"start_boundary_acknowledged"`
	TestEvidence string `json:"test_evidence"`
}

// SafetyReviewRequestCreateData is the typed request payload for SafetyReviewRequest.CreateTyped.
type SafetyReviewRequestCreateData struct {
	CurrentControl string `json:"current_control"`
	DesiredOutcome string `json:"desired_outcome"`
	Email string `json:"email"`
	Language string `json:"language"`
	Notice string `json:"notice"`
	PrimaryConcern string `json:"primary_concern"`
	ReplyConsent bool `json:"reply_consent"`
	RepositoryAuthority bool `json:"repository_authority"`
	RepositoryUrl string `json:"repository_url"`
	Request map[string]any `json:"request"`
	RoutePath string `json:"route_path"`
	Runtime string `json:"runtime"`
	SafetyAcknowledged bool `json:"safety_acknowledged"`
	StartBoundaryAcknowledged bool `json:"start_boundary_acknowledged"`
	TestEvidence string `json:"test_evidence"`
}

// Trial is the typed data model for the trial entity.
type Trial struct {
	Consent *bool `json:"consent,omitempty"`
	Email string `json:"email"`
	ExpectedRender *string `json:"expected_render,omitempty"`
	Name *string `json:"name,omitempty"`
	UseCase *string `json:"use_case,omitempty"`
}

// TrialCreateData is the typed request payload for Trial.CreateTyped.
type TrialCreateData struct {
	Consent *bool `json:"consent,omitempty"`
	Email string `json:"email"`
	ExpectedRender *string `json:"expected_render,omitempty"`
	Name *string `json:"name,omitempty"`
	UseCase *string `json:"use_case,omitempty"`
}

// Upgrade is the typed data model for the upgrade entity.
type Upgrade struct {
	Consent bool `json:"consent"`
	Note *string `json:"note,omitempty"`
	Notice string `json:"notice"`
	Request map[string]any `json:"request"`
	RequestedPlan string `json:"requested_plan"`
}

// UpgradeCreateData is the typed request payload for Upgrade.CreateTyped.
type UpgradeCreateData struct {
	Consent bool `json:"consent"`
	Note *string `json:"note,omitempty"`
	Notice string `json:"notice"`
	Request map[string]any `json:"request"`
	RequestedPlan string `json:"requested_plan"`
}

// Usage is the typed data model for the usage entity.
type Usage struct {
	Customer map[string]any `json:"customer"`
	Link map[string]any `json:"link"`
	UpgradeRequest any `json:"upgrade_request"`
	Usage map[string]any `json:"usage"`
}

// UsageLoadMatch is the typed request payload for Usage.LoadTyped.
type UsageLoadMatch struct {
	Customer *map[string]any `json:"customer,omitempty"`
	Link *map[string]any `json:"link,omitempty"`
	UpgradeRequest *any `json:"upgrade_request,omitempty"`
	Usage *map[string]any `json:"usage,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
