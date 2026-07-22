# frozen_string_literal: true

# Typed models for the LatchshotScreenshot SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Health entity data model.
#
# @!attribute [rw] ok
#   @return [Boolean]
#
# @!attribute [rw] render
#   @return [Hash]
#
# @!attribute [rw] service
#   @return [String]
Health = Struct.new(
  :ok,
  :render,
  :service,
  keyword_init: true
)

# Request payload for Health#load.
#
# @!attribute [rw] ok
#   @return [Boolean, nil]
#
# @!attribute [rw] render
#   @return [Hash, nil]
#
# @!attribute [rw] service
#   @return [String, nil]
HealthLoadMatch = Struct.new(
  :ok,
  :render,
  :service,
  keyword_init: true
)

# MonitoringRequest entity data model.
#
# @!attribute [rw] change_context
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] monitoring_goal
#   @return [String]
#
# @!attribute [rw] notice
#   @return [String]
#
# @!attribute [rw] page_count
#   @return [String]
#
# @!attribute [rw] page_url
#   @return [String]
#
# @!attribute [rw] public_page_authority
#   @return [Boolean]
#
# @!attribute [rw] reply_consent
#   @return [Boolean]
#
# @!attribute [rw] request
#   @return [Hash]
#
# @!attribute [rw] safety_acknowledged
#   @return [Boolean]
#
# @!attribute [rw] start_boundary_acknowledged
#   @return [Boolean]
MonitoringRequest = Struct.new(
  :change_context,
  :email,
  :monitoring_goal,
  :notice,
  :page_count,
  :page_url,
  :public_page_authority,
  :reply_consent,
  :request,
  :safety_acknowledged,
  :start_boundary_acknowledged,
  keyword_init: true
)

# Request payload for MonitoringRequest#create.
#
# @!attribute [rw] change_context
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] monitoring_goal
#   @return [String]
#
# @!attribute [rw] notice
#   @return [String]
#
# @!attribute [rw] page_count
#   @return [String]
#
# @!attribute [rw] page_url
#   @return [String]
#
# @!attribute [rw] public_page_authority
#   @return [Boolean]
#
# @!attribute [rw] reply_consent
#   @return [Boolean]
#
# @!attribute [rw] request
#   @return [Hash]
#
# @!attribute [rw] safety_acknowledged
#   @return [Boolean]
#
# @!attribute [rw] start_boundary_acknowledged
#   @return [Boolean]
MonitoringRequestCreateData = Struct.new(
  :change_context,
  :email,
  :monitoring_goal,
  :notice,
  :page_count,
  :page_url,
  :public_page_authority,
  :reply_consent,
  :request,
  :safety_acknowledged,
  :start_boundary_acknowledged,
  keyword_init: true
)

# PilotRequest entity data model.
#
# @!attribute [rw] acceptance_sample
#   @return [String, nil]
#
# @!attribute [rw] call_site
#   @return [String, nil]
#
# @!attribute [rw] current_contract
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] expected_render
#   @return [String, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] notice
#   @return [String]
#
# @!attribute [rw] provider
#   @return [String, nil]
#
# @!attribute [rw] reply_consent
#   @return [Boolean]
#
# @!attribute [rw] repository_authority
#   @return [Boolean]
#
# @!attribute [rw] repository_url
#   @return [String]
#
# @!attribute [rw] request
#   @return [Hash]
#
# @!attribute [rw] required_behavior
#   @return [String, nil]
#
# @!attribute [rw] safety_acknowledged
#   @return [Boolean]
#
# @!attribute [rw] start_boundary_acknowledged
#   @return [Boolean]
PilotRequest = Struct.new(
  :acceptance_sample,
  :call_site,
  :current_contract,
  :email,
  :expected_render,
  :language,
  :notice,
  :provider,
  :reply_consent,
  :repository_authority,
  :repository_url,
  :request,
  :required_behavior,
  :safety_acknowledged,
  :start_boundary_acknowledged,
  keyword_init: true
)

