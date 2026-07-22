-- Typed models for the LatchshotScreenshot SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Health
---@field ok boolean
---@field render table
---@field service string

---@class HealthLoadMatch
---@field ok? boolean
---@field render? table
---@field service? string

---@class MonitoringRequest
---@field change_context? string
---@field email string
---@field monitoring_goal string
---@field notice string
---@field page_count string
---@field page_url string
---@field public_page_authority boolean
---@field reply_consent boolean
---@field request table
---@field safety_acknowledged boolean
---@field start_boundary_acknowledged boolean

---@class MonitoringRequestCreateData
---@field change_context? string
---@field email string
---@field monitoring_goal string
---@field notice string
---@field page_count string
---@field page_url string
---@field public_page_authority boolean
---@field reply_consent boolean
---@field request table
---@field safety_acknowledged boolean
---@field start_boundary_acknowledged boolean

---@class PilotRequest
---@field acceptance_sample? string
---@field call_site? string
---@field current_contract? string
---@field email string
---@field expected_render? string
---@field language? string
---@field notice string
---@field provider? string
---@field reply_consent boolean
---@field repository_authority boolean
---@field repository_url string
---@field request table
---@field required_behavior? string
---@field safety_acknowledged boolean
---@field start_boundary_acknowledged boolean

---@class PilotRequestCreateData
---@field acceptance_sample? string
---@field call_site? string
---@field current_contract? string
---@field email string
---@field expected_render? string
---@field language? string
---@field notice string
---@field provider? string
---@field reply_consent boolean
---@field repository_authority boolean
---@field repository_url string
---@field request table
---@field required_behavior? string
---@field safety_acknowledged boolean
---@field start_boundary_acknowledged boolean

---@class Render
---@field block_ad? boolean
---@field block_chat? boolean
---@field block_tracker? boolean
---@field dark_mode? boolean
---@field delay? number
---@field format? string
---@field full_page? boolean
---@field height? number
---@field hide_cookie_banner? boolean
---@field hide_popup? boolean
---@field kind? string
---@field landscape? boolean
---@field paper? string
---@field quality? number
---@field reduced_motion? boolean
---@field scale? number
---@field scroll_page? boolean
---@field timeout? number
---@field url string
---@field wait_until? string
---@field width? number

---@class RenderCreateData
---@field block_ad? boolean
---@field block_chat? boolean
---@field block_tracker? boolean
---@field dark_mode? boolean
---@field delay? number
---@field format? string
---@field full_page? boolean
---@field height? number
---@field hide_cookie_banner? boolean
---@field hide_popup? boolean
---@field kind? string
---@field landscape? boolean
---@field paper? string
---@field quality? number
---@field reduced_motion? boolean
---@field scale? number
---@field scroll_page? boolean
---@field timeout? number
---@field url string
---@field wait_until? string
---@field width? number

---@class Rendering

---@class RenderingLoadMatch

---@class SafetyReviewRequest
---@field current_control string
---@field desired_outcome string
---@field email string
---@field language string
---@field notice string
---@field primary_concern string
---@field reply_consent boolean
---@field repository_authority boolean
---@field repository_url string
---@field request table
---@field route_path string
---@field runtime string
---@field safety_acknowledged boolean
---@field start_boundary_acknowledged boolean
---@field test_evidence string

---@class SafetyReviewRequestCreateData
---@field current_control string
---@field desired_outcome string
---@field email string
---@field language string
---@field notice string
---@field primary_concern string
---@field reply_consent boolean
---@field repository_authority boolean
---@field repository_url string
---@field request table
---@field route_path string
---@field runtime string
---@field safety_acknowledged boolean
---@field start_boundary_acknowledged boolean
---@field test_evidence string

---@class Trial
---@field consent? boolean
---@field email string
---@field expected_render? string
---@field name? string
---@field use_case? string

---@class TrialCreateData
---@field consent? boolean
---@field email string
---@field expected_render? string
---@field name? string
---@field use_case? string

---@class Upgrade
---@field consent boolean
---@field note? string
---@field notice string
---@field request table
---@field requested_plan string

---@class UpgradeCreateData
---@field consent boolean
---@field note? string
---@field notice string
---@field request table
---@field requested_plan string

---@class Usage
---@field customer table
---@field link table
---@field upgrade_request any
---@field usage table

---@class UsageLoadMatch
---@field customer? table
---@field link? table
---@field upgrade_request? any
---@field usage? table

local M = {}

return M
