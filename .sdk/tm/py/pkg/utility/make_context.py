# LatchshotScreenshot SDK utility: make_context

from projectname_sdk.core.context import LatchshotScreenshotContext


def make_context_util(ctxmap, basectx):
    return LatchshotScreenshotContext(ctxmap, basectx)
