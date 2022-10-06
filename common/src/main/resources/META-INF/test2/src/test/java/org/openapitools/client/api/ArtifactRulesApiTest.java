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
import org.openapitools.client.model.Error;
import org.openapitools.client.model.Rule;
import org.openapitools.client.model.RuleType;
import org.openapitools.client.model.RuleViolationError;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for ArtifactRulesApi
 */
@Disabled
public class ArtifactRulesApiTest {

    private final ArtifactRulesApi api = new ArtifactRulesApi();

    /**
     * Create artifact rule
     *
     * Adds a rule to the list of rules that get applied to the artifact when adding new versions.  All configured rules must pass to successfully add a new artifact version.  This operation can fail for the following reasons:  * No artifact with this &#x60;artifactId&#x60; exists (HTTP error &#x60;404&#x60;) * Rule (named in the request body) is unknown (HTTP error &#x60;400&#x60;) * A server error occurred (HTTP error &#x60;500&#x60;)
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void createArtifactRuleTest() throws ApiException {
        String groupId = null;
        String artifactId = null;
        Rule rule = null;
        api.createArtifactRule(groupId, artifactId, rule);
        // TODO: test validations
    }

    /**
     * Delete artifact rule
     *
     * Deletes a rule from the artifact.  This results in the rule no longer applying for this artifact.  If this is the only rule configured for the artifact, this is the  same as deleting **all** rules, and the globally configured rules now apply to this artifact.  This operation can fail for the following reasons:  * No artifact with this &#x60;artifactId&#x60; exists (HTTP error &#x60;404&#x60;) * No rule with this name/type is configured for this artifact (HTTP error &#x60;404&#x60;) * Invalid rule type (HTTP error &#x60;400&#x60;) * A server error occurred (HTTP error &#x60;500&#x60;)
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void deleteArtifactRuleTest() throws ApiException {
        String groupId = null;
        String artifactId = null;
        String rule = null;
        api.deleteArtifactRule(groupId, artifactId, rule);
        // TODO: test validations
    }

    /**
     * Delete artifact rules
     *
     * Deletes all of the rules configured for the artifact.  After this is done, the global rules apply to the artifact again.  This operation can fail for the following reasons:  * No artifact with this &#x60;artifactId&#x60; exists (HTTP error &#x60;404&#x60;) * A server error occurred (HTTP error &#x60;500&#x60;)
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void deleteArtifactRulesTest() throws ApiException {
        String groupId = null;
        String artifactId = null;
        api.deleteArtifactRules(groupId, artifactId);
        // TODO: test validations
    }

    /**
     * Get artifact rule configuration
     *
     * Returns information about a single rule configured for an artifact.  This is useful when you want to know what the current configuration settings are for a specific rule.  This operation can fail for the following reasons:  * No artifact with this &#x60;artifactId&#x60; exists (HTTP error &#x60;404&#x60;) * No rule with this name/type is configured for this artifact (HTTP error &#x60;404&#x60;) * Invalid rule type (HTTP error &#x60;400&#x60;) * A server error occurred (HTTP error &#x60;500&#x60;)
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void getArtifactRuleConfigTest() throws ApiException {
        String groupId = null;
        String artifactId = null;
        String rule = null;
        Rule response = api.getArtifactRuleConfig(groupId, artifactId, rule);
        // TODO: test validations
    }

    /**
     * List artifact rules
     *
     * Returns a list of all rules configured for the artifact.  The set of rules determines how the content of an artifact can evolve over time.  If no rules are configured for an artifact, the set of globally configured rules are used.  If no global rules  are defined, there are no restrictions on content evolution.  This operation can fail for the following reasons:  * No artifact with this &#x60;artifactId&#x60; exists (HTTP error &#x60;404&#x60;) * A server error occurred (HTTP error &#x60;500&#x60;)
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void listArtifactRulesTest() throws ApiException {
        String groupId = null;
        String artifactId = null;
        List<RuleType> response = api.listArtifactRules(groupId, artifactId);
        // TODO: test validations
    }

    /**
     * Test update artifact
     *
     * Tests whether an update to the artifact&#39;s content *would* succeed for the provided content. Ultimately, this applies any rules configured for the artifact against the given content to determine whether the rules would pass or fail, but without actually updating the artifact content.  The body of the request should be the raw content of the artifact.  This is typically in  JSON format for *most* of the supported types, but may be in another format for a few  (for example, &#x60;PROTOBUF&#x60;).  The update could fail for a number of reasons including:  * Provided content (request body) was empty (HTTP error &#x60;400&#x60;) * No artifact with the &#x60;artifactId&#x60; exists (HTTP error &#x60;404&#x60;) * The new content violates one of the rules configured for the artifact (HTTP error &#x60;409&#x60;) * The provided artifact type is not recognized (HTTP error &#x60;404&#x60;) * A server error occurred (HTTP error &#x60;500&#x60;)  When successful, this operation simply returns a *No Content* response.  This response indicates that the content is valid against the configured content rules for the  artifact (or the global rules if no artifact rules are enabled).
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void testUpdateArtifactTest() throws ApiException {
        String groupId = null;
        String artifactId = null;
        Object body = null;
        api.testUpdateArtifact(groupId, artifactId, body);
        // TODO: test validations
    }

    /**
     * Update artifact rule configuration
     *
     * Updates the configuration of a single rule for the artifact.  The configuration data is specific to each rule type, so the configuration of the &#x60;COMPATIBILITY&#x60; rule  is in a different format from the configuration of the &#x60;VALIDITY&#x60; rule.  This operation can fail for the following reasons:  * No artifact with this &#x60;artifactId&#x60; exists (HTTP error &#x60;404&#x60;) * No rule with this name/type is configured for this artifact (HTTP error &#x60;404&#x60;) * Invalid rule type (HTTP error &#x60;400&#x60;) * A server error occurred (HTTP error &#x60;500&#x60;) 
     *
     * @throws ApiException if the Api call fails
     */
    @Test
    public void updateArtifactRuleConfigTest() throws ApiException {
        String groupId = null;
        String artifactId = null;
        String rule = null;
        Rule rule2 = null;
        Rule response = api.updateArtifactRuleConfig(groupId, artifactId, rule, rule2);
        // TODO: test validations
    }

}
