<?php
declare(strict_types=1);

// LatchshotScreenshot SDK utility: prepare_path

class LatchshotScreenshotPreparePath
{
    public static function call(LatchshotScreenshotContext $ctx): string
    {
        $point = $ctx->point;
        $parts = [];
        if ($point) {
            $p = \Voxgig\Struct\Struct::getprop($point, 'parts');
            if (is_array($p)) {
                $parts = $p;
            }
        }
        return \Voxgig\Struct\Struct::join($parts, '/', true);
    }
}
