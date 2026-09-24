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
(0, node_test_1.describe)('UpgradeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LATCHSHOT_SCREENSHOT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LATCHSHOT_SCREENSHOT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LatchshotScreenshotSDK.test();
        const ent = testsdk.Upgrade();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LATCHSHOT_SCREENSHOT_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'upgrade.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "consent": { "a": true, "h": "Consent", "n": "consent", "r": true, "t": "`$BOOLEAN`", "key$": "consent", "index$": 0 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": true, "t": "`$STRING`", "key$": "createdAt", "index$": 1 }, "currentPlan": { "a": true, "h": "Current Plan", "n": "currentPlan", "r": true, "t": "`$STRING`", "key$": "currentPlan", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "t": "`$INTEGER`", "key$": "id", "index$": 3 }, "note": { "a": true, "h": "Note", "n": "note", "r": false, "t": "`$STRING`", "key$": "note", "index$": 4 }, "requestedPlan": { "a": true, "h": "Requested Plan", "n": "requestedPlan", "r": true, "t": "`$STRING`", "key$": "requestedPlan", "index$": 5 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$STRING`", "key$": "status", "index$": 6 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": true, "t": "`$STRING`", "key$": "updatedAt", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "upgrade", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /v1/upgrade-requests", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/v1/upgrade-requests", "q": {}, "r": {}, "s": [{ "lit": "v1" }, { "lit": "upgrade-requests" }], "t": { "req": "`reqdata`", "res": "`body.request`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "upgrade", "name__orig": "upgrade", "Name": "Upgrade", "name_": "upgrade", "name-": "upgrade", "NAME": "UPGRADE", "index$": 7 }, { "active": true, "entity": "upgrade", "key$": "BasicUpgradeFlow", "kind": "basic", "name": "BasicUpgradeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "upgrade_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'Upgrade', { "POST /v1/upgrade-requests": { "protocol": "http", "operationId": "requestUpgrade", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["requestedPlan", "consent"], "properties": { "requestedPlan": { "type": "string", "enum": ["launch", "build", "scale"], "key$": "requestedPlan" }, "note": { "type": "string", "maxLength": 1000, "key$": "note" }, "consent": { "type": "boolean", "const": true, "key$": "consent" } }, "x-ref": "#/components/schemas/UpgradeRequest", "index$": 1 } } } }, "responses": { "200": { "description": "Existing open request updated", "content": { "application/json": { "schema": { "type": "object", "required": ["request", "notice"], "properties": { "request": { "type": "object", "required": ["id", "currentPlan", "requestedPlan", "status", "createdAt", "updatedAt"], "properties": { "id": { "type": "integer", "minimum": 1, "key$": "id" }, "currentPlan": { "type": "string", "key$": "currentPlan" }, "requestedPlan": { "type": "string", "enum": ["launch", "build", "scale"], "key$": "requestedPlan" }, "status": { "type": "string", "enum": ["new", "contacted", "fulfilled", "declined"], "key$": "status" }, "createdAt": { "type": "string", "format": "date-time", "key$": "createdAt" }, "updatedAt": { "type": "string", "format": "date-time", "key$": "updatedAt" } }, "index$": 0 }, "notice": { "type": "string" } }, "x-ref": "#/components/schemas/UpgradeResponse" } } } }, "201": { "description": "New paid-plan request recorded", "content": { "application/json": { "schema": { "type": "object", "required": ["request", "notice"], "properties": { "request": { "type": "object", "required": ["id", "currentPlan", "requestedPlan", "status", "createdAt", "updatedAt"], "properties": { "id": { "type": "integer", "minimum": 1, "key$": "id" }, "currentPlan": { "type": "string", "key$": "currentPlan" }, "requestedPlan": { "type": "string", "enum": ["launch", "build", "scale"], "key$": "requestedPlan" }, "status": { "type": "string", "enum": ["new", "contacted", "fulfilled", "declined"], "key$": "status" }, "createdAt": { "type": "string", "format": "date-time", "key$": "createdAt" }, "updatedAt": { "type": "string", "format": "date-time", "key$": "updatedAt" } }, "index$": 0 }, "notice": { "type": "string" } }, "x-ref": "#/components/schemas/UpgradeResponse" } } } }, "400": { "description": "Error response", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "object", "required": ["code", "message"], "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } }, "x-ref": "#/components/responses/Error" }, "401": { "description": "Error response", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "object", "required": ["code", "message"], "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } }, "x-ref": "#/components/responses/Error" }, "409": { "description": "Error response", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "object", "required": ["code", "message"], "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } }, "x-ref": "#/components/responses/Error" }, "429": { "description": "Error response", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "object", "required": ["code", "message"], "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } }, "x-ref": "#/components/responses/Error" } }, "parameters": [], "security": [{ "bearerAuth": [] }], "securitySource": "operation", "securitySchemes": { "bearerAuth": { "type": "http", "scheme": "bearer", "bearerFormat": "API key", "description": "Send the one-time Latchshot key in the Authorization header as Bearer YOUR_KEY. Keys are stored only as hashes." } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const upgrade_ref01_ent = client.Upgrade();
        let upgrade_ref01_data = setup.data.new.upgrade['upgrade_ref01'];
        upgrade_ref01_data = (await upgrade_ref01_ent.create(upgrade_ref01_data)).data();
        (0, node_assert_1.default)(null != upgrade_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/upgrade/UpgradeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LatchshotScreenshotSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['upgrade01', 'upgrade02', 'upgrade03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LATCHSHOT_SCREENSHOT_TEST_UPGRADE_ENTID': idmap,
        'LATCHSHOT_SCREENSHOT_TEST_LIVE': 'FALSE',
        'LATCHSHOT_SCREENSHOT_TEST_EXPLAIN': 'FALSE',
        'LATCHSHOT_SCREENSHOT_APIKEY': '',
    });
    idmap = env['LATCHSHOT_SCREENSHOT_TEST_UPGRADE_ENTID'];
    const live = 'TRUE' === env.LATCHSHOT_SCREENSHOT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LATCHSHOT_SCREENSHOT_TEST_UPGRADE_ENTID'];
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
//# sourceMappingURL=UpgradeEntity.test.js.map