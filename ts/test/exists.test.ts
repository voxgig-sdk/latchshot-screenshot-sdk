
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { LatchshotScreenshotSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = LatchshotScreenshotSDK.test()
    equal(testsdk instanceof LatchshotScreenshotSDK, true,
      'LatchshotScreenshotSDK.test() must return a client synchronously')
  })

})
