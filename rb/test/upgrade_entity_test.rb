# Upgrade entity test

require "minitest/autorun"
require "json"
require_relative "../LatchshotScreenshot_sdk"
require_relative "runner"

class UpgradeEntityTest < Minitest::Test
  def test_create_instance
    testsdk = LatchshotScreenshotSDK.test(nil, nil)
    ent = testsdk.Upgrade(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = upgrade_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["create"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "upgrade." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set LATCHSHOT_SCREENSHOT_TEST_UPGRADE_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # CREATE
    upgrade_ref01_ent = client.Upgrade(nil)
    upgrade_ref01_data = Helpers.to_map(Vs.getprop(
      Vs.getpath(setup[:data], "new.upgrade"), "upgrade_ref01"))

    upgrade_ref01_data_result = upgrade_ref01_ent.create(upgrade_ref01_data, nil)
    upgrade_ref01_data = Helpers.to_map(upgrade_ref01_data_result.respond_to?(:data_get) ? upgrade_ref01_data_result.data_get : upgrade_ref01_data_result)
    assert !upgrade_ref01_data.nil?
    assert !upgrade_ref01_data["id"].nil?

  end
end

def upgrade_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "upgrade", "UpgradeTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = LatchshotScreenshotSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["upgrade01", "upgrade02", "upgrade03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["LATCHSHOT_SCREENSHOT_TEST_UPGRADE_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "LATCHSHOT_SCREENSHOT_TEST_UPGRADE_ENTID" => idmap,
    "LATCHSHOT_SCREENSHOT_TEST_LIVE" => "FALSE",
    "LATCHSHOT_SCREENSHOT_TEST_EXPLAIN" => "FALSE",
    "LATCHSHOT_SCREENSHOT_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["LATCHSHOT_SCREENSHOT_TEST_UPGRADE_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["LATCHSHOT_SCREENSHOT_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["LATCHSHOT_SCREENSHOT_APIKEY"],
      },
      extra || {},
    ])
    client = LatchshotScreenshotSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["LATCHSHOT_SCREENSHOT_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["LATCHSHOT_SCREENSHOT_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
