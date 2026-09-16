

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


describe('UpgradeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LATCHSHOT_SCREENSHOT_TEST_LIVE=TRUE.
  afterEach(liveDelay('LATCHSHOT_SCREENSHOT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LatchshotScreenshotSDK.test()
    const ent = testsdk.Upgrade()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LATCHSHOT_SCREENSHOT_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'upgrade.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"consent","req":true,"type":"`$BOOLEAN`","index$":0},{"active":true,"format":"date-time","name":"createdAt","req":true,"type":"`$STRING`","index$":1},{"active":true,"name":"currentPlan","req":true,"type":"`$STRING`","index$":2},{"active":true,"name":"id","req":true,"type":"`$INTEGER`","index$":3},{"active":true,"name":"note","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"requestedPlan","req":true,"type":"`$STRING`","index$":5},{"active":true,"name":"status","req":true,"type":"`$STRING`","index$":6},{"active":true,"format":"date-time","name":"updatedAt","req":true,"type":"`$STRING`","index$":7}],"id":{"field":"id","name":"id"},"name":"upgrade","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /v1/upgrade-requests","json":"{\"operationId\":\"requestUpgrade\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"consent\":{\"const\":true,\"type\":\"boolean\"},\"note\":{\"maxLength\":1000,\"type\":\"string\"},\"requestedPlan\":{\"enum\":[\"launch\",\"build\",\"scale\"],\"type\":\"string\"}},\"required\":[\"requestedPlan\",\"consent\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"notice\":{\"type\":\"string\"},\"request\":{\"properties\":{\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"currentPlan\":{\"type\":\"string\"},\"id\":{\"minimum\":1,\"type\":\"integer\"},\"requestedPlan\":{\"enum\":[\"launch\",\"build\",\"scale\"],\"type\":\"string\"},\"status\":{\"enum\":[\"new\",\"contacted\",\"fulfilled\",\"declined\"],\"type\":\"string\"},\"updatedAt\":{\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"id\",\"currentPlan\",\"requestedPlan\",\"status\",\"createdAt\",\"updatedAt\"],\"type\":\"object\"}},\"required\":[\"request\",\"notice\"],\"type\":\"object\"}}},\"description\":\"Existing open request updated\"},\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"notice\":{\"type\":\"string\"},\"request\":{\"properties\":{\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"currentPlan\":{\"type\":\"string\"},\"id\":{\"minimum\":1,\"type\":\"integer\"},\"requestedPlan\":{\"enum\":[\"launch\",\"build\",\"scale\"],\"type\":\"string\"},\"status\":{\"enum\":[\"new\",\"contacted\",\"fulfilled\",\"declined\"],\"type\":\"string\"},\"updatedAt\":{\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"id\",\"currentPlan\",\"requestedPlan\",\"status\",\"createdAt\",\"updatedAt\"],\"type\":\"object\"}},\"required\":[\"request\",\"notice\"],\"type\":\"object\"}}},\"description\":\"New paid-plan request recorded\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"},\"409\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"bearerFormat\":\"API key\",\"description\":\"Send the one-time Latchshot key in the Authorization header as Bearer YOUR_KEY. Keys are stored only as hashes.\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v1/upgrade-requests","segments":[{"lit":"v1"},{"lit":"upgrade-requests"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.request`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"upgrade","name__orig":"upgrade","Name":"Upgrade","name_":"upgrade","name-":"upgrade","NAME":"UPGRADE","index$":7}, {"active":true,"entity":"upgrade","key$":"BasicUpgradeFlow","kind":"basic","name":"BasicUpgradeFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"upgrade_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'Upgrade')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const upgrade_ref01_ent = client.Upgrade()
    let upgrade_ref01_data = setup.data.new.upgrade['upgrade_ref01']

    upgrade_ref01_data = (await upgrade_ref01_ent.create(upgrade_ref01_data)).data()
    assert(null != upgrade_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/upgrade/UpgradeTestData.json')

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
    ['upgrade01','upgrade02','upgrade03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LATCHSHOT_SCREENSHOT_TEST_UPGRADE_ENTID': idmap,
    'LATCHSHOT_SCREENSHOT_TEST_LIVE': 'FALSE',
    'LATCHSHOT_SCREENSHOT_TEST_EXPLAIN': 'FALSE',
    'LATCHSHOT_SCREENSHOT_APIKEY': '',
  })

  idmap = env['LATCHSHOT_SCREENSHOT_TEST_UPGRADE_ENTID']

  const live = 'TRUE' === env.LATCHSHOT_SCREENSHOT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LATCHSHOT_SCREENSHOT_TEST_UPGRADE_ENTID']
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
  
