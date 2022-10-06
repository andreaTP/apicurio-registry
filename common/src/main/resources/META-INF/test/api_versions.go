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
	"os"
)


// VersionsApiService VersionsApi service
type VersionsApiService service

type ApiCreateArtifactVersionRequest struct {
	ctx context.Context
	ApiService *VersionsApiService
	groupId string
	artifactId string
	body *interface{}
	xRegistryVersion *string
	xRegistryName *string
	xRegistryDescription *string
	xRegistryDescriptionEncoded *string
	xRegistryNameEncoded *string
}

// The content of the artifact version being created or the content and a set of references to other artifacts. This is often, but not always, JSON data representing one of the supported artifact types:  * Avro (&#x60;AVRO&#x60;) * Protobuf (&#x60;PROTOBUF&#x60;) * JSON Schema (&#x60;JSON&#x60;) * Kafka Connect (&#x60;KCONNECT&#x60;) * OpenAPI (&#x60;OPENAPI&#x60;) * AsyncAPI (&#x60;ASYNCAPI&#x60;) * GraphQL (&#x60;GRAPHQL&#x60;) * Web Services Description Language (&#x60;WSDL&#x60;) * XML Schema (&#x60;XSD&#x60;) 
func (r ApiCreateArtifactVersionRequest) Body(body interface{}) ApiCreateArtifactVersionRequest {
	r.body = &body
	return r
}

// Specifies the version number of this new version of the artifact content.  This would typically be a simple integer or a SemVer value.  It must be unique within the artifact.  If this is not provided, the server will generate a new, unique version number for this new updated content.
func (r ApiCreateArtifactVersionRequest) XRegistryVersion(xRegistryVersion string) ApiCreateArtifactVersionRequest {
	r.xRegistryVersion = &xRegistryVersion
	return r
}

// Specifies the artifact name of this new version of the artifact content. Name must be ASCII-only string. If this is not provided, the server will extract the name from the artifact content.
func (r ApiCreateArtifactVersionRequest) XRegistryName(xRegistryName string) ApiCreateArtifactVersionRequest {
	r.xRegistryName = &xRegistryName
	return r
}

// Specifies the artifact description of this new version of the artifact content. Description must be ASCII-only string. If this is not provided, the server will extract the description from the artifact content.
func (r ApiCreateArtifactVersionRequest) XRegistryDescription(xRegistryDescription string) ApiCreateArtifactVersionRequest {
	r.xRegistryDescription = &xRegistryDescription
	return r
}

// Specifies the artifact description of this new version of the artifact content. Value of this must be Base64 encoded string. If this is not provided, the server will extract the description from the artifact content.
func (r ApiCreateArtifactVersionRequest) XRegistryDescriptionEncoded(xRegistryDescriptionEncoded string) ApiCreateArtifactVersionRequest {
	r.xRegistryDescriptionEncoded = &xRegistryDescriptionEncoded
	return r
}

// Specifies the artifact name of this new version of the artifact content. Value of this must be Base64 encoded string. If this is not provided, the server will extract the name from the artifact content.
func (r ApiCreateArtifactVersionRequest) XRegistryNameEncoded(xRegistryNameEncoded string) ApiCreateArtifactVersionRequest {
	r.xRegistryNameEncoded = &xRegistryNameEncoded
	return r
}

func (r ApiCreateArtifactVersionRequest) Execute() (*VersionMetaData, *http.Response, error) {
	return r.ApiService.CreateArtifactVersionExecute(r)
}

