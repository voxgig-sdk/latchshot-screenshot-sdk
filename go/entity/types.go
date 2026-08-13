// Typed models for the LatchshotScreenshot SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/latchshot-screenshot-sdk/go/core"
)

// Health is the typed data model for the health entity.
type Health struct {
	Active int `json:"active"`
	Concurrency int `json:"concurrency"`
	Pending int `json:"pending"`
}

// HealthLoadMatch is the typed request payload for Health.LoadTyped.
type HealthLoadMatch struct {
	Active *int `json:"active,omitempty"`
	Concurrency *int `json:"concurrency,omitempty"`
	Pending *int `json:"pending,omitempty"`
}

// MonitoringRequest is the typed data model for the monitoring_request entity.
type MonitoringRequest struct {
	ChangeContext *string `json:"changeContext,omitempty"`
	CreatedAt string `json:"createdAt"`
	Email string `json:"email"`
	Id int `json:"id"`
	MonitoringGoal string `json:"monitoringGoal"`
	PageCount string `json:"pageCount"`
	PageUrl string `json:"pageUrl"`
	PublicPageAuthority bool `json:"publicPageAuthority"`
	ReplyConsent bool `json:"replyConsent"`
	SafetyAcknowledged bool `json:"safetyAcknowledged"`
	StartBoundaryAcknowledged bool `json:"startBoundaryAcknowledged"`
	Status string `json:"status"`
	UpdatedAt string `json:"updatedAt"`
}

// MonitoringRequestCreateData is the typed request payload for MonitoringRequest.CreateTyped.
type MonitoringRequestCreateData struct {
	ChangeContext *string `json:"changeContext,omitempty"`
	CreatedAt string `json:"createdAt"`
	Email string `json:"email"`
	Id int `json:"id"`
	MonitoringGoal string `json:"monitoringGoal"`
	PageCount string `json:"pageCount"`
	PageUrl string `json:"pageUrl"`
	PublicPageAuthority bool `json:"publicPageAuthority"`
	ReplyConsent bool `json:"replyConsent"`
	SafetyAcknowledged bool `json:"safetyAcknowledged"`
	StartBoundaryAcknowledged bool `json:"startBoundaryAcknowledged"`
	Status string `json:"status"`
	UpdatedAt string `json:"updatedAt"`
}

// PilotRequest is the typed data model for the pilot_request entity.
type PilotRequest struct {
	AcceptanceSample *string `json:"acceptanceSample,omitempty"`
	CallSite string `json:"callSite"`
	CreatedAt string `json:"createdAt"`
	CurrentContract *string `json:"currentContract,omitempty"`
	Email string `json:"email"`
	ExpectedRenders *string `json:"expectedRenders,omitempty"`
	Id int `json:"id"`
	Language *string `json:"language,omitempty"`
	Provider *string `json:"provider,omitempty"`
	ReplyConsent bool `json:"replyConsent"`
	RepositoryAuthority bool `json:"repositoryAuthority"`
	RepositoryUrl string `json:"repositoryUrl"`
	RequiredBehavior *string `json:"requiredBehavior,omitempty"`
	SafetyAcknowledged bool `json:"safetyAcknowledged"`
	StartBoundaryAcknowledged bool `json:"startBoundaryAcknowledged"`
	Status string `json:"status"`
	UpdatedAt string `json:"updatedAt"`
}

// PilotRequestCreateData is the typed request payload for PilotRequest.CreateTyped.
type PilotRequestCreateData struct {
	AcceptanceSample *string `json:"acceptanceSample,omitempty"`
	CallSite string `json:"callSite"`
	CreatedAt string `json:"createdAt"`
	CurrentContract *string `json:"currentContract,omitempty"`
	Email string `json:"email"`
	ExpectedRenders *string `json:"expectedRenders,omitempty"`
	Id int `json:"id"`
	Language *string `json:"language,omitempty"`
	Provider *string `json:"provider,omitempty"`
	ReplyConsent bool `json:"replyConsent"`
	RepositoryAuthority bool `json:"repositoryAuthority"`
	RepositoryUrl string `json:"repositoryUrl"`
	RequiredBehavior *string `json:"requiredBehavior,omitempty"`
	SafetyAcknowledged bool `json:"safetyAcknowledged"`
	StartBoundaryAcknowledged bool `json:"startBoundaryAcknowledged"`
	Status string `json:"status"`
	UpdatedAt string `json:"updatedAt"`
}

// Render is the typed data model for the render entity.
type Render struct {
	BlockAds *bool `json:"blockAds,omitempty"`
	BlockChats *bool `json:"blockChats,omitempty"`
	BlockTrackers *bool `json:"blockTrackers,omitempty"`
	DarkMode *bool `json:"darkMode,omitempty"`
	Delay *int `json:"delay,omitempty"`
	Format *string `json:"format,omitempty"`
	FullPage *bool `json:"fullPage,omitempty"`
	Height *int `json:"height,omitempty"`
	HideCookieBanners *bool `json:"hideCookieBanners,omitempty"`
	HidePopups *bool `json:"hidePopups,omitempty"`
	Kind *string `json:"kind,omitempty"`
	Landscape *bool `json:"landscape,omitempty"`
	Paper *string `json:"paper,omitempty"`
	Quality *int `json:"quality,omitempty"`
	ReducedMotion *bool `json:"reducedMotion,omitempty"`
	Scale *int `json:"scale,omitempty"`
	ScrollPage *bool `json:"scrollPage,omitempty"`
	Timeout *int `json:"timeout,omitempty"`
	Url string `json:"url"`
	WaitUntil *string `json:"waitUntil,omitempty"`
	Width *int `json:"width,omitempty"`
}

