<?php
declare(strict_types=1);

// LatchshotScreenshot SDK base feature

class LatchshotScreenshotBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(LatchshotScreenshotContext $ctx, array $options): void {}
    public function PostConstruct(LatchshotScreenshotContext $ctx): void {}
    public function PostConstructEntity(LatchshotScreenshotContext $ctx): void {}
    public function SetData(LatchshotScreenshotContext $ctx): void {}
    public function GetData(LatchshotScreenshotContext $ctx): void {}
    public function GetMatch(LatchshotScreenshotContext $ctx): void {}
    public function SetMatch(LatchshotScreenshotContext $ctx): void {}
    public function PrePoint(LatchshotScreenshotContext $ctx): void {}
    public function PreSpec(LatchshotScreenshotContext $ctx): void {}
    public function PreRequest(LatchshotScreenshotContext $ctx): void {}
    public function PreResponse(LatchshotScreenshotContext $ctx): void {}
    public function PreResult(LatchshotScreenshotContext $ctx): void {}
    public function PreDone(LatchshotScreenshotContext $ctx): void {}
    public function PreUnexpected(LatchshotScreenshotContext $ctx): void {}
}
