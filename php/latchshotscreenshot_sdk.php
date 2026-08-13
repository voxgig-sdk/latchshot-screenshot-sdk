<?php
declare(strict_types=1);

// LatchshotScreenshot SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class LatchshotScreenshotSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new LatchshotScreenshotUtility();
        $this->_utility = $utility;

        $config = LatchshotScreenshotConfig::make_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = LatchshotScreenshotHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = LatchshotScreenshotHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        ($utility->feature_add)($this->_rootctx, LatchshotScreenshotFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        $extend_val = Struct::getprop($this->options, "extend");
        if (is_array($extend_val)) {
            foreach ($extend_val as $f) {
                if (is_object($f) && method_exists($f, 'get_name')) {
                    ($utility->feature_add)($this->_rootctx, $f);
                }
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return LatchshotScreenshotUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = LatchshotScreenshotHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = LatchshotScreenshotHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = LatchshotScreenshotHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new LatchshotScreenshotSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new LatchshotScreenshotError($op . "_allow",
                "LatchshotScreenshotSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = LatchshotScreenshotHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = LatchshotScreenshotHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new LatchshotScreenshotError("graphql_error",
                "LatchshotScreenshotSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_health = null;

    // Canonical facade: $client->Health()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->health()
    // resolves here too.
    public function Health($data = null)
    {
        require_once __DIR__ . '/entity/health_entity.php';
        if ($data === null) {
            if ($this->_health === null) {
                $this->_health = new HealthEntity($this, null);
            }
            return $this->_health;
        }
        return new HealthEntity($this, $data);
    }


    private $_monitoring_request = null;

    // Canonical facade: $client->MonitoringRequest()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->monitoring_request()
    // resolves here too.
    public function MonitoringRequest($data = null)
    {
        require_once __DIR__ . '/entity/monitoring_request_entity.php';
        if ($data === null) {
            if ($this->_monitoring_request === null) {
                $this->_monitoring_request = new MonitoringRequestEntity($this, null);
            }
            return $this->_monitoring_request;
        }
        return new MonitoringRequestEntity($this, $data);
    }


    private $_pilot_request = null;

    // Canonical facade: $client->PilotRequest()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->pilot_request()
    // resolves here too.
    public function PilotRequest($data = null)
    {
        require_once __DIR__ . '/entity/pilot_request_entity.php';
        if ($data === null) {
            if ($this->_pilot_request === null) {
                $this->_pilot_request = new PilotRequestEntity($this, null);
            }
            return $this->_pilot_request;
        }
        return new PilotRequestEntity($this, $data);
    }


    private $_render = null;

    // Canonical facade: $client->Render()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->render()
    // resolves here too.
    public function Render($data = null)
    {
        require_once __DIR__ . '/entity/render_entity.php';
        if ($data === null) {
            if ($this->_render === null) {
                $this->_render = new RenderEntity($this, null);
            }
            return $this->_render;
        }
        return new RenderEntity($this, $data);
    }


    private $_rendering = null;

    // Canonical facade: $client->Rendering()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->rendering()
    // resolves here too.
    public function Rendering($data = null)
    {
        require_once __DIR__ . '/entity/rendering_entity.php';
        if ($data === null) {
            if ($this->_rendering === null) {
                $this->_rendering = new RenderingEntity($this, null);
            }
            return $this->_rendering;
        }
        return new RenderingEntity($this, $data);
    }


    private $_safety_review_request = null;

    // Canonical facade: $client->SafetyReviewRequest()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->safety_review_request()
    // resolves here too.
    public function SafetyReviewRequest($data = null)
    {
        require_once __DIR__ . '/entity/safety_review_request_entity.php';
        if ($data === null) {
            if ($this->_safety_review_request === null) {
                $this->_safety_review_request = new SafetyReviewRequestEntity($this, null);
            }
            return $this->_safety_review_request;
        }
        return new SafetyReviewRequestEntity($this, $data);
    }


    private $_trial = null;

    // Canonical facade: $client->Trial()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->trial()
    // resolves here too.
    public function Trial($data = null)
    {
        require_once __DIR__ . '/entity/trial_entity.php';
        if ($data === null) {
            if ($this->_trial === null) {
                $this->_trial = new TrialEntity($this, null);
            }
            return $this->_trial;
        }
        return new TrialEntity($this, $data);
    }


    private $_upgrade = null;

    // Canonical facade: $client->Upgrade()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->upgrade()
    // resolves here too.
    public function Upgrade($data = null)
    {
        require_once __DIR__ . '/entity/upgrade_entity.php';
        if ($data === null) {
            if ($this->_upgrade === null) {
                $this->_upgrade = new UpgradeEntity($this, null);
            }
            return $this->_upgrade;
        }
        return new UpgradeEntity($this, $data);
    }


    private $_usage = null;

    // Canonical facade: $client->Usage()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->usage()
    // resolves here too.
    public function Usage($data = null)
    {
        require_once __DIR__ . '/entity/usage_entity.php';
        if ($data === null) {
            if ($this->_usage === null) {
                $this->_usage = new UsageEntity($this, null);
            }
            return $this->_usage;
        }
        return new UsageEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new LatchshotScreenshotSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
