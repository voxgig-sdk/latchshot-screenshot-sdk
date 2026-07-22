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
    ok: bool
    render: dict
    service: str


class HealthLoadMatch(TypedDict, total=False):
    ok: bool
    render: dict
    service: str


class MonitoringRequestRequired(TypedDict):
    email: str
    monitoring_goal: str
    notice: str
    page_count: str
    page_url: str
    public_page_authority: bool
    reply_consent: bool
    request: dict
    safety_acknowledged: bool
    start_boundary_acknowledged: bool


class MonitoringRequest(MonitoringRequestRequired, total=False):
    change_context: str


class MonitoringRequestCreateDataRequired(TypedDict):
    email: str
    monitoring_goal: str
    notice: str
    page_count: str
    page_url: str
    public_page_authority: bool
    reply_consent: bool
    request: dict
    safety_acknowledged: bool
    start_boundary_acknowledged: bool


class MonitoringRequestCreateData(MonitoringRequestCreateDataRequired, total=False):
    change_context: str


class PilotRequestRequired(TypedDict):
    email: str
    notice: str
    reply_consent: bool
    repository_authority: bool
    repository_url: str
    request: dict
    safety_acknowledged: bool
    start_boundary_acknowledged: bool


class PilotRequest(PilotRequestRequired, total=False):
    acceptance_sample: str
    call_site: str
    current_contract: str
    expected_render: str
    language: str
    provider: str
    required_behavior: str


class PilotRequestCreateDataRequired(TypedDict):
    email: str
    notice: str
    reply_consent: bool
    repository_authority: bool
    repository_url: str
    request: dict
    safety_acknowledged: bool
    start_boundary_acknowledged: bool


class PilotRequestCreateData(PilotRequestCreateDataRequired, total=False):
    acceptance_sample: str
    call_site: str
    current_contract: str
    expected_render: str
    language: str
    provider: str
    required_behavior: str


class RenderRequired(TypedDict):
    url: str


class Render(RenderRequired, total=False):
    block_ad: bool
    block_chat: bool
    block_tracker: bool
    dark_mode: bool
    delay: int
    format: str
    full_page: bool
    height: int
    hide_cookie_banner: bool
    hide_popup: bool
    kind: str
    landscape: bool
    paper: str
    quality: int
    reduced_motion: bool
    scale: int
    scroll_page: bool
    timeout: int
    wait_until: str
    width: int


class RenderCreateDataRequired(TypedDict):
    url: str


class RenderCreateData(RenderCreateDataRequired, total=False):
    block_ad: bool
    block_chat: bool
    block_tracker: bool
    dark_mode: bool
    delay: int
    format: str
    full_page: bool
    height: int
    hide_cookie_banner: bool
    hide_popup: bool
    kind: str
    landscape: bool
    paper: str
    quality: int
    reduced_motion: bool
    scale: int
    scroll_page: bool
    timeout: int
    wait_until: str
    width: int


class Rendering(TypedDict):
    pass


class RenderingLoadMatch(TypedDict):
    pass


class SafetyReviewRequest(TypedDict):
    current_control: str
    desired_outcome: str
    email: str
    language: str
    notice: str
    primary_concern: str
    reply_consent: bool
    repository_authority: bool
    repository_url: str
    request: dict
    route_path: str
    runtime: str
    safety_acknowledged: bool
    start_boundary_acknowledged: bool
    test_evidence: str


class SafetyReviewRequestCreateData(TypedDict):
    current_control: str
    desired_outcome: str
    email: str
    language: str
    notice: str
    primary_concern: str
    reply_consent: bool
    repository_authority: bool
    repository_url: str
    request: dict
    route_path: str
    runtime: str
    safety_acknowledged: bool
    start_boundary_acknowledged: bool
    test_evidence: str


class TrialRequired(TypedDict):
    email: str


class Trial(TrialRequired, total=False):
    consent: bool
    expected_render: str
    name: str
    use_case: str


class TrialCreateDataRequired(TypedDict):
    email: str


class TrialCreateData(TrialCreateDataRequired, total=False):
    consent: bool
    expected_render: str
    name: str
    use_case: str


class UpgradeRequired(TypedDict):
    consent: bool
    notice: str
    request: dict
    requested_plan: str


class Upgrade(UpgradeRequired, total=False):
    note: str


class UpgradeCreateDataRequired(TypedDict):
    consent: bool
    notice: str
    request: dict
    requested_plan: str


class UpgradeCreateData(UpgradeCreateDataRequired, total=False):
    note: str


class Usage(TypedDict):
    customer: dict
    link: dict
    upgrade_request: Any
    usage: dict


class UsageLoadMatch(TypedDict, total=False):
    customer: dict
    link: dict
    upgrade_request: Any
    usage: dict
