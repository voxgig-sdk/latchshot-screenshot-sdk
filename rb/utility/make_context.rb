# LatchshotScreenshot SDK utility: make_context
require_relative '../core/context'
module LatchshotScreenshotUtilities
  MakeContext = ->(ctxmap, basectx) {
    LatchshotScreenshotContext.new(ctxmap, basectx)
  }
end
