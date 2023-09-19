/*
 * Copyright 2021 Red Hat
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package io.apicurio.registry.mt;

import com.microsoft.kiota.ApiException;
import com.microsoft.kiota.authentication.AnonymousAuthenticationProvider;
import com.microsoft.kiota.authentication.BaseBearerTokenAuthenticationProvider;
import com.microsoft.kiota.http.OkHttpRequestAdapter;
import io.apicurio.registry.auth.OidcAccessTokenProvider;
import io.apicurio.registry.utils.tests.ApicurioTestTags;
import io.apicurio.registry.utils.tests.JWKSMockServer;
import io.apicurio.tenantmanager.api.datamodel.ApicurioTenant;
import io.apicurio.tenantmanager.api.datamodel.TenantStatusValue;
import io.apicurio.registry.AbstractRegistryTestBase;
import io.apicurio.registry.rest.client.RegistryClient;
import io.apicurio.registry.rest.client.models.ArtifactContent;
import io.apicurio.registry.rest.client.models.ArtifactMetaData;
import io.apicurio.registry.rest.client.models.ArtifactSearchResults;
import io.apicurio.registry.rest.client.models.Rule;
import io.apicurio.registry.rest.client.models.RuleType;
import io.apicurio.registry.rest.client.models.SearchedArtifact;
import io.apicurio.registry.storage.RegistryStorage;
import io.apicurio.registry.types.ArtifactType;
import io.apicurio.registry.types.Current;
import io.apicurio.registry.utils.tests.TestUtils;
import io.confluent.kafka.schemaregistry.ParsedSchema;
import io.confluent.kafka.schemaregistry.SchemaProvider;
import io.confluent.kafka.schemaregistry.avro.AvroSchema;
import io.confluent.kafka.schemaregistry.avro.AvroSchemaProvider;
import io.confluent.kafka.schemaregistry.client.CachedSchemaRegistryClient;
import io.confluent.kafka.schemaregistry.client.SchemaRegistryClient;
import io.confluent.kafka.schemaregistry.client.rest.RestService;
import io.confluent.kafka.schemaregistry.json.JsonSchemaProvider;
import io.confluent.kafka.schemaregistry.protobuf.ProtobufSchemaProvider;
import io.quarkus.test.junit.QuarkusTest;
import io.quarkus.test.junit.TestProfile;
import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.opentest4j.TestAbortedException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.ByteArrayInputStream;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;

import jakarta.inject.Inject;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

/**
 * @author Fabian Martinez
 */
@QuarkusTest
@TestProfile(MultitenancyNoAuthTestProfile.class)
@Tag(ApicurioTestTags.SLOW)
public class MultitenancyNoAuthTest extends AbstractRegistryTestBase {

    private static final Logger LOGGER = LoggerFactory.getLogger(MultitenancyNoAuthTest.class);

    @Inject
    @Current
    RegistryStorage storage;

    @Inject
    MockTenantMetadataService tenantMetadataService;

    @ConfigProperty(name = "quarkus.http.test-port")
    public int testPort;

    @Test
    public void testTenantErrorExceptions() throws Exception {

        if (!storage.supportsMultiTenancy()) {
            throw new TestAbortedException("Multitenancy not supported - aborting test");
        }

        String tenantId1 = UUID.randomUUID().toString();

        String tenantId2 = UUID.randomUUID().toString();
        tenantMetadataService.addToUnauthorizedList(tenantId2);

        String tenant1BaseUrl = "http://localhost:" + testPort + "/t/" + tenantId1 + "/apis/registry/v2";
        String tenant2BaseUrl = "http://localhost:" + testPort + "/t/" + tenantId2 + "/apis/registry/v2";

        var adapter1 = new OkHttpRequestAdapter(new AnonymousAuthenticationProvider());
        adapter1.setBaseUrl(tenant1BaseUrl);
        var adapter2 = new OkHttpRequestAdapter(new AnonymousAuthenticationProvider());
        adapter2.setBaseUrl(tenant2BaseUrl);
        RegistryClient clientTenant1 = new RegistryClient(adapter1);
        RegistryClient clientTenant2 = new RegistryClient(adapter2);

        // NOTE: io.apicurio.common.apps.multitenancy.TenantNotFoundException is also mapped to HTTP code 403 to avoid scanning attacks
        var executionException1 = Assertions.assertThrows(ExecutionException.class, () -> {
            clientTenant1.admin().rules().get().get(3, TimeUnit.SECONDS);
        });
        Assertions.assertNotNull(executionException1.getCause());
        Assertions.assertEquals(ApiException.class, executionException1.getCause().getClass());
        Assertions.assertEquals(403, ((ApiException)executionException1.getCause()).responseStatusCode);

        var executionException2 = Assertions.assertThrows(ExecutionException.class, () -> {
            clientTenant2.admin().rules().get().get(3, TimeUnit.SECONDS);
        });
        Assertions.assertNotNull(executionException2.getCause());
        Assertions.assertEquals(ApiException.class, executionException2.getCause().getClass());
        Assertions.assertEquals(403, ((ApiException)executionException2.getCause()).responseStatusCode);
    }

