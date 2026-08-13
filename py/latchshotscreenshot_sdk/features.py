# LatchshotScreenshot SDK feature factory

from latchshotscreenshot_sdk.feature.base_feature import LatchshotScreenshotBaseFeature
from latchshotscreenshot_sdk.feature.test_feature import LatchshotScreenshotTestFeature


def _make_feature(name):
    features = {
        "base": lambda: LatchshotScreenshotBaseFeature(),
        "test": lambda: LatchshotScreenshotTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
