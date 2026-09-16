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
(0, node_test_1.describe)('UsageEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when LATCHSHOT_SCREENSHOT_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('LATCHSHOT_SCREENSHOT_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.LatchshotScreenshotSDK.test();
        const ent = testsdk.Usage();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.LATCHSHOT_SCREENSHOT_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'usage.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "customer", "req": true, "type": "`$OBJECT`", "index$": 0 }, { "active": true, "name": "links", "req": true, "short": "Stable self-serve continuation links.", "type": "`$OBJECT`", "index$": 1 }, { "active": true, "name": "upgradeRequest", "req": true, "short": "Latest paid-plan request attached to this key, or null when none exists.", "type": "`$ANY`", "index$": 2 }, { "active": true, "name": "usage", "req": true, "type": "`$OBJECT`", "index$": 3 }], "name": "usage", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /v1/usage", "json": "{\"operationId\":\"getUsage\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"customer\":{\"properties\":{\"name\":{\"description\":\"Display name attached to the key.\",\"type\":\"string\"},\"plan\":{\"description\":\"Current internal plan identifier. The trial identifier is displayed publicly as Free.\",\"enum\":[\"trial\",\"launch\",\"build\",\"scale\"],\"type\":\"string\"}},\"required\":[\"name\",\"plan\"],\"type\":\"object\"},\"links\":{\"description\":\"Stable self-serve continuation links. They are informational and do not take payment, initiate an upgrade, or start implementation work.\",\"properties\":{\"implementationPilot\":{\"const\":\"https://latchshot.fly.dev/implementation-pilot.html\",\"description\":\"Describes the optional bounded $99 implementation service. The link itself starts neither work nor payment.\",\"format\":\"uri\",\"type\":\"string\"},\"plans\":{\"const\":\"https://latchshot.fly.dev/#pricing\",\"format\":\"uri\",\"type\":\"string\"},\"requestPaidPlan\":{\"const\":\"https://latchshot.fly.dev/#upgrade\",\"format\":\"uri\",\"type\":\"string\"},\"requestPaidPlanDocs\":{\"const\":\"https://latchshot.fly.dev/docs.md#request-a-paid-plan\",\"format\":\"uri\",\"type\":\"string\"}},\"required\":[\"plans\",\"requestPaidPlan\",\"requestPaidPlanDocs\",\"implementationPilot\"],\"type\":\"object\"},\"upgradeRequest\":{\"anyOf\":[{\"properties\":{\"createdAt\":{\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"minimum\":1,\"type\":\"integer\"},\"keyId\":{\"minimum\":1,\"type\":\"integer\"},\"note\":{\"anyOf\":[{\"type\":\"string\"},{\"type\":\"null\"}]},\"requestedPlan\":{\"enum\":[\"launch\",\"build\",\"scale\"],\"type\":\"string\"},\"status\":{\"enum\":[\"new\",\"contacted\",\"fulfilled\",\"declined\"],\"type\":\"string\"},\"updatedAt\":{\"format\":\"date-time\",\"type\":\"string\"}},\"required\":[\"id\",\"keyId\",\"requestedPlan\",\"note\",\"status\",\"createdAt\",\"updatedAt\"],\"type\":\"object\"},{\"type\":\"null\"}],\"description\":\"Latest paid-plan request attached to this key, or null when none exists.\"},\"usage\":{\"properties\":{\"failed\":{\"description\":\"Failed reserved renders; these do not consume successful-render quota.\",\"minimum\":0,\"type\":\"integer\"},\"limit\":{\"description\":\"Successful renders included in the current plan each calendar month.\",\"minimum\":1,\"type\":\"integer\"},\"outputBytes\":{\"minimum\":0,\"type\":\"integer\"},\"period\":{\"description\":\"Current UTC calendar month.\",\"pattern\":\"^[0-9]{4}-[0-9]{2}$\",\"type\":\"string\"},\"plan\":{\"enum\":[\"trial\",\"launch\",\"build\",\"scale\"],\"type\":\"string\"},\"remaining\":{\"description\":\"Successful renders still available in the current month.\",\"minimum\":0,\"type\":\"integer\"},\"renderMs\":{\"description\":\"Aggregate successful render time in milliseconds for the current month.\",\"minimum\":0,\"type\":\"integer\"},\"reserved\":{\"description\":\"Currently reserved render slots for this key.\",\"minimum\":0,\"type\":\"integer\"},\"resetAt\":{\"description\":\"Start of the next UTC calendar month, when the allowance replenishes.\",\"format\":\"date-time\",\"type\":\"string\"},\"successful\":{\"minimum\":0,\"type\":\"integer\"},\"updatedAt\":{\"anyOf\":[{\"format\":\"date-time\",\"type\":\"string\"},{\"type\":\"null\"}]}},\"required\":[\"period\",\"plan\",\"limit\",\"remaining\",\"resetAt\",\"successful\",\"failed\",\"reserved\",\"outputBytes\",\"renderMs\",\"updatedAt\"],\"type\":\"object\"}},\"required\":[\"customer\",\"usage\",\"upgradeRequest\",\"links\"],\"type\":\"object\"}}},\"description\":\"Current plan, quota usage, optional paid-plan request, and informational continuation links\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Error response\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"bearerFormat\":\"API key\",\"description\":\"Send the one-time Latchshot key in the Authorization header as Bearer YOUR_KEY. Keys are stored only as hashes.\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/v1/usage", "segments": [{ "lit": "v1" }, { "lit": "usage" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.usage`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "usage", "name__orig": "usage", "Name": "Usage", "name_": "usage", "name-": "usage", "NAME": "USAGE", "index$": 8 }, { "active": true, "entity": "usage", "key$": "BasicUsageFlow", "kind": "basic", "name": "BasicUsageFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "usage_ref01", "srcdatavar": "usage_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-usage_ref01" } }], "index$": 0 }] }, 'Usage');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let usage_ref01_data = Object.values(setup.data.existing.usage)[0];
        // LOAD
        const usage_ref01_ent = client.Usage();
        const usage_ref01_match_dt0 = {};
        const usage_ref01_data_dt0 = (await usage_ref01_ent.load(usage_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != usage_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/usage/UsageTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.LatchshotScreenshotSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['usage01', 'usage02', 'usage03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'LATCHSHOT_SCREENSHOT_TEST_USAGE_ENTID': idmap,
        'LATCHSHOT_SCREENSHOT_TEST_LIVE': 'FALSE',
        'LATCHSHOT_SCREENSHOT_TEST_EXPLAIN': 'FALSE',
        'LATCHSHOT_SCREENSHOT_APIKEY': '',
    });
    idmap = env['LATCHSHOT_SCREENSHOT_TEST_USAGE_ENTID'];
    const live = 'TRUE' === env.LATCHSHOT_SCREENSHOT_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['LATCHSHOT_SCREENSHOT_TEST_USAGE_ENTID'];
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
//# sourceMappingURL=UsageEntity.test.js.map