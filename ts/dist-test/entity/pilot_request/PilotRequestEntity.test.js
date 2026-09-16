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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "acceptanceSample", "req": false, "short": "Optional safe description of one maintainer-approved public page and required artifact shape.", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "callSite", "op": { "create": { "req": false, "type": "`$STRING`" } }, "req": true, "short": "Optional relative repository file path for the existing backend provider call.", "type": "`$STRING`", "index$": 1 }, { "active": true, "format": "date-time", "name": "createdAt", "req": true, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "currentContract", "req": false, "short": "Optional non-secret current request, synchronous output, and application-owned byte handling.", "type": "`$STRING`", "index$": 3 }, { "active": true, "format": "email", "name": "email", "req": true, "short": "Address the owner may use only to reply about this pilot request.", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "expectedRenders", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "id", "req": true, "type": "`$INTEGER`", "index$": 6 }, { "active": true, "name": "language", "req": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "provider", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "replyConsent", "req": true, "short": "Allows the owner to email only about this pilot request.", "type": "`$BOOLEAN`", "index$": 9 }, { "active": true, "name": "repositoryAuthority", "req": true, "short": "Confirms authority to review, merge, deploy, and roll back the public repository change.", "type": "`$BOOLEAN`", "index$": 10 }, { "active": true, "format": "uri", "name": "repositoryUrl", "req": true, "short": "Exact public GitHub repository under the requester's control.", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "requiredBehavior", "req": false, "short": "Optional provider behavior that must be preserved.", "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "safetyAcknowledged", "req": true, "short": "Confirms removal of credentials, private or signed URLs, customer data, payment details, and sensitive artifacts.", "type": "`$BOOLEAN`", "index$": 13 }, { "active": true, "name": "startBoundaryAcknowledged", "req": true, "short": "Confirms that no payment or work starts before separate owner confirmation.", "type": "`$BOOLEAN`", "index$": 14 }, { "active": true, "name": "status", "req": true, "type": "`$STRING`", "index$": 15 }, { "active": true, "format": "date-time", "name": "updatedAt", "req": true, "type": "`$STRING`", "index$": 16 }], "id": { "field": "id", "name": "id" }, "name": "pilot_request", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /api/pilot-requests", "json": "{\"operationId\":\"requestImplementationPilot\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"acceptanceSample\":{\"default\":\"Not provided; owner will confirm a safe public sample before work.\",\"description\":\"Optional safe description of one maintainer-approved public page and required artifact shape.\",\"maxLength\":1000,\"type\":\"string\"},\"callSite\":{\"default\":\"Not provided\",\"description\":\"Optional relative repository file path for the existing backend provider call. The owner can locate it during the free fit check.\",\"maxLength\":500,\"type\":\"string\"},\"currentContract\":{\"default\":\"Not provided; owner will inspect the public repository.\",\"description\":\"Optional non-secret current request, synchronous output, and application-owned byte handling.\",\"maxLength\":1500,\"type\":\"string\"},\"email\":{\"description\":\"Address the owner may use only to reply about this pilot request.\",\"format\":\"email\",\"maxLength\":254,\"type\":\"string\"},\"expectedRenders\":{\"default\":\"Not sure\",\"enum\":[\"1–100\",\"101–2,500\",\"2,501–12,000\",\"12,001–50,000\",\"More than 50,000\",\"Not sure\"],\"type\":\"string\"},\"language\":{\"default\":\"Not provided\",\"enum\":[\"JavaScript\",\"TypeScript\",\"Python\",\"Not provided\"],\"type\":\"string\"},\"provider\":{\"default\":\"Not provided\",\"enum\":[\"ApiFlash\",\"ScreenshotMachine\",\"ScreenshotOne\",\"Urlbox\",\"Browserless\",\"Local Playwright or Puppeteer\",\"Another provider\",\"Not implemented yet\",\"Not provided\"],\"type\":\"string\"},\"replyConsent\":{\"const\":true,\"description\":\"Allows the owner to email only about this pilot request.\",\"type\":\"boolean\"},\"repositoryAuthority\":{\"const\":true,\"description\":\"Confirms authority to review, merge, deploy, and roll back the public repository change.\",\"type\":\"boolean\"},\"repositoryUrl\":{\"description\":\"Exact public GitHub repository under the requester's control.\",\"format\":\"uri\",\"maxLength\":500,\"pattern\":\"^https://github\\\\.com/[^/]+/[^/]+(?:\\\\.git)?$\",\"type\":\"string\"},\"requiredBehavior\":{\"default\":\"Not provided; owner will confirm required behavior before scope.\",\"description\":\"Optional provider behavior that must be preserved. The owner confirms it before paid scope is locked.\",\"maxLength\":1000,\"type\":\"string\"},\"safetyAcknowledged\":{\"const\":true,\"description\":\"Confirms removal of credentials, private or signed URLs, customer data, payment details, and sensitive artifacts.\",\"type\":\"boolean\"},\"startBoundaryAcknowledged\":{\"const\":true,\"description\":\"Confirms that no payment or work starts before separate owner confirmation.\",\"type\":\"boolean\"}},\"required\":[\"email\",\"repositoryUrl\",\"repositoryAuthority\",\"safetyAcknowledged\",\"startBoundaryAcknowledged\",\"replyConsent\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"notice\":{\"description\":\"Confirms owner review and the no-payment/no-work-start boundary.\",\"type\":\"string\"},\"request\":{\"properties\":{\"callSite\":{\"type\":\"string\"},\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"minimum\":1,\"type\":\"integer\"},\"repositoryUrl\":{\"format\":\"uri\",\"type\":\"string\"},\"status\":{\"enum\":[\"new\",\"contacted\",\"fit_confirmed\",\"declined\"],\"type\":\"string\"},\"updatedAt\":{\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"id\",\"repositoryUrl\",\"callSite\",\"status\",\"createdAt\",\"updatedAt\"],\"type\":\"object\"}},\"required\":[\"request\",\"notice\"],\"type\":\"object\"}}},\"description\":\"Existing request for this email and repository updated for owner review\"},\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"notice\":{\"description\":\"Confirms owner review and the no-payment/no-work-start boundary.\",\"type\":\"string\"},\"request\":{\"properties\":{\"callSite\":{\"type\":\"string\"},\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"minimum\":1,\"type\":\"integer\"},\"repositoryUrl\":{\"format\":\"uri\",\"type\":\"string\"},\"status\":{\"enum\":[\"new\",\"contacted\",\"fit_confirmed\",\"declined\"],\"type\":\"string\"},\"updatedAt\":{\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"id\",\"repositoryUrl\",\"callSite\",\"status\",\"createdAt\",\"updatedAt\"],\"type\":\"object\"}},\"required\":[\"request\",\"notice\"],\"type\":\"object\"}}},\"description\":\"New pilot request recorded for owner review\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"},\"413\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"}},\"security\":[],\"securitySchemes\":{\"bearerAuth\":{\"bearerFormat\":\"API key\",\"description\":\"Send the one-time Latchshot key in the Authorization header as Bearer YOUR_KEY. Keys are stored only as hashes.\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/pilot-requests", "segments": [{ "lit": "api" }, { "lit": "pilot-requests" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.request`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "pilot_request", "name__orig": "pilot_request", "Name": "PilotRequest", "name_": "pilot_request", "name-": "pilot-request", "NAME": "PILOT_REQUEST", "index$": 2 }, { "active": true, "entity": "pilot_request", "key$": "BasicPilotRequestFlow", "kind": "basic", "name": "BasicPilotRequestFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "pilot_request_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'PilotRequest');
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