    @Test
    public void testMultitenantRegistry() throws Exception {

        if (!storage.supportsMultiTenancy()) {
            throw new TestAbortedException("Multitenancy not supported - aborting test");
        }

        String tenantId1 = UUID.randomUUID().toString();
        var tenant1 = new ApicurioTenant();
        tenant1.setTenantId(tenantId1);
        tenant1.setOrganizationId("aaa");
        tenant1.setStatus(TenantStatusValue.READY);
        tenantMetadataService.createTenant(tenant1);

        String tenantId2 = UUID.randomUUID().toString();
        var tenant2 = new ApicurioTenant();
        tenant2.setTenantId(tenantId2);
        tenant2.setOrganizationId("bbb");
        tenant2.setStatus(TenantStatusValue.READY);
        tenantMetadataService.createTenant(tenant2);

        String tenant1BaseUrl = "http://localhost:" + testPort + "/t/" + tenantId1 + "/apis/registry/v2";
        String tenant2BaseUrl = "http://localhost:" + testPort + "/t/" + tenantId2 + "/apis/registry/v2";

        var adapter1 = new OkHttpRequestAdapter(new AnonymousAuthenticationProvider());
        adapter1.setBaseUrl(tenant1BaseUrl);
        var adapter2 = new OkHttpRequestAdapter(new AnonymousAuthenticationProvider());
        adapter2.setBaseUrl(tenant2BaseUrl);
        RegistryClient clientTenant1 = new RegistryClient(adapter1);
        RegistryClient clientTenant2 = new RegistryClient(adapter2);

        SchemaRegistryClient cclientTenant1 = createConfluentClient(tenant1BaseUrl);
        SchemaRegistryClient cclientTenant2 = createConfluentClient(tenant2BaseUrl);

        try {
            tenantOperations(clientTenant1, cclientTenant1, tenant1BaseUrl);
            try {
                tenantOperations(clientTenant2, cclientTenant2, tenant2BaseUrl);
            } finally {
                cleanTenantArtifacts(clientTenant2);
            }
        } finally {
            cleanTenantArtifacts(clientTenant1);
        }

    }

    private void tenantOperations(RegistryClient client, SchemaRegistryClient cclient, String baseUrl) throws Exception {
        //test apicurio api
        assertTrue(client.groups().byGroupId("default").artifacts().get().get(3, TimeUnit.SECONDS).getCount().intValue() == 0);

        String artifactId = TestUtils.generateArtifactId();
        ArtifactContent content = new ArtifactContent();
        content.setContent("{}");
        ArtifactMetaData meta = client.groups().byGroupId("default").artifacts().post(content, config -> {
            config.headers.add("X-Registry-ArtifactId", artifactId);
            config.headers.add("X-Registry-ArtifactType", ArtifactType.JSON);
        }).get(3, TimeUnit.SECONDS);
        // createArtifact(null, artifactId, ArtifactType.JSON, new ByteArrayInputStream("{}".getBytes()));
        TestUtils.retry(() -> client.ids().globalIds().byGlobalId(meta.getGlobalId()).get().get(3, TimeUnit.SECONDS));

        assertTrue(client.groups().byGroupId("default").artifacts().byArtifactId(meta.getId()).get().get(3, TimeUnit.SECONDS).readAllBytes().length > 0);

        assertTrue(client.groups().byGroupId("default").artifacts().get().get(3, TimeUnit.SECONDS).getCount().intValue() == 1);

        Rule ruleConfig = new Rule();
        ruleConfig.setType(RuleType.VALIDITY);
        ruleConfig.setConfig("NONE");
        client.groups().byGroupId("default").artifacts().byArtifactId(meta.getId()).rules().post(ruleConfig).get(3, TimeUnit.SECONDS);

        client.admin().rules().post(ruleConfig).get(3, TimeUnit.SECONDS);

        //test confluent api
        String subject = TestUtils.generateArtifactId();
        ParsedSchema schema1 = new AvroSchema("{\"type\":\"record\",\"name\":\"myrecord1\",\"fields\":[{\"name\":\"f1\",\"type\":\"string\"}]}");
        int id1 = cclient.register(subject, schema1);
        // Reset the client cache so that the next line actually does what we want.
        cclient.reset();
        TestUtils.retry(() -> cclient.getSchemaById(id1));
    }

    private void cleanTenantArtifacts(RegistryClient client) throws Exception {
        ArtifactSearchResults artifacts = client.groups().byGroupId("default").artifacts().get().get(3, TimeUnit.SECONDS);
        for (SearchedArtifact artifact : artifacts.getArtifacts()) {
            try {
                client.groups().byGroupId("default").artifacts().byArtifactId(artifact.getId()).delete().get(3, TimeUnit.SECONDS);
            } catch (ExecutionException e) {
                if (e.getCause() != null) {
                    //because of async storage artifact may be already deleted but listed anyway
                    LOGGER.info(e.getCause().getMessage());
                }
            } catch (Exception e) {
                LOGGER.error("", e);
            }
        }
        TestUtils.retry(() -> assertTrue(client.groups().byGroupId("default").artifacts().get().get(3, TimeUnit.SECONDS).getCount().intValue() == 0));
    }

    private SchemaRegistryClient createConfluentClient(String baseUrl) {

        final List<SchemaProvider> schemaProviders = Arrays
                .asList(new JsonSchemaProvider(), new AvroSchemaProvider(), new ProtobufSchemaProvider());

        return new CachedSchemaRegistryClient(new RestService(baseUrl + "/apis/ccompat/v6"), 3, schemaProviders, null, null);
    }

}
