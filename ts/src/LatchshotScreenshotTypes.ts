// Typed models for the LatchshotScreenshot SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Health {
  ok: boolean
  render: Record<string, any>
  service: string
}

export interface HealthLoadMatch {
  ok?: boolean
  render?: Record<string, any>
  service?: string
}

export interface MonitoringRequest {
  change_context?: string
  email: string
  monitoring_goal: string
  notice: string
  page_count: string
  page_url: string
  public_page_authority: boolean
  reply_consent: boolean
  request: Record<string, any>
  safety_acknowledged: boolean
  start_boundary_acknowledged: boolean
}

export interface MonitoringRequestCreateData {
  change_context?: string
  email: string
  monitoring_goal: string
  notice: string
  page_count: string
  page_url: string
  public_page_authority: boolean
  reply_consent: boolean
  request: Record<string, any>
  safety_acknowledged: boolean
  start_boundary_acknowledged: boolean
}

export interface PilotRequest {
  acceptance_sample?: string
  call_site?: string
  current_contract?: string
  email: string
  expected_render?: string
  language?: string
  notice: string
  provider?: string
  reply_consent: boolean
  repository_authority: boolean
  repository_url: string
  request: Record<string, any>
  required_behavior?: string
  safety_acknowledged: boolean
  start_boundary_acknowledged: boolean
}

export interface PilotRequestCreateData {
  acceptance_sample?: string
  call_site?: string
  current_contract?: string
  email: string
  expected_render?: string
  language?: string
  notice: string
  provider?: string
  reply_consent: boolean
  repository_authority: boolean
  repository_url: string
  request: Record<string, any>
  required_behavior?: string
  safety_acknowledged: boolean
  start_boundary_acknowledged: boolean
}

export interface Render {
  block_ad?: boolean
  block_chat?: boolean
  block_tracker?: boolean
  dark_mode?: boolean
  delay?: number
  format?: string
  full_page?: boolean
  height?: number
  hide_cookie_banner?: boolean
  hide_popup?: boolean
  kind?: string
  landscape?: boolean
  paper?: string
  quality?: number
  reduced_motion?: boolean
  scale?: number
  scroll_page?: boolean
  timeout?: number
  url: string
  wait_until?: string
  width?: number
}

export interface RenderCreateData {
  block_ad?: boolean
  block_chat?: boolean
  block_tracker?: boolean
  dark_mode?: boolean
  delay?: number
  format?: string
  full_page?: boolean
  height?: number
  hide_cookie_banner?: boolean
  hide_popup?: boolean
  kind?: string
  landscape?: boolean
  paper?: string
  quality?: number
  reduced_motion?: boolean
  scale?: number
  scroll_page?: boolean
  timeout?: number
  url: string
  wait_until?: string
  width?: number
}

export interface Rendering {
}

export interface RenderingLoadMatch {
}

export interface SafetyReviewRequest {
  current_control: string
  desired_outcome: string
  email: string
  language: string
  notice: string
  primary_concern: string
  reply_consent: boolean
  repository_authority: boolean
  repository_url: string
  request: Record<string, any>
  route_path: string
  runtime: string
  safety_acknowledged: boolean
  start_boundary_acknowledged: boolean
  test_evidence: string
}

export interface SafetyReviewRequestCreateData {
  current_control: string
  desired_outcome: string
  email: string
  language: string
  notice: string
  primary_concern: string
  reply_consent: boolean
  repository_authority: boolean
  repository_url: string
  request: Record<string, any>
  route_path: string
  runtime: string
  safety_acknowledged: boolean
  start_boundary_acknowledged: boolean
  test_evidence: string
}

export interface Trial {
  consent?: boolean
  email: string
  expected_render?: string
  name?: string
  use_case?: string
}

export interface TrialCreateData {
  consent?: boolean
  email: string
  expected_render?: string
  name?: string
  use_case?: string
}

export interface Upgrade {
  consent: boolean
  note?: string
  notice: string
  request: Record<string, any>
  requested_plan: string
}

export interface UpgradeCreateData {
  consent: boolean
  note?: string
  notice: string
  request: Record<string, any>
  requested_plan: string
}

export interface Usage {
  customer: Record<string, any>
  link: Record<string, any>
  upgrade_request: any
  usage: Record<string, any>
}

export interface UsageLoadMatch {
  customer?: Record<string, any>
  link?: Record<string, any>
  upgrade_request?: any
  usage?: Record<string, any>
}

