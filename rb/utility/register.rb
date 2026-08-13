# LatchshotScreenshot SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

LatchshotScreenshotUtility.registrar = ->(u) {
  u.clean = LatchshotScreenshotUtilities::Clean
  u.done = LatchshotScreenshotUtilities::Done
  u.make_error = LatchshotScreenshotUtilities::MakeError
  u.feature_add = LatchshotScreenshotUtilities::FeatureAdd
  u.feature_hook = LatchshotScreenshotUtilities::FeatureHook
  u.feature_init = LatchshotScreenshotUtilities::FeatureInit
  u.fetcher = LatchshotScreenshotUtilities::Fetcher
  u.make_fetch_def = LatchshotScreenshotUtilities::MakeFetchDef
  u.make_context = LatchshotScreenshotUtilities::MakeContext
  u.make_options = LatchshotScreenshotUtilities::MakeOptions
  u.make_request = LatchshotScreenshotUtilities::MakeRequest
  u.make_response = LatchshotScreenshotUtilities::MakeResponse
  u.make_result = LatchshotScreenshotUtilities::MakeResult
  u.make_point = LatchshotScreenshotUtilities::MakePoint
  u.make_spec = LatchshotScreenshotUtilities::MakeSpec
  u.make_url = LatchshotScreenshotUtilities::MakeUrl
  u.param = LatchshotScreenshotUtilities::Param
  u.prepare_auth = LatchshotScreenshotUtilities::PrepareAuth
  u.prepare_body = LatchshotScreenshotUtilities::PrepareBody
  u.prepare_headers = LatchshotScreenshotUtilities::PrepareHeaders
  u.prepare_method = LatchshotScreenshotUtilities::PrepareMethod
  u.prepare_params = LatchshotScreenshotUtilities::PrepareParams
  u.prepare_path = LatchshotScreenshotUtilities::PreparePath
  u.prepare_query = LatchshotScreenshotUtilities::PrepareQuery
  u.graphql_body = LatchshotScreenshotUtilities::GraphqlBody
  u.graphql_errors = LatchshotScreenshotUtilities::GraphqlErrors
  u.result_basic = LatchshotScreenshotUtilities::ResultBasic
  u.result_body = LatchshotScreenshotUtilities::ResultBody
  u.result_headers = LatchshotScreenshotUtilities::ResultHeaders
  u.transform_request = LatchshotScreenshotUtilities::TransformRequest
  u.transform_response = LatchshotScreenshotUtilities::TransformResponse
}
