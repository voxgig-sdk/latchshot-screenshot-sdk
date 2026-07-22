<?php
declare(strict_types=1);

// LatchshotScreenshot SDK exists test

require_once __DIR__ . '/../latchshotscreenshot_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = LatchshotScreenshotSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
