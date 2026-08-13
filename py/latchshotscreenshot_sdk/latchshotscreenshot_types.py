# Typed models for the LatchshotScreenshot SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Health(TypedDict):
    active: int
    concurrency: int
    pending: int


class HealthLoadMatch(TypedDict, total=False):
    active: int
    concurrency: int
    pending: int


class MonitoringRequestRequired(TypedDict):
    createdAt: str
    email: str
    id: int
    monitoringGoal: str
    pageCount: str
    pageUrl: str
    publicPageAuthority: bool
    replyConsent: bool
    safetyAcknowledged: bool
    startBoundaryAcknowledged: bool
    status: str
    updatedAt: str


class MonitoringRequest(MonitoringRequestRequired, total=False):
    changeContext: str


class MonitoringRequestCreateDataRequired(TypedDict):
    createdAt: str
    email: str
    id: int
    monitoringGoal: str
    pageCount: str
    pageUrl: str
    publicPageAuthority: bool
    replyConsent: bool
    safetyAcknowledged: bool
    startBoundaryAcknowledged: bool
    status: str
    updatedAt: str


class MonitoringRequestCreateData(MonitoringRequestCreateDataRequired, total=False):
    changeContext: str


class PilotRequestRequired(TypedDict):
    callSite: str
    createdAt: str
    email: str
    id: int
    replyConsent: bool
    repositoryAuthority: bool
    repositoryUrl: str
    safetyAcknowledged: bool
    startBoundaryAcknowledged: bool
    status: str
    updatedAt: str


class PilotRequest(PilotRequestRequired, total=False):
    acceptanceSample: str
    currentContract: str
    expectedRenders: str
    language: str
    provider: str
    requiredBehavior: str


class PilotRequestCreateDataRequired(TypedDict):
    callSite: str
    createdAt: str
    email: str
    id: int
    replyConsent: bool
    repositoryAuthority: bool
    repositoryUrl: str
    safetyAcknowledged: bool
    startBoundaryAcknowledged: bool
    status: str
    updatedAt: str


class PilotRequestCreateData(PilotRequestCreateDataRequired, total=False):
    acceptanceSample: str
    currentContract: str
    expectedRenders: str
    language: str
    provider: str
    requiredBehavior: str


class RenderRequired(TypedDict):
    url: str


class Render(RenderRequired, total=False):
    blockAds: bool
    blockChats: bool
    blockTrackers: bool
    darkMode: bool
    delay: int
    format: str
    fullPage: bool
    height: int
    hideCookieBanners: bool
    hidePopups: bool
    kind: str
    landscape: bool
    paper: str
    quality: int
    reducedMotion: bool
    scale: int
    scrollPage: bool
    timeout: int
    waitUntil: str
    width: int


class RenderCreateDataRequired(TypedDict):
    url: str


class RenderCreateData(RenderCreateDataRequired, total=False):
    blockAds: bool
    blockChats: bool
    blockTrackers: bool
    darkMode: bool
    delay: int
    format: str
    fullPage: bool
    height: int
    hideCookieBanners: bool
    hidePopups: bool
    kind: str
    landscape: bool
    paper: str
    quality: int
    reducedMotion: bool
    scale: int
    scrollPage: bool
    timeout: int
    waitUntil: str
    width: int


class Rendering(TypedDict):
    pass


class RenderingLoadMatch(TypedDict):
    pass


class SafetyReviewRequest(TypedDict):
    createdAt: str
    currentControls: str
    desiredOutcome: str
    email: str
    id: int
    language: str
    primaryConcern: str
    replyConsent: bool
    repositoryAuthority: bool
    repositoryUrl: str
    routePath: str
    runtime: str
    safetyAcknowledged: bool
    startBoundaryAcknowledged: bool
    status: str
    testEvidence: str
    updatedAt: str


class SafetyReviewRequestCreateData(TypedDict):
    createdAt: str
    currentControls: str
    desiredOutcome: str
    email: str
    id: int
    language: str
    primaryConcern: str
    replyConsent: bool
    repositoryAuthority: bool
    repositoryUrl: str
    routePath: str
    runtime: str
    safetyAcknowledged: bool
    startBoundaryAcknowledged: bool
    status: str
    testEvidence: str
    updatedAt: str


class TrialRequired(TypedDict):
    email: str


class Trial(TrialRequired, total=False):
    consent: bool
    expectedRenders: str
    name: str
    useCase: str


class TrialCreateDataRequired(TypedDict):
    email: str


class TrialCreateData(TrialCreateDataRequired, total=False):
    consent: bool
    expectedRenders: str
    name: str
    useCase: str


class UpgradeRequired(TypedDict):
    consent: bool
    createdAt: str
    currentPlan: str
    id: int
    requestedPlan: str
    status: str
    updatedAt: str


class Upgrade(UpgradeRequired, total=False):
    note: str


class UpgradeCreateDataRequired(TypedDict):
    consent: bool
    createdAt: str
    currentPlan: str
    id: int
    requestedPlan: str
    status: str
    updatedAt: str


class UpgradeCreateData(UpgradeCreateDataRequired, total=False):
    note: str


class Usage(TypedDict):
    customer: dict
    links: dict
    upgradeRequest: Any
    usage: dict


class UsageLoadMatch(TypedDict, total=False):
    customer: dict
    links: dict
    upgradeRequest: Any
    usage: dict
