<?php
declare(strict_types=1);

// LatchshotScreenshot SDK utility: prepare_body

class LatchshotScreenshotPrepareBody
{
    public static function call(LatchshotScreenshotContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
