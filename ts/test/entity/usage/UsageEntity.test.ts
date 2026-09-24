

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


describe('UsageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LATCHSHOT_SCREENSHOT_TEST_LIVE=TRUE.
  afterEach(liveDelay('LATCHSHOT_SCREENSHOT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LatchshotScreenshotSDK.test()
    const ent = testsdk.Usage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LATCHSHOT_SCREENSHOT_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'usage.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"customer":{"a":true,"h":"Customer","n":"customer","r":true,"t":"`$OBJECT`","key$":"customer","index$":0},"links":{"a":true,"h":"Links","n":"links","r":true,"sh":"Stable self-serve continuation links.","t":"`$OBJECT`","key$":"links","index$":1},"upgradeRequest":{"a":true,"h":"Upgrade Request","n":"upgradeRequest","r":true,"sh":"Latest paid-plan request attached to this key, or null when none exists.","t":"`$ANY`","key$":"upgradeRequest","index$":2},"usage":{"a":true,"h":"Usage","n":"usage","r":true,"t":"`$OBJECT`","key$":"usage","index$":3}},"name":"usage","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /v1/usage","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/v1/usage","q":{},"r":{},"s":[{"lit":"v1"},{"lit":"usage"}],"t":{"req":"`reqdata`","res":"`body.usage`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"usage","name__orig":"usage","Name":"Usage","name_":"usage","name-":"usage","NAME":"USAGE","index$":8}, {"active":true,"entity":"usage","key$":"BasicUsageFlow","kind":"basic","name":"BasicUsageFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"usage_ref01","srcdatavar":"usage_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-usage_ref01"}}],"index$":0}]}, 'Usage', {"GET /v1/usage":{"protocol":"http","operationId":"getUsage","responses":{"200":{"description":"Current plan, quota usage, optional paid-plan request, and informational continuation links","content":{"application/json":{"schema":{"type":"object","required":["customer","usage","upgradeRequest","links"],"properties":{"customer":{"key$":"customer","properties":{"name":{"description":"Display name attached to the key.","type":"string"},"plan":{"description":"Current internal plan identifier. The trial identifier is displayed publicly as Free.","enum":["trial","launch","build","scale"],"type":"string"}},"required":["name","plan"],"type":"object"},"usage":{"key$":"usage","properties":{"failed":{"description":"Failed reserved renders; these do not consume successful-render quota.","minimum":0,"type":"integer"},"limit":{"description":"Successful renders included in the current plan each calendar month.","minimum":1,"type":"integer"},"outputBytes":{"minimum":0,"type":"integer"},"period":{"description":"Current UTC calendar month.","pattern":"^[0-9]{4}-[0-9]{2}$","type":"string"},"plan":{"enum":["trial","launch","build","scale"],"type":"string"},"remaining":{"description":"Successful renders still available in the current month.","minimum":0,"type":"integer"},"renderMs":{"description":"Aggregate successful render time in milliseconds for the current month.","minimum":0,"type":"integer"},"reserved":{"description":"Currently reserved render slots for this key.","minimum":0,"type":"integer"},"resetAt":{"description":"Start of the next UTC calendar month, when the allowance replenishes.","format":"date-time","type":"string"},"successful":{"minimum":0,"type":"integer"},"updatedAt":{"anyOf":[{"format":"date-time","type":"string"},{"type":"null"}]}},"required":["period","plan","limit","remaining","resetAt","successful","failed","reserved","outputBytes","renderMs","updatedAt"],"type":"object"},"upgradeRequest":{"anyOf":[{"properties":{"createdAt":{"format":"date-time","type":"string"},"id":{"minimum":1,"type":"integer"},"keyId":{"minimum":1,"type":"integer"},"note":{"anyOf":[{"type":"string"},{"type":"null"}]},"requestedPlan":{"enum":["launch","build","scale"],"type":"string"},"status":{"enum":["new","contacted","fulfilled","declined"],"type":"string"},"updatedAt":{"format":"date-time","type":"string"}},"required":["id","keyId","requestedPlan","note","status","createdAt","updatedAt"],"type":"object","x-ref":"#/components/schemas/UpgradeStatus"},{"type":"null"}],"description":"Latest paid-plan request attached to this key, or null when none exists.","key$":"upgradeRequest"},"links":{"description":"Stable self-serve continuation links. They are informational and do not take payment, initiate an upgrade, or start implementation work.","key$":"links","properties":{"implementationPilot":{"const":"https://latchshot.fly.dev/implementation-pilot.html","description":"Describes the optional bounded $99 implementation service. The link itself starts neither work nor payment.","format":"uri","type":"string"},"plans":{"const":"https://latchshot.fly.dev/#pricing","format":"uri","type":"string"},"requestPaidPlan":{"const":"https://latchshot.fly.dev/#upgrade","format":"uri","type":"string"},"requestPaidPlanDocs":{"const":"https://latchshot.fly.dev/docs.md#request-a-paid-plan","format":"uri","type":"string"}},"required":["plans","requestPaidPlan","requestPaidPlanDocs","implementationPilot"],"type":"object"}},"x-ref":"#/components/schemas/UsageResponse","index$":0}}}},"401":{"description":"Error response","content":{"application/json":{"schema":{"type":"object","required":["error"],"properties":{"error":{"type":"object","required":["code","message"],"properties":{"code":{"type":"string"},"message":{"type":"string"}}}},"x-ref":"#/components/schemas/Error"}}},"x-ref":"#/components/responses/Error"}},"parameters":[],"security":[{"bearerAuth":[]}],"securitySource":"operation","securitySchemes":{"bearerAuth":{"type":"http","scheme":"bearer","bearerFormat":"API key","description":"Send the one-time Latchshot key in the Authorization header as Bearer YOUR_KEY. Keys are stored only as hashes."}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let usage_ref01_data = Object.values(setup.data.existing.usage)[0] as any

    // LOAD
    const usage_ref01_ent = client.Usage()
    const usage_ref01_match_dt0: any = {}
    const usage_ref01_data_dt0 = (await usage_ref01_ent.load(usage_ref01_match_dt0)).data()
    assert(null != usage_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/usage/UsageTestData.json')

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
    ['usage01','usage02','usage03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LATCHSHOT_SCREENSHOT_TEST_USAGE_ENTID': idmap,
    'LATCHSHOT_SCREENSHOT_TEST_LIVE': 'FALSE',
    'LATCHSHOT_SCREENSHOT_TEST_EXPLAIN': 'FALSE',
    'LATCHSHOT_SCREENSHOT_APIKEY': '',
  })

  idmap = env['LATCHSHOT_SCREENSHOT_TEST_USAGE_ENTID']

  const live = 'TRUE' === env.LATCHSHOT_SCREENSHOT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LATCHSHOT_SCREENSHOT_TEST_USAGE_ENTID']
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
  
