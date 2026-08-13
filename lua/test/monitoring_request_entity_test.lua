-- MonitoringRequest entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("latchshot-screenshot_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("MonitoringRequestEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:MonitoringRequest(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = monitoring_request_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "monitoring_request." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set LATCHSHOT_SCREENSHOT_TEST_MONITORING_REQUEST_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local monitoring_request_ref01_ent = client:MonitoringRequest(nil)
    local monitoring_request_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.monitoring_request"), "monitoring_request_ref01"))

    local monitoring_request_ref01_data_result, err = monitoring_request_ref01_ent:create(monitoring_request_ref01_data, nil)
    assert.is_nil(err)
    monitoring_request_ref01_data = helpers.to_map(type(monitoring_request_ref01_data_result) == 'table' and monitoring_request_ref01_data_result.data_get and monitoring_request_ref01_data_result:data_get() or monitoring_request_ref01_data_result)
    assert.is_not_nil(monitoring_request_ref01_data)
    assert.is_not_nil(monitoring_request_ref01_data["id"])

  end)
end)

function monitoring_request_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/monitoring_request/MonitoringRequestTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read monitoring_request test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "monitoring_request01", "monitoring_request02", "monitoring_request03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("LATCHSHOT_SCREENSHOT_TEST_MONITORING_REQUEST_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["LATCHSHOT_SCREENSHOT_TEST_MONITORING_REQUEST_ENTID"] = idmap,
    ["LATCHSHOT_SCREENSHOT_TEST_LIVE"] = "FALSE",
    ["LATCHSHOT_SCREENSHOT_TEST_EXPLAIN"] = "FALSE",
    ["LATCHSHOT_SCREENSHOT_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["LATCHSHOT_SCREENSHOT_TEST_MONITORING_REQUEST_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end

  if env["LATCHSHOT_SCREENSHOT_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      {
        apikey = env["LATCHSHOT_SCREENSHOT_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["LATCHSHOT_SCREENSHOT_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["LATCHSHOT_SCREENSHOT_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
