

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"consent","req":false,"short":"Optional permission for the owner to send product-fit guidance.","type":"`$BOOLEAN`","index$":0},{"active":true,"format":"email","name":"email","req":true,"short":"Email used to enforce one lifetime Free-plan key.","type":"`$STRING`","index$":1},{"active":true,"name":"expectedRenders","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"name","req":false,"short":"Optional display name for owner review.","type":"`$STRING`","index$":3},{"active":true,"name":"useCase","req":false,"short":"Optional public-page capture use case.","type":"`$STRING`","index$":4}],"name":"trial","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /api/trials","json":"{\"operationId\":\"createTrial\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"consent\":{\"default\":false,\"description\":\"Optional permission for the owner to send product-fit guidance.\",\"type\":\"boolean\"},\"email\":{\"description\":\"Email used to enforce one lifetime Free-plan key. It does not grant contact permission.\",\"format\":\"email\",\"maxLength\":254,\"type\":\"string\"},\"expectedRenders\":{\"default\":\"not sure\",\"enum\":[\"under 1,000\",\"1,000–10,000\",\"10,000–50,000\",\"over 50,000\",\"not sure\"],\"type\":\"string\"},\"name\":{\"description\":\"Optional display name for owner review.\",\"maxLength\":120,\"type\":\"string\"},\"useCase\":{\"description\":\"Optional public-page capture use case.\",\"maxLength\":1000,\"type\":\"string\"}},\"required\":[\"email\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"apiKey\":{\"pattern\":\"^ls_live_\",\"type\":\"string\"},\"notice\":{\"type\":\"string\"},\"quickstart\":{\"format\":\"uri\",\"type\":\"string\"},\"trial\":{\"properties\":{\"displayName\":{\"const\":\"Free\",\"type\":\"string\"},\"plan\":{\"const\":\"trial\",\"type\":\"string\"},\"quotaPeriod\":{\"const\":\"calendar_month\",\"type\":\"string\"},\"rateLimitPerMinute\":{\"minimum\":1,\"type\":\"integer\"},\"resetAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"successfulRenderLimit\":{\"const\":100,\"type\":\"integer\"}},\"required\":[\"plan\",\"displayName\",\"successfulRenderLimit\",\"rateLimitPerMinute\",\"quotaPeriod\",\"resetAt\"],\"type\":\"object\"}},\"required\":[\"apiKey\",\"trial\",\"notice\",\"quickstart\"],\"type\":\"object\"}}},\"description\":\"Free-plan key created; the plaintext key is returned only in this response\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"},\"409\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"}},\"security\":[],\"securitySchemes\":{\"bearerAuth\":{\"bearerFormat\":\"API key\",\"description\":\"Send the one-time Latchshot key in the Authorization header as Bearer YOUR_KEY. Keys are stored only as hashes.\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/api/trials","segments":[{"lit":"api"},{"lit":"trials"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.trial`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"trial","name__orig":"trial","Name":"Trial","name_":"trial","name-":"trial","NAME":"TRIAL","index$":6}, {"active":true,"entity":"trial","key$":"BasicTrialFlow","kind":"basic","name":"BasicTrialFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"trial_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'Trial')
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
  
