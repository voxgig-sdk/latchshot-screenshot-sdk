# frozen_string_literal: true

# Typed models for the LatchshotScreenshot SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Health entity data model.
#
# @!attribute [rw] active
#   @return [Integer]
#
# @!attribute [rw] concurrency
#   @return [Integer]
#
# @!attribute [rw] pending
#   @return [Integer]
Health = Struct.new(
  :active,
  :concurrency,
  :pending,
  keyword_init: true
)

# Request payload for Health#load.
#
# @!attribute [rw] active
#   @return [Integer, nil]
#
# @!attribute [rw] concurrency
#   @return [Integer, nil]
#
# @!attribute [rw] pending
#   @return [Integer, nil]
HealthLoadMatch = Struct.new(
  :active,
  :concurrency,
  :pending,
  keyword_init: true
)

# MonitoringRequest entity data model.
#
# @!attribute [rw] changeContext
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] monitoringGoal
#   @return [String]
#
# @!attribute [rw] pageCount
#   @return [String]
#
# @!attribute [rw] pageUrl
#   @return [String]
#
# @!attribute [rw] publicPageAuthority
#   @return [Boolean]
#
# @!attribute [rw] replyConsent
#   @return [Boolean]
#
# @!attribute [rw] safetyAcknowledged
#   @return [Boolean]
#
# @!attribute [rw] startBoundaryAcknowledged
#   @return [Boolean]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
MonitoringRequest = Struct.new(
  :changeContext,
  :createdAt,
  :email,
  :id,
  :monitoringGoal,
  :pageCount,
  :pageUrl,
  :publicPageAuthority,
  :replyConsent,
  :safetyAcknowledged,
  :startBoundaryAcknowledged,
  :status,
  :updatedAt,
  keyword_init: true
)

# Request payload for MonitoringRequest#create.
#
# @!attribute [rw] changeContext
#   @return [String, nil]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] monitoringGoal
#   @return [String]
#
# @!attribute [rw] pageCount
#   @return [String]
#
# @!attribute [rw] pageUrl
#   @return [String]
#
# @!attribute [rw] publicPageAuthority
#   @return [Boolean]
#
# @!attribute [rw] replyConsent
#   @return [Boolean]
#
# @!attribute [rw] safetyAcknowledged
#   @return [Boolean]
#
# @!attribute [rw] startBoundaryAcknowledged
#   @return [Boolean]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
MonitoringRequestCreateData = Struct.new(
  :changeContext,
  :createdAt,
  :email,
  :id,
  :monitoringGoal,
  :pageCount,
  :pageUrl,
  :publicPageAuthority,
  :replyConsent,
  :safetyAcknowledged,
  :startBoundaryAcknowledged,
  :status,
  :updatedAt,
  keyword_init: true
)

# PilotRequest entity data model.
#
# @!attribute [rw] acceptanceSample
#   @return [String, nil]
#
# @!attribute [rw] callSite
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] currentContract
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] expectedRenders
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] provider
#   @return [String, nil]
#
# @!attribute [rw] replyConsent
#   @return [Boolean]
#
# @!attribute [rw] repositoryAuthority
#   @return [Boolean]
#
# @!attribute [rw] repositoryUrl
#   @return [String]
#
# @!attribute [rw] requiredBehavior
#   @return [String, nil]
#
# @!attribute [rw] safetyAcknowledged
#   @return [Boolean]
#
# @!attribute [rw] startBoundaryAcknowledged
#   @return [Boolean]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
PilotRequest = Struct.new(
  :acceptanceSample,
  :callSite,
  :createdAt,
  :currentContract,
  :email,
  :expectedRenders,
  :id,
  :language,
  :provider,
  :replyConsent,
  :repositoryAuthority,
  :repositoryUrl,
  :requiredBehavior,
  :safetyAcknowledged,
  :startBoundaryAcknowledged,
  :status,
  :updatedAt,
  keyword_init: true
)

# Request payload for PilotRequest#create.
#
# @!attribute [rw] acceptanceSample
#   @return [String, nil]
#
# @!attribute [rw] callSite
#   @return [String]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] currentContract
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] expectedRenders
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] provider
#   @return [String, nil]
#
# @!attribute [rw] replyConsent
#   @return [Boolean]
#
# @!attribute [rw] repositoryAuthority
#   @return [Boolean]
#
# @!attribute [rw] repositoryUrl
#   @return [String]
#
# @!attribute [rw] requiredBehavior
#   @return [String, nil]
#
# @!attribute [rw] safetyAcknowledged
#   @return [Boolean]
#
# @!attribute [rw] startBoundaryAcknowledged
#   @return [Boolean]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
PilotRequestCreateData = Struct.new(
  :acceptanceSample,
  :callSite,
  :createdAt,
  :currentContract,
  :email,
  :expectedRenders,
  :id,
  :language,
  :provider,
  :replyConsent,
  :repositoryAuthority,
  :repositoryUrl,
  :requiredBehavior,
  :safetyAcknowledged,
  :startBoundaryAcknowledged,
  :status,
  :updatedAt,
  keyword_init: true
)

