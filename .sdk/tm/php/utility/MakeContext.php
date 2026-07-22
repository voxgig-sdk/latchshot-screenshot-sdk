<?php
declare(strict_types=1);

// LatchshotScreenshot SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class LatchshotScreenshotMakeContext
{
    public static function call(array $ctxmap, ?LatchshotScreenshotContext $basectx): LatchshotScreenshotContext
    {
        return new LatchshotScreenshotContext($ctxmap, $basectx);
    }
}
