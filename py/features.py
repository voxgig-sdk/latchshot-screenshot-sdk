# LatchshotScreenshot SDK feature factory

from feature.base_feature import LatchshotScreenshotBaseFeature
from feature.test_feature import LatchshotScreenshotTestFeature


def _make_feature(name):
    features = {
        "base": lambda: LatchshotScreenshotBaseFeature(),
        "test": lambda: LatchshotScreenshotTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
