
import { Context } from './Context'


class LatchshotScreenshotError extends Error {

  isLatchshotScreenshotError = true

  sdk = 'LatchshotScreenshot'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  LatchshotScreenshotError
}

