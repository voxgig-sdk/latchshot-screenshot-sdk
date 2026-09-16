"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('RenderingEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LATCHSHOT_SCREENSHOT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LATCHSHOT_SCREENSHOT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LatchshotScreenshotSDK.test();
        const ent = testsdk.Rendering();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LATCHSHOT_SCREENSHOT_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'rendering.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [], "name": "rendering", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": false, "kind": "query", "name": "block_ad", "orig": "block_ad", "reqd": false, "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "example": false, "kind": "query", "name": "block_chat", "orig": "block_chat", "reqd": false, "type": "`$BOOLEAN`", "index$": 1 }, { "active": true, "example": false, "kind": "query", "name": "block_tracker", "orig": "block_tracker", "reqd": false, "type": "`$BOOLEAN`", "index$": 2 }, { "active": true, "example": false, "kind": "query", "name": "dark_mode", "orig": "dark_mode", "reqd": false, "type": "`$BOOLEAN`", "index$": 3 }, { "active": true, "example": "png", "kind": "query", "name": "format", "orig": "format", "reqd": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "example": false, "kind": "query", "name": "full_page", "orig": "full_page", "reqd": false, "type": "`$BOOLEAN`", "index$": 5 }, { "active": true, "example": 900, "kind": "query", "name": "height", "orig": "height", "reqd": false, "type": "`$INTEGER`", "index$": 6 }, { "active": true, "example": false, "kind": "query", "name": "hide_cookie_banner", "orig": "hide_cookie_banner", "reqd": false, "type": "`$BOOLEAN`", "index$": 7 }, { "active": true, "example": false, "kind": "query", "name": "hide_popup", "orig": "hide_popup", "reqd": false, "type": "`$BOOLEAN`", "index$": 8 }, { "active": true, "example": 85, "kind": "query", "name": "quality", "orig": "quality", "reqd": false, "type": "`$INTEGER`", "index$": 9 }, { "active": true, "example": false, "kind": "query", "name": "scroll_page", "orig": "scroll_page", "reqd": false, "type": "`$BOOLEAN`", "index$": 10 }, { "active": true, "example": "https://example.com", "kind": "query", "name": "url", "orig": "url", "reqd": true, "type": "`$STRING`", "index$": 11 }, { "active": true, "example": 1440, "kind": "query", "name": "width", "orig": "width", "reqd": false, "type": "`$INTEGER`", "index$": 12 }] }, "contract": { "id": "GET /v1/screenshot", "json": "{\"operationId\":\"renderScreenshot\",\"parameters\":[{\"description\":\"Public HTTP or HTTPS page URL to capture.\",\"example\":\"https://example.com\",\"in\":\"query\",\"name\":\"url\",\"required\":true,\"schema\":{\"format\":\"uri\",\"maxLength\":2048,\"type\":\"string\"}},{\"description\":\"Viewport width in CSS pixels.\",\"in\":\"query\",\"name\":\"width\",\"schema\":{\"default\":1440,\"maximum\":2560,\"minimum\":320,\"type\":\"integer\"}},{\"description\":\"Viewport height in CSS pixels. Ignored for the final artifact when fullPage is true.\",\"in\":\"query\",\"name\":\"height\",\"schema\":{\"default\":900,\"maximum\":1440,\"minimum\":240,\"type\":\"integer\"}},{\"description\":\"Binary image format returned in the response body.\",\"in\":\"query\",\"name\":\"format\",\"schema\":{\"default\":\"png\",\"enum\":[\"png\",\"jpeg\"],\"type\":\"string\"}},{\"description\":\"JPEG encoding quality from 1 to 100. Valid only when format is jpeg.\",\"in\":\"query\",\"name\":\"quality\",\"schema\":{\"default\":85,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"When true, capture the bounded full document height instead of only the viewport.\",\"in\":\"query\",\"name\":\"fullPage\",\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"For a fullPage screenshot, perform a bounded deterministic scroll before capture to activate lazy content. Does not click, type, or run caller-supplied actions.\",\"in\":\"query\",\"name\":\"scrollPage\",\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Emulate a dark color-scheme preference for the page.\",\"in\":\"query\",\"name\":\"darkMode\",\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Best-effort blocking of requests to known third-party ad hosts.\",\"in\":\"query\",\"name\":\"blockAds\",\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Best-effort blocking of requests to known third-party analytics and tracker hosts.\",\"in\":\"query\",\"name\":\"blockTrackers\",\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Best-effort blocking and hiding of known third-party chat widgets.\",\"in\":\"query\",\"name\":\"blockChats\",\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Hide common cookie-consent overlays after loading. This does not click consent or set consent cookies.\",\"in\":\"query\",\"name\":\"hideCookieBanners\",\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Hide common newsletter, signup, and discount popups without clicking or submitting them.\",\"in\":\"query\",\"name\":\"hidePopups\",\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"image/jpeg\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},\"image/png\":{\"schema\":{\"format\":\"binary\",\"type\":\"string\"}}},\"description\":\"Rendered image. Diagnostic, rate-limit, and quota values are returned in headers.\",\"headers\":{\"X-Latchshot-Implementation-Pilot-URL\":{\"description\":\"Optional bounded implementation-pilot contract. Following this URL starts neither payment nor implementation work.\",\"schema\":{\"const\":\"https://latchshot.fly.dev/implementation-pilot.html\",\"format\":\"uri\",\"type\":\"string\"}},\"X-Latchshot-Navigation\":{\"description\":\"Whether navigation completed normally or reached its bounded timeout after a usable page response.\",\"schema\":{\"enum\":[\"complete\",\"timed-out\"],\"type\":\"string\"}},\"X-Latchshot-Paid-Plan-URL\":{\"description\":\"Optional owner-managed paid-plan request form. Following this URL does not take payment or change a plan.\",\"schema\":{\"const\":\"https://latchshot.fly.dev/#upgrade\",\"format\":\"uri\",\"type\":\"string\"}},\"X-Latchshot-Render-Ms\":{\"description\":\"End-to-end render duration in milliseconds.\",\"schema\":{\"minimum\":0,\"type\":\"integer\"}},\"X-Latchshot-Scroll\":{\"description\":\"Whether bounded lazy-content scrolling completed or the option was off.\",\"schema\":{\"enum\":[\"complete\",\"off\"],\"type\":\"string\"}},\"X-Latchshot-Usage-URL\":{\"description\":\"Authenticated read-only plan, quota, request-state, and continuation endpoint. Following this URL does not consume render quota or change a plan.\",\"schema\":{\"const\":\"https://latchshot.fly.dev/v1/usage\",\"format\":\"uri\",\"type\":\"string\"}},\"X-Quota-Remaining\":{\"description\":\"Successful renders remaining in the current UTC calendar month after this response.\",\"schema\":{\"minimum\":0,\"type\":\"integer\"}},\"X-Quota-Reset\":{\"description\":\"UTC date-time when the monthly successful-render allowance replenishes.\",\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}}}},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"},\"502\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"},\"504\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"bearerFormat\":\"API key\",\"description\":\"Send the one-time Latchshot key in the Authorization header as Bearer YOUR_KEY. Keys are stored only as hashes.\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/screenshot", "segments": [{ "lit": "v1" }, { "lit": "screenshot" }], "select": { "exist": ["block_ad", "block_chat", "block_tracker", "dark_mode", "format", "full_page", "height", "hide_cookie_banner", "hide_popup", "quality", "scroll_page", "url", "width"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "rendering", "name__orig": "rendering", "Name": "Rendering", "name_": "rendering", "name-": "rendering", "NAME": "RENDERING", "index$": 4 }, { "active": true, "entity": "rendering", "key$": "BasicRenderingFlow", "kind": "basic", "name": "BasicRenderingFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "rendering_ref01", "srcdatavar": "rendering_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-rendering_ref01" } }], "index$": 0 }] }, 'Rendering');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let rendering_ref01_data = Object.values(setup.data.existing.rendering)[0];
        // LOAD
        const rendering_ref01_ent = client.Rendering();
        const rendering_ref01_match_dt0 = {};
        const rendering_ref01_data_dt0 = (await rendering_ref01_ent.load(rendering_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != rendering_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/rendering/RenderingTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LatchshotScreenshotSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['rendering01', 'rendering02', 'rendering03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LATCHSHOT_SCREENSHOT_TEST_RENDERING_ENTID': idmap,
        'LATCHSHOT_SCREENSHOT_TEST_LIVE': 'FALSE',
        'LATCHSHOT_SCREENSHOT_TEST_EXPLAIN': 'FALSE',
        'LATCHSHOT_SCREENSHOT_APIKEY': '',
    });
    idmap = env['LATCHSHOT_SCREENSHOT_TEST_RENDERING_ENTID'];
    const live = 'TRUE' === env.LATCHSHOT_SCREENSHOT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LATCHSHOT_SCREENSHOT_TEST_RENDERING_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.LatchshotScreenshotSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=RenderingEntity.test.js.map