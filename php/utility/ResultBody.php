<?php
declare(strict_types=1);

// LatchshotScreenshot SDK utility: result_body

class LatchshotScreenshotResultBody
{
    public static function call(LatchshotScreenshotContext $ctx): ?LatchshotScreenshotResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
