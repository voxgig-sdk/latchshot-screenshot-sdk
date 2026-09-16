# LatchshotScreenshot SDK feature factory

from latchshotscreenshot_sdk.feature.base_feature import LatchshotScreenshotBaseFeature
from latchshotscreenshot_sdk.feature.ratelimit_feature import LatchshotScreenshotRatelimitFeature
from latchshotscreenshot_sdk.feature.retry_feature import LatchshotScreenshotRetryFeature
from latchshotscreenshot_sdk.feature.test_feature import LatchshotScreenshotTestFeature
from latchshotscreenshot_sdk.feature.timeout_feature import LatchshotScreenshotTimeoutFeature


_FEATURES = {
    "base": lambda: LatchshotScreenshotBaseFeature(),
    "ratelimit": lambda: LatchshotScreenshotRatelimitFeature(),
    "retry": lambda: LatchshotScreenshotRetryFeature(),
    "test": lambda: LatchshotScreenshotTestFeature(),
    "timeout": lambda: LatchshotScreenshotTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
