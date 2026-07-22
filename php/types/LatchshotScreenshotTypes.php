<?php
declare(strict_types=1);

// Typed models for the LatchshotScreenshot SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Health entity data model. */
class Health
{
    public bool $ok;
    public array $render;
    public string $service;
}

/** Request payload for Health#load. */
class HealthLoadMatch
{
    public ?bool $ok = null;
    public ?array $render = null;
    public ?string $service = null;
}

/** MonitoringRequest entity data model. */
class MonitoringRequest
{
    public ?string $change_context = null;
    public string $email;
    public string $monitoring_goal;
    public string $notice;
    public string $page_count;
    public string $page_url;
    public bool $public_page_authority;
    public bool $reply_consent;
    public array $request;
    public bool $safety_acknowledged;
    public bool $start_boundary_acknowledged;
}

/** Request payload for MonitoringRequest#create. */
class MonitoringRequestCreateData
{
    public ?string $change_context = null;
    public string $email;
    public string $monitoring_goal;
    public string $notice;
    public string $page_count;
    public string $page_url;
    public bool $public_page_authority;
    public bool $reply_consent;
    public array $request;
    public bool $safety_acknowledged;
    public bool $start_boundary_acknowledged;
}

/** PilotRequest entity data model. */
class PilotRequest
{
    public ?string $acceptance_sample = null;
    public ?string $call_site = null;
    public ?string $current_contract = null;
    public string $email;
    public ?string $expected_render = null;
    public ?string $language = null;
    public string $notice;
    public ?string $provider = null;
    public bool $reply_consent;
    public bool $repository_authority;
    public string $repository_url;
    public array $request;
    public ?string $required_behavior = null;
    public bool $safety_acknowledged;
    public bool $start_boundary_acknowledged;
}

/** Request payload for PilotRequest#create. */
class PilotRequestCreateData
{
    public ?string $acceptance_sample = null;
    public ?string $call_site = null;
    public ?string $current_contract = null;
    public string $email;
    public ?string $expected_render = null;
    public ?string $language = null;
    public string $notice;
    public ?string $provider = null;
    public bool $reply_consent;
    public bool $repository_authority;
    public string $repository_url;
    public array $request;
    public ?string $required_behavior = null;
    public bool $safety_acknowledged;
    public bool $start_boundary_acknowledged;
}

/** Render entity data model. */
class Render
{
    public ?bool $block_ad = null;
    public ?bool $block_chat = null;
    public ?bool $block_tracker = null;
    public ?bool $dark_mode = null;
    public ?int $delay = null;
    public ?string $format = null;
    public ?bool $full_page = null;
    public ?int $height = null;
    public ?bool $hide_cookie_banner = null;
    public ?bool $hide_popup = null;
    public ?string $kind = null;
    public ?bool $landscape = null;
    public ?string $paper = null;
    public ?int $quality = null;
    public ?bool $reduced_motion = null;
    public ?int $scale = null;
    public ?bool $scroll_page = null;
    public ?int $timeout = null;
    public string $url;
    public ?string $wait_until = null;
    public ?int $width = null;
}

/** Request payload for Render#create. */
class RenderCreateData
{
    public ?bool $block_ad = null;
    public ?bool $block_chat = null;
    public ?bool $block_tracker = null;
    public ?bool $dark_mode = null;
    public ?int $delay = null;
    public ?string $format = null;
    public ?bool $full_page = null;
    public ?int $height = null;
    public ?bool $hide_cookie_banner = null;
    public ?bool $hide_popup = null;
    public ?string $kind = null;
    public ?bool $landscape = null;
    public ?string $paper = null;
    public ?int $quality = null;
    public ?bool $reduced_motion = null;
    public ?int $scale = null;
    public ?bool $scroll_page = null;
    public ?int $timeout = null;
    public string $url;
    public ?string $wait_until = null;
    public ?int $width = null;
}

/** Rendering entity data model. */
class Rendering
{
}

/** Request payload for Rendering#load. */
class RenderingLoadMatch
{
}

/** SafetyReviewRequest entity data model. */
class SafetyReviewRequest
{
    public string $current_control;
    public string $desired_outcome;
    public string $email;
    public string $language;
    public string $notice;
    public string $primary_concern;
    public bool $reply_consent;
    public bool $repository_authority;
    public string $repository_url;
    public array $request;
    public string $route_path;
    public string $runtime;
    public bool $safety_acknowledged;
    public bool $start_boundary_acknowledged;
    public string $test_evidence;
}

/** Request payload for SafetyReviewRequest#create. */
class SafetyReviewRequestCreateData
{
    public string $current_control;
    public string $desired_outcome;
    public string $email;
    public string $language;
    public string $notice;
    public string $primary_concern;
    public bool $reply_consent;
    public bool $repository_authority;
    public string $repository_url;
    public array $request;
    public string $route_path;
    public string $runtime;
    public bool $safety_acknowledged;
    public bool $start_boundary_acknowledged;
    public string $test_evidence;
}

/** Trial entity data model. */
class Trial
{
    public ?bool $consent = null;
    public string $email;
    public ?string $expected_render = null;
    public ?string $name = null;
    public ?string $use_case = null;
}

/** Request payload for Trial#create. */
class TrialCreateData
{
    public ?bool $consent = null;
    public string $email;
    public ?string $expected_render = null;
    public ?string $name = null;
    public ?string $use_case = null;
}

/** Upgrade entity data model. */
class Upgrade
{
    public bool $consent;
    public ?string $note = null;
    public string $notice;
    public array $request;
    public string $requested_plan;
}

/** Request payload for Upgrade#create. */
class UpgradeCreateData
{
    public bool $consent;
    public ?string $note = null;
    public string $notice;
    public array $request;
    public string $requested_plan;
}

/** Usage entity data model. */
class Usage
{
    public array $customer;
    public array $link;
    public mixed $upgrade_request;
    public array $usage;
}

/** Request payload for Usage#load. */
class UsageLoadMatch
{
    public ?array $customer = null;
    public ?array $link = null;
    public mixed $upgrade_request = null;
    public ?array $usage = null;
}

