/*
 * Apicurio Registry API [v2]
 * Apicurio Registry is a datastore for standard event schemas and API designs. Apicurio Registry enables developers to manage and share the structure of their data using a REST interface. For example, client applications can dynamically push or pull the latest updates to or from the registry without needing to redeploy. Apicurio Registry also enables developers to create rules that govern how registry content can evolve over time. For example, this includes rules for content validation and version compatibility.  The Apicurio Registry REST API enables client applications to manage the artifacts in the registry. This API provides create, read, update, and delete operations for schema and API artifacts, rules, versions, and metadata.   The supported artifact types include: - Apache Avro schema - AsyncAPI specification - Google protocol buffers - GraphQL schema - JSON Schema - Kafka Connect schema - OpenAPI specification - Web Services Description Language - XML Schema Definition   **Important**: The Apicurio Registry REST API is available from `https://MY-REGISTRY-URL/apis/registry/v2` by default. Therefore you must prefix all API operation paths with `../apis/registry/v2` in this case. For example: `../apis/registry/v2/ids/globalIds/{globalId}`. 
 *
 * The version of the OpenAPI document: 2.3.1-SNAPSHOT
 * Contact: apicurio@lists.jboss.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.ArtifactSearchResults;
import org.openapitools.client.model.ArtifactType;
import org.openapitools.client.model.Error;
import java.io.File;
import org.openapitools.client.model.SortBy;
import org.openapitools.client.model.SortOrder;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for SearchApi
 */
@Disabled
public class SearchApiTest {

    private final SearchApi api = new SearchApi();

    /**
     * Search for artifacts
     *
     * Returns a paginated list of all artifacts that match the provided filter criteria. 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void searchArtifactsTest() throws ApiException {
        String name = null;
        Integer offset = null;
        Integer limit = null;
        SortOrder order = null;
        SortBy orderby = null;
        List<String> labels = null;
        List<String> properties = null;
        String description = null;
        String group = null;
        Long globalId = null;
        Long contentId = null;
        ArtifactSearchResults response = api.searchArtifacts(name, offset, limit, order, orderby, labels, properties, description, group, globalId, contentId);
        // TODO: test validations
    }

    /**
     * Search for artifacts by content
     *
     * Returns a paginated list of all artifacts with at least one version that matches the posted content. 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void searchArtifactsByContentTest() throws ApiException {
        File body = null;
        Boolean canonical = null;
        ArtifactType artifactType = null;
        Integer offset = null;
        Integer limit = null;
        String order = null;
        String orderby = null;
        ArtifactSearchResults response = api.searchArtifactsByContent(body, canonical, artifactType, offset, limit, order, orderby);
        // TODO: test validations
    }

}
