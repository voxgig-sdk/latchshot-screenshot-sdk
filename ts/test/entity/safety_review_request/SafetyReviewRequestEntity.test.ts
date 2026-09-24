

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


describe('SafetyReviewRequestEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LATCHSHOT_SCREENSHOT_TEST_LIVE=TRUE.
  afterEach(liveDelay('LATCHSHOT_SCREENSHOT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LatchshotScreenshotSDK.test()
    const ent = testsdk.SafetyReviewRequest()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LATCHSHOT_SCREENSHOT_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'safety_review_request.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"t":"`$STRING`","key$":"createdAt","index$":0},"currentControls":{"a":true,"h":"Current Controls","n":"currentControls","r":true,"sh":"Non-secret current URL, network, browser, resource, and caller controls.","t":"`$STRING`","key$":"currentControls","index$":1},"desiredOutcome":{"a":true,"h":"Desired Outcome","n":"desiredOutcome","r":true,"sh":"Requested risk report, focused patch, regression tests, and handoff outcome.","t":"`$STRING`","key$":"desiredOutcome","index$":2},"email":{"a":true,"fo":"email","h":"Email","n":"email","r":true,"sh":"Address the owner may use only to reply about this safety-review request.","t":"`$STRING`","key$":"email","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$INTEGER`","key$":"id","index$":4},"language":{"a":true,"h":"Language","n":"language","r":true,"t":"`$STRING`","key$":"language","index$":5},"primaryConcern":{"a":true,"h":"Primary Concern","n":"primaryConcern","r":true,"t":"`$STRING`","key$":"primaryConcern","index$":6},"replyConsent":{"a":true,"h":"Reply Consent","n":"replyConsent","r":true,"sh":"Allows the owner to email only about this safety-review request.","t":"`$BOOLEAN`","key$":"replyConsent","index$":7},"repositoryAuthority":{"a":true,"h":"Repository Authority","n":"repositoryAuthority","r":true,"sh":"Confirms authority to review, merge, deploy, and roll back the public repository change.","t":"`$BOOLEAN`","key$":"repositoryAuthority","index$":8},"repositoryUrl":{"a":true,"fo":"uri","h":"Repository Url","n":"repositoryUrl","r":true,"sh":"Exact public GitHub repository under the requester's control.","t":"`$STRING`","key$":"repositoryUrl","index$":9},"routePath":{"a":true,"h":"Route Path","n":"routePath","r":true,"sh":"One relative repository file path for the existing screenshot endpoint or worker.","t":"`$STRING`","key$":"routePath","index$":10},"runtime":{"a":true,"h":"Runtime","n":"runtime","r":true,"t":"`$STRING`","key$":"runtime","index$":11},"safetyAcknowledged":{"a":true,"h":"Safety Acknowledged","n":"safetyAcknowledged","r":true,"sh":"Confirms removal of credentials, private or signed URLs, customer data, production details, payment information, and sensitive artifacts.","t":"`$BOOLEAN`","key$":"safetyAcknowledged","index$":12},"startBoundaryAcknowledged":{"a":true,"h":"Start Boundary Acknowledged","n":"startBoundaryAcknowledged","r":true,"sh":"Confirms that no payment or work starts before separate owner confirmation.","t":"`$BOOLEAN`","key$":"startBoundaryAcknowledged","index$":13},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":14},"testEvidence":{"a":true,"h":"Test Evidence","n":"testEvidence","r":true,"sh":"Non-sensitive description of current happy-path and rejection tests, or none.","t":"`$STRING`","key$":"testEvidence","index$":15},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"t":"`$STRING`","key$":"updatedAt","index$":16}},"id":{"field":"id","name":"id"},"name":"safety_review_request","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/safety-review-requests","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/safety-review-requests","q":{},"r":{},"s":[{"lit":"api"},{"lit":"safety-review-requests"}],"t":{"req":"`reqdata`","res":"`body.request`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"safety_review_request","name__orig":"safety_review_request","Name":"SafetyReviewRequest","name_":"safety_review_request","name-":"safety-review-request","NAME":"SAFETY_REVIEW_REQUEST","index$":5}, {"active":true,"entity":"safety_review_request","key$":"BasicSafetyReviewRequestFlow","kind":"basic","name":"BasicSafetyReviewRequestFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"safety_review_request_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'SafetyReviewRequest', {"POST /api/safety-review-requests":{"protocol":"http","operationId":"requestScreenshotSafetyReview","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["email","repositoryUrl","routePath","language","runtime","primaryConcern","currentControls","testEvidence","desiredOutcome","repositoryAuthority","safetyAcknowledged","startBoundaryAcknowledged","replyConsent"],"properties":{"email":{"type":"string","format":"email","maxLength":254,"description":"Address the owner may use only to reply about this safety-review request.","key$":"email"},"repositoryUrl":{"type":"string","format":"uri","maxLength":500,"pattern":"^https://github\\.com/[^/]+/[^/]+(?:\\.git)?$","description":"Exact public GitHub repository under the requester's control.","key$":"repositoryUrl"},"routePath":{"type":"string","maxLength":500,"description":"One relative repository file path for the existing screenshot endpoint or worker.","key$":"routePath"},"language":{"type":"string","enum":["JavaScript","TypeScript","Python"],"key$":"language"},"runtime":{"type":"string","enum":["Local Playwright","Local Puppeteer","Browserless or remote CDP","HTTP screenshot provider","Other"],"key$":"runtime"},"primaryConcern":{"type":"string","enum":["SSRF and internal network access","DNS rebinding","Redirects and subresources","Authorization and secrets","Full endpoint review"],"key$":"primaryConcern"},"currentControls":{"type":"string","maxLength":1500,"description":"Non-secret current URL, network, browser, resource, and caller controls.","key$":"currentControls"},"testEvidence":{"type":"string","maxLength":1000,"description":"Non-sensitive description of current happy-path and rejection tests, or none.","key$":"testEvidence"},"desiredOutcome":{"type":"string","maxLength":1000,"description":"Requested risk report, focused patch, regression tests, and handoff outcome.","key$":"desiredOutcome"},"repositoryAuthority":{"type":"boolean","const":true,"description":"Confirms authority to review, merge, deploy, and roll back the public repository change.","key$":"repositoryAuthority"},"safetyAcknowledged":{"type":"boolean","const":true,"description":"Confirms removal of credentials, private or signed URLs, customer data, production details, payment information, and sensitive artifacts.","key$":"safetyAcknowledged"},"startBoundaryAcknowledged":{"type":"boolean","const":true,"description":"Confirms that no payment or work starts before separate owner confirmation.","key$":"startBoundaryAcknowledged"},"replyConsent":{"type":"boolean","const":true,"description":"Allows the owner to email only about this safety-review request.","key$":"replyConsent"}},"x-ref":"#/components/schemas/SafetyReviewRequest","index$":1}}}},"responses":{"200":{"description":"Existing request for this email and repository updated for owner review","content":{"application/json":{"schema":{"type":"object","required":["request","notice"],"properties":{"request":{"type":"object","required":["id","repositoryUrl","routePath","status","createdAt","updatedAt"],"properties":{"id":{"type":"integer","minimum":1,"key$":"id"},"repositoryUrl":{"type":"string","format":"uri","key$":"repositoryUrl"},"routePath":{"type":"string","key$":"routePath"},"status":{"type":"string","enum":["new","contacted","fit_confirmed","declined"],"key$":"status"},"createdAt":{"type":"string","format":"date-time","key$":"createdAt"},"updatedAt":{"type":"string","format":"date-time","key$":"updatedAt"}},"x-ref":"#/components/schemas/SafetyReviewRequestStatus","index$":0},"notice":{"type":"string","description":"Confirms owner review and the no-payment/no-work-start boundary."}},"x-ref":"#/components/schemas/SafetyReviewRequestResponse"}}}},"201":{"description":"New safety review request recorded for owner review","content":{"application/json":{"schema":{"type":"object","required":["request","notice"],"properties":{"request":{"type":"object","required":["id","repositoryUrl","routePath","status","createdAt","updatedAt"],"properties":{"id":{"type":"integer","minimum":1,"key$":"id"},"repositoryUrl":{"type":"string","format":"uri","key$":"repositoryUrl"},"routePath":{"type":"string","key$":"routePath"},"status":{"type":"string","enum":["new","contacted","fit_confirmed","declined"],"key$":"status"},"createdAt":{"type":"string","format":"date-time","key$":"createdAt"},"updatedAt":{"type":"string","format":"date-time","key$":"updatedAt"}},"x-ref":"#/components/schemas/SafetyReviewRequestStatus","index$":0},"notice":{"type":"string","description":"Confirms owner review and the no-payment/no-work-start boundary."}},"x-ref":"#/components/schemas/SafetyReviewRequestResponse"}}}},"400":{"description":"Error response","content":{"application/json":{"schema":{"type":"object","required":["error"],"properties":{"error":{"type":"object","required":["code","message"],"properties":{"code":{"type":"string"},"message":{"type":"string"}}}},"x-ref":"#/components/schemas/Error"}}},"x-ref":"#/components/responses/Error"},"413":{"description":"Error response","content":{"application/json":{"schema":{"type":"object","required":["error"],"properties":{"error":{"type":"object","required":["code","message"],"properties":{"code":{"type":"string"},"message":{"type":"string"}}}},"x-ref":"#/components/schemas/Error"}}},"x-ref":"#/components/responses/Error"},"429":{"description":"Error response","content":{"application/json":{"schema":{"type":"object","required":["error"],"properties":{"error":{"type":"object","required":["code","message"],"properties":{"code":{"type":"string"},"message":{"type":"string"}}}},"x-ref":"#/components/schemas/Error"}}},"x-ref":"#/components/responses/Error"}},"parameters":[],"security":[],"securitySource":"operation","securitySchemes":{"bearerAuth":{"type":"http","scheme":"bearer","bearerFormat":"API key","description":"Send the one-time Latchshot key in the Authorization header as Bearer YOUR_KEY. Keys are stored only as hashes."}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const safety_review_request_ref01_ent = client.SafetyReviewRequest()
    let safety_review_request_ref01_data = setup.data.new.safety_review_request['safety_review_request_ref01']

    safety_review_request_ref01_data = (await safety_review_request_ref01_ent.create(safety_review_request_ref01_data)).data()
    assert(null != safety_review_request_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/safety_review_request/SafetyReviewRequestTestData.json')

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
    ['safety_review_request01','safety_review_request02','safety_review_request03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LATCHSHOT_SCREENSHOT_TEST_SAFETY_REVIEW_REQUEST_ENTID': idmap,
    'LATCHSHOT_SCREENSHOT_TEST_LIVE': 'FALSE',
    'LATCHSHOT_SCREENSHOT_TEST_EXPLAIN': 'FALSE',
    'LATCHSHOT_SCREENSHOT_APIKEY': '',
  })

  idmap = env['LATCHSHOT_SCREENSHOT_TEST_SAFETY_REVIEW_REQUEST_ENTID']

  const live = 'TRUE' === env.LATCHSHOT_SCREENSHOT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LATCHSHOT_SCREENSHOT_TEST_SAFETY_REVIEW_REQUEST_ENTID']
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
  
