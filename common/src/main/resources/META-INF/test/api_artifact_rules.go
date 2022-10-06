/*
Apicurio Registry API [v2]

Apicurio Registry is a datastore for standard event schemas and API designs. Apicurio Registry enables developers to manage and share the structure of their data using a REST interface. For example, client applications can dynamically push or pull the latest updates to or from the registry without needing to redeploy. Apicurio Registry also enables developers to create rules that govern how registry content can evolve over time. For example, this includes rules for content validation and version compatibility.  The Apicurio Registry REST API enables client applications to manage the artifacts in the registry. This API provides create, read, update, and delete operations for schema and API artifacts, rules, versions, and metadata.   The supported artifact types include: - Apache Avro schema - AsyncAPI specification - Google protocol buffers - GraphQL schema - JSON Schema - Kafka Connect schema - OpenAPI specification - Web Services Description Language - XML Schema Definition   **Important**: The Apicurio Registry REST API is available from `https://MY-REGISTRY-URL/apis/registry/v2` by default. Therefore you must prefix all API operation paths with `../apis/registry/v2` in this case. For example: `../apis/registry/v2/ids/globalIds/{globalId}`. 

API version: 2.3.1-SNAPSHOT
Contact: apicurio@lists.jboss.org
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"bytes"
	"context"
	"io/ioutil"
	"net/http"
	"net/url"
	"strings"
)


// ArtifactRulesApiService ArtifactRulesApi service
type ArtifactRulesApiService service

type ApiCreateArtifactRuleRequest struct {
	ctx context.Context
	ApiService *ArtifactRulesApiService
	groupId string
	artifactId string
	rule *Rule
}

func (r ApiCreateArtifactRuleRequest) Rule(rule Rule) ApiCreateArtifactRuleRequest {
	r.rule = &rule
	return r
}

func (r ApiCreateArtifactRuleRequest) Execute() (*http.Response, error) {
	return r.ApiService.CreateArtifactRuleExecute(r)
}

/*
CreateArtifactRule Create artifact rule

Adds a rule to the list of rules that get applied to the artifact when adding new
versions.  All configured rules must pass to successfully add a new artifact version.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* Rule (named in the request body) is unknown (HTTP error `400`)
* A server error occurred (HTTP error `500`)

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param groupId The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
 @param artifactId The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
 @return ApiCreateArtifactRuleRequest
*/
func (a *ArtifactRulesApiService) CreateArtifactRule(ctx context.Context, groupId string, artifactId string) ApiCreateArtifactRuleRequest {
	return ApiCreateArtifactRuleRequest{
		ApiService: a,
		ctx: ctx,
		groupId: groupId,
		artifactId: artifactId,
	}
}

// Execute executes the request
func (a *ArtifactRulesApiService) CreateArtifactRuleExecute(r ApiCreateArtifactRuleRequest) (*http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodPost
		localVarPostBody     interface{}
		formFiles            []formFile
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "ArtifactRulesApiService.CreateArtifactRule")
	if err != nil {
		return nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/groups/{groupId}/artifacts/{artifactId}/rules"
	localVarPath = strings.Replace(localVarPath, "{"+"groupId"+"}", url.PathEscape(parameterToString(r.groupId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"artifactId"+"}", url.PathEscape(parameterToString(r.artifactId, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if r.rule == nil {
		return nil, reportError("rule is required and must be specified")
	}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{"application/json"}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	// body params
	localVarPostBody = r.rule
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, formFiles)
	if err != nil {
		return nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarHTTPResponse, err
	}

	localVarBody, err := ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = ioutil.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		if localVarHTTPResponse.StatusCode == 400 {
			var v Error
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarHTTPResponse, newErr
			}
			newErr.model = v
			return localVarHTTPResponse, newErr
		}
		if localVarHTTPResponse.StatusCode == 404 {
			var v Error
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarHTTPResponse, newErr
			}
			newErr.model = v
			return localVarHTTPResponse, newErr
		}
		if localVarHTTPResponse.StatusCode == 500 {
			var v Error
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarHTTPResponse, newErr
			}
			newErr.model = v
		}
		return localVarHTTPResponse, newErr
	}

	return localVarHTTPResponse, nil
}

type ApiDeleteArtifactRuleRequest struct {
	ctx context.Context
	ApiService *ArtifactRulesApiService
	groupId string
	artifactId string
	rule string
}

