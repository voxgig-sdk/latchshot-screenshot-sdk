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
(0, node_test_1.describe)('PilotRequestEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LATCHSHOT_SCREENSHOT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LATCHSHOT_SCREENSHOT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LatchshotScreenshotSDK.test();
        const ent = testsdk.PilotRequest();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LATCHSHOT_SCREENSHOT_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'pilot_request.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "acceptanceSample": { "a": true, "h": "Acceptance Sample", "n": "acceptanceSample", "r": false, "sh": "Optional safe description of one maintainer-approved public page and required artifact shape.", "t": "`$STRING`", "key$": "acceptanceSample", "index$": 0 }, "callSite": { "a": true, "h": "Call Site", "n": "callSite", "op": { "create": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "Optional relative repository file path for the existing backend provider call.", "t": "`$STRING`", "key$": "callSite", "index$": 1 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": true, "t": "`$STRING`", "key$": "createdAt", "index$": 2 }, "currentContract": { "a": true, "h": "Current Contract", "n": "currentContract", "r": false, "sh": "Optional non-secret current request, synchronous output, and application-owned byte handling.", "t": "`$STRING`", "key$": "currentContract", "index$": 3 }, "email": { "a": true, "fo": "email", "h": "Email", "n": "email", "r": true, "sh": "Address the owner may use only to reply about this pilot request.", "t": "`$STRING`", "key$": "email", "index$": 4 }, "expectedRenders": { "a": true, "h": "Expected Renders", "n": "expectedRenders", "r": false, "t": "`$STRING`", "key$": "expectedRenders", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "t": "`$INTEGER`", "key$": "id", "index$": 6 }, "language": { "a": true, "h": "Language", "n": "language", "r": false, "t": "`$STRING`", "key$": "language", "index$": 7 }, "provider": { "a": true, "h": "Provider", "n": "provider", "r": false, "t": "`$STRING`", "key$": "provider", "index$": 8 }, "replyConsent": { "a": true, "h": "Reply Consent", "n": "replyConsent", "r": true, "sh": "Allows the owner to email only about this pilot request.", "t": "`$BOOLEAN`", "key$": "replyConsent", "index$": 9 }, "repositoryAuthority": { "a": true, "h": "Repository Authority", "n": "repositoryAuthority", "r": true, "sh": "Confirms authority to review, merge, deploy, and roll back the public repository change.", "t": "`$BOOLEAN`", "key$": "repositoryAuthority", "index$": 10 }, "repositoryUrl": { "a": true, "fo": "uri", "h": "Repository Url", "n": "repositoryUrl", "r": true, "sh": "Exact public GitHub repository under the requester's control.", "t": "`$STRING`", "key$": "repositoryUrl", "index$": 11 }, "requiredBehavior": { "a": true, "h": "Required Behavior", "n": "requiredBehavior", "r": false, "sh": "Optional provider behavior that must be preserved.", "t": "`$STRING`", "key$": "requiredBehavior", "index$": 12 }, "safetyAcknowledged": { "a": true, "h": "Safety Acknowledged", "n": "safetyAcknowledged", "r": true, "sh": "Confirms removal of credentials, private or signed URLs, customer data, payment details, and sensitive artifacts.", "t": "`$BOOLEAN`", "key$": "safetyAcknowledged", "index$": 13 }, "startBoundaryAcknowledged": { "a": true, "h": "Start Boundary Acknowledged", "n": "startBoundaryAcknowledged", "r": true, "sh": "Confirms that no payment or work starts before separate owner confirmation.", "t": "`$BOOLEAN`", "key$": "startBoundaryAcknowledged", "index$": 14 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "t": "`$STRING`", "key$": "status", "index$": 15 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": true, "t": "`$STRING`", "key$": "updatedAt", "index$": 16 } }, "id": { "field": "id", "name": "id" }, "name": "pilot_request", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/pilot-requests", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/pilot-requests", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "pilot-requests" }], "t": { "req": "`reqdata`", "res": "`body.request`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "pilot_request", "name__orig": "pilot_request", "Name": "PilotRequest", "name_": "pilot_request", "name-": "pilot-request", "NAME": "PILOT_REQUEST", "index$": 2 }, { "active": true, "entity": "pilot_request", "key$": "BasicPilotRequestFlow", "kind": "basic", "name": "BasicPilotRequestFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "pilot_request_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'PilotRequest', { "POST /api/pilot-requests": { "protocol": "http", "operationId": "requestImplementationPilot", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "required": ["email", "repositoryUrl", "repositoryAuthority", "safetyAcknowledged", "startBoundaryAcknowledged", "replyConsent"], "properties": { "email": { "type": "string", "format": "email", "maxLength": 254, "description": "Address the owner may use only to reply about this pilot request.", "key$": "email" }, "repositoryUrl": { "type": "string", "format": "uri", "maxLength": 500, "pattern": "^https://github\\.com/[^/]+/[^/]+(?:\\.git)?$", "description": "Exact public GitHub repository under the requester's control.", "key$": "repositoryUrl" }, "callSite": { "type": "string", "maxLength": 500, "default": "Not provided", "description": "Optional relative repository file path for the existing backend provider call. The owner can locate it during the free fit check.", "key$": "callSite" }, "provider": { "type": "string", "enum": ["ApiFlash", "ScreenshotMachine", "ScreenshotOne", "Urlbox", "Browserless", "Local Playwright or Puppeteer", "Another provider", "Not implemented yet", "Not provided"], "default": "Not provided", "key$": "provider" }, "language": { "type": "string", "enum": ["JavaScript", "TypeScript", "Python", "Not provided"], "default": "Not provided", "key$": "language" }, "currentContract": { "type": "string", "maxLength": 1500, "default": "Not provided; owner will inspect the public repository.", "description": "Optional non-secret current request, synchronous output, and application-owned byte handling.", "key$": "currentContract" }, "requiredBehavior": { "type": "string", "maxLength": 1000, "default": "Not provided; owner will confirm required behavior before scope.", "description": "Optional provider behavior that must be preserved. The owner confirms it before paid scope is locked.", "key$": "requiredBehavior" }, "expectedRenders": { "type": "string", "enum": ["1–100", "101–2,500", "2,501–12,000", "12,001–50,000", "More than 50,000", "Not sure"], "default": "Not sure", "key$": "expectedRenders" }, "acceptanceSample": { "type": "string", "maxLength": 1000, "default": "Not provided; owner will confirm a safe public sample before work.", "description": "Optional safe description of one maintainer-approved public page and required artifact shape.", "key$": "acceptanceSample" }, "repositoryAuthority": { "type": "boolean", "const": true, "description": "Confirms authority to review, merge, deploy, and roll back the public repository change.", "key$": "repositoryAuthority" }, "safetyAcknowledged": { "type": "boolean", "const": true, "description": "Confirms removal of credentials, private or signed URLs, customer data, payment details, and sensitive artifacts.", "key$": "safetyAcknowledged" }, "startBoundaryAcknowledged": { "type": "boolean", "const": true, "description": "Confirms that no payment or work starts before separate owner confirmation.", "key$": "startBoundaryAcknowledged" }, "replyConsent": { "type": "boolean", "const": true, "description": "Allows the owner to email only about this pilot request.", "key$": "replyConsent" } }, "x-ref": "#/components/schemas/PilotRequest", "index$": 1 } } } }, "responses": { "200": { "description": "Existing request for this email and repository updated for owner review", "content": { "application/json": { "schema": { "type": "object", "required": ["request", "notice"], "properties": { "request": { "type": "object", "required": ["id", "repositoryUrl", "callSite", "status", "createdAt", "updatedAt"], "properties": { "id": { "type": "integer", "minimum": 1, "key$": "id" }, "repositoryUrl": { "type": "string", "format": "uri", "key$": "repositoryUrl" }, "callSite": { "type": "string", "key$": "callSite" }, "status": { "type": "string", "enum": ["new", "contacted", "fit_confirmed", "declined"], "key$": "status" }, "createdAt": { "type": "string", "format": "date-time", "key$": "createdAt" }, "updatedAt": { "type": "string", "format": "date-time", "key$": "updatedAt" } }, "x-ref": "#/components/schemas/PilotRequestStatus", "index$": 0 }, "notice": { "type": "string", "description": "Confirms owner review and the no-payment/no-work-start boundary." } }, "x-ref": "#/components/schemas/PilotRequestResponse" } } } }, "201": { "description": "New pilot request recorded for owner review", "content": { "application/json": { "schema": { "type": "object", "required": ["request", "notice"], "properties": { "request": { "type": "object", "required": ["id", "repositoryUrl", "callSite", "status", "createdAt", "updatedAt"], "properties": { "id": { "type": "integer", "minimum": 1, "key$": "id" }, "repositoryUrl": { "type": "string", "format": "uri", "key$": "repositoryUrl" }, "callSite": { "type": "string", "key$": "callSite" }, "status": { "type": "string", "enum": ["new", "contacted", "fit_confirmed", "declined"], "key$": "status" }, "createdAt": { "type": "string", "format": "date-time", "key$": "createdAt" }, "updatedAt": { "type": "string", "format": "date-time", "key$": "updatedAt" } }, "x-ref": "#/components/schemas/PilotRequestStatus", "index$": 0 }, "notice": { "type": "string", "description": "Confirms owner review and the no-payment/no-work-start boundary." } }, "x-ref": "#/components/schemas/PilotRequestResponse" } } } }, "400": { "description": "Error response", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "object", "required": ["code", "message"], "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } }, "x-ref": "#/components/responses/Error" }, "413": { "description": "Error response", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "object", "required": ["code", "message"], "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } }, "x-ref": "#/components/responses/Error" }, "429": { "description": "Error response", "content": { "application/json": { "schema": { "type": "object", "required": ["error"], "properties": { "error": { "type": "object", "required": ["code", "message"], "properties": { "code": { "type": "string" }, "message": { "type": "string" } } } }, "x-ref": "#/components/schemas/Error" } } }, "x-ref": "#/components/responses/Error" } }, "parameters": [], "security": [], "securitySource": "operation", "securitySchemes": { "bearerAuth": { "type": "http", "scheme": "bearer", "bearerFormat": "API key", "description": "Send the one-time Latchshot key in the Authorization header as Bearer YOUR_KEY. Keys are stored only as hashes." } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const pilot_request_ref01_ent = client.PilotRequest();
        let pilot_request_ref01_data = setup.data.new.pilot_request['pilot_request_ref01'];
        pilot_request_ref01_data = (await pilot_request_ref01_ent.create(pilot_request_ref01_data)).data();
        (0, node_assert_1.default)(null != pilot_request_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/pilot_request/PilotRequestTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LatchshotScreenshotSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['pilot_request01', 'pilot_request02', 'pilot_request03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LATCHSHOT_SCREENSHOT_TEST_PILOT_REQUEST_ENTID': idmap,
        'LATCHSHOT_SCREENSHOT_TEST_LIVE': 'FALSE',
        'LATCHSHOT_SCREENSHOT_TEST_EXPLAIN': 'FALSE',
        'LATCHSHOT_SCREENSHOT_APIKEY': '',
    });
    idmap = env['LATCHSHOT_SCREENSHOT_TEST_PILOT_REQUEST_ENTID'];
    const live = 'TRUE' === env.LATCHSHOT_SCREENSHOT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LATCHSHOT_SCREENSHOT_TEST_PILOT_REQUEST_ENTID'];
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
//# sourceMappingURL=PilotRequestEntity.test.js.map