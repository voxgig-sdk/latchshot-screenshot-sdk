<?php
declare(strict_types=1);

// LatchshotScreenshot SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class LatchshotScreenshotFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new LatchshotScreenshotBaseFeature();
            case "test":
                return new LatchshotScreenshotTestFeature();
            default:
                return new LatchshotScreenshotBaseFeature();
        }
    }
}
