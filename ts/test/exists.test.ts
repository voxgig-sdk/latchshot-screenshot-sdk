
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { LatchshotScreenshotSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await LatchshotScreenshotSDK.test()
    equal(null !== testsdk, true)
  })

})
