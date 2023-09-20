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

package io.apicurio.registry.mt.limits;

import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.function.Supplier;

import com.google.protobuf.Api;
import com.microsoft.kiota.ApiException;
import com.microsoft.kiota.authentication.AnonymousAuthenticationProvider;
import com.microsoft.kiota.http.OkHttpRequestAdapter;
import jakarta.inject.Inject;

import io.apicurio.registry.AbstractRegistryTestBase;
import io.apicurio.registry.utils.tests.ApicurioTestTags;
import org.apache.commons.lang3.StringUtils;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.opentest4j.TestAbortedException;

import io.apicurio.tenantmanager.api.datamodel.ApicurioTenant;
import io.apicurio.tenantmanager.api.datamodel.TenantStatusValue;
import io.apicurio.registry.mt.MockTenantMetadataService;
import io.apicurio.registry.rest.client.RegistryClient;
import io.apicurio.registry.rest.client.models.ArtifactContent;
import io.apicurio.registry.rest.client.models.EditableMetaData;
import io.apicurio.registry.rest.client.models.Properties;
import io.apicurio.registry.storage.RegistryStorage;
import io.apicurio.registry.types.ArtifactType;
import io.apicurio.registry.types.Current;
import io.apicurio.registry.utils.tests.TestUtils;
import io.quarkus.test.junit.QuarkusTest;
import io.quarkus.test.junit.TestProfile;

/**
 * @author Fabian Martinez
 */
@QuarkusTest
@TestProfile(MultitenancyLimitsTestProfile.class)
@Tag(ApicurioTestTags.SLOW)
public class MultitenancyLimitsTest extends AbstractRegistryTestBase {

    @Inject
    @Current
    RegistryStorage storage;

    @Inject
    MockTenantMetadataService tenantMetadataService;

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

        //TODO add testcase configuring limits via metadata service

        var adapter1 = new OkHttpRequestAdapter(new AnonymousAuthenticationProvider());
        adapter1.setBaseUrl("http://localhost:" + testPort + "/t/" + tenantId1 + "/apis/registry/v2");
        var adapter2 = new OkHttpRequestAdapter(new AnonymousAuthenticationProvider());
        adapter2.setBaseUrl("http://localhost:" + testPort + "/t/" + tenantId2 + "/apis/registry/v2");
        RegistryClient clientTenant1 = new RegistryClient(adapter1);
        RegistryClient clientTenant2 = new RegistryClient(adapter2);

        checkTenantLimits(clientTenant1);
        checkTenantLimits(clientTenant2);

    }

    private void checkTenantLimits(RegistryClient client) throws Exception {

        Supplier<InputStream> jsonSchema = () -> getClass().getResourceAsStream("/io/apicurio/registry/util/json-schema.json");
        Assertions.assertNotNull(jsonSchema);

        String artifactId = TestUtils.generateArtifactId();

        ArtifactContent content = new io.apicurio.registry.rest.client.models.ArtifactContent();
        content.setContent(new String(jsonSchema.get().readAllBytes(), StandardCharsets.UTF_8));
        client.groups().byGroupId("default").artifacts().post(content, config -> {
            config.headers.add("X-Registry-ArtifactId", artifactId);
        }).get(3, TimeUnit.SECONDS);
        client.groups().byGroupId("default").artifacts().byArtifactId(artifactId).put(content).get(3, TimeUnit.SECONDS);


        //valid metadata
        EditableMetaData meta = new EditableMetaData();
        meta.setName(StringUtils.repeat('a', 512));
        meta.setDescription(StringUtils.repeat('a', 1024));
        String fourBytesText = StringUtils.repeat('a', 4);
        Properties props1 = new Properties();
        props1.setAdditionalData(Map.of(
                StringUtils.repeat('a', 4), fourBytesText,
                StringUtils.repeat('b', 4), fourBytesText));
        meta.setProperties(props1);
        meta.setLabels(Arrays.asList(fourBytesText, fourBytesText));
        client.groups().byGroupId("default").artifacts().byArtifactId(artifactId).versions().byVersion("1").meta().put(meta).get(3, TimeUnit.SECONDS);

        //invalid metadata
        EditableMetaData invalidmeta = new EditableMetaData();
        invalidmeta.setName(StringUtils.repeat('a', 513));
        invalidmeta.setDescription(StringUtils.repeat('a', 1025));
        String fiveBytesText = StringUtils.repeat('a', 5);
        Properties props2 = new Properties();
        props2.setAdditionalData(Map.of(
                StringUtils.repeat('a', 5), fiveBytesText,
                StringUtils.repeat('b', 5), fiveBytesText));
        invalidmeta.setProperties(props2);
        invalidmeta.setLabels(Arrays.asList(fiveBytesText, fiveBytesText));
        var executionException1 = Assertions.assertThrows(ExecutionException.class, () -> {
            client.groups().byGroupId("default").artifacts().byArtifactId(artifactId).versions().byVersion("1").meta().put(invalidmeta).get(3, TimeUnit.SECONDS);
        });
        Assertions.assertNotNull(executionException1.getCause());
        Assertions.assertEquals(com.microsoft.kiota.ApiException.class, executionException1.getCause().getClass());
        Assertions.assertEquals(409, ((ApiException)executionException1.getCause()).responseStatusCode);

        //schema number 3 , exceeds the max number of schemas
        var executionException2 = Assertions.assertThrows(ExecutionException.class, () -> {
            ArtifactContent data = new ArtifactContent();
            data.setContent("{}");
            client.groups().byGroupId("default").artifacts().post(data, config -> {
                config.headers.add("X-Registry-ArtifactId", artifactId);
                config.headers.add("X-Registry-ArtifactType", ArtifactType.JSON);
            }).get(3, TimeUnit.SECONDS);
        });
        Assertions.assertNotNull(executionException2.getCause());
        Assertions.assertEquals(io.apicurio.registry.rest.client.models.Error.class, executionException2.getCause().getClass());
        Assertions.assertEquals(409, ((ApiException)executionException2.getCause()).responseStatusCode);
    }


}