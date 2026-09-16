

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


describe('RenderEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LATCHSHOT_SCREENSHOT_TEST_LIVE=TRUE.
  afterEach(liveDelay('LATCHSHOT_SCREENSHOT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LatchshotScreenshotSDK.test()
    const ent = testsdk.Render()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LATCHSHOT_SCREENSHOT_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'render.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"blockAds","req":false,"short":"Best-effort blocking of requests to known third-party ad hosts.","type":"`$BOOLEAN`","index$":0},{"active":true,"name":"blockChats","req":false,"short":"Best-effort blocking and hiding of known third-party chat widgets.","type":"`$BOOLEAN`","index$":1},{"active":true,"name":"blockTrackers","req":false,"short":"Best-effort blocking of requests to known third-party analytics and tracker hosts.","type":"`$BOOLEAN`","index$":2},{"active":true,"name":"darkMode","req":false,"short":"Emulate a dark color-scheme preference.","type":"`$BOOLEAN`","index$":3},{"active":true,"name":"delay","req":false,"short":"Additional bounded wait in milliseconds after the lifecycle event.","type":"`$INTEGER`","index$":4},{"active":true,"name":"format","req":false,"short":"Exact artifact format.","type":"`$STRING`","index$":5},{"active":true,"name":"fullPage","req":false,"short":"Capture the bounded full document height for screenshots.","type":"`$BOOLEAN`","index$":6},{"active":true,"name":"height","req":false,"short":"Viewport height in CSS pixels.","type":"`$INTEGER`","index$":7},{"active":true,"name":"hideCookieBanners","req":false,"short":"Hide common cookie-consent overlays after loading.","type":"`$BOOLEAN`","index$":8},{"active":true,"name":"hidePopups","req":false,"short":"Hide common newsletter, signup, and discount popups without clicking, submitting, or setting state.","type":"`$BOOLEAN`","index$":9},{"active":true,"name":"kind","req":false,"short":"Artifact family to return.","type":"`$STRING`","index$":10},{"active":true,"name":"landscape","req":false,"short":"Use landscape orientation for PDF rendering.","type":"`$BOOLEAN`","index$":11},{"active":true,"name":"paper","req":false,"short":"Paper size used for PDF rendering.","type":"`$STRING`","index$":12},{"active":true,"name":"quality","req":false,"short":"JPEG encoding quality.","type":"`$INTEGER`","index$":13},{"active":true,"name":"reducedMotion","req":false,"short":"Emulate reduced motion to improve capture stability.","type":"`$BOOLEAN`","index$":14},{"active":true,"name":"scale","req":false,"short":"Device scale factor used for image capture.","type":"`$INTEGER`","index$":15},{"active":true,"name":"scrollPage","req":false,"short":"Deterministically scroll before capture to activate lazy content.","type":"`$BOOLEAN`","index$":16},{"active":true,"name":"timeout","req":false,"short":"Navigation timeout in milliseconds.","type":"`$INTEGER`","index$":17},{"active":true,"format":"uri","name":"url","req":true,"short":"Public HTTP or HTTPS page URL.","type":"`$STRING`","index$":18},{"active":true,"name":"waitUntil","req":false,"short":"Browser lifecycle event awaited before the optional delay.","type":"`$STRING`","index$":19},{"active":true,"name":"width","req":false,"short":"Viewport width in CSS pixels.","type":"`$INTEGER`","index$":20}],"name":"render","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /v1/render","json":"{\"operationId\":\"renderPage\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"pdf\":{\"value\":{\"kind\":\"pdf\",\"paper\":\"A4\",\"url\":\"https://example.com\"}},\"screenshot\":{\"value\":{\"height\":900,\"url\":\"https://example.com\",\"width\":1440}}},\"schema\":{\"properties\":{\"blockAds\":{\"default\":false,\"description\":\"Best-effort blocking of requests to known third-party ad hosts. This is not anti-bot bypass.\",\"type\":\"boolean\"},\"blockChats\":{\"default\":false,\"description\":\"Best-effort blocking and hiding of known third-party chat widgets.\",\"type\":\"boolean\"},\"blockTrackers\":{\"default\":false,\"description\":\"Best-effort blocking of requests to known third-party analytics and tracker hosts.\",\"type\":\"boolean\"},\"darkMode\":{\"default\":false,\"description\":\"Emulate a dark color-scheme preference.\",\"type\":\"boolean\"},\"delay\":{\"default\":0,\"description\":\"Additional bounded wait in milliseconds after the lifecycle event.\",\"maximum\":3000,\"minimum\":0,\"type\":\"integer\"},\"format\":{\"description\":\"Exact artifact format. PDF selects PDF rendering even when kind is omitted.\",\"enum\":[\"png\",\"jpeg\",\"pdf\"],\"type\":\"string\"},\"fullPage\":{\"default\":false,\"description\":\"Capture the bounded full document height for screenshots.\",\"type\":\"boolean\"},\"height\":{\"default\":900,\"description\":\"Viewport height in CSS pixels.\",\"maximum\":1440,\"minimum\":240,\"type\":\"integer\"},\"hideCookieBanners\":{\"default\":false,\"description\":\"Hide common cookie-consent overlays after loading. This does not click consent, set consent cookies, or bypass access controls.\",\"type\":\"boolean\"},\"hidePopups\":{\"default\":false,\"description\":\"Hide common newsletter, signup, and discount popups without clicking, submitting, or setting state.\",\"type\":\"boolean\"},\"kind\":{\"default\":\"screenshot\",\"description\":\"Artifact family to return.\",\"enum\":[\"screenshot\",\"pdf\"],\"type\":\"string\"},\"landscape\":{\"default\":false,\"description\":\"Use landscape orientation for PDF rendering.\",\"type\":\"boolean\"},\"paper\":{\"default\":\"A4\",\"description\":\"Paper size used for PDF rendering.\",\"enum\":[\"A4\",\"Letter\",\"Legal\"],\"type\":\"string\"},\"quality\":{\"default\":85,\"description\":\"JPEG encoding quality. Valid only for JPEG screenshots.\",\"maximum\":100,\"minimum\":1,\"type\":\"integer\"},\"reducedMotion\":{\"default\":true,\"description\":\"Emulate reduced motion to improve capture stability.\",\"type\":\"boolean\"},\"scale\":{\"default\":1,\"description\":\"Device scale factor used for image capture.\",\"maximum\":2,\"minimum\":1,\"type\":\"integer\"},\"scrollPage\":{\"default\":false,\"description\":\"Deterministically scroll before capture to activate lazy content. Requires a fullPage screenshot; bounded to 48 steps, 5 seconds, and a 20,000-pixel document height. Does not click, type, or run caller-supplied actions.\",\"type\":\"boolean\"},\"timeout\":{\"default\":15000,\"description\":\"Navigation timeout in milliseconds. A separate hard process deadline still applies.\",\"maximum\":30000,\"minimum\":3000,\"type\":\"integer\"},\"url\":{\"description\":\"Public HTTP or HTTPS page URL. Private, loopback, link-local, special-use, credential-bearing, and non-web-port targets are rejected.\",\"example\":\"https://example.com\",\"format\":\"uri\",\"maxLength\":2048,\"type\":\"string\"},\"waitUntil\":{\"default\":\"domcontentloaded\",\"description\":\"Browser lifecycle event awaited before the optional delay.\",\"enum\":[\"load\",\"domcontentloaded\",\"networkidle\"],\"type\":\"string\"},\"width\":{\"default\":1440,\"description\":\"Viewport width in CSS pixels.\",\"maximum\":2560,\"minimum\":320,\"type\":\"integer\"}},\"required\":[\"url\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/pdf\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"image/jpeg\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"image/png\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}}},\"description\":\"Rendered image or PDF. Diagnostic, rate-limit, and quota values are returned in headers.\",\"headers\":{\"X-Latchshot-Implementation-Pilot-URL\":{\"description\":\"Optional bounded implementation-pilot contract. Following this URL starts neither payment nor implementation work.\",\"schema\":{\"const\":\"https://latchshot.fly.dev/implementation-pilot.html\",\"format\":\"uri\",\"type\":\"string\"}},\"X-Latchshot-Navigation\":{\"description\":\"Whether navigation completed normally or reached its bounded timeout after a usable page response.\",\"schema\":{\"enum\":[\"complete\",\"timed-out\"],\"type\":\"string\"}},\"X-Latchshot-Paid-Plan-URL\":{\"description\":\"Optional owner-managed paid-plan request form. Following this URL does not take payment or change a plan.\",\"schema\":{\"const\":\"https://latchshot.fly.dev/#upgrade\",\"format\":\"uri\",\"type\":\"string\"}},\"X-Latchshot-Render-Ms\":{\"description\":\"End-to-end render duration in milliseconds.\",\"schema\":{\"minimum\":0,\"type\":\"integer\"}},\"X-Latchshot-Scroll\":{\"description\":\"Whether bounded lazy-content scrolling completed or the option was off.\",\"schema\":{\"enum\":[\"complete\",\"off\"],\"type\":\"string\"}},\"X-Latchshot-Usage-URL\":{\"description\":\"Authenticated read-only plan, quota, request-state, and continuation endpoint. Following this URL does not consume render quota or change a plan.\",\"schema\":{\"const\":\"https://latchshot.fly.dev/v1/usage\",\"format\":\"uri\",\"type\":\"string\"}},\"X-Quota-Remaining\":{\"description\":\"Successful renders remaining in the current UTC calendar month after this response.\",\"schema\":{\"minimum\":0,\"type\":\"integer\"}},\"X-Quota-Reset\":{\"description\":\"UTC date-time when the monthly successful-render allowance replenishes.\",\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}}}},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"},\"413\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"},\"502\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"},\"504\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"bearerFormat\":\"API key\",\"description\":\"Send the one-time Latchshot key in the Authorization header as Bearer YOUR_KEY. Keys are stored only as hashes.\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/v1/render","segments":[{"lit":"v1"},{"lit":"render"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"render","name__orig":"render","Name":"Render","name_":"render","name-":"render","NAME":"RENDER","index$":3}, {"active":true,"entity":"render","key$":"BasicRenderFlow","kind":"basic","name":"BasicRenderFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"render_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'Render')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const render_ref01_ent = client.Render()
    let render_ref01_data = setup.data.new.render['render_ref01']

    render_ref01_data = (await render_ref01_ent.create(render_ref01_data)).data()
    assert(null != render_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/render/RenderTestData.json')

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
    ['render01','render02','render03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LATCHSHOT_SCREENSHOT_TEST_RENDER_ENTID': idmap,
    'LATCHSHOT_SCREENSHOT_TEST_LIVE': 'FALSE',
    'LATCHSHOT_SCREENSHOT_TEST_EXPLAIN': 'FALSE',
    'LATCHSHOT_SCREENSHOT_APIKEY': '',
  })

  idmap = env['LATCHSHOT_SCREENSHOT_TEST_RENDER_ENTID']

  const live = 'TRUE' === env.LATCHSHOT_SCREENSHOT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LATCHSHOT_SCREENSHOT_TEST_RENDER_ENTID']
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
  