// RenderCreateData is the typed request payload for Render.CreateTyped.
type RenderCreateData struct {
	BlockAds *bool `json:"blockAds,omitempty"`
	BlockChats *bool `json:"blockChats,omitempty"`
	BlockTrackers *bool `json:"blockTrackers,omitempty"`
	DarkMode *bool `json:"darkMode,omitempty"`
	Delay *int `json:"delay,omitempty"`
	Format *string `json:"format,omitempty"`
	FullPage *bool `json:"fullPage,omitempty"`
	Height *int `json:"height,omitempty"`
	HideCookieBanners *bool `json:"hideCookieBanners,omitempty"`
	HidePopups *bool `json:"hidePopups,omitempty"`
	Kind *string `json:"kind,omitempty"`
	Landscape *bool `json:"landscape,omitempty"`
	Paper *string `json:"paper,omitempty"`
	Quality *int `json:"quality,omitempty"`
	ReducedMotion *bool `json:"reducedMotion,omitempty"`
	Scale *int `json:"scale,omitempty"`
	ScrollPage *bool `json:"scrollPage,omitempty"`
	Timeout *int `json:"timeout,omitempty"`
	Url string `json:"url"`
	WaitUntil *string `json:"waitUntil,omitempty"`
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
	CreatedAt string `json:"createdAt"`
	CurrentControls string `json:"currentControls"`
	DesiredOutcome string `json:"desiredOutcome"`
	Email string `json:"email"`
	Id int `json:"id"`
	Language string `json:"language"`
	PrimaryConcern string `json:"primaryConcern"`
	ReplyConsent bool `json:"replyConsent"`
	RepositoryAuthority bool `json:"repositoryAuthority"`
	RepositoryUrl string `json:"repositoryUrl"`
	RoutePath string `json:"routePath"`
	Runtime string `json:"runtime"`
	SafetyAcknowledged bool `json:"safetyAcknowledged"`
	StartBoundaryAcknowledged bool `json:"startBoundaryAcknowledged"`
	Status string `json:"status"`
	TestEvidence string `json:"testEvidence"`
	UpdatedAt string `json:"updatedAt"`
}

// SafetyReviewRequestCreateData is the typed request payload for SafetyReviewRequest.CreateTyped.
type SafetyReviewRequestCreateData struct {
	CreatedAt string `json:"createdAt"`
	CurrentControls string `json:"currentControls"`
	DesiredOutcome string `json:"desiredOutcome"`
	Email string `json:"email"`
	Id int `json:"id"`
	Language string `json:"language"`
	PrimaryConcern string `json:"primaryConcern"`
	ReplyConsent bool `json:"replyConsent"`
	RepositoryAuthority bool `json:"repositoryAuthority"`
	RepositoryUrl string `json:"repositoryUrl"`
	RoutePath string `json:"routePath"`
	Runtime string `json:"runtime"`
	SafetyAcknowledged bool `json:"safetyAcknowledged"`
	StartBoundaryAcknowledged bool `json:"startBoundaryAcknowledged"`
	Status string `json:"status"`
	TestEvidence string `json:"testEvidence"`
	UpdatedAt string `json:"updatedAt"`
}

// Trial is the typed data model for the trial entity.
type Trial struct {
	Consent *bool `json:"consent,omitempty"`
	Email string `json:"email"`
	ExpectedRenders *string `json:"expectedRenders,omitempty"`
	Name *string `json:"name,omitempty"`
	UseCase *string `json:"useCase,omitempty"`
}

// TrialCreateData is the typed request payload for Trial.CreateTyped.
type TrialCreateData struct {
	Consent *bool `json:"consent,omitempty"`
	Email string `json:"email"`
	ExpectedRenders *string `json:"expectedRenders,omitempty"`
	Name *string `json:"name,omitempty"`
	UseCase *string `json:"useCase,omitempty"`
}

// Upgrade is the typed data model for the upgrade entity.
type Upgrade struct {
	Consent bool `json:"consent"`
	CreatedAt string `json:"createdAt"`
	CurrentPlan string `json:"currentPlan"`
	Id int `json:"id"`
	Note *string `json:"note,omitempty"`
	RequestedPlan string `json:"requestedPlan"`
	Status string `json:"status"`
	UpdatedAt string `json:"updatedAt"`
}

// UpgradeCreateData is the typed request payload for Upgrade.CreateTyped.
type UpgradeCreateData struct {
	Consent bool `json:"consent"`
	CreatedAt string `json:"createdAt"`
	CurrentPlan string `json:"currentPlan"`
	Id int `json:"id"`
	Note *string `json:"note,omitempty"`
	RequestedPlan string `json:"requestedPlan"`
	Status string `json:"status"`
	UpdatedAt string `json:"updatedAt"`
}

// Usage is the typed data model for the usage entity.
type Usage struct {
	Customer map[string]any `json:"customer"`
	Links map[string]any `json:"links"`
	UpgradeRequest any `json:"upgradeRequest"`
	Usage map[string]any `json:"usage"`
}

// UsageLoadMatch is the typed request payload for Usage.LoadTyped.
type UsageLoadMatch struct {
	Customer *map[string]any `json:"customer,omitempty"`
	Links *map[string]any `json:"links,omitempty"`
	UpgradeRequest *any `json:"upgradeRequest,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
