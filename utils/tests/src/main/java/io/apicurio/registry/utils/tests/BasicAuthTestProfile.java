package io.apicurio.registry.utils.tests;

import io.quarkus.test.junit.QuarkusTestProfile;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class BasicAuthTestProfile implements QuarkusTestProfile {

    @Override
    public Map<String, String> getConfigOverrides() {
        var map = new HashMap<String, String>();
        map.put("quarkus.http.auth.basic", "true");
        map.put("quarkus.security.users.embedded.enabled", "true");
        map.put("quarkus.security.users.embedded.plain-text", "true");
        map.put("registry.auth.role-based-authorization", "true");
        map.put("quarkus.security.users.embedded.users.alice", "alice");
        map.put("quarkus.security.users.embedded.users.bob", "bob");
        map.put("quarkus.security.users.embedded.roles.alice", "sr-admin");
        map.put("quarkus.security.users.embedded.roles.bob", "user");
        map.put("quarkus.http.auth.form.http-only-cookie", "false");
        map.put("registry.auth.enabled", "true");
        map.put("registry.basic.auth.enabled", "true");
        map.put("quarkus.oidc.enabled", "false");
        map.put("quarkus.oidc.tenant-enabled", "false");
        map.put("quarkus.oidc.token-path", "non-existent");
        map.put("app.authn.enabled", "true");
        map.put("apicurio.authn.basic-client-credentials.enabled", "true");
        map.put("app.authn.basic-auth-client-credentials.enabled", "true");
        return map;
    }

    @Override
    public List<TestResourceEntry> testResources() {
        if (!Boolean.parseBoolean(System.getProperty("cluster.tests"))) {
            return List.of(
                    new TestResourceEntry(JWKSMockServer.class));
        } else {
            return Collections.emptyList();
        }
    }
}
