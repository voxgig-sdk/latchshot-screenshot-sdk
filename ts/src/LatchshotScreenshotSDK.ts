// LatchshotScreenshot Ts SDK

import { HealthEntity } from './entity/HealthEntity'
import { MonitoringRequestEntity } from './entity/MonitoringRequestEntity'
import { PilotRequestEntity } from './entity/PilotRequestEntity'
import { RenderEntity } from './entity/RenderEntity'
import { RenderingEntity } from './entity/RenderingEntity'
import { SafetyReviewRequestEntity } from './entity/SafetyReviewRequestEntity'
import { TrialEntity } from './entity/TrialEntity'
import { UpgradeEntity } from './entity/UpgradeEntity'
import { UsageEntity } from './entity/UsageEntity'

export type * from './LatchshotScreenshotTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { LatchshotScreenshotEntityBase } from './LatchshotScreenshotEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'


const stdutil = new Utility()


class LatchshotScreenshotSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    if (null != this._options.extend) {
      for (let f of this._options.extend) {
        featureAdd(this._rootctx, f)
      }
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  async direct(fetchargs?: any) {
    const utility = this._utility
    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  // Entity access: `client.Health().list()` / `client.Health().load({ id })`.
  Health(data?: any) {
    const self = this
    return new HealthEntity(self,data)
  }


  // Entity access: `client.MonitoringRequest().list()` / `client.MonitoringRequest().load({ id })`.
  MonitoringRequest(data?: any) {
    const self = this
    return new MonitoringRequestEntity(self,data)
  }


  // Entity access: `client.PilotRequest().list()` / `client.PilotRequest().load({ id })`.
  PilotRequest(data?: any) {
    const self = this
    return new PilotRequestEntity(self,data)
  }


  // Entity access: `client.Render().list()` / `client.Render().load({ id })`.
  Render(data?: any) {
    const self = this
    return new RenderEntity(self,data)
  }


  // Entity access: `client.Rendering().list()` / `client.Rendering().load({ id })`.
  Rendering(data?: any) {
    const self = this
    return new RenderingEntity(self,data)
  }


  // Entity access: `client.SafetyReviewRequest().list()` / `client.SafetyReviewRequest().load({ id })`.
  SafetyReviewRequest(data?: any) {
    const self = this
    return new SafetyReviewRequestEntity(self,data)
  }


  // Entity access: `client.Trial().list()` / `client.Trial().load({ id })`.
  Trial(data?: any) {
    const self = this
    return new TrialEntity(self,data)
  }


  // Entity access: `client.Upgrade().list()` / `client.Upgrade().load({ id })`.
  Upgrade(data?: any) {
    const self = this
    return new UpgradeEntity(self,data)
  }


  // Entity access: `client.Usage().list()` / `client.Usage().load({ id })`.
  Usage(data?: any) {
    const self = this
    return new UsageEntity(self,data)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new LatchshotScreenshotSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return LatchshotScreenshotSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'LatchshotScreenshot' }
  }

  toString() {
    return 'LatchshotScreenshot ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = LatchshotScreenshotSDK


export {
  stdutil,
  config,

  BaseFeature,
  LatchshotScreenshotEntityBase,

  LatchshotScreenshotSDK,
  SDK,
}


