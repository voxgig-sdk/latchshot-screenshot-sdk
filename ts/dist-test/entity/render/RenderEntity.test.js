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
(0, node_test_1.describe)('RenderEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LATCHSHOT_SCREENSHOT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LATCHSHOT_SCREENSHOT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LatchshotScreenshotSDK.test();
        const ent = testsdk.Render();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LATCHSHOT_SCREENSHOT_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'render.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "blockAds": { "a": true, "h": "Block Ads", "n": "blockAds", "r": false, "sh": "Best-effort blocking of requests to known third-party ad hosts.", "t": "`$BOOLEAN`", "key$": "blockAds", "index$": 0 }, "blockChats": { "a": true, "h": "Block Chats", "n": "blockChats", "r": false, "sh": "Best-effort blocking and hiding of known third-party chat widgets.", "t": "`$BOOLEAN`", "key$": "blockChats", "index$": 1 }, "blockTrackers": { "a": true, "h": "Block Trackers", "n": "blockTrackers", "r": false, "sh": "Best-effort blocking of requests to known third-party analytics and tracker hosts.", "t": "`$BOOLEAN`", "key$": "blockTrackers", "index$": 2 }, "darkMode": { "a": true, "h": "Dark Mode", "n": "darkMode", "r": false, "sh": "Emulate a dark color-scheme preference.", "t": "`$BOOLEAN`", "key$": "darkMode", "index$": 3 }, "delay": { "a": true, "h": "Delay", "n": "delay", "r": false, "sh": "Additional bounded wait in milliseconds after the lifecycle event.", "t": "`$INTEGER`", "key$": "delay", "index$": 4 }, "format": { "a": true, "h": "Format", "n": "format", "r": false, "sh": "Exact artifact format.", "t": "`$STRING`", "key$": "format", "index$": 5 }, "fullPage": { "a": true, "h": "Full Page", "n": "fullPage", "r": false, "sh": "Capture the bounded full document height for screenshots.", "t": "`$BOOLEAN`", "key$": "fullPage", "index$": 6 }, "height": { "a": true, "h": "Height", "n": "height", "r": false, "sh": "Viewport height in CSS pixels.", "t": "`$INTEGER`", "key$": "height", "index$": 7 }, "hideCookieBanners": { "a": true, "h": "Hide Cookie Banners", "n": "hideCookieBanners", "r": false, "sh": "Hide common cookie-consent overlays after loading.", "t": "`$BOOLEAN`", "key$": "hideCookieBanners", "index$": 8 }, "hidePopups": { "a": true, "h": "Hide Popups", "n": "hidePopups", "r": false, "sh": "Hide common newsletter, signup, and discount popups without clicking, submitting, or setting state.", "t": "`$BOOLEAN`", "key$": "hidePopups", "index$": 9 }, "kind": { "a": true, "h": "Kind", "n": "kind", "r": false, "sh": "Artifact family to return.", "t": "`$STRING`", "key$": "kind", "index$": 10 }, "landscape": { "a": true, "h": "Landscape", "n": "landscape", "r": false, "sh": "Use landscape orientation for PDF rendering.", "t": "`$BOOLEAN`", "key$": "landscape", "index$": 11 }, "paper": { "a": true, "h": "Paper", "n": "paper", "r": false, "sh": "Paper size used for PDF rendering.", "t": "`$STRING`", "key$": "paper", "index$": 12 }, "quality": { "a": true, "h": "Quality", "n": "quality", "r": false, "sh": "JPEG encoding quality.", "t": "`$INTEGER`", "key$": "quality", "index$": 13 }, "reducedMotion": { "a": true, "h": "Reduced Motion", "n": "reducedMotion", "r": false, "sh": "Emulate reduced motion to improve capture stability.", "t": "`$BOOLEAN`", "key$": "reducedMotion", "index$": 14 }, "scale": { "a": true, "h": "Scale", "n": "scale", "r": false, "sh": "Device scale factor used for image capture.", "t": "`$INTEGER`", "key$": "scale", "index$": 15 }, "scrollPage": { "a": true, "h": "Scroll Page", "n": "scrollPage", "r": false, "sh": "Deterministically scroll before capture to activate lazy content.", "t": "`$BOOLEAN`", "key$": "scrollPage", "index$": 16 }, "timeout": { "a": true, "h": "Timeout", "n": "timeout", "r": false, "sh": "Navigation timeout in milliseconds.", "t": "`$INTEGER`", "key$": "timeout", "index$": 17 }, "url": { "a": true, "fo": "uri", "h": "Url", "n": "url", "r": true, "sh": "Public HTTP or HTTPS page URL.", "t": "`$STRING`", "key$": "url", "index$": 18 }, "waitUntil": { "a": true, "h": "Wait Until", "n": "waitUntil", "r": false, "sh": "Browser lifecycle event awaited before the optional delay.", "t": "`$STRING`", "key$": "waitUntil", "index$": 19 }, "width": { "a": true, "h": "Width", "n": "width", "r": false, "sh": "Viewport width in CSS pixels.", "t": "`$INTEGER`", "key$": "width", "index$": 20 } }, "name": "render", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/render", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/render", "q": {}, "r": {}, "s": [{ "lit": "v1" }, { "lit": "render" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "render", "name__orig": "render", "Name": "Render", "name_": "render", "name-": "render", "NAME": "RENDER", "index$": 3 }, { "active": true, "entity": "render", "key$": "BasicRenderFlow", "kind": "basic", "name": "BasicRenderFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "render_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'Render', { "POST /v1/render": { "protocol": "http", "operationId": "renderPage", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["url"], "properties": { "url": { "type": "string", "format": "uri", "maxLength": 2048, "description": "Public HTTP or HTTPS page URL. Private, loopback, link-local, special-use, credential-bearing, and non-web-port targets are rejected.", "example": "https://example.com", "key$": "url" }, "kind": { "type": "string", "enum": ["screenshot", "pdf"], "default": "screenshot", "description": "Artifact family to return.", "key$": "kind" }, "format": { "type": "string", "enum": ["png", "jpeg", "pdf"], "description": "Exact artifact format. PDF selects PDF rendering even when kind is omitted.", "key$": "format" }, "quality": { "type": "integer", "minimum": 1, "maximum": 100, "default": 85, "description": "JPEG encoding quality. Valid only for JPEG screenshots.", "key$": "quality" }, "width": { "type": "integer", "minimum": 320, "maximum": 2560, "default": 1440, "description": "Viewport width in CSS pixels.", "key$": "width" }, "height": { "type": "integer", "minimum": 240, "maximum": 1440, "default": 900, "description": "Viewport height in CSS pixels.", "key$": "height" }, "scale": { "type": "integer", "minimum": 1, "maximum": 2, "default": 1, "description": "Device scale factor used for image capture.", "key$": "scale" }, "fullPage": { "type": "boolean", "default": false, "description": "Capture the bounded full document height for screenshots.", "key$": "fullPage" }, "scrollPage": { "type": "boolean", "default": false, "description": "Deterministically scroll before capture to activate lazy content. Requires a fullPage screenshot; bounded to 48 steps, 5 seconds, and a 20,000-pixel document height. Does not click, type, or run caller-supplied actions.", "key$": "scrollPage" }, "waitUntil": { "type": "string", "enum": ["load", "domcontentloaded", "networkidle"], "default": "domcontentloaded", "description": "Browser lifecycle event awaited before the optional delay.", "key$": "waitUntil" }, "delay": { "type": "integer", "minimum": 0, "maximum": 3000, "default": 0, "description": "Additional bounded wait in milliseconds after the lifecycle event.", "key$": "delay" }, "timeout": { "type": "integer", "minimum": 3000, "maximum": 30000, "default": 15000, "description": "Navigation timeout in milliseconds. A separate hard process deadline still applies.", "key$": "timeout" }, "darkMode": { "type": "boolean", "default": false, "description": "Emulate a dark color-scheme preference.", "key$": "darkMode" }, "reducedMotion": { "type": "boolean", "default": true, "description": "Emulate reduced motion to improve capture stability.", "key$": "reducedMotion" }, "blockAds": { "type": "boolean", "default": false, "description": "Best-effort blocking of requests to known third-party ad hosts. This is not anti-bot bypass.", "key$": "blockAds" }, "blockTrackers": { "type": "boolean", "default": false, "description": "Best-effort blocking of requests to known third-party analytics and tracker hosts.", "key$": "blockTrackers" }, "blockChats": { "type": "boolean", "default": false, "description": "Best-effort blocking and hiding of known third-party chat widgets.", "key$": "blockChats" }, "hideCookieBanners": { "type": "boolean", "default": false, "description": "Hide common cookie-consent overlays after loading. This does not click consent, set consent cookies, or bypass access controls.", "key$": "hideCookieBanners" }, "hidePopups": { "type": "boolean", "default": false, "description": "Hide common newsletter, signup, and discount popups without clicking, submitting, or setting state.", "key$": "hidePopups" }, "paper": { "type": "string", "enum": ["A4", "Letter", "Legal"], "default": "A4", "description": "Paper size used for PDF rendering.", "key$": "paper" }, "landscape": { "type": "boolean", "default": false, "description": "Use landscape orientation for PDF rendering.", "key$": "landscape" } }, "x-ref": "#/components/schemas/RenderRequest", "index$": 1 }, "examples": { "screenshot": { "value": { "url": "https://example.com", "width": 1440, "height": 900 } }, "pdf": { "value": { "url": "https://example.com", "kind": "pdf", "paper": "A4" } } } } } }, "responses": { "200": { "description": "Rendered image or PDF. Diagnostic, rate-limit, and quota values are returned in headers.", "headers": { "X-Latchshot-Render-Ms": { "description": "End-to-end render duration in milliseconds.", "schema": { "type": "integer", "minimum": 0 }, "x-ref": "#/components/headers/RenderMs" }, "X-Latchshot-Navigation": { "description": "Whether navigation completed normally or reached its bounded timeout after a usable page response.", "schema": { "type": "string", "enum": ["complete", "timed-out"] }, "x-ref": "#/components/headers/Navigation" }, "X-Latchshot-Scroll": { "description": "Whether bounded lazy-content scrolling completed or the option was off.", "schema": { "type": "string", "enum": ["complete", "off"] }, "x-ref": "#/components/headers/Scroll" }, "X-Quota-Remaining": { "description": "Successful renders remaining in the current UTC calendar month after this response.", "schema": { "type": "integer", "minimum": 0 }, "x-ref": "#/components/headers/QuotaRemaining" }, "X-Quota-Reset": { "description": "UTC date-time when the monthly successful-render allowance replenishes.", "schema": { "type": "string", "format": "date-time" }, "x-ref": "#/components/headers/QuotaReset" }, "X-Latchshot-Usage-URL": { "description": "Authenticated read-only plan, quota, request-state, and continuation endpoint. Following this URL does not consume render quota or change a plan.", "schema": { "type": "string", "format": "uri", "const": "https://latchshot.fly.dev/v1/usage" }, "x-ref": "#/components/headers/UsageUrl" }, "X-Latchshot-Paid-Plan-URL": { "description": "Optional owner-managed paid-plan request form. Following this URL does not take payment or change a plan.", "schema": { "type": "string", "format": "uri", "const": "https://latchshot.fly.dev/#upgrade" }, "x-ref": "#/components/headers/PaidPlanUrl" }, "X-Latchshot-Implementation-Pilot-URL": { "description": "Optional bounded implementation-pilot contract. Following this URL starts neither payment nor implementation work.", "schema": { "type": "string", "format": "uri", "const": "https://latchshot.fly.dev/implementation-pilot.html" }, "x-ref": "#/components/headers/ImplementationPilotUrl" } }, "content": { "image/png": { "schema": { "type": "string", "format": "binary" } }, "image/jpeg": { "schema": { "type": "string", "format": "binary" } }, "application/pdf": { "schema": { "type": "string", "format": "binary" } } } }, "400": { "description": "Error response", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "object", "required": ["code", "message"], "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } }, "x-ref": "#/components/responses/Error" }, "401": { "description": "Error response", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "object", "required": ["code", "message"], "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } }, "x-ref": "#/components/responses/Error" }, "413": { "description": "Error response", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "object", "required": ["code", "message"], "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } }, "x-ref": "#/components/responses/Error" }, "429": { "description": "Error response", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "object", "required": ["code", "message"], "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } }, "x-ref": "#/components/responses/Error" }, "502": { "description": "Error response", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "object", "required": ["code", "message"], "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } }, "x-ref": "#/components/responses/Error" }, "504": { "description": "Error response", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "object", "required": ["code", "message"], "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } }, "x-ref": "#/components/responses/Error" } }, "parameters": [], "security": [{ "bearerAuth": [] }], "securitySource": "operation", "securitySchemes": { "bearerAuth": { "type": "http", "scheme": "bearer", "bearerFormat": "API key", "description": "Send the one-time Latchshot key in the Authorization header as Bearer YOUR_KEY. Keys are stored only as hashes." } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const render_ref01_ent = client.Render();
        let render_ref01_data = setup.data.new.render['render_ref01'];
        render_ref01_data = (await render_ref01_ent.create(render_ref01_data)).data();
        (0, node_assert_1.default)(null != render_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/render/RenderTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LatchshotScreenshotSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['render01', 'render02', 'render03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LATCHSHOT_SCREENSHOT_TEST_RENDER_ENTID': idmap,
        'LATCHSHOT_SCREENSHOT_TEST_LIVE': 'FALSE',
        'LATCHSHOT_SCREENSHOT_TEST_EXPLAIN': 'FALSE',
        'LATCHSHOT_SCREENSHOT_APIKEY': '',
    });
    idmap = env['LATCHSHOT_SCREENSHOT_TEST_RENDER_ENTID'];
    const live = 'TRUE' === env.LATCHSHOT_SCREENSHOT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LATCHSHOT_SCREENSHOT_TEST_RENDER_ENTID'];
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
//# sourceMappingURL=RenderEntity.test.js.map