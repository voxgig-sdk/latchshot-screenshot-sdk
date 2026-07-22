<?php
declare(strict_types=1);

// MonitoringRequest entity test

require_once __DIR__ . '/../latchshotscreenshot_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class MonitoringRequestEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = LatchshotScreenshotSDK::test(null, null);
        $ent = $testsdk->MonitoringRequest(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = monitoring_request_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "monitoring_request." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set LATCHSHOTSCREENSHOT_TEST_MONITORING_REQUEST_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $monitoring_request_ref01_ent = $client->MonitoringRequest(null);
        $monitoring_request_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.monitoring_request"), "monitoring_request_ref01"));

        $monitoring_request_ref01_data_result = $monitoring_request_ref01_ent->create($monitoring_request_ref01_data, null);
        $monitoring_request_ref01_data = Helpers::to_map($monitoring_request_ref01_data_result);
        $this->assertNotNull($monitoring_request_ref01_data);

    }
}

function monitoring_request_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/monitoring_request/MonitoringRequestTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = LatchshotScreenshotSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["monitoring_request01", "monitoring_request02", "monitoring_request03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("LATCHSHOTSCREENSHOT_TEST_MONITORING_REQUEST_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "LATCHSHOTSCREENSHOT_TEST_MONITORING_REQUEST_ENTID" => $idmap,
        "LATCHSHOTSCREENSHOT_TEST_LIVE" => "FALSE",
        "LATCHSHOTSCREENSHOT_TEST_EXPLAIN" => "FALSE",
        "LATCHSHOTSCREENSHOT_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["LATCHSHOTSCREENSHOT_TEST_MONITORING_REQUEST_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["LATCHSHOTSCREENSHOT_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["LATCHSHOTSCREENSHOT_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new LatchshotScreenshotSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["LATCHSHOTSCREENSHOT_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["LATCHSHOTSCREENSHOT_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
