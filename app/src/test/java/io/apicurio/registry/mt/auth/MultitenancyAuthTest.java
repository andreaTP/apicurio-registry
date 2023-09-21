/*
 * Copyright 2022 Red Hat
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

package io.apicurio.registry.mt.auth;

import com.microsoft.kiota.ApiException;
import com.microsoft.kiota.authentication.BaseBearerTokenAuthenticationProvider;
import com.microsoft.kiota.http.OkHttpRequestAdapter;
import io.apicurio.common.apps.config.Info;
import io.apicurio.registry.AbstractRegistryTestBase;
import io.apicurio.registry.auth.BasicAuthenticationProvider;
import io.apicurio.registry.auth.OidcAccessTokenProvider;
import io.apicurio.registry.mt.MockTenantMetadataService;
import io.apicurio.registry.mt.MultitenancyNoAuthTest;
import io.apicurio.registry.rest.client.RegistryClient;
import io.apicurio.registry.rest.client.models.ArtifactContent;
import io.apicurio.registry.rest.client.models.ArtifactMetaData;
import io.apicurio.registry.rest.client.models.ArtifactSearchResults;
import io.apicurio.registry.rest.client.models.Rule;
import io.apicurio.registry.rest.client.models.RuleType;
import io.apicurio.registry.rest.client.models.SearchedArtifact;
import io.apicurio.registry.rest.client.models.UpdateConfigurationProperty;
import io.apicurio.registry.storage.RegistryStorage;
import io.apicurio.registry.types.ArtifactType;
import io.apicurio.registry.types.Current;
import io.apicurio.registry.utils.tests.ApicurioTestTags;
import io.apicurio.registry.utils.tests.JWKSMockServer;
import io.apicurio.registry.utils.tests.MultitenancyAuthTestProfile;
import io.apicurio.registry.utils.tests.TestUtils;
import io.apicurio.tenantmanager.api.datamodel.ApicurioTenant;
import io.apicurio.tenantmanager.api.datamodel.TenantStatusValue;
import io.quarkus.test.junit.QuarkusTest;
import io.quarkus.test.junit.TestProfile;
import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.opentest4j.TestAbortedException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jakarta.inject.Inject;
import java.util.UUID;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;

import static org.junit.jupiter.api.Assertions.assertTrue;

@QuarkusTest
@TestProfile(MultitenancyAuthTestProfile.class)
@Tag(ApicurioTestTags.SLOW)
public class MultitenancyAuthTest extends AbstractRegistryTestBase {

    private static final Logger LOGGER = LoggerFactory.getLogger(MultitenancyNoAuthTest.class);

    @Inject
    @Current
    RegistryStorage storage;

    @Inject
    MockTenantMetadataService tenantMetadataService;

    @ConfigProperty(name = "registry.auth.token.endpoint")
    @Info(category = "auth", description = "Auth token endpoint", availableSince = "2.1.0.Final")
    String authServerUrlConfigured;

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

        String tenant1BaseUrl = "http://localhost:" + testPort + "/t/" + tenantId1;
        String tenant2BaseUrl = "http://localhost:" + testPort + "/t/" + tenantId2;

        var adapter1 = new OkHttpRequestAdapter(
                new BasicAuthenticationProvider(JWKSMockServer.BASIC_USER_A, JWKSMockServer.BASIC_PASSWORD));
        adapter1.setBaseUrl(tenant1BaseUrl + "/apis/registry/v2");
        var adapter2 = new OkHttpRequestAdapter(
                new BasicAuthenticationProvider(JWKSMockServer.BASIC_USER_B, JWKSMockServer.BASIC_PASSWORD));
        adapter2.setBaseUrl(tenant2BaseUrl + "/apis/registry/v2");
        RegistryClient clientTenant1 = new RegistryClient(adapter1);
        RegistryClient clientTenant2 = new RegistryClient(adapter2);

        //set basic auth to false for this particular tenant
        UpdateConfigurationProperty prop = new UpdateConfigurationProperty();
        prop.setValue("false");
        clientTenant1.admin().config().properties().byPropertyName("registry.auth.basic-auth-client-credentials.enabled").put(prop).get(3, TimeUnit.SECONDS);
        var executionException1 = Assertions.assertThrows(ExecutionException.class, () -> tenantOperations(clientTenant1));
        assertNotAuthorized(executionException1);

        //Execute tenant2 operation, must pass since basic auth is enabled by default
        try {
            tenantOperations(clientTenant2);
        } finally {
            cleanTenantArtifacts(clientTenant2);
        }

        //Since we have disabled basic auth, a client using bearer auth must be used to enable it back...
        var adapter = new OkHttpRequestAdapter(
                new BaseBearerTokenAuthenticationProvider(
                        new OidcAccessTokenProvider(authServerUrlConfigured, JWKSMockServer.BASIC_USER_A, JWKSMockServer.BASIC_PASSWORD)));
        adapter.setBaseUrl(tenant1BaseUrl + "/apis/registry/v2");
        RegistryClient clientWithBearerAuth = new RegistryClient(adapter);

        UpdateConfigurationProperty propTrue = new UpdateConfigurationProperty();
        propTrue.setValue("true");
        clientWithBearerAuth.admin().config().properties().byPropertyName("registry.auth.basic-auth-client-credentials.enabled").put(propTrue).get(3, TimeUnit.SECONDS);

        //Once enabled back, basic auth can be used again.
        try {
            tenantOperations(clientTenant1);
        } finally {
            cleanTenantArtifacts(clientTenant1);
        }

        //Finally, mix client when calling tenants, just to check that user from tenant a cannot access tenant b.
        adapter1.setBaseUrl(tenant2BaseUrl + "/apis/registry/v2");
        RegistryClient clientTenant1Authb = new RegistryClient(adapter1);
        adapter2.setBaseUrl(tenant1BaseUrl + "/apis/registry/v2");
        RegistryClient clientTenant2Autha = new RegistryClient(adapter2);

        var executionException2 = Assertions.assertThrows(ExecutionException.class, () -> tenantOperations(clientTenant1Authb));
        assertForbidden(executionException2);
        var executionException3 = Assertions.assertThrows(ExecutionException.class, () -> tenantOperations(clientTenant2Autha));
        assertForbidden(executionException3);
    }

    private void tenantOperations(RegistryClient client) throws Exception {
        //test apicurio api
        assertTrue(client.groups().byGroupId("default").artifacts().get().get(3, TimeUnit.SECONDS).getCount().intValue() == 0);

        String artifactId = TestUtils.generateArtifactId();
        ArtifactContent content = new ArtifactContent();
        content.setContent("{}");
        ArtifactMetaData meta = client.groups().byGroupId("default").artifacts().post(content, config -> {
            config.headers.add("X-Registry-ArtifactId", artifactId);
            config.headers.add("X-Registry-ArtifactType", ArtifactType.JSON);
        }).get(3, TimeUnit.SECONDS);
        TestUtils.retry(() -> client.ids().globalIds().byGlobalId(meta.getGlobalId()).get().get(3, TimeUnit.SECONDS));

        assertTrue(client.groups().byGroupId("default").artifacts().byArtifactId(meta.getId()).get().get(3, TimeUnit.SECONDS).readAllBytes().length > 0);

        assertTrue(client.groups().byGroupId("default").artifacts().get().get(3, TimeUnit.SECONDS).getCount().intValue() == 1);

        Rule ruleConfig = new Rule();
        ruleConfig.setType(RuleType.VALIDITY);
        ruleConfig.setConfig("NONE");
        client.groups().byGroupId("default").artifacts().byArtifactId(meta.getId()).rules().post(ruleConfig).get(3, TimeUnit.SECONDS);

        client.admin().rules().post(ruleConfig).get(3, TimeUnit.SECONDS);
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
}
