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
(0, node_test_1.describe)('SafetyReviewRequestEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LATCHSHOT_SCREENSHOT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LATCHSHOT_SCREENSHOT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LatchshotScreenshotSDK.test();
        const ent = testsdk.SafetyReviewRequest();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LATCHSHOT_SCREENSHOT_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'safety_review_request.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "date-time", "name": "createdAt", "req": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "currentControls", "req": true, "short": "Non-secret current URL, network, browser, resource, and caller controls.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "desiredOutcome", "req": true, "short": "Requested risk report, focused patch, regression tests, and handoff outcome.", "type": "`$STRING`", "index$": 2 }, { "active": true, "format": "email", "name": "email", "req": true, "short": "Address the owner may use only to reply about this safety-review request.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "id", "req": true, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "name": "language", "req": true, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "primaryConcern", "req": true, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "replyConsent", "req": true, "short": "Allows the owner to email only about this safety-review request.", "type": "`$BOOLEAN`", "index$": 7 }, { "active": true, "name": "repositoryAuthority", "req": true, "short": "Confirms authority to review, merge, deploy, and roll back the public repository change.", "type": "`$BOOLEAN`", "index$": 8 }, { "active": true, "format": "uri", "name": "repositoryUrl", "req": true, "short": "Exact public GitHub repository under the requester's control.", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "routePath", "req": true, "short": "One relative repository file path for the existing screenshot endpoint or worker.", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "runtime", "req": true, "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "safetyAcknowledged", "req": true, "short": "Confirms removal of credentials, private or signed URLs, customer data, production details, payment information, and sensitive artifacts.", "type": "`$BOOLEAN`", "index$": 12 }, { "active": true, "name": "startBoundaryAcknowledged", "req": true, "short": "Confirms that no payment or work starts before separate owner confirmation.", "type": "`$BOOLEAN`", "index$": 13 }, { "active": true, "name": "status", "req": true, "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "testEvidence", "req": true, "short": "Non-sensitive description of current happy-path and rejection tests, or none.", "type": "`$STRING`", "index$": 15 }, { "active": true, "format": "date-time", "name": "updatedAt", "req": true, "type": "`$STRING`", "index$": 16 }], "id": { "field": "id", "name": "id" }, "name": "safety_review_request", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /api/safety-review-requests", "json": "{\"operationId\":\"requestScreenshotSafetyReview\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"currentControls\":{\"description\":\"Non-secret current URL, network, browser, resource, and caller controls.\",\"maxLength\":1500,\"type\":\"string\"},\"desiredOutcome\":{\"description\":\"Requested risk report, focused patch, regression tests, and handoff outcome.\",\"maxLength\":1000,\"type\":\"string\"},\"email\":{\"description\":\"Address the owner may use only to reply about this safety-review request.\",\"format\":\"email\",\"maxLength\":254,\"type\":\"string\"},\"language\":{\"enum\":[\"JavaScript\",\"TypeScript\",\"Python\"],\"type\":\"string\"},\"primaryConcern\":{\"enum\":[\"SSRF and internal network access\",\"DNS rebinding\",\"Redirects and subresources\",\"Authorization and secrets\",\"Full endpoint review\"],\"type\":\"string\"},\"replyConsent\":{\"const\":true,\"description\":\"Allows the owner to email only about this safety-review request.\",\"type\":\"boolean\"},\"repositoryAuthority\":{\"const\":true,\"description\":\"Confirms authority to review, merge, deploy, and roll back the public repository change.\",\"type\":\"boolean\"},\"repositoryUrl\":{\"description\":\"Exact public GitHub repository under the requester's control.\",\"format\":\"uri\",\"maxLength\":500,\"pattern\":\"^https://github\\\\.com/[^/]+/[^/]+(?:\\\\.git)?$\",\"type\":\"string\"},\"routePath\":{\"description\":\"One relative repository file path for the existing screenshot endpoint or worker.\",\"maxLength\":500,\"type\":\"string\"},\"runtime\":{\"enum\":[\"Local Playwright\",\"Local Puppeteer\",\"Browserless or remote CDP\",\"HTTP screenshot provider\",\"Other\"],\"type\":\"string\"},\"safetyAcknowledged\":{\"const\":true,\"description\":\"Confirms removal of credentials, private or signed URLs, customer data, production details, payment information, and sensitive artifacts.\",\"type\":\"boolean\"},\"startBoundaryAcknowledged\":{\"const\":true,\"description\":\"Confirms that no payment or work starts before separate owner confirmation.\",\"type\":\"boolean\"},\"testEvidence\":{\"description\":\"Non-sensitive description of current happy-path and rejection tests, or none.\",\"maxLength\":1000,\"type\":\"string\"}},\"required\":[\"email\",\"repositoryUrl\",\"routePath\",\"language\",\"runtime\",\"primaryConcern\",\"currentControls\",\"testEvidence\",\"desiredOutcome\",\"repositoryAuthority\",\"safetyAcknowledged\",\"startBoundaryAcknowledged\",\"replyConsent\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"notice\":{\"description\":\"Confirms owner review and the no-payment/no-work-start boundary.\",\"type\":\"string\"},\"request\":{\"properties\":{\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"minimum\":1,\"type\":\"integer\"},\"repositoryUrl\":{\"format\":\"uri\",\"type\":\"string\"},\"routePath\":{\"type\":\"string\"},\"status\":{\"enum\":[\"new\",\"contacted\",\"fit_confirmed\",\"declined\"],\"type\":\"string\"},\"updatedAt\":{\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"id\",\"repositoryUrl\",\"routePath\",\"status\",\"createdAt\",\"updatedAt\"],\"type\":\"object\"}},\"required\":[\"request\",\"notice\"],\"type\":\"object\"}}},\"description\":\"Existing request for this email and repository updated for owner review\"},\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"notice\":{\"description\":\"Confirms owner review and the no-payment/no-work-start boundary.\",\"type\":\"string\"},\"request\":{\"properties\":{\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"minimum\":1,\"type\":\"integer\"},\"repositoryUrl\":{\"format\":\"uri\",\"type\":\"string\"},\"routePath\":{\"type\":\"string\"},\"status\":{\"enum\":[\"new\",\"contacted\",\"fit_confirmed\",\"declined\"],\"type\":\"string\"},\"updatedAt\":{\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"id\",\"repositoryUrl\",\"routePath\",\"status\",\"createdAt\",\"updatedAt\"],\"type\":\"object\"}},\"required\":[\"request\",\"notice\"],\"type\":\"object\"}}},\"description\":\"New safety review request recorded for owner review\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"},\"413\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"}},\"security\":[],\"securitySchemes\":{\"bearerAuth\":{\"bearerFormat\":\"API key\",\"description\":\"Send the one-time Latchshot key in the Authorization header as Bearer YOUR_KEY. Keys are stored only as hashes.\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/safety-review-requests", "segments": [{ "lit": "api" }, { "lit": "safety-review-requests" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.request`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "safety_review_request", "name__orig": "safety_review_request", "Name": "SafetyReviewRequest", "name_": "safety_review_request", "name-": "safety-review-request", "NAME": "SAFETY_REVIEW_REQUEST", "index$": 5 }, { "active": true, "entity": "safety_review_request", "key$": "BasicSafetyReviewRequestFlow", "kind": "basic", "name": "BasicSafetyReviewRequestFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "safety_review_request_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'SafetyReviewRequest');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const safety_review_request_ref01_ent = client.SafetyReviewRequest();
        let safety_review_request_ref01_data = setup.data.new.safety_review_request['safety_review_request_ref01'];
        safety_review_request_ref01_data = (await safety_review_request_ref01_ent.create(safety_review_request_ref01_data)).data();
        (0, node_assert_1.default)(null != safety_review_request_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/safety_review_request/SafetyReviewRequestTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LatchshotScreenshotSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['safety_review_request01', 'safety_review_request02', 'safety_review_request03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LATCHSHOT_SCREENSHOT_TEST_SAFETY_REVIEW_REQUEST_ENTID': idmap,
        'LATCHSHOT_SCREENSHOT_TEST_LIVE': 'FALSE',
        'LATCHSHOT_SCREENSHOT_TEST_EXPLAIN': 'FALSE',
        'LATCHSHOT_SCREENSHOT_APIKEY': '',
    });
    idmap = env['LATCHSHOT_SCREENSHOT_TEST_SAFETY_REVIEW_REQUEST_ENTID'];
    const live = 'TRUE' === env.LATCHSHOT_SCREENSHOT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LATCHSHOT_SCREENSHOT_TEST_SAFETY_REVIEW_REQUEST_ENTID'];
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
//# sourceMappingURL=SafetyReviewRequestEntity.test.js.map