"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LatchshotScreenshotError = void 0;
class LatchshotScreenshotError extends Error {
    isLatchshotScreenshotError = true;
    sdk = 'LatchshotScreenshot';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.LatchshotScreenshotError = LatchshotScreenshotError;
//# sourceMappingURL=LatchshotScreenshotError.js.map