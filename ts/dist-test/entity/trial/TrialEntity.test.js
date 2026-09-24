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
(0, node_test_1.describe)('TrialEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LATCHSHOT_SCREENSHOT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LATCHSHOT_SCREENSHOT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LatchshotScreenshotSDK.test();
        const ent = testsdk.Trial();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LATCHSHOT_SCREENSHOT_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'trial.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "consent": { "a": true, "h": "Consent", "n": "consent", "r": false, "sh": "Optional permission for the owner to send product-fit guidance.", "t": "`$BOOLEAN`", "key$": "consent", "index$": 0 }, "email": { "a": true, "fo": "email", "h": "Email", "n": "email", "r": true, "sh": "Email used to enforce one lifetime Free-plan key.", "t": "`$STRING`", "key$": "email", "index$": 1 }, "expectedRenders": { "a": true, "h": "Expected Renders", "n": "expectedRenders", "r": false, "t": "`$STRING`", "key$": "expectedRenders", "index$": 2 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Optional display name for owner review.", "t": "`$STRING`", "key$": "name", "index$": 3 }, "useCase": { "a": true, "h": "Use Case", "n": "useCase", "r": false, "sh": "Optional public-page capture use case.", "t": "`$STRING`", "key$": "useCase", "index$": 4 } }, "name": "trial", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/trials", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/trials", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "trials" }], "t": { "req": "`reqdata`", "res": "`body.trial`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "trial", "name__orig": "trial", "Name": "Trial", "name_": "trial", "name-": "trial", "NAME": "TRIAL", "index$": 6 }, { "active": true, "entity": "trial", "key$": "BasicTrialFlow", "kind": "basic", "name": "BasicTrialFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "trial_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'Trial', { "POST /api/trials": { "protocol": "http", "operationId": "createTrial", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["email"], "properties": { "name": { "type": "string", "maxLength": 120, "description": "Optional display name for owner review.", "key$": "name" }, "email": { "type": "string", "format": "email", "maxLength": 254, "description": "Email used to enforce one lifetime Free-plan key. It does not grant contact permission.", "key$": "email" }, "useCase": { "type": "string", "maxLength": 1000, "description": "Optional public-page capture use case.", "key$": "useCase" }, "expectedRenders": { "type": "string", "default": "not sure", "enum": ["under 1,000", "1,000–10,000", "10,000–50,000", "over 50,000", "not sure"], "key$": "expectedRenders" }, "consent": { "type": "boolean", "default": false, "description": "Optional permission for the owner to send product-fit guidance.", "key$": "consent" } }, "x-ref": "#/components/schemas/TrialRequest", "index$": 1 } } } }, "responses": { "201": { "description": "Free-plan key created; the plaintext key is returned only in this response", "content": { "application/json": { "schema": { "type": "object", "required": ["apiKey", "trial", "notice", "quickstart"], "properties": { "apiKey": { "type": "string", "pattern": "^ls_live_" }, "trial": { "type": "object", "required": ["plan", "displayName", "successfulRenderLimit", "rateLimitPerMinute", "quotaPeriod", "resetAt"], "properties": { "plan": { "type": "string", "const": "trial" }, "displayName": { "type": "string", "const": "Free" }, "successfulRenderLimit": { "type": "integer", "const": 100 }, "rateLimitPerMinute": { "type": "integer", "minimum": 1 }, "quotaPeriod": { "type": "string", "const": "calendar_month" }, "resetAt": { "type": "string", "format": "date-time" } } }, "notice": { "type": "string" }, "quickstart": { "type": "string", "format": "uri" } }, "x-ref": "#/components/schemas/TrialIssue" } } } }, "400": { "description": "Error response", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "object", "required": ["code", "message"], "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } }, "x-ref": "#/components/responses/Error" }, "409": { "description": "Error response", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "object", "required": ["code", "message"], "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } }, "x-ref": "#/components/responses/Error" }, "429": { "description": "Error response", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "object", "required": ["code", "message"], "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } }, "x-ref": "#/components/responses/Error" } }, "parameters": [], "security": [], "securitySource": "operation", "securitySchemes": { "bearerAuth": { "type": "http", "scheme": "bearer", "bearerFormat": "API key", "description": "Send the one-time Latchshot key in the Authorization header as Bearer YOUR_KEY. Keys are stored only as hashes." } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const trial_ref01_ent = client.Trial();
        let trial_ref01_data = setup.data.new.trial['trial_ref01'];
        trial_ref01_data = (await trial_ref01_ent.create(trial_ref01_data)).data();
        (0, node_assert_1.default)(null != trial_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/trial/TrialTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LatchshotScreenshotSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['trial01', 'trial02', 'trial03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LATCHSHOT_SCREENSHOT_TEST_TRIAL_ENTID': idmap,
        'LATCHSHOT_SCREENSHOT_TEST_LIVE': 'FALSE',
        'LATCHSHOT_SCREENSHOT_TEST_EXPLAIN': 'FALSE',
        'LATCHSHOT_SCREENSHOT_APIKEY': '',
    });
    idmap = env['LATCHSHOT_SCREENSHOT_TEST_TRIAL_ENTID'];
    const live = 'TRUE' === env.LATCHSHOT_SCREENSHOT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LATCHSHOT_SCREENSHOT_TEST_TRIAL_ENTID'];
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
//# sourceMappingURL=TrialEntity.test.js.map