/*
CreateArtifactVersion Create artifact version

Creates a new version of the artifact by uploading new content.  The configured rules for
the artifact are applied, and if they all pass, the new content is added as the most recent 
version of the artifact.  If any of the rules fail, an error is returned.

The body of the request can be the raw content of the new artifact version, or the raw content 
and a set of references pointing to other artifacts, and the type
of that content should match the artifact's type (for example if the artifact type is `AVRO`
then the content of the request should be an Apache Avro document).

This operation can fail for the following reasons:

* Provided content (request body) was empty (HTTP error `400`)
* No artifact with this `artifactId` exists (HTTP error `404`)
* The new content violates one of the rules configured for the artifact (HTTP error `409`)
* A server error occurred (HTTP error `500`)


 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param groupId The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
 @param artifactId The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
 @return ApiCreateArtifactVersionRequest
*/
func (a *VersionsApiService) CreateArtifactVersion(ctx context.Context, groupId string, artifactId string) ApiCreateArtifactVersionRequest {
	return ApiCreateArtifactVersionRequest{
		ApiService: a,
		ctx: ctx,
		groupId: groupId,
		artifactId: artifactId,
	}
}

// Execute executes the request
//  @return VersionMetaData
func (a *VersionsApiService) CreateArtifactVersionExecute(r ApiCreateArtifactVersionRequest) (*VersionMetaData, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodPost
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *VersionMetaData
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "VersionsApiService.CreateArtifactVersion")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/groups/{groupId}/artifacts/{artifactId}/versions"
	localVarPath = strings.Replace(localVarPath, "{"+"groupId"+"}", url.PathEscape(parameterToString(r.groupId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"artifactId"+"}", url.PathEscape(parameterToString(r.artifactId, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if r.body == nil {
		return localVarReturnValue, nil, reportError("body is required and must be specified")
	}

	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{"application/create.extended+json"}

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
	if r.xRegistryVersion != nil {
		localVarHeaderParams["X-Registry-Version"] = parameterToString(*r.xRegistryVersion, "")
	}
	if r.xRegistryName != nil {
		localVarHeaderParams["X-Registry-Name"] = parameterToString(*r.xRegistryName, "")
	}
	if r.xRegistryDescription != nil {
		localVarHeaderParams["X-Registry-Description"] = parameterToString(*r.xRegistryDescription, "")
	}
	if r.xRegistryDescriptionEncoded != nil {
		localVarHeaderParams["X-Registry-Description-Encoded"] = parameterToString(*r.xRegistryDescriptionEncoded, "")
	}
	if r.xRegistryNameEncoded != nil {
		localVarHeaderParams["X-Registry-Name-Encoded"] = parameterToString(*r.xRegistryNameEncoded, "")
	}
	// body params
	localVarPostBody = r.body
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
		if localVarHTTPResponse.StatusCode == 409 {
			var v RuleViolationError
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

type ApiGetArtifactVersionRequest struct {
	ctx context.Context
	ApiService *VersionsApiService
	groupId string
	artifactId string
	version string
	dereference *bool
}

// Allows the user to specify if the content should be dereferenced when being returned
func (r ApiGetArtifactVersionRequest) Dereference(dereference bool) ApiGetArtifactVersionRequest {
	r.dereference = &dereference
	return r
}

func (r ApiGetArtifactVersionRequest) Execute() (**os.File, *http.Response, error) {
	return r.ApiService.GetArtifactVersionExecute(r)
}

/*
GetArtifactVersion Get artifact version

Retrieves a single version of the artifact content.  Both the `artifactId` and the
unique `version` number must be provided.  The `Content-Type` of the response depends 
on the artifact type.  In most cases, this is `application/json`, but for some types 
it may be different (for example, `PROTOBUF`).

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No version with this `version` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param groupId The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
 @param artifactId The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
 @param version The unique identifier of a specific version of the artifact content.
 @return ApiGetArtifactVersionRequest
*/
func (a *VersionsApiService) GetArtifactVersion(ctx context.Context, groupId string, artifactId string, version string) ApiGetArtifactVersionRequest {
	return ApiGetArtifactVersionRequest{
		ApiService: a,
		ctx: ctx,
		groupId: groupId,
		artifactId: artifactId,
		version: version,
	}
}

// Execute executes the request
//  @return *os.File
func (a *VersionsApiService) GetArtifactVersionExecute(r ApiGetArtifactVersionRequest) (**os.File, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodGet
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  **os.File
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "VersionsApiService.GetArtifactVersion")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/groups/{groupId}/artifacts/{artifactId}/versions/{version}"
	localVarPath = strings.Replace(localVarPath, "{"+"groupId"+"}", url.PathEscape(parameterToString(r.groupId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"artifactId"+"}", url.PathEscape(parameterToString(r.artifactId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"version"+"}", url.PathEscape(parameterToString(r.version, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}

	if r.dereference != nil {
		localVarQueryParams.Add("dereference", parameterToString(*r.dereference, ""))
	}
	// to determine the Content-Type header
	localVarHTTPContentTypes := []string{}

	// set Content-Type header
	localVarHTTPContentType := selectHeaderContentType(localVarHTTPContentTypes)
	if localVarHTTPContentType != "" {
		localVarHeaderParams["Content-Type"] = localVarHTTPContentType
	}

	// to determine the Accept header
	localVarHTTPHeaderAccepts := []string{"*/*", "application/json"}

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

type ApiGetArtifactVersionReferencesRequest struct {
	ctx context.Context
	ApiService *VersionsApiService
	groupId string
	artifactId string
	version string
}

func (r ApiGetArtifactVersionReferencesRequest) Execute() ([]ArtifactReference, *http.Response, error) {
	return r.ApiService.GetArtifactVersionReferencesExecute(r)
}

/*
GetArtifactVersionReferences Get artifact version

Retrieves a single version of the artifact content.  Both the `artifactId` and the
unique `version` number must be provided.  The `Content-Type` of the response depends 
on the artifact type.  In most cases, this is `application/json`, but for some types 
it may be different (for example, `PROTOBUF`).

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No version with this `version` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param groupId The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
 @param artifactId The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
 @param version The unique identifier of a specific version of the artifact content.
 @return ApiGetArtifactVersionReferencesRequest
*/
func (a *VersionsApiService) GetArtifactVersionReferences(ctx context.Context, groupId string, artifactId string, version string) ApiGetArtifactVersionReferencesRequest {
	return ApiGetArtifactVersionReferencesRequest{
		ApiService: a,
		ctx: ctx,
		groupId: groupId,
		artifactId: artifactId,
		version: version,
	}
}

// Execute executes the request
//  @return []ArtifactReference
func (a *VersionsApiService) GetArtifactVersionReferencesExecute(r ApiGetArtifactVersionReferencesRequest) ([]ArtifactReference, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodGet
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  []ArtifactReference
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "VersionsApiService.GetArtifactVersionReferences")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/groups/{groupId}/artifacts/{artifactId}/versions/{version}/references"
	localVarPath = strings.Replace(localVarPath, "{"+"groupId"+"}", url.PathEscape(parameterToString(r.groupId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"artifactId"+"}", url.PathEscape(parameterToString(r.artifactId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"version"+"}", url.PathEscape(parameterToString(r.version, "")), -1)

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

type ApiListArtifactVersionsRequest struct {
	ctx context.Context
	ApiService *VersionsApiService
	groupId string
	artifactId string
	offset *int32
	limit *int32
}

// The number of versions to skip before starting to collect the result set.  Defaults to 0.
func (r ApiListArtifactVersionsRequest) Offset(offset int32) ApiListArtifactVersionsRequest {
	r.offset = &offset
	return r
}

// The number of versions to return.  Defaults to 20.
func (r ApiListArtifactVersionsRequest) Limit(limit int32) ApiListArtifactVersionsRequest {
	r.limit = &limit
	return r
}

func (r ApiListArtifactVersionsRequest) Execute() (*VersionSearchResults, *http.Response, error) {
	return r.ApiService.ListArtifactVersionsExecute(r)
}

/*
ListArtifactVersions List artifact versions

Returns a list of all versions of the artifact.  The result set is paged.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param groupId The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
 @param artifactId The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
 @return ApiListArtifactVersionsRequest
*/
func (a *VersionsApiService) ListArtifactVersions(ctx context.Context, groupId string, artifactId string) ApiListArtifactVersionsRequest {
	return ApiListArtifactVersionsRequest{
		ApiService: a,
		ctx: ctx,
		groupId: groupId,
		artifactId: artifactId,
	}
}

// Execute executes the request
//  @return VersionSearchResults
func (a *VersionsApiService) ListArtifactVersionsExecute(r ApiListArtifactVersionsRequest) (*VersionSearchResults, *http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodGet
		localVarPostBody     interface{}
		formFiles            []formFile
		localVarReturnValue  *VersionSearchResults
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "VersionsApiService.ListArtifactVersions")
	if err != nil {
		return localVarReturnValue, nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/groups/{groupId}/artifacts/{artifactId}/versions"
	localVarPath = strings.Replace(localVarPath, "{"+"groupId"+"}", url.PathEscape(parameterToString(r.groupId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"artifactId"+"}", url.PathEscape(parameterToString(r.artifactId, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}

	if r.offset != nil {
		localVarQueryParams.Add("offset", parameterToString(*r.offset, ""))
	}
	if r.limit != nil {
		localVarQueryParams.Add("limit", parameterToString(*r.limit, ""))
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

type ApiUpdateArtifactVersionStateRequest struct {
	ctx context.Context
	ApiService *VersionsApiService
	groupId string
	artifactId string
	version string
	updateState *UpdateState
}

func (r ApiUpdateArtifactVersionStateRequest) UpdateState(updateState UpdateState) ApiUpdateArtifactVersionStateRequest {
	r.updateState = &updateState
	return r
}

func (r ApiUpdateArtifactVersionStateRequest) Execute() (*http.Response, error) {
	return r.ApiService.UpdateArtifactVersionStateExecute(r)
}

/*
UpdateArtifactVersionState Update artifact version state

Updates the state of a specific version of an artifact.  For example, you can use 
this operation to disable a specific version.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No version with this `version` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


 @param ctx context.Context - for authentication, logging, cancellation, deadlines, tracing, etc. Passed from http.Request or context.Background().
 @param groupId The artifact group ID.  Must be a string provided by the client, representing the name of the grouping of artifacts.
 @param artifactId The artifact ID.  Can be a string (client-provided) or UUID (server-generated), representing the unique artifact identifier.
 @param version The unique identifier of a specific version of the artifact content.
 @return ApiUpdateArtifactVersionStateRequest
*/
func (a *VersionsApiService) UpdateArtifactVersionState(ctx context.Context, groupId string, artifactId string, version string) ApiUpdateArtifactVersionStateRequest {
	return ApiUpdateArtifactVersionStateRequest{
		ApiService: a,
		ctx: ctx,
		groupId: groupId,
		artifactId: artifactId,
		version: version,
	}
}

// Execute executes the request
func (a *VersionsApiService) UpdateArtifactVersionStateExecute(r ApiUpdateArtifactVersionStateRequest) (*http.Response, error) {
	var (
		localVarHTTPMethod   = http.MethodPut
		localVarPostBody     interface{}
		formFiles            []formFile
	)

	localBasePath, err := a.client.cfg.ServerURLWithContext(r.ctx, "VersionsApiService.UpdateArtifactVersionState")
	if err != nil {
		return nil, &GenericOpenAPIError{error: err.Error()}
	}

	localVarPath := localBasePath + "/groups/{groupId}/artifacts/{artifactId}/versions/{version}/state"
	localVarPath = strings.Replace(localVarPath, "{"+"groupId"+"}", url.PathEscape(parameterToString(r.groupId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"artifactId"+"}", url.PathEscape(parameterToString(r.artifactId, "")), -1)
	localVarPath = strings.Replace(localVarPath, "{"+"version"+"}", url.PathEscape(parameterToString(r.version, "")), -1)

	localVarHeaderParams := make(map[string]string)
	localVarQueryParams := url.Values{}
	localVarFormParams := url.Values{}
	if r.updateState == nil {
		return nil, reportError("updateState is required and must be specified")
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
	localVarPostBody = r.updateState
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
