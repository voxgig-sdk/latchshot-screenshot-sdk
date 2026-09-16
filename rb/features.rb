# LatchshotScreenshot SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module LatchshotScreenshotFeatures
  def self.make_feature(name)
    case name
    when "base"
      LatchshotScreenshotBaseFeature.new
    when "ratelimit"
      LatchshotScreenshotRatelimitFeature.new
    when "retry"
      LatchshotScreenshotRetryFeature.new
    when "test"
      LatchshotScreenshotTestFeature.new
    when "timeout"
      LatchshotScreenshotTimeoutFeature.new
    else
      LatchshotScreenshotBaseFeature.new
    end
  end
end