# Request payload for PilotRequest#create.
#
# @!attribute [rw] acceptance_sample
#   @return [String, nil]
#
# @!attribute [rw] call_site
#   @return [String, nil]
#
# @!attribute [rw] current_contract
#   @return [String, nil]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] expected_render
#   @return [String, nil]
#
# @!attribute [rw] language
#   @return [String, nil]
#
# @!attribute [rw] notice
#   @return [String]
#
# @!attribute [rw] provider
#   @return [String, nil]
#
# @!attribute [rw] reply_consent
#   @return [Boolean]
#
# @!attribute [rw] repository_authority
#   @return [Boolean]
#
# @!attribute [rw] repository_url
#   @return [String]
#
# @!attribute [rw] request
#   @return [Hash]
#
# @!attribute [rw] required_behavior
#   @return [String, nil]
#
# @!attribute [rw] safety_acknowledged
#   @return [Boolean]
#
# @!attribute [rw] start_boundary_acknowledged
#   @return [Boolean]
PilotRequestCreateData = Struct.new(
  :acceptance_sample,
  :call_site,
  :current_contract,
  :email,
  :expected_render,
  :language,
  :notice,
  :provider,
  :reply_consent,
  :repository_authority,
  :repository_url,
  :request,
  :required_behavior,
  :safety_acknowledged,
  :start_boundary_acknowledged,
  keyword_init: true
)

# Render entity data model.
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
# @!attribute [rw] delay
#   @return [Integer, nil]
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
# @!attribute [rw] reduced_motion
#   @return [Boolean, nil]
#
# @!attribute [rw] scale
#   @return [Integer, nil]
#
# @!attribute [rw] scroll_page
#   @return [Boolean, nil]
#
# @!attribute [rw] timeout
#   @return [Integer, nil]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] wait_until
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Integer, nil]
Render = Struct.new(
  :block_ad,
  :block_chat,
  :block_tracker,
  :dark_mode,
  :delay,
  :format,
  :full_page,
  :height,
  :hide_cookie_banner,
  :hide_popup,
  :kind,
  :landscape,
  :paper,
  :quality,
  :reduced_motion,
  :scale,
  :scroll_page,
  :timeout,
  :url,
  :wait_until,
  :width,
  keyword_init: true
)

# Request payload for Render#create.
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
# @!attribute [rw] delay
#   @return [Integer, nil]
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
# @!attribute [rw] reduced_motion
#   @return [Boolean, nil]
#
# @!attribute [rw] scale
#   @return [Integer, nil]
#
# @!attribute [rw] scroll_page
#   @return [Boolean, nil]
#
# @!attribute [rw] timeout
#   @return [Integer, nil]
#
# @!attribute [rw] url
#   @return [String]
#
# @!attribute [rw] wait_until
#   @return [String, nil]
#
# @!attribute [rw] width
#   @return [Integer, nil]
RenderCreateData = Struct.new(
  :block_ad,
  :block_chat,
  :block_tracker,
  :dark_mode,
  :delay,
  :format,
  :full_page,
  :height,
  :hide_cookie_banner,
  :hide_popup,
  :kind,
  :landscape,
  :paper,
  :quality,
  :reduced_motion,
  :scale,
  :scroll_page,
  :timeout,
  :url,
  :wait_until,
  :width,
  keyword_init: true
)

# Rendering entity data model.
class Rendering
end

# Request payload for Rendering#load.
class RenderingLoadMatch
end

# SafetyReviewRequest entity data model.
#
# @!attribute [rw] current_control
#   @return [String]
#
# @!attribute [rw] desired_outcome
#   @return [String]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] language
#   @return [String]
#
# @!attribute [rw] notice
#   @return [String]
#
# @!attribute [rw] primary_concern
#   @return [String]
#
# @!attribute [rw] reply_consent
#   @return [Boolean]
#
# @!attribute [rw] repository_authority
#   @return [Boolean]
#
# @!attribute [rw] repository_url
#   @return [String]
#
# @!attribute [rw] request
#   @return [Hash]
#
# @!attribute [rw] route_path
#   @return [String]
#
# @!attribute [rw] runtime
#   @return [String]
#
# @!attribute [rw] safety_acknowledged
#   @return [Boolean]
#
# @!attribute [rw] start_boundary_acknowledged
#   @return [Boolean]
#
# @!attribute [rw] test_evidence
#   @return [String]
SafetyReviewRequest = Struct.new(
  :current_control,
  :desired_outcome,
  :email,
  :language,
  :notice,
  :primary_concern,
  :reply_consent,
  :repository_authority,
  :repository_url,
  :request,
  :route_path,
  :runtime,
  :safety_acknowledged,
  :start_boundary_acknowledged,
  :test_evidence,
  keyword_init: true
)