func (r ApiDeleteArtifactRuleRequest) Execute() (*http.Response, error) {
	return r.ApiService.DeleteArtifactRuleExecute(r)
}

/*
DeleteArtifactRule Delete artifact rule

Deletes a rule from the artifact.  This results in the rule no longer applying for
this artifact.  If this is the only rule configured for the artifact, this is the 
same as deleting **all** rules, and the globally configured rules now apply to
this artifact.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No rule with this name/type is configured for this artifact (HTTP error `404`)
* Invalid rule type (HTTP error `400`)
* A server error occurred (HTTP error `500`)

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param groupId The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
 @param artifactId The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
 @param rule The unique name/type of a rule.
 @return ApiDeleteArtifactRuleRequest
*/
func (a *ArtifactRulesApiService) DeleteArtifactRule(ctx context.Context, groupId string, artifactId string, rule string) ApiDeleteArtifactRuleRequest {
	return ApiDeleteArtifactRuleRequest{
		ApiService: a,
		ctx: ctx,
		groupId: groupId,
		artifactId: artifactId,
		rule: rule,
	}
}

// Execute executes the request
func (a *ArtifactRulesApiService) DeleteArtifactRuleExecute(r ApiDeleteArtifactRuleRequest) (*http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodDelete
		localVarPostBody     interface{}
		formFiles            []formFile
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "ArtifactRulesApiService.DeleteArtifactRule")
	if err != nil {
		return nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/groups/{groupId}/artifacts/{artifactId}/rules/{rule}"
	localVarPath = strings.Replace(localVarPath, "{"+"groupId"+"}", url.PathEscape(parameterToString(r.groupId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"artifactId"+"}", url.PathEscape(parameterToString(r.artifactId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"rule"+"}", url.PathEscape(parameterToString(r.rule, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, formFiles)
	if err != nil {
		return nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarHTTPResponse, err
	}

	localVarBody, err := ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = ioutil.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		if localVarHTTPResponse.StatusCode == 404 {
			var v Error
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarHTTPResponse, newErr
			}
			newErr.model = v
			return localVarHTTPResponse, newErr
		}
		if localVarHTTPResponse.StatusCode == 500 {
			var v Error
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarHTTPResponse, newErr
			}
			newErr.model = v
		}
		return localVarHTTPResponse, newErr
	}

	return localVarHTTPResponse, nil
}

type ApiDeleteArtifactRulesRequest struct {
	ctx context.Context
	ApiService *ArtifactRulesApiService
	groupId string
	artifactId string
}

func (r ApiDeleteArtifactRulesRequest) Execute() (*http.Response, error) {
	return r.ApiService.DeleteArtifactRulesExecute(r)
}

/*
DeleteArtifactRules Delete artifact rules

Deletes all of the rules configured for the artifact.  After this is done, the global
rules apply to the artifact again.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param groupId The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
 @param artifactId The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
 @return ApiDeleteArtifactRulesRequest
*/
func (a *ArtifactRulesApiService) DeleteArtifactRules(ctx context.Context, groupId string, artifactId string) ApiDeleteArtifactRulesRequest {
	return ApiDeleteArtifactRulesRequest{
		ApiService: a,
		ctx: ctx,
		groupId: groupId,
		artifactId: artifactId,
	}
}

// Execute executes the request
func (a *ArtifactRulesApiService) DeleteArtifactRulesExecute(r ApiDeleteArtifactRulesRequest) (*http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodDelete
		localVarPostBody     interface{}
		formFiles            []formFile
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "ArtifactRulesApiService.DeleteArtifactRules")
	if err != nil {
		return nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/groups/{groupId}/artifacts/{artifactId}/rules"
	localVarPath = strings.Replace(localVarPath, "{"+"groupId"+"}", url.PathEscape(parameterToString(r.groupId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"artifactId"+"}", url.PathEscape(parameterToString(r.artifactId, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, formFiles)
	if err != nil {
		return nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarHTTPResponse, err
	}

	localVarBody, err := ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = ioutil.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		if localVarHTTPResponse.StatusCode == 404 {
			var v Error
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarHTTPResponse, newErr
			}
			newErr.model = v
			return localVarHTTPResponse, newErr
		}
		if localVarHTTPResponse.StatusCode == 500 {
			var v Error
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarHTTPResponse, newErr
			}
			newErr.model = v
		}
		return localVarHTTPResponse, newErr
	}

	return localVarHTTPResponse, nil
}

type ApiGetArtifactRuleConfigRequest struct {
	ctx context.Context
	ApiService *ArtifactRulesApiService
	groupId string
	artifactId string
	rule string
}

func (r ApiGetArtifactRuleConfigRequest) Execute() (*Rule, *http.Response, error) {
	return r.ApiService.GetArtifactRuleConfigExecute(r)
}

/*
GetArtifactRuleConfig Get artifact rule configuration

Returns information about a single rule configured for an artifact.  This is useful
when you want to know what the current configuration settings are for a specific rule.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No rule with this name/type is configured for this artifact (HTTP error `404`)
* Invalid rule type (HTTP error `400`)
* A server error occurred (HTTP error `500`)

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param groupId The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
 @param artifactId The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
 @param rule The unique name/type of a rule.
 @return ApiGetArtifactRuleConfigRequest
*/
func (a *ArtifactRulesApiService) GetArtifactRuleConfig(ctx context.Context, groupId string, artifactId string, rule string) ApiGetArtifactRuleConfigRequest {
	return ApiGetArtifactRuleConfigRequest{
		ApiService: a,
		ctx: ctx,
		groupId: groupId,
		artifactId: artifactId,
		rule: rule,
	}
}

// Execute executes the request
//  @return Rule
func (a *ArtifactRulesApiService) GetArtifactRuleConfigExecute(r ApiGetArtifactRuleConfigRequest) (*Rule, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodGet
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *Rule
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "ArtifactRulesApiService.GetArtifactRuleConfig")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/groups/{groupId}/artifacts/{artifactId}/rules/{rule}"
	localVarPath = strings.Replace(localVarPath, "{"+"groupId"+"}", url.PathEscape(parameterToString(r.groupId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"artifactId"+"}", url.PathEscape(parameterToString(r.artifactId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"rule"+"}", url.PathEscape(parameterToString(r.rule, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, formFiles)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = ioutil.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		if localVarHTTPResponse.StatusCode == 404 {
			var v Error
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarReturnValue, localVarHTTPResponse, newErr
			}
			newErr.model = v
			return localVarReturnValue, localVarHTTPResponse, newErr
		}
		if localVarHTTPResponse.StatusCode == 500 {
			var v Error
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarReturnValue, localVarHTTPResponse, newErr
			}
			newErr.model = v
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}

type ApiListArtifactRulesRequest struct {
	ctx context.Context
	ApiService *ArtifactRulesApiService
	groupId string
	artifactId string
}

func (r ApiListArtifactRulesRequest) Execute() ([]RuleType, *http.Response, error) {
	return r.ApiService.ListArtifactRulesExecute(r)
}

/*
ListArtifactRules List artifact rules

Returns a list of all rules configured for the artifact.  The set of rules determines
how the content of an artifact can evolve over time.  If no rules are configured for
an artifact, the set of globally configured rules are used.  If no global rules 
are defined, there are no restrictions on content evolution.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param groupId The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
 @param artifactId The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
 @return ApiListArtifactRulesRequest
*/
func (a *ArtifactRulesApiService) ListArtifactRules(ctx context.Context, groupId string, artifactId string) ApiListArtifactRulesRequest {
	return ApiListArtifactRulesRequest{
		ApiService: a,
		ctx: ctx,
		groupId: groupId,
		artifactId: artifactId,
	}
}

// Execute executes the request
//  @return []RuleType
func (a *ArtifactRulesApiService) ListArtifactRulesExecute(r ApiListArtifactRulesRequest) ([]RuleType, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodGet
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  []RuleType
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "ArtifactRulesApiService.ListArtifactRules")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/groups/{groupId}/artifacts/{artifactId}/rules"
	localVarPath = strings.Replace(localVarPath, "{"+"groupId"+"}", url.PathEscape(parameterToString(r.groupId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"artifactId"+"}", url.PathEscape(parameterToString(r.artifactId, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, formFiles)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = ioutil.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		if localVarHTTPResponse.StatusCode == 404 {
			var v Error
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarReturnValue, localVarHTTPResponse, newErr
			}
			newErr.model = v
			return localVarReturnValue, localVarHTTPResponse, newErr
		}
		if localVarHTTPResponse.StatusCode == 500 {
			var v Error
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarReturnValue, localVarHTTPResponse, newErr
			}
			newErr.model = v
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}

type ApiTestUpdateArtifactRequest struct {
	ctx context.Context
	ApiService *ArtifactRulesApiService
	groupId string
	artifactId string
	body *interface{}
}

// The content of the artifact being tested. This is often, but not always, JSON data representing one of the supported artifact types:  * Avro (&#x60;AVRO&#x60;) * Protobuf (&#x60;PROTOBUF&#x60;) * JSON Schema (&#x60;JSON&#x60;) * Kafka Connect (&#x60;KCONNECT&#x60;) * OpenAPI (&#x60;OPENAPI&#x60;) * AsyncAPI (&#x60;ASYNCAPI&#x60;) * GraphQL (&#x60;GRAPHQL&#x60;) * Web Services Description Language (&#x60;WSDL&#x60;) * XML Schema (&#x60;XSD&#x60;) 
func (r ApiTestUpdateArtifactRequest) Body(body interface{}) ApiTestUpdateArtifactRequest {
	r.body = &body
	return r
}

func (r ApiTestUpdateArtifactRequest) Execute() (*http.Response, error) {
	return r.ApiService.TestUpdateArtifactExecute(r)
}

/*
TestUpdateArtifact Test update artifact

Tests whether an update to the artifact's content *would* succeed for the provided content.
Ultimately, this applies any rules configured for the artifact against the given content
to determine whether the rules would pass or fail, but without actually updating the artifact
content.

The body of the request should be the raw content of the artifact.  This is typically in 
JSON format for *most* of the supported types, but may be in another format for a few 
(for example, `PROTOBUF`).

The update could fail for a number of reasons including:

* Provided content (request body) was empty (HTTP error `400`)
* No artifact with the `artifactId` exists (HTTP error `404`)
* The new content violates one of the rules configured for the artifact (HTTP error `409`)
* The provided artifact type is not recognized (HTTP error `404`)
* A server error occurred (HTTP error `500`)

When successful, this operation simply returns a *No Content* response.  This response
indicates that the content is valid against the configured content rules for the 
artifact (or the global rules if no artifact rules are enabled).

 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param groupId The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
 @param artifactId The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
 @return ApiTestUpdateArtifactRequest
*/
func (a *ArtifactRulesApiService) TestUpdateArtifact(ctx context.Context, groupId string, artifactId string) ApiTestUpdateArtifactRequest {
	return ApiTestUpdateArtifactRequest{
		ApiService: a,
		ctx: ctx,
		groupId: groupId,
		artifactId: artifactId,
	}
}

// Execute executes the request
func (a *ArtifactRulesApiService) TestUpdateArtifactExecute(r ApiTestUpdateArtifactRequest) (*http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodPut
		localVarPostBody     interface{}
		formFiles            []formFile
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "ArtifactRulesApiService.TestUpdateArtifact")
	if err != nil {
		return nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/groups/{groupId}/artifacts/{artifactId}/test"
	localVarPath = strings.Replace(localVarPath, "{"+"groupId"+"}", url.PathEscape(parameterToString(r.groupId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"artifactId"+"}", url.PathEscape(parameterToString(r.artifactId, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if r.body == nil {
		return nil, reportError("body is required and must be specified")
	}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	// body params
	localVarPostBody = r.body
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, formFiles)
	if err != nil {
		return nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarHTTPResponse, err
	}

	localVarBody, err := ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = ioutil.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		if localVarHTTPResponse.StatusCode == 404 {
			var v Error
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarHTTPResponse, newErr
			}
			newErr.model = v
			return localVarHTTPResponse, newErr
		}
		if localVarHTTPResponse.StatusCode == 409 {
			var v RuleViolationError
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarHTTPResponse, newErr
			}
			newErr.model = v
			return localVarHTTPResponse, newErr
		}
		if localVarHTTPResponse.StatusCode == 500 {
			var v Error
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarHTTPResponse, newErr
			}
			newErr.model = v
		}
		return localVarHTTPResponse, newErr
	}

	return localVarHTTPResponse, nil
}

type ApiUpdateArtifactRuleConfigRequest struct {
	ctx context.Context
	ApiService *ArtifactRulesApiService
	groupId string
	artifactId string
	rule string
	rule2 *Rule
}

func (r ApiUpdateArtifactRuleConfigRequest) Rule2(rule2 Rule) ApiUpdateArtifactRuleConfigRequest {
	r.rule2 = &rule2
	return r
}

func (r ApiUpdateArtifactRuleConfigRequest) Execute() (*Rule, *http.Response, error) {
	return r.ApiService.UpdateArtifactRuleConfigExecute(r)
}

/*
UpdateArtifactRuleConfig Update artifact rule configuration

Updates the configuration of a single rule for the artifact.  The configuration data
is specific to each rule type, so the configuration of the `COMPATIBILITY` rule 
is in a different format from the configuration of the `VALIDITY` rule.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No rule with this name/type is configured for this artifact (HTTP error `404`)
* Invalid rule type (HTTP error `400`)
* A server error occurred (HTTP error `500`)


 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param groupId The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
 @param artifactId The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
 @param rule The unique name/type of a rule.
 @return ApiUpdateArtifactRuleConfigRequest
*/
func (a *ArtifactRulesApiService) UpdateArtifactRuleConfig(ctx context.Context, groupId string, artifactId string, rule string) ApiUpdateArtifactRuleConfigRequest {
	return ApiUpdateArtifactRuleConfigRequest{
		ApiService: a,
		ctx: ctx,
		groupId: groupId,
		artifactId: artifactId,
		rule: rule,
	}
}

// Execute executes the request
//  @return Rule
func (a *ArtifactRulesApiService) UpdateArtifactRuleConfigExecute(r ApiUpdateArtifactRuleConfigRequest) (*Rule, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodPut
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *Rule
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "ArtifactRulesApiService.UpdateArtifactRuleConfig")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/groups/{groupId}/artifacts/{artifactId}/rules/{rule}"
	localVarPath = strings.Replace(localVarPath, "{"+"groupId"+"}", url.PathEscape(parameterToString(r.groupId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"artifactId"+"}", url.PathEscape(parameterToString(r.artifactId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"rule"+"}", url.PathEscape(parameterToString(r.rule, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if r.rule2 == nil {
		return localVarReturnValue, nil, reportError("rule2 is required and must be specified")
	}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{"application/json"}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"application/json"}

	// set Accept header
	localVarHTTPHeaderAccept := selectHeaderAccept(localVarHTTPHeaderAccepts)
	if localVarHTTPHeaderAccept != "" {
		localVarHeaderParams["Accept"] = localVarHTTPHeaderAccept
	}
	// body params
	localVarPostBody = r.rule2
	req, err := a.client.prepareRequest(r.ctx, localVarPath, localVarHTTPMethod, localVarPostBody, localVarHeaderParams, localVarQueryParams, localVarFormParams, formFiles)
	if err != nil {
		return localVarReturnValue, nil, err
	}

	localVarHTTPResponse, err := a.client.callAPI(req)
	if err != nil || localVarHTTPResponse == nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	localVarBody, err := ioutil.ReadAll(localVarHTTPResponse.Body)
	localVarHTTPResponse.Body.Close()
	localVarHTTPResponse.Body = ioutil.NopCloser(bytes.NewBuffer(localVarBody))
	if err != nil {
		return localVarReturnValue, localVarHTTPResponse, err
	}

	if localVarHTTPResponse.StatusCode >= 300 {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: localVarHTTPResponse.Status,
		}
		if localVarHTTPResponse.StatusCode == 404 {
			var v Error
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarReturnValue, localVarHTTPResponse, newErr
			}
			newErr.model = v
			return localVarReturnValue, localVarHTTPResponse, newErr
		}
		if localVarHTTPResponse.StatusCode == 500 {
			var v Error
			err = a.client.decode(&v, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
			if err != nil {
				newErr.error = err.Error()
				return localVarReturnValue, localVarHTTPResponse, newErr
			}
			newErr.model = v
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	err = a.client.decode(&localVarReturnValue, localVarBody, localVarHTTPResponse.Header.Get("Content-Type"))
	if err != nil {
		newErr := &GenericOpenAPIError{
			body:  localVarBody,
			error: err.Error(),
		}
		return localVarReturnValue, localVarHTTPResponse, newErr
	}

	return localVarReturnValue, localVarHTTPResponse, nil
}
