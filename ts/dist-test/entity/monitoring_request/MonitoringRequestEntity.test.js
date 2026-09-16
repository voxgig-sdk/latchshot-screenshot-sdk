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
(0, node_test_1.describe)('MonitoringRequestEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LATCHSHOT_SCREENSHOT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LATCHSHOT_SCREENSHOT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LatchshotScreenshotSDK.test();
        const ent = testsdk.MonitoringRequest();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LATCHSHOT_SCREENSHOT_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'monitoring_request.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "changeContext", "req": false, "short": "Optional non-sensitive description of what the weekly owner-written note should call out.", "type": "`$STRING`", "index$": 0 }, { "active": true, "format": "date-time", "name": "createdAt", "req": true, "type": "`$STRING`", "index$": 1 }, { "active": true, "format": "email", "name": "email", "req": true, "short": "Address the owner may use only to reply about this monitoring request.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "id", "req": true, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "name": "monitoringGoal", "req": true, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "pageCount", "req": true, "type": "`$STRING`", "index$": 5 }, { "active": true, "format": "uri", "name": "pageUrl", "req": true, "short": "One exact public HTTP or HTTPS example page on port 80 or 443, without credentials, query data, or a fragment.", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "publicPageAuthority", "req": true, "short": "Confirms authority to request recurring captures of every proposed public page.", "type": "`$BOOLEAN`", "index$": 7 }, { "active": true, "name": "replyConsent", "req": true, "short": "Allows the owner to email only about this monitoring-pilot request.", "type": "`$BOOLEAN`", "index$": 8 }, { "active": true, "name": "safetyAcknowledged", "req": true, "short": "Confirms removal of credentials, query secrets, customer data, signed links, and sensitive information.", "type": "`$BOOLEAN`", "index$": 9 }, { "active": true, "name": "startBoundaryAcknowledged", "req": true, "short": "Confirms that scope, delivery, retention, payment, and monitoring start require separate owner confirmation.", "type": "`$BOOLEAN`", "index$": 10 }, { "active": true, "name": "status", "req": true, "type": "`$STRING`", "index$": 11 }, { "active": true, "format": "date-time", "name": "updatedAt", "req": true, "type": "`$STRING`", "index$": 12 }], "id": { "field": "id", "name": "id" }, "name": "monitoring_request", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": {}, "contract": { "id": "POST /api/monitoring-requests", "json": "{\"operationId\":\"requestVisualMonitoringPilot\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"changeContext\":{\"default\":\"Not provided; owner will confirm what counts as a useful change.\",\"description\":\"Optional non-sensitive description of what the weekly owner-written note should call out.\",\"maxLength\":1000,\"type\":\"string\"},\"email\":{\"description\":\"Address the owner may use only to reply about this monitoring request.\",\"format\":\"email\",\"maxLength\":254,\"type\":\"string\"},\"monitoringGoal\":{\"enum\":[\"Release and content archive\",\"Competitive or market tracking\",\"Compliance or public record\",\"Client reporting\",\"Other\"],\"type\":\"string\"},\"pageCount\":{\"enum\":[\"1\",\"2–3\",\"4–5\"],\"type\":\"string\"},\"pageUrl\":{\"description\":\"One exact public HTTP or HTTPS example page on port 80 or 443, without credentials, query data, or a fragment.\",\"format\":\"uri\",\"maxLength\":500,\"pattern\":\"^https?://\",\"type\":\"string\"},\"publicPageAuthority\":{\"const\":true,\"description\":\"Confirms authority to request recurring captures of every proposed public page.\",\"type\":\"boolean\"},\"replyConsent\":{\"const\":true,\"description\":\"Allows the owner to email only about this monitoring-pilot request.\",\"type\":\"boolean\"},\"safetyAcknowledged\":{\"const\":true,\"description\":\"Confirms removal of credentials, query secrets, customer data, signed links, and sensitive information.\",\"type\":\"boolean\"},\"startBoundaryAcknowledged\":{\"const\":true,\"description\":\"Confirms that scope, delivery, retention, payment, and monitoring start require separate owner confirmation.\",\"type\":\"boolean\"}},\"required\":[\"email\",\"pageUrl\",\"pageCount\",\"monitoringGoal\",\"publicPageAuthority\",\"safetyAcknowledged\",\"startBoundaryAcknowledged\",\"replyConsent\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"notice\":{\"description\":\"Confirms owner review and the no-payment/no-monitoring-start boundary.\",\"type\":\"string\"},\"request\":{\"properties\":{\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"minimum\":1,\"type\":\"integer\"},\"pageCount\":{\"enum\":[\"1\",\"2–3\",\"4–5\"],\"type\":\"string\"},\"pageUrl\":{\"format\":\"uri\",\"type\":\"string\"},\"status\":{\"enum\":[\"new\",\"contacted\",\"fit_confirmed\",\"declined\"],\"type\":\"string\"},\"updatedAt\":{\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"id\",\"pageUrl\",\"pageCount\",\"status\",\"createdAt\",\"updatedAt\"],\"type\":\"object\"}},\"required\":[\"request\",\"notice\"],\"type\":\"object\"}}},\"description\":\"Existing request for this email and example page updated for owner review\"},\"201\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"notice\":{\"description\":\"Confirms owner review and the no-payment/no-monitoring-start boundary.\",\"type\":\"string\"},\"request\":{\"properties\":{\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"minimum\":1,\"type\":\"integer\"},\"pageCount\":{\"enum\":[\"1\",\"2–3\",\"4–5\"],\"type\":\"string\"},\"pageUrl\":{\"format\":\"uri\",\"type\":\"string\"},\"status\":{\"enum\":[\"new\",\"contacted\",\"fit_confirmed\",\"declined\"],\"type\":\"string\"},\"updatedAt\":{\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"id\",\"pageUrl\",\"pageCount\",\"status\",\"createdAt\",\"updatedAt\"],\"type\":\"object\"}},\"required\":[\"request\",\"notice\"],\"type\":\"object\"}}},\"description\":\"New monitoring request recorded for owner review\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"},\"413\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"}},\"security\":[],\"securitySchemes\":{\"bearerAuth\":{\"bearerFormat\":\"API key\",\"description\":\"Send the one-time Latchshot key in the Authorization header as Bearer YOUR_KEY. Keys are stored only as hashes.\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/monitoring-requests", "segments": [{ "lit": "api" }, { "lit": "monitoring-requests" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.request`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "monitoring_request", "name__orig": "monitoring_request", "Name": "MonitoringRequest", "name_": "monitoring_request", "name-": "monitoring-request", "NAME": "MONITORING_REQUEST", "index$": 1 }, { "active": true, "entity": "monitoring_request", "key$": "BasicMonitoringRequestFlow", "kind": "basic", "name": "BasicMonitoringRequestFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "monitoring_request_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'MonitoringRequest');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const monitoring_request_ref01_ent = client.MonitoringRequest();
        let monitoring_request_ref01_data = setup.data.new.monitoring_request['monitoring_request_ref01'];
        monitoring_request_ref01_data = (await monitoring_request_ref01_ent.create(monitoring_request_ref01_data)).data();
        (0, node_assert_1.default)(null != monitoring_request_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/monitoring_request/MonitoringRequestTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LatchshotScreenshotSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['monitoring_request01', 'monitoring_request02', 'monitoring_request03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LATCHSHOT_SCREENSHOT_TEST_MONITORING_REQUEST_ENTID': idmap,
        'LATCHSHOT_SCREENSHOT_TEST_LIVE': 'FALSE',
        'LATCHSHOT_SCREENSHOT_TEST_EXPLAIN': 'FALSE',
        'LATCHSHOT_SCREENSHOT_APIKEY': '',
    });
    idmap = env['LATCHSHOT_SCREENSHOT_TEST_MONITORING_REQUEST_ENTID'];
    const live = 'TRUE' === env.LATCHSHOT_SCREENSHOT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LATCHSHOT_SCREENSHOT_TEST_MONITORING_REQUEST_ENTID'];
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
//# sourceMappingURL=MonitoringRequestEntity.test.js.map