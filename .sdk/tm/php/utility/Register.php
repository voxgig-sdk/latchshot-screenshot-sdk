<?php
declare(strict_types=1);

// LatchshotScreenshot SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

LatchshotScreenshotUtility::setRegistrar(function (LatchshotScreenshotUtility $u): void {
    $u->clean = [LatchshotScreenshotClean::class, 'call'];
    $u->done = [LatchshotScreenshotDone::class, 'call'];
    $u->make_error = [LatchshotScreenshotMakeError::class, 'call'];
    $u->feature_add = [LatchshotScreenshotFeatureAdd::class, 'call'];
    $u->feature_hook = [LatchshotScreenshotFeatureHook::class, 'call'];
    $u->feature_init = [LatchshotScreenshotFeatureInit::class, 'call'];
    $u->fetcher = [LatchshotScreenshotFetcher::class, 'call'];
    $u->make_fetch_def = [LatchshotScreenshotMakeFetchDef::class, 'call'];
    $u->make_context = [LatchshotScreenshotMakeContext::class, 'call'];
    $u->make_options = [LatchshotScreenshotMakeOptions::class, 'call'];
    $u->make_request = [LatchshotScreenshotMakeRequest::class, 'call'];
    $u->make_response = [LatchshotScreenshotMakeResponse::class, 'call'];
    $u->make_result = [LatchshotScreenshotMakeResult::class, 'call'];
    $u->make_point = [LatchshotScreenshotMakePoint::class, 'call'];
    $u->make_spec = [LatchshotScreenshotMakeSpec::class, 'call'];
    $u->make_url = [LatchshotScreenshotMakeUrl::class, 'call'];
    $u->param = [LatchshotScreenshotParam::class, 'call'];
    $u->prepare_auth = [LatchshotScreenshotPrepareAuth::class, 'call'];
    $u->prepare_body = [LatchshotScreenshotPrepareBody::class, 'call'];
    $u->prepare_headers = [LatchshotScreenshotPrepareHeaders::class, 'call'];
    $u->prepare_method = [LatchshotScreenshotPrepareMethod::class, 'call'];
    $u->prepare_params = [LatchshotScreenshotPrepareParams::class, 'call'];
    $u->prepare_path = [LatchshotScreenshotPreparePath::class, 'call'];
    $u->prepare_query = [LatchshotScreenshotPrepareQuery::class, 'call'];
    $u->result_basic = [LatchshotScreenshotResultBasic::class, 'call'];
    $u->result_body = [LatchshotScreenshotResultBody::class, 'call'];
    $u->result_headers = [LatchshotScreenshotResultHeaders::class, 'call'];
    $u->transform_request = [LatchshotScreenshotTransformRequest::class, 'call'];
    $u->transform_response = [LatchshotScreenshotTransformResponse::class, 'call'];
});
