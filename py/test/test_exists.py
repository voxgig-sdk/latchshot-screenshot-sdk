# ProjectName SDK exists test

import pytest
from latchshotscreenshot_sdk import LatchshotScreenshotSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = LatchshotScreenshotSDK.test(None, None)
        assert testsdk is not None
