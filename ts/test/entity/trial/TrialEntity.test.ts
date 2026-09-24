

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


describe('TrialEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LATCHSHOT_SCREENSHOT_TEST_LIVE=TRUE.
  afterEach(liveDelay('LATCHSHOT_SCREENSHOT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LatchshotScreenshotSDK.test()
    const ent = testsdk.Trial()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LATCHSHOT_SCREENSHOT_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'trial.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"consent":{"a":true,"h":"Consent","n":"consent","r":false,"sh":"Optional permission for the owner to send product-fit guidance.","t":"`$BOOLEAN`","key$":"consent","index$":0},"email":{"a":true,"fo":"email","h":"Email","n":"email","r":true,"sh":"Email used to enforce one lifetime Free-plan key.","t":"`$STRING`","key$":"email","index$":1},"expectedRenders":{"a":true,"h":"Expected Renders","n":"expectedRenders","r":false,"t":"`$STRING`","key$":"expectedRenders","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Optional display name for owner review.","t":"`$STRING`","key$":"name","index$":3},"useCase":{"a":true,"h":"Use Case","n":"useCase","r":false,"sh":"Optional public-page capture use case.","t":"`$STRING`","key$":"useCase","index$":4}},"name":"trial","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/trials","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/trials","q":{},"r":{},"s":[{"lit":"api"},{"lit":"trials"}],"t":{"req":"`reqdata`","res":"`body.trial`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"trial","name__orig":"trial","Name":"Trial","name_":"trial","name-":"trial","NAME":"TRIAL","index$":6}, {"active":true,"entity":"trial","key$":"BasicTrialFlow","kind":"basic","name":"BasicTrialFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"trial_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'Trial', {"POST /api/trials":{"protocol":"http","operationId":"createTrial","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["email"],"properties":{"name":{"type":"string","maxLength":120,"description":"Optional display name for owner review.","key$":"name"},"email":{"type":"string","format":"email","maxLength":254,"description":"Email used to enforce one lifetime Free-plan key. It does not grant contact permission.","key$":"email"},"useCase":{"type":"string","maxLength":1000,"description":"Optional public-page capture use case.","key$":"useCase"},"expectedRenders":{"type":"string","default":"not sure","enum":["under 1,000","1,000–10,000","10,000–50,000","over 50,000","not sure"],"key$":"expectedRenders"},"consent":{"type":"boolean","default":false,"description":"Optional permission for the owner to send product-fit guidance.","key$":"consent"}},"x-ref":"#/components/schemas/TrialRequest","index$":1}}}},"responses":{"201":{"description":"Free-plan key created; the plaintext key is returned only in this response","content":{"application/json":{"schema":{"type":"object","required":["apiKey","trial","notice","quickstart"],"properties":{"apiKey":{"type":"string","pattern":"^ls_live_"},"trial":{"type":"object","required":["plan","displayName","successfulRenderLimit","rateLimitPerMinute","quotaPeriod","resetAt"],"properties":{"plan":{"type":"string","const":"trial"},"displayName":{"type":"string","const":"Free"},"successfulRenderLimit":{"type":"integer","const":100},"rateLimitPerMinute":{"type":"integer","minimum":1},"quotaPeriod":{"type":"string","const":"calendar_month"},"resetAt":{"type":"string","format":"date-time"}}},"notice":{"type":"string"},"quickstart":{"type":"string","format":"uri"}},"x-ref":"#/components/schemas/TrialIssue"}}}},"400":{"description":"Error response","content":{"application/json":{"schema":{"type":"object","required":["error"],"properties":{"error":{"type":"object","required":["code","message"],"properties":{"code":{"type":"string"},"message":{"type":"string"}}}},"x-ref":"#/components/schemas/Error"}}},"x-ref":"#/components/responses/Error"},"409":{"description":"Error response","content":{"application/json":{"schema":{"type":"object","required":["error"],"properties":{"error":{"type":"object","required":["code","message"],"properties":{"code":{"type":"string"},"message":{"type":"string"}}}},"x-ref":"#/components/schemas/Error"}}},"x-ref":"#/components/responses/Error"},"429":{"description":"Error response","content":{"application/json":{"schema":{"type":"object","required":["error"],"properties":{"error":{"type":"object","required":["code","message"],"properties":{"code":{"type":"string"},"message":{"type":"string"}}}},"x-ref":"#/components/schemas/Error"}}},"x-ref":"#/components/responses/Error"}},"parameters":[],"security":[],"securitySource":"operation","securitySchemes":{"bearerAuth":{"type":"http","scheme":"bearer","bearerFormat":"API key","description":"Send the one-time Latchshot key in the Authorization header as Bearer YOUR_KEY. Keys are stored only as hashes."}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const trial_ref01_ent = client.Trial()
    let trial_ref01_data = setup.data.new.trial['trial_ref01']

    trial_ref01_data = (await trial_ref01_ent.create(trial_ref01_data)).data()
    assert(null != trial_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/trial/TrialTestData.json')

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
    ['trial01','trial02','trial03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LATCHSHOT_SCREENSHOT_TEST_TRIAL_ENTID': idmap,
    'LATCHSHOT_SCREENSHOT_TEST_LIVE': 'FALSE',
    'LATCHSHOT_SCREENSHOT_TEST_EXPLAIN': 'FALSE',
    'LATCHSHOT_SCREENSHOT_APIKEY': '',
  })

  idmap = env['LATCHSHOT_SCREENSHOT_TEST_TRIAL_ENTID']

  const live = 'TRUE' === env.LATCHSHOT_SCREENSHOT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LATCHSHOT_SCREENSHOT_TEST_TRIAL_ENTID']
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
  
