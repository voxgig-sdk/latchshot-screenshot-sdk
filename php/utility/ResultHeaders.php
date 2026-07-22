<?php
declare(strict_types=1);

// LatchshotScreenshot SDK utility: result_headers

class LatchshotScreenshotResultHeaders
{
    public static function call(LatchshotScreenshotContext $ctx): ?LatchshotScreenshotResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
