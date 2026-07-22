-- LatchshotScreenshot SDK error

local LatchshotScreenshotError = {}
LatchshotScreenshotError.__index = LatchshotScreenshotError


function LatchshotScreenshotError.new(code, msg, ctx)
  local self = setmetatable({}, LatchshotScreenshotError)
  self.is_sdk_error = true
  self.sdk = "LatchshotScreenshot"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function LatchshotScreenshotError:error()
  return self.msg
end


function LatchshotScreenshotError:__tostring()
  return self.msg
end


return LatchshotScreenshotError