# Request payload for SafetyReviewRequest#create.
#
# @!attribute [rw] current_control
#   @return [String]
#
# @!attribute [rw] desired_outcome
#   @return [String]
#
# @!attribute [rw] email
#   @return [String]
#
# @!attribute [rw] language
#   @return [String]
#
# @!attribute [rw] notice
#   @return [String]
#
# @!attribute [rw] primary_concern
#   @return [String]
#
# @!attribute [rw] reply_consent
#   @return [Boolean]
#
# @!attribute [rw] repository_authority
#   @return [Boolean]
#
# @!attribute [rw] repository_url
#   @return [String]
#
# @!attribute [rw] request
#   @return [Hash]
#
# @!attribute [rw] route_path
#   @return [String]
#
# @!attribute [rw] runtime
#   @return [String]
#
# @!attribute [rw] safety_acknowledged
#   @return [Boolean]
#
# @!attribute [rw] start_boundary_acknowledged
#   @return [Boolean]
#
# @!attribute [rw] test_evidence
#   @return [String]
SafetyReviewRequestCreateData = Struct.new(
  :current_control,
  :desired_outcome,
  :email,
  :language,
  :notice,
  :primary_concern,
  :reply_consent,
  :repository_authority,
  :repository_url,
  :request,
  :route_path,
  :runtime,
  :safety_acknowledged,
  :start_boundary_acknowledged,
  :test_evidence,
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
# @!attribute [rw] expected_render
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] use_case
#   @return [String, nil]
Trial = Struct.new(
  :consent,
  :email,
  :expected_render,
  :name,
  :use_case,
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
# @!attribute [rw] expected_render
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] use_case
#   @return [String, nil]
TrialCreateData = Struct.new(
  :consent,
  :email,
  :expected_render,
  :name,
  :use_case,
  keyword_init: true
)

# Upgrade entity data model.
#
# @!attribute [rw] consent
#   @return [Boolean]
#
# @!attribute [rw] note
#   @return [String, nil]
#
# @!attribute [rw] notice
#   @return [String]
#
# @!attribute [rw] request
#   @return [Hash]
#
# @!attribute [rw] requested_plan
#   @return [String]
Upgrade = Struct.new(
  :consent,
  :note,
  :notice,
  :request,
  :requested_plan,
  keyword_init: true
)

# Request payload for Upgrade#create.
#
# @!attribute [rw] consent
#   @return [Boolean]
#
# @!attribute [rw] note
#   @return [String, nil]
#
# @!attribute [rw] notice
#   @return [String]
#
# @!attribute [rw] request
#   @return [Hash]
#
# @!attribute [rw] requested_plan
#   @return [String]
UpgradeCreateData = Struct.new(
  :consent,
  :note,
  :notice,
  :request,
  :requested_plan,
  keyword_init: true
)

# Usage entity data model.
#
# @!attribute [rw] customer
#   @return [Hash]
#
# @!attribute [rw] link
#   @return [Hash]
#
# @!attribute [rw] upgrade_request
#   @return [Object]
#
# @!attribute [rw] usage
#   @return [Hash]
Usage = Struct.new(
  :customer,
  :link,
  :upgrade_request,
  :usage,
  keyword_init: true
)

# Request payload for Usage#load.
#
# @!attribute [rw] customer
#   @return [Hash, nil]
#
# @!attribute [rw] link
#   @return [Hash, nil]
#
# @!attribute [rw] upgrade_request
#   @return [Object, nil]
#
# @!attribute [rw] usage
#   @return [Hash, nil]
UsageLoadMatch = Struct.new(
  :customer,
  :link,
  :upgrade_request,
  :usage,
  keyword_init: true
)

