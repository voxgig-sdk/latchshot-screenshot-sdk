

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { LatchshotScreenshotSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('HealthEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LATCHSHOT_SCREENSHOT_TEST_LIVE=TRUE.
  afterEach(liveDelay('LATCHSHOT_SCREENSHOT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LatchshotScreenshotSDK.test()
    const ent = testsdk.Health()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LATCHSHOT_SCREENSHOT_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'health.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":true,"t":"`$INTEGER`","key$":"active","index$":0},"concurrency":{"a":true,"h":"Concurrency","n":"concurrency","r":true,"t":"`$INTEGER`","key$":"concurrency","index$":1},"pending":{"a":true,"h":"Pending","n":"pending","r":true,"t":"`$INTEGER`","key$":"pending","index$":2}},"name":"health","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /healthz","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/healthz","q":{},"r":{},"s":[{"lit":"healthz"}],"t":{"req":"`reqdata`","res":"`body.render`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"health","name__orig":"health","Name":"Health","name_":"health","name-":"health","NAME":"HEALTH","index$":0}, {"active":true,"entity":"health","key$":"BasicHealthFlow","kind":"basic","name":"BasicHealthFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"health_ref01","srcdatavar":"health_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-health_ref01"}}],"index$":0}]}, 'Health', {"GET /healthz":{"protocol":"http","operationId":"getHealth","responses":{"200":{"description":"Healthy","content":{"application/json":{"schema":{"type":"object","required":["ok","service","render"],"properties":{"ok":{"key$":"ok","type":"boolean"},"service":{"key$":"service","type":"string"},"render":{"key$":"render","properties":{"active":{"type":"integer","key$":"active"},"concurrency":{"type":"integer","key$":"concurrency"},"pending":{"type":"integer","key$":"pending"}},"required":["active","pending","concurrency"],"type":"object","index$":0}},"x-ref":"#/components/schemas/Health"}}}},"503":{"description":"Error response","content":{"application/json":{"schema":{"type":"object","required":["error"],"properties":{"error":{"type":"object","required":["code","message"],"properties":{"code":{"type":"string"},"message":{"type":"string"}}}},"x-ref":"#/components/schemas/Error"}}},"x-ref":"#/components/responses/Error"}},"parameters":[],"security":[],"securitySource":"operation","securitySchemes":{"bearerAuth":{"type":"http","scheme":"bearer","bearerFormat":"API key","description":"Send the one-time Latchshot key in the Authorization header as Bearer YOUR_KEY. Keys are stored only as hashes."}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let health_ref01_data = Object.values(setup.data.existing.health)[0] as any

    // LOAD
    const health_ref01_ent = client.Health()
    const health_ref01_match_dt0: any = {}
    const health_ref01_data_dt0 = (await health_ref01_ent.load(health_ref01_match_dt0)).data()
    assert(null != health_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/health/HealthTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = LatchshotScreenshotSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['health01','health02','health03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LATCHSHOT_SCREENSHOT_TEST_HEALTH_ENTID': idmap,
    'LATCHSHOT_SCREENSHOT_TEST_LIVE': 'FALSE',
    'LATCHSHOT_SCREENSHOT_TEST_EXPLAIN': 'FALSE',
    'LATCHSHOT_SCREENSHOT_APIKEY': '',
  })

  idmap = env['LATCHSHOT_SCREENSHOT_TEST_HEALTH_ENTID']

  const live = 'TRUE' === env.LATCHSHOT_SCREENSHOT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LATCHSHOT_SCREENSHOT_TEST_HEALTH_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new LatchshotScreenshotSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.LATCHSHOT_SCREENSHOT_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.LATCHSHOT_SCREENSHOT_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
