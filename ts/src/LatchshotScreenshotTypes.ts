// Typed models for the LatchshotScreenshot SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Health {
  active: number
  concurrency: number
  pending: number
}

export interface HealthLoadMatch {
  active?: number
  concurrency?: number
  pending?: number
}

export interface MonitoringRequest {
  changeContext?: string
  createdAt: string
  email: string
  id: number
  monitoringGoal: string
  pageCount: string
  pageUrl: string
  publicPageAuthority: boolean
  replyConsent: boolean
  safetyAcknowledged: boolean
  startBoundaryAcknowledged: boolean
  status: string
  updatedAt: string
}

export interface MonitoringRequestCreateData {
  changeContext?: string
  createdAt: string
  email: string
  id: number
  monitoringGoal: string
  pageCount: string
  pageUrl: string
  publicPageAuthority: boolean
  replyConsent: boolean
  safetyAcknowledged: boolean
  startBoundaryAcknowledged: boolean
  status: string
  updatedAt: string
}

export interface PilotRequest {
  acceptanceSample?: string
  callSite: string
  createdAt: string
  currentContract?: string
  email: string
  expectedRenders?: string
  id: number
  language?: string
  provider?: string
  replyConsent: boolean
  repositoryAuthority: boolean
  repositoryUrl: string
  requiredBehavior?: string
  safetyAcknowledged: boolean
  startBoundaryAcknowledged: boolean
  status: string
  updatedAt: string
}

export interface PilotRequestCreateData {
  acceptanceSample?: string
  callSite: string
  createdAt: string
  currentContract?: string
  email: string
  expectedRenders?: string
  id: number
  language?: string
  provider?: string
  replyConsent: boolean
  repositoryAuthority: boolean
  repositoryUrl: string
  requiredBehavior?: string
  safetyAcknowledged: boolean
  startBoundaryAcknowledged: boolean
  status: string
  updatedAt: string
}

export interface Render {
  blockAds?: boolean
  blockChats?: boolean
  blockTrackers?: boolean
  darkMode?: boolean
  delay?: number
  format?: string
  fullPage?: boolean
  height?: number
  hideCookieBanners?: boolean
  hidePopups?: boolean
  kind?: string
  landscape?: boolean
  paper?: string
  quality?: number
  reducedMotion?: boolean
  scale?: number
  scrollPage?: boolean
  timeout?: number
  url: string
  waitUntil?: string
  width?: number
}

export interface RenderCreateData {
  blockAds?: boolean
  blockChats?: boolean
  blockTrackers?: boolean
  darkMode?: boolean
  delay?: number
  format?: string
  fullPage?: boolean
  height?: number
  hideCookieBanners?: boolean
  hidePopups?: boolean
  kind?: string
  landscape?: boolean
  paper?: string
  quality?: number
  reducedMotion?: boolean
  scale?: number
  scrollPage?: boolean
  timeout?: number
  url: string
  waitUntil?: string
  width?: number
}

export interface Rendering {
}

export interface RenderingLoadMatch {
  block_ad?: boolean
  block_chat?: boolean
  block_tracker?: boolean
  dark_mode?: boolean
  format?: string
  full_page?: boolean
  height?: number
  hide_cookie_banner?: boolean
  hide_popup?: boolean
  quality?: number
  scroll_page?: boolean
  url: string
  width?: number
}

export interface SafetyReviewRequest {
  createdAt: string
  currentControls: string
  desiredOutcome: string
  email: string
  id: number
  language: string
  primaryConcern: string
  replyConsent: boolean
  repositoryAuthority: boolean
  repositoryUrl: string
  routePath: string
  runtime: string
  safetyAcknowledged: boolean
  startBoundaryAcknowledged: boolean
  status: string
  testEvidence: string
  updatedAt: string
}

export interface SafetyReviewRequestCreateData {
  createdAt: string
  currentControls: string
  desiredOutcome: string
  email: string
  id: number
  language: string
  primaryConcern: string
  replyConsent: boolean
  repositoryAuthority: boolean
  repositoryUrl: string
  routePath: string
  runtime: string
  safetyAcknowledged: boolean
  startBoundaryAcknowledged: boolean
  status: string
  testEvidence: string
  updatedAt: string
}

export interface Trial {
  consent?: boolean
  email: string
  expectedRenders?: string
  name?: string
  useCase?: string
}

export interface TrialCreateData {
  consent?: boolean
  email: string
  expectedRenders?: string
  name?: string
  useCase?: string
}

export interface Upgrade {
  consent: boolean
  createdAt: string
  currentPlan: string
  id: number
  note?: string
  requestedPlan: string
  status: string
  updatedAt: string
}

export interface UpgradeCreateData {
  consent: boolean
  createdAt: string
  currentPlan: string
  id: number
  note?: string
  requestedPlan: string
  status: string
  updatedAt: string
}

export interface Usage {
  customer: Record<string, any>
  links: Record<string, any>
  upgradeRequest: any
  usage: Record<string, any>
}

export interface UsageLoadMatch {
  customer?: Record<string, any>
  links?: Record<string, any>
  upgradeRequest?: any
  usage?: Record<string, any>
}

