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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "rendering", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /v1/screenshot", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": false, "k": "query", "n": "block_ad", "or": "block_ad", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "ex": false, "k": "query", "n": "block_chat", "or": "block_chat", "r": false, "t": "`$BOOLEAN`", "index$": 1 }, { "a": true, "ex": false, "k": "query", "n": "block_tracker", "or": "block_tracker", "r": false, "t": "`$BOOLEAN`", "index$": 2 }, { "a": true, "ex": false, "k": "query", "n": "dark_mode", "or": "dark_mode", "r": false, "t": "`$BOOLEAN`", "index$": 3 }, { "a": true, "ex": "png", "k": "query", "n": "format", "or": "format", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "ex": false, "k": "query", "n": "full_page", "or": "full_page", "r": false, "t": "`$BOOLEAN`", "index$": 5 }, { "a": true, "ex": 900, "k": "query", "n": "height", "or": "height", "r": false, "t": "`$INTEGER`", "index$": 6 }, { "a": true, "ex": false, "k": "query", "n": "hide_cookie_banner", "or": "hide_cookie_banner", "r": false, "t": "`$BOOLEAN`", "index$": 7 }, { "a": true, "ex": false, "k": "query", "n": "hide_popup", "or": "hide_popup", "r": false, "t": "`$BOOLEAN`", "index$": 8 }, { "a": true, "ex": 85, "k": "query", "n": "quality", "or": "quality", "r": false, "t": "`$INTEGER`", "index$": 9 }, { "a": true, "ex": false, "k": "query", "n": "scroll_page", "or": "scroll_page", "r": false, "t": "`$BOOLEAN`", "index$": 10 }, { "a": true, "ex": "https://example.com", "k": "query", "n": "url", "or": "url", "r": true, "t": "`$STRING`", "index$": 11 }, { "a": true, "ex": 1440, "k": "query", "n": "width", "or": "width", "r": false, "t": "`$INTEGER`", "index$": 12 }] }, "k": "http", "m": "GET", "o": "/v1/screenshot", "q": { "exist": ["block_ad", "block_chat", "block_tracker", "dark_mode", "format", "full_page", "height", "hide_cookie_banner", "hide_popup", "quality", "scroll_page", "url", "width"] }, "r": {}, "s": [{ "lit": "v1" }, { "lit": "screenshot" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "rendering", "name__orig": "rendering", "Name": "Rendering", "name_": "rendering", "name-": "rendering", "NAME": "RENDERING", "index$": 4 }, { "active": true, "entity": "rendering", "key$": "BasicRenderingFlow", "kind": "basic", "name": "BasicRenderingFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "rendering_ref01", "srcdatavar": "rendering_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-rendering_ref01" } }], "index$": 0 }] }, 'Rendering', { "GET /v1/screenshot": { "protocol": "http", "operationId": "renderScreenshot", "responses": { "200": { "description": "Rendered image. Diagnostic, rate-limit, and quota values are returned in headers.", "headers": { "X-Latchshot-Render-Ms": { "description": "End-to-end render duration in milliseconds.", "schema": { "type": "integer", "minimum": 0 }, "x-ref": "#/components/headers/RenderMs" }, "X-Latchshot-Navigation": { "description": "Whether navigation completed normally or reached its bounded timeout after a usable page response.", "schema": { "type": "string", "enum": ["complete", "timed-out"] }, "x-ref": "#/components/headers/Navigation" }, "X-Latchshot-Scroll": { "description": "Whether bounded lazy-content scrolling completed or the option was off.", "schema": { "type": "string", "enum": ["complete", "off"] }, "x-ref": "#/components/headers/Scroll" }, "X-Quota-Remaining": { "description": "Successful renders remaining in the current UTC calendar month after this response.", "schema": { "type": "integer", "minimum": 0 }, "x-ref": "#/components/headers/QuotaRemaining" }, "X-Quota-Reset": { "description": "UTC date-time when the monthly successful-render allowance replenishes.", "schema": { "type": "string", "format": "date-time" }, "x-ref": "#/components/headers/QuotaReset" }, "X-Latchshot-Usage-URL": { "description": "Authenticated read-only plan, quota, request-state, and continuation endpoint. Following this URL does not consume render quota or change a plan.", "schema": { "type": "string", "format": "uri", "const": "https://latchshot.fly.dev/v1/usage" }, "x-ref": "#/components/headers/UsageUrl" }, "X-Latchshot-Paid-Plan-URL": { "description": "Optional owner-managed paid-plan request form. Following this URL does not take payment or change a plan.", "schema": { "type": "string", "format": "uri", "const": "https://latchshot.fly.dev/#upgrade" }, "x-ref": "#/components/headers/PaidPlanUrl" }, "X-Latchshot-Implementation-Pilot-URL": { "description": "Optional bounded implementation-pilot contract. Following this URL starts neither payment nor implementation work.", "schema": { "type": "string", "format": "uri", "const": "https://latchshot.fly.dev/implementation-pilot.html" }, "x-ref": "#/components/headers/ImplementationPilotUrl" } }, "content": { "image/png": { "schema": { "type": "string", "format": "binary" } }, "image/jpeg": { "schema": { "type": "string", "format": "binary" } } } }, "400": { "description": "Error response", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "object", "required": ["code", "message"], "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } }, "x-ref": "#/components/responses/Error" }, "401": { "description": "Error response", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "object", "required": ["code", "message"], "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } }, "x-ref": "#/components/responses/Error" }, "429": { "description": "Error response", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "object", "required": ["code", "message"], "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } }, "x-ref": "#/components/responses/Error" }, "502": { "description": "Error response", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "object", "required": ["code", "message"], "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } }, "x-ref": "#/components/responses/Error" }, "504": { "description": "Error response", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "object", "required": ["code", "message"], "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } }, "x-ref": "#/components/responses/Error" } }, "parameters": [{ "name": "url", "in": "query", "required": true, "description": "Public HTTP or HTTPS page URL to capture.", "schema": { "type": "string", "format": "uri", "maxLength": 2048 }, "example": "https://example.com", "index$": 0 }, { "name": "width", "in": "query", "description": "Viewport width in CSS pixels.", "schema": { "type": "integer", "minimum": 320, "maximum": 2560, "default": 1440 }, "index$": 1 }, { "name": "height", "in": "query", "description": "Viewport height in CSS pixels. Ignored for the final artifact when fullPage is true.", "schema": { "type": "integer", "minimum": 240, "maximum": 1440, "default": 900 }, "index$": 2 }, { "name": "format", "in": "query", "description": "Binary image format returned in the response body.", "schema": { "type": "string", "enum": ["png", "jpeg"], "default": "png" }, "index$": 3 }, { "name": "quality", "in": "query", "description": "JPEG encoding quality from 1 to 100. Valid only when format is jpeg.", "schema": { "type": "integer", "minimum": 1, "maximum": 100, "default": 85 }, "index$": 4 }, { "name": "fullPage", "in": "query", "description": "When true, capture the bounded full document height instead of only the viewport.", "schema": { "type": "boolean", "default": false }, "index$": 5 }, { "name": "scrollPage", "in": "query", "description": "For a fullPage screenshot, perform a bounded deterministic scroll before capture to activate lazy content. Does not click, type, or run caller-supplied actions.", "schema": { "type": "boolean", "default": false }, "index$": 6 }, { "name": "darkMode", "in": "query", "description": "Emulate a dark color-scheme preference for the page.", "schema": { "type": "boolean", "default": false }, "index$": 7 }, { "name": "blockAds", "in": "query", "description": "Best-effort blocking of requests to known third-party ad hosts.", "schema": { "type": "boolean", "default": false }, "index$": 8 }, { "name": "blockTrackers", "in": "query", "description": "Best-effort blocking of requests to known third-party analytics and tracker hosts.", "schema": { "type": "boolean", "default": false }, "index$": 9 }, { "name": "blockChats", "in": "query", "description": "Best-effort blocking and hiding of known third-party chat widgets.", "schema": { "type": "boolean", "default": false }, "index$": 10 }, { "name": "hideCookieBanners", "in": "query", "description": "Hide common cookie-consent overlays after loading. This does not click consent or set consent cookies.", "schema": { "type": "boolean", "default": false }, "index$": 11 }, { "name": "hidePopups", "in": "query", "description": "Hide common newsletter, signup, and discount popups without clicking or submitting them.", "schema": { "type": "boolean", "default": false }, "index$": 12 }], "security": [{ "bearerAuth": [] }], "securitySource": "operation", "securitySchemes": { "bearerAuth": { "type": "http", "scheme": "bearer", "bearerFormat": "API key", "description": "Send the one-time Latchshot key in the Authorization header as Bearer YOUR_KEY. Keys are stored only as hashes." } } } });
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