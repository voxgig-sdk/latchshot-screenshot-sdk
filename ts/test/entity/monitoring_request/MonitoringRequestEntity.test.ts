

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


describe('MonitoringRequestEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when LATCHSHOT_SCREENSHOT_TEST_LIVE=TRUE.
  afterEach(liveDelay('LATCHSHOT_SCREENSHOT_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = LatchshotScreenshotSDK.test()
    const ent = testsdk.MonitoringRequest()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.LATCHSHOT_SCREENSHOT_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'monitoring_request.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"changeContext":{"a":true,"h":"Change Context","n":"changeContext","r":false,"sh":"Optional non-sensitive description of what the weekly owner-written note should call out.","t":"`$STRING`","key$":"changeContext","index$":0},"createdAt":{"a":true,"fo":"date-time","h":"Created At","n":"createdAt","r":true,"t":"`$STRING`","key$":"createdAt","index$":1},"email":{"a":true,"fo":"email","h":"Email","n":"email","r":true,"sh":"Address the owner may use only to reply about this monitoring request.","t":"`$STRING`","key$":"email","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$INTEGER`","key$":"id","index$":3},"monitoringGoal":{"a":true,"h":"Monitoring Goal","n":"monitoringGoal","r":true,"t":"`$STRING`","key$":"monitoringGoal","index$":4},"pageCount":{"a":true,"h":"Page Count","n":"pageCount","r":true,"t":"`$STRING`","key$":"pageCount","index$":5},"pageUrl":{"a":true,"fo":"uri","h":"Page Url","n":"pageUrl","r":true,"sh":"One exact public HTTP or HTTPS example page on port 80 or 443, without credentials, query data, or a fragment.","t":"`$STRING`","key$":"pageUrl","index$":6},"publicPageAuthority":{"a":true,"h":"Public Page Authority","n":"publicPageAuthority","r":true,"sh":"Confirms authority to request recurring captures of every proposed public page.","t":"`$BOOLEAN`","key$":"publicPageAuthority","index$":7},"replyConsent":{"a":true,"h":"Reply Consent","n":"replyConsent","r":true,"sh":"Allows the owner to email only about this monitoring-pilot request.","t":"`$BOOLEAN`","key$":"replyConsent","index$":8},"safetyAcknowledged":{"a":true,"h":"Safety Acknowledged","n":"safetyAcknowledged","r":true,"sh":"Confirms removal of credentials, query secrets, customer data, signed links, and sensitive information.","t":"`$BOOLEAN`","key$":"safetyAcknowledged","index$":9},"startBoundaryAcknowledged":{"a":true,"h":"Start Boundary Acknowledged","n":"startBoundaryAcknowledged","r":true,"sh":"Confirms that scope, delivery, retention, payment, and monitoring start require separate owner confirmation.","t":"`$BOOLEAN`","key$":"startBoundaryAcknowledged","index$":10},"status":{"a":true,"h":"Status","n":"status","r":true,"t":"`$STRING`","key$":"status","index$":11},"updatedAt":{"a":true,"fo":"date-time","h":"Updated At","n":"updatedAt","r":true,"t":"`$STRING`","key$":"updatedAt","index$":12}},"id":{"field":"id","name":"id"},"name":"monitoring_request","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/monitoring-requests","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/monitoring-requests","q":{},"r":{},"s":[{"lit":"api"},{"lit":"monitoring-requests"}],"t":{"req":"`reqdata`","res":"`body.request`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"monitoring_request","name__orig":"monitoring_request","Name":"MonitoringRequest","name_":"monitoring_request","name-":"monitoring-request","NAME":"MONITORING_REQUEST","index$":1}, {"active":true,"entity":"monitoring_request","key$":"BasicMonitoringRequestFlow","kind":"basic","name":"BasicMonitoringRequestFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"monitoring_request_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'MonitoringRequest', {"POST /api/monitoring-requests":{"protocol":"http","operationId":"requestVisualMonitoringPilot","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["email","pageUrl","pageCount","monitoringGoal","publicPageAuthority","safetyAcknowledged","startBoundaryAcknowledged","replyConsent"],"properties":{"email":{"type":"string","format":"email","maxLength":254,"description":"Address the owner may use only to reply about this monitoring request.","key$":"email"},"pageUrl":{"type":"string","format":"uri","maxLength":500,"pattern":"^https?://","description":"One exact public HTTP or HTTPS example page on port 80 or 443, without credentials, query data, or a fragment.","key$":"pageUrl"},"pageCount":{"type":"string","enum":["1","2–3","4–5"],"key$":"pageCount"},"monitoringGoal":{"type":"string","enum":["Release and content archive","Competitive or market tracking","Compliance or public record","Client reporting","Other"],"key$":"monitoringGoal"},"changeContext":{"type":"string","maxLength":1000,"default":"Not provided; owner will confirm what counts as a useful change.","description":"Optional non-sensitive description of what the weekly owner-written note should call out.","key$":"changeContext"},"publicPageAuthority":{"type":"boolean","const":true,"description":"Confirms authority to request recurring captures of every proposed public page.","key$":"publicPageAuthority"},"safetyAcknowledged":{"type":"boolean","const":true,"description":"Confirms removal of credentials, query secrets, customer data, signed links, and sensitive information.","key$":"safetyAcknowledged"},"startBoundaryAcknowledged":{"type":"boolean","const":true,"description":"Confirms that scope, delivery, retention, payment, and monitoring start require separate owner confirmation.","key$":"startBoundaryAcknowledged"},"replyConsent":{"type":"boolean","const":true,"description":"Allows the owner to email only about this monitoring-pilot request.","key$":"replyConsent"}},"x-ref":"#/components/schemas/MonitoringRequest","index$":1}}}},"responses":{"200":{"description":"Existing request for this email and example page updated for owner review","content":{"application/json":{"schema":{"type":"object","required":["request","notice"],"properties":{"request":{"type":"object","required":["id","pageUrl","pageCount","status","createdAt","updatedAt"],"properties":{"id":{"type":"integer","minimum":1,"key$":"id"},"pageUrl":{"type":"string","format":"uri","key$":"pageUrl"},"pageCount":{"type":"string","enum":["1","2–3","4–5"],"key$":"pageCount"},"status":{"type":"string","enum":["new","contacted","fit_confirmed","declined"],"key$":"status"},"createdAt":{"type":"string","format":"date-time","key$":"createdAt"},"updatedAt":{"type":"string","format":"date-time","key$":"updatedAt"}},"x-ref":"#/components/schemas/MonitoringRequestStatus","index$":0},"notice":{"type":"string","description":"Confirms owner review and the no-payment/no-monitoring-start boundary."}},"x-ref":"#/components/schemas/MonitoringRequestResponse"}}}},"201":{"description":"New monitoring request recorded for owner review","content":{"application/json":{"schema":{"type":"object","required":["request","notice"],"properties":{"request":{"type":"object","required":["id","pageUrl","pageCount","status","createdAt","updatedAt"],"properties":{"id":{"type":"integer","minimum":1,"key$":"id"},"pageUrl":{"type":"string","format":"uri","key$":"pageUrl"},"pageCount":{"type":"string","enum":["1","2–3","4–5"],"key$":"pageCount"},"status":{"type":"string","enum":["new","contacted","fit_confirmed","declined"],"key$":"status"},"createdAt":{"type":"string","format":"date-time","key$":"createdAt"},"updatedAt":{"type":"string","format":"date-time","key$":"updatedAt"}},"x-ref":"#/components/schemas/MonitoringRequestStatus","index$":0},"notice":{"type":"string","description":"Confirms owner review and the no-payment/no-monitoring-start boundary."}},"x-ref":"#/components/schemas/MonitoringRequestResponse"}}}},"400":{"description":"Error response","content":{"application/json":{"schema":{"type":"object","required":["error"],"properties":{"error":{"type":"object","required":["code","message"],"properties":{"code":{"type":"string"},"message":{"type":"string"}}}},"x-ref":"#/components/schemas/Error"}}},"x-ref":"#/components/responses/Error"},"413":{"description":"Error response","content":{"application/json":{"schema":{"type":"object","required":["error"],"properties":{"error":{"type":"object","required":["code","message"],"properties":{"code":{"type":"string"},"message":{"type":"string"}}}},"x-ref":"#/components/schemas/Error"}}},"x-ref":"#/components/responses/Error"},"429":{"description":"Error response","content":{"application/json":{"schema":{"type":"object","required":["error"],"properties":{"error":{"type":"object","required":["code","message"],"properties":{"code":{"type":"string"},"message":{"type":"string"}}}},"x-ref":"#/components/schemas/Error"}}},"x-ref":"#/components/responses/Error"}},"parameters":[],"security":[],"securitySource":"operation","securitySchemes":{"bearerAuth":{"type":"http","scheme":"bearer","bearerFormat":"API key","description":"Send the one-time Latchshot key in the Authorization header as Bearer YOUR_KEY. Keys are stored only as hashes."}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const monitoring_request_ref01_ent = client.MonitoringRequest()
    let monitoring_request_ref01_data = setup.data.new.monitoring_request['monitoring_request_ref01']

    monitoring_request_ref01_data = (await monitoring_request_ref01_ent.create(monitoring_request_ref01_data)).data()
    assert(null != monitoring_request_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/monitoring_request/MonitoringRequestTestData.json')

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
    ['monitoring_request01','monitoring_request02','monitoring_request03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'LATCHSHOT_SCREENSHOT_TEST_MONITORING_REQUEST_ENTID': idmap,
    'LATCHSHOT_SCREENSHOT_TEST_LIVE': 'FALSE',
    'LATCHSHOT_SCREENSHOT_TEST_EXPLAIN': 'FALSE',
    'LATCHSHOT_SCREENSHOT_APIKEY': '',
  })

  idmap = env['LATCHSHOT_SCREENSHOT_TEST_MONITORING_REQUEST_ENTID']

  const live = 'TRUE' === env.LATCHSHOT_SCREENSHOT_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['LATCHSHOT_SCREENSHOT_TEST_MONITORING_REQUEST_ENTID']
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
  
