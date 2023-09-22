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

package io.apicurio.registry.storage.impl.sql;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import io.apicurio.registry.AbstractResourceTestBase;
import io.apicurio.registry.rest.client.RegistryClient;
import io.apicurio.registry.rest.client.models.ArtifactMetaData;
import io.apicurio.registry.rest.client.models.RoleMapping;
import io.apicurio.registry.rest.client.models.RoleType;
import io.apicurio.registry.types.ArtifactType;
import io.quarkus.test.junit.QuarkusTest;
import io.quarkus.test.junit.TestProfile;

import java.util.concurrent.TimeUnit;

/**
 * @author eric.wittmann@gmail.com
 */
@QuarkusTest
// Disabled for now since this profile is initializing a h2 database even when building the sql profile which uses an embedded postgres
@TestProfile(SqlStorageUpgradeTestProfile.class)
@Disabled
public class SqlStorageUpgradeTest extends AbstractResourceTestBase {

    @Test
    public void testUpgradeFromV1toV2() throws Exception {
        RegistryClient client = createRestClientV2();
        ArtifactMetaData metaData = client.groups().byGroupId("TestGroup").artifacts().byArtifactId("TestArtifact").meta().get().get(3, TimeUnit.SECONDS);
        // Expected values can be found in "SqlStorageUpgradeTest.dml" in src/test/resources
        Assertions.assertEquals(101, metaData.getContentId());
        Assertions.assertEquals(5001, metaData.getGlobalId());
        Assertions.assertEquals(ArtifactType.JSON, metaData.getType());

        RoleMapping mapping = new RoleMapping();
        mapping.setPrincipalId("test_user");
        mapping.setRole(RoleType.ADMIN);
        client.admin().roleMappings().post(mapping);

        mapping = client.admin().roleMappings().byPrincipalId("test_user").get().get(3, TimeUnit.SECONDS);
        Assertions.assertEquals(RoleType.ADMIN, mapping.getRole());
    }

}
