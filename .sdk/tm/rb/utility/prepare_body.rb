# LatchshotScreenshot SDK utility: prepare_body
module LatchshotScreenshotUtilities
  PrepareBody = ->(ctx) {
    ctx.op.input == "data" ? ctx.utility.transform_request.call(ctx) : nil
  }
end
