# LatchshotScreenshot SDK exists test

require "minitest/autorun"
require_relative "../LatchshotScreenshot_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = LatchshotScreenshotSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