# Render entity data model.
#
# @!attribute [rw] blockAds
#   @return [Boolean, nil]
#
# @!attribute [rw] blockChats
#   @return [Boolean, nil]
#
# @!attribute [rw] blockTrackers
#   @return [Boolean, nil]
#
# @!attribute [rw] darkMode
#   @return [Boolean, nil]
#
# @!attribute [rw] delay
#   @return [Integer, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] fullPage
#   @return [Boolean, nil]
#
# @!attribute [rw] height
#   @return [Integer, nil]
#
# @!attribute [rw] hideCookieBanners
#   @return [Boolean, nil]
#
# @!attribute [rw] hidePopups
#   @return [Boolean, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] landscape
#   @return [Boolean, nil]
#
# @!attribute [rw] paper
#   @return [String, nil]
#
# @!attribute [rw] quality
#   @return [Integer, nil]
#
# @!attribute [rw] reducedMotion
#   @return [Boolean, nil]
#
# @!attribute [rw] scale
#   @return [Integer, nil]
#
# @!attribute [rw] scrollPage
#   @return [Boolean, nil]
#
# @!attribute [rw] timeout
#   @return [Integer, nil]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] waitUntil
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Integer, nil]
Render = Struct.new(
  :blockAds,
  :blockChats,
  :blockTrackers,
  :darkMode,
  :delay,
  :format,
  :fullPage,
  :height,
  :hideCookieBanners,
  :hidePopups,
  :kind,
  :landscape,
  :paper,
  :quality,
  :reducedMotion,
  :scale,
  :scrollPage,
  :timeout,
  :url,
  :waitUntil,
  :width,
  keyword_init: true
)

# Request payload for Render#create.
#
# @!attribute [rw] blockAds
#   @return [Boolean, nil]
#
# @!attribute [rw] blockChats
#   @return [Boolean, nil]
#
# @!attribute [rw] blockTrackers
#   @return [Boolean, nil]
#
# @!attribute [rw] darkMode
#   @return [Boolean, nil]
#
# @!attribute [rw] delay
#   @return [Integer, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] fullPage
#   @return [Boolean, nil]
#
# @!attribute [rw] height
#   @return [Integer, nil]
#
# @!attribute [rw] hideCookieBanners
#   @return [Boolean, nil]
#
# @!attribute [rw] hidePopups
#   @return [Boolean, nil]
#
# @!attribute [rw] kind
#   @return [String, nil]
#
# @!attribute [rw] landscape
#   @return [Boolean, nil]
#
# @!attribute [rw] paper
#   @return [String, nil]
#
# @!attribute [rw] quality
#   @return [Integer, nil]
#
# @!attribute [rw] reducedMotion
#   @return [Boolean, nil]
#
# @!attribute [rw] scale
#   @return [Integer, nil]
#
# @!attribute [rw] scrollPage
#   @return [Boolean, nil]
#
# @!attribute [rw] timeout
#   @return [Integer, nil]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] waitUntil
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Integer, nil]
RenderCreateData = Struct.new(
  :blockAds,
  :blockChats,
  :blockTrackers,
  :darkMode,
  :delay,
  :format,
  :fullPage,
  :height,
  :hideCookieBanners,
  :hidePopups,
  :kind,
  :landscape,
  :paper,
  :quality,
  :reducedMotion,
  :scale,
  :scrollPage,
  :timeout,
  :url,
  :waitUntil,
  :width,
  keyword_init: true
)

# Rendering entity data model.
class Rendering
end

# Request payload for Rendering#load.
#
# @!attribute [rw] block_ad
#   @return [Boolean, nil]
#
# @!attribute [rw] block_chat
#   @return [Boolean, nil]
#
# @!attribute [rw] block_tracker
#   @return [Boolean, nil]
#
# @!attribute [rw] dark_mode
#   @return [Boolean, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] full_page
#   @return [Boolean, nil]
#
# @!attribute [rw] height
#   @return [Integer, nil]
#
# @!attribute [rw] hide_cookie_banner
#   @return [Boolean, nil]
#
# @!attribute [rw] hide_popup
#   @return [Boolean, nil]
#
# @!attribute [rw] quality
#   @return [Integer, nil]
#
# @!attribute [rw] scroll_page
#   @return [Boolean, nil]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] width
#   @return [Integer, nil]
RenderingLoadMatch = Struct.new(
  :block_ad,
  :block_chat,
  :block_tracker,
  :dark_mode,
  :format,
  :full_page,
  :height,
  :hide_cookie_banner,
  :hide_popup,
  :quality,
  :scroll_page,
  :url,
  :width,
  keyword_init: true
)

