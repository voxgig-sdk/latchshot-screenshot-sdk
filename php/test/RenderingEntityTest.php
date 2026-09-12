<?php
declare(strict_types=1);

// Rendering entity test

require_once __DIR__ . '/../latchshotscreenshot_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class RenderingEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = LatchshotScreenshotSDK::test(null, null);
        $ent = $testsdk->Rendering(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = rendering_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "rendering." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set LATCHSHOT_SCREENSHOT_TEST_RENDERING_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $rendering_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.rendering")));
        $rendering_ref01_data = null;
        if (count($rendering_ref01_data_raw) > 0) {
            $rendering_ref01_data = Helpers::to_map($rendering_ref01_data_raw[0][1]);
        }

        // LOAD
        $rendering_ref01_ent = $client->Rendering(null);
        $rendering_ref01_match_dt0 = [];
        $rendering_ref01_data_dt0_loaded = $rendering_ref01_ent->load($rendering_ref01_match_dt0, null);
        $this->assertNotNull($rendering_ref01_data_dt0_loaded);

    }
}

function rendering_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/rendering/RenderingTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = LatchshotScreenshotSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["rendering01", "rendering02", "rendering03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("LATCHSHOT_SCREENSHOT_TEST_RENDERING_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "LATCHSHOT_SCREENSHOT_TEST_RENDERING_ENTID" => $idmap,
        "LATCHSHOT_SCREENSHOT_TEST_LIVE" => "FALSE",
        "LATCHSHOT_SCREENSHOT_TEST_EXPLAIN" => "FALSE",
        "LATCHSHOT_SCREENSHOT_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["LATCHSHOT_SCREENSHOT_TEST_RENDERING_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["LATCHSHOT_SCREENSHOT_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["LATCHSHOT_SCREENSHOT_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        $client = new LatchshotScreenshotSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["LATCHSHOT_SCREENSHOT_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["LATCHSHOT_SCREENSHOT_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
