-- LatchshotScreenshot SDK exists test

local sdk = require("latchshot-screenshot_sdk")

describe("LatchshotScreenshotSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