# SafetyReviewRequest entity data model.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] currentControls
#   @return [String]
#
# @!attribute [rw] desiredOutcome
#   @return [String]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] language
#   @return [String]
#
# @!attribute [rw] primaryConcern
#   @return [String]
#
# @!attribute [rw] replyConsent
#   @return [Boolean]
#
# @!attribute [rw] repositoryAuthority
#   @return [Boolean]
#
# @!attribute [rw] repositoryUrl
#   @return [String]
#
# @!attribute [rw] routePath
#   @return [String]
#
# @!attribute [rw] runtime
#   @return [String]
#
# @!attribute [rw] safetyAcknowledged
#   @return [Boolean]
#
# @!attribute [rw] startBoundaryAcknowledged
#   @return [Boolean]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] testEvidence
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
SafetyReviewRequest = Struct.new(
  :createdAt,
  :currentControls,
  :desiredOutcome,
  :email,
  :id,
  :language,
  :primaryConcern,
  :replyConsent,
  :repositoryAuthority,
  :repositoryUrl,
  :routePath,
  :runtime,
  :safetyAcknowledged,
  :startBoundaryAcknowledged,
  :status,
  :testEvidence,
  :updatedAt,
  keyword_init: true
)

# Request payload for SafetyReviewRequest#create.
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] currentControls
#   @return [String]
#
# @!attribute [rw] desiredOutcome
#   @return [String]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] language
#   @return [String]
#
# @!attribute [rw] primaryConcern
#   @return [String]
#
# @!attribute [rw] replyConsent
#   @return [Boolean]
#
# @!attribute [rw] repositoryAuthority
#   @return [Boolean]
#
# @!attribute [rw] repositoryUrl
#   @return [String]
#
# @!attribute [rw] routePath
#   @return [String]
#
# @!attribute [rw] runtime
#   @return [String]
#
# @!attribute [rw] safetyAcknowledged
#   @return [Boolean]
#
# @!attribute [rw] startBoundaryAcknowledged
#   @return [Boolean]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] testEvidence
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
SafetyReviewRequestCreateData = Struct.new(
  :createdAt,
  :currentControls,
  :desiredOutcome,
  :email,
  :id,
  :language,
  :primaryConcern,
  :replyConsent,
  :repositoryAuthority,
  :repositoryUrl,
  :routePath,
  :runtime,
  :safetyAcknowledged,
  :startBoundaryAcknowledged,
  :status,
  :testEvidence,
  :updatedAt,
  keyword_init: true
)

# Trial entity data model.
#
# @!attribute [rw] consent
#   @return [Boolean, nil]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] expectedRenders
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] useCase
#   @return [String, nil]
Trial = Struct.new(
  :consent,
  :email,
  :expectedRenders,
  :name,
  :useCase,
  keyword_init: true
)

# Request payload for Trial#create.
#
# @!attribute [rw] consent
#   @return [Boolean, nil]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] expectedRenders
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] useCase
#   @return [String, nil]
TrialCreateData = Struct.new(
  :consent,
  :email,
  :expectedRenders,
  :name,
  :useCase,
  keyword_init: true
)

# Upgrade entity data model.
#
# @!attribute [rw] consent
#   @return [Boolean]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] currentPlan
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] note
#   @return [String, nil]
#
# @!attribute [rw] requestedPlan
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
Upgrade = Struct.new(
  :consent,
  :createdAt,
  :currentPlan,
  :id,
  :note,
  :requestedPlan,
  :status,
  :updatedAt,
  keyword_init: true
)

# Request payload for Upgrade#create.
#
# @!attribute [rw] consent
#   @return [Boolean]
#
# @!attribute [rw] createdAt
#   @return [String]
#
# @!attribute [rw] currentPlan
#   @return [String]
#
# @!attribute [rw] id
#   @return [Integer]
#
# @!attribute [rw] note
#   @return [String, nil]
#
# @!attribute [rw] requestedPlan
#   @return [String]
#
# @!attribute [rw] status
#   @return [String]
#
# @!attribute [rw] updatedAt
#   @return [String]
UpgradeCreateData = Struct.new(
  :consent,
  :createdAt,
  :currentPlan,
  :id,
  :note,
  :requestedPlan,
  :status,
  :updatedAt,
  keyword_init: true
)

# Usage entity data model.
#
# @!attribute [rw] customer
#   @return [Hash]
#
# @!attribute [rw] links
#   @return [Hash]
#
# @!attribute [rw] upgradeRequest
#   @return [Object]
#
# @!attribute [rw] usage
#   @return [Hash]
Usage = Struct.new(
  :customer,
  :links,
  :upgradeRequest,
  :usage,
  keyword_init: true
)

# Request payload for Usage#load.
#
# @!attribute [rw] customer
#   @return [Hash, nil]
#
# @!attribute [rw] links
#   @return [Hash, nil]
#
# @!attribute [rw] upgradeRequest
#   @return [Object, nil]
#
# @!attribute [rw] usage
#   @return [Hash, nil]
UsageLoadMatch = Struct.new(
  :customer,
  :links,
  :upgradeRequest,
  :usage,
  keyword_init: true
)

