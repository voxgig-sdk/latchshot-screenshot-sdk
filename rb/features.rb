# LatchshotScreenshot SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module LatchshotScreenshotFeatures
  def self.make_feature(name)
    case name
    when "base"
      LatchshotScreenshotBaseFeature.new
    when "test"
      LatchshotScreenshotTestFeature.new
    else
      LatchshotScreenshotBaseFeature.new
    end
  end
end
