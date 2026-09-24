<?php
declare(strict_types=1);

// Typed models for the LatchshotScreenshot SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Health entity data model. */
class Health
{
    public int $active;
    public int $concurrency;
    public int $pending;
}

/** Request payload for Health#load. */
class HealthLoadMatch
{
    public ?int $active = null;
    public ?int $concurrency = null;
    public ?int $pending = null;
}

/** MonitoringRequest entity data model. */
class MonitoringRequest
{
    public ?string $changeContext = null;
    public string $createdAt;
    public string $email;
    public int $id;
    public string $monitoringGoal;
    public string $pageCount;
    public string $pageUrl;
    public bool $publicPageAuthority;
    public bool $replyConsent;
    public bool $safetyAcknowledged;
    public bool $startBoundaryAcknowledged;
    public string $status;
    public string $updatedAt;
}

/** Request payload for MonitoringRequest#create. */
class MonitoringRequestCreateData
{
    public ?string $changeContext = null;
    public string $createdAt;
    public string $email;
    public int $id;
    public string $monitoringGoal;
    public string $pageCount;
    public string $pageUrl;
    public bool $publicPageAuthority;
    public bool $replyConsent;
    public bool $safetyAcknowledged;
    public bool $startBoundaryAcknowledged;
    public string $status;
    public string $updatedAt;
}

/** PilotRequest entity data model. */
class PilotRequest
{
    public ?string $acceptanceSample = null;
    public string $callSite;
    public string $createdAt;
    public ?string $currentContract = null;
    public string $email;
    public ?string $expectedRenders = null;
    public int $id;
    public ?string $language = null;
    public ?string $provider = null;
    public bool $replyConsent;
    public bool $repositoryAuthority;
    public string $repositoryUrl;
    public ?string $requiredBehavior = null;
    public bool $safetyAcknowledged;
    public bool $startBoundaryAcknowledged;
    public string $status;
    public string $updatedAt;
}

/** Request payload for PilotRequest#create. */
class PilotRequestCreateData
{
    public ?string $acceptanceSample = null;
    public string $callSite;
    public string $createdAt;
    public ?string $currentContract = null;
    public string $email;
    public ?string $expectedRenders = null;
    public int $id;
    public ?string $language = null;
    public ?string $provider = null;
    public bool $replyConsent;
    public bool $repositoryAuthority;
    public string $repositoryUrl;
    public ?string $requiredBehavior = null;
    public bool $safetyAcknowledged;
    public bool $startBoundaryAcknowledged;
    public string $status;
    public string $updatedAt;
}

/** Render entity data model. */
class Render
{
    public ?bool $blockAds = null;
    public ?bool $blockChats = null;
    public ?bool $blockTrackers = null;
    public ?bool $darkMode = null;
    public ?int $delay = null;
    public ?string $format = null;
    public ?bool $fullPage = null;
    public ?int $height = null;
    public ?bool $hideCookieBanners = null;
    public ?bool $hidePopups = null;
    public ?string $kind = null;
    public ?bool $landscape = null;
    public ?string $paper = null;
    public ?int $quality = null;
    public ?bool $reducedMotion = null;
    public ?int $scale = null;
    public ?bool $scrollPage = null;
    public ?int $timeout = null;
    public string $url;
    public ?string $waitUntil = null;
    public ?int $width = null;
}

/** Request payload for Render#create. */
class RenderCreateData
{
    public ?bool $blockAds = null;
    public ?bool $blockChats = null;
    public ?bool $blockTrackers = null;
    public ?bool $darkMode = null;
    public ?int $delay = null;
    public ?string $format = null;
    public ?bool $fullPage = null;
    public ?int $height = null;
    public ?bool $hideCookieBanners = null;
    public ?bool $hidePopups = null;
    public ?string $kind = null;
    public ?bool $landscape = null;
    public ?string $paper = null;
    public ?int $quality = null;
    public ?bool $reducedMotion = null;
    public ?int $scale = null;
    public ?bool $scrollPage = null;
    public ?int $timeout = null;
    public string $url;
    public ?string $waitUntil = null;
    public ?int $width = null;
}

/** Rendering entity data model. */
class Rendering
{
}

/** Request payload for Rendering#load. */
class RenderingLoadMatch
{
    public ?bool $block_ad = null;
    public ?bool $block_chat = null;
    public ?bool $block_tracker = null;
    public ?bool $dark_mode = null;
    public ?string $format = null;
    public ?bool $full_page = null;
    public ?int $height = null;
    public ?bool $hide_cookie_banner = null;
    public ?bool $hide_popup = null;
    public ?int $quality = null;
    public ?bool $scroll_page = null;
    public string $url;
    public ?int $width = null;
}

/** SafetyReviewRequest entity data model. */
class SafetyReviewRequest
{
    public string $createdAt;
    public string $currentControls;
    public string $desiredOutcome;
    public string $email;
    public int $id;
    public string $language;
    public string $primaryConcern;
    public bool $replyConsent;
    public bool $repositoryAuthority;
    public string $repositoryUrl;
    public string $routePath;
    public string $runtime;
    public bool $safetyAcknowledged;
    public bool $startBoundaryAcknowledged;
    public string $status;
    public string $testEvidence;
    public string $updatedAt;
}

/** Request payload for SafetyReviewRequest#create. */
class SafetyReviewRequestCreateData
{
    public string $createdAt;
    public string $currentControls;
    public string $desiredOutcome;
    public string $email;
    public int $id;
    public string $language;
    public string $primaryConcern;
    public bool $replyConsent;
    public bool $repositoryAuthority;
    public string $repositoryUrl;
    public string $routePath;
    public string $runtime;
    public bool $safetyAcknowledged;
    public bool $startBoundaryAcknowledged;
    public string $status;
    public string $testEvidence;
    public string $updatedAt;
}

/** Trial entity data model. */
class Trial
{
    public ?bool $consent = null;
    public string $email;
    public ?string $expectedRenders = null;
    public ?string $name = null;
    public ?string $useCase = null;
}

/** Request payload for Trial#create. */
class TrialCreateData
{
    public ?bool $consent = null;
    public string $email;
    public ?string $expectedRenders = null;
    public ?string $name = null;
    public ?string $useCase = null;
}

/** Upgrade entity data model. */
class Upgrade
{
    public bool $consent;
    public string $createdAt;
    public string $currentPlan;
    public int $id;
    public ?string $note = null;
    public string $requestedPlan;
    public string $status;
    public string $updatedAt;
}

/** Request payload for Upgrade#create. */
class UpgradeCreateData
{
    public bool $consent;
    public string $createdAt;
    public string $currentPlan;
    public int $id;
    public ?string $note = null;
    public string $requestedPlan;
    public string $status;
    public string $updatedAt;
}

/** Usage entity data model. */
class Usage
{
    public array $customer;
    public array $links;
    public mixed $upgradeRequest;
    public array $usage;
}

/** Request payload for Usage#load. */
class UsageLoadMatch
{
    public ?array $customer = null;
    public ?array $links = null;
    public mixed $upgradeRequest = null;
    public ?array $usage = null;
}

