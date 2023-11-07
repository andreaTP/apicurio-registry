package io.apicurio.registry.rest.client.admin;

import com.microsoft.kiota.BaseRequestBuilder;
import com.microsoft.kiota.RequestAdapter;
import io.apicurio.registry.rest.client.admin.artifacttypes.ArtifactTypesRequestBuilder;
import io.apicurio.registry.rest.client.admin.config.ConfigRequestBuilder;
import io.apicurio.registry.rest.client.admin.export.ExportRequestBuilder;
import io.apicurio.registry.rest.client.admin.importescaped.ImportRequestBuilder;
import io.apicurio.registry.rest.client.admin.rolemappings.RoleMappingsRequestBuilder;
import io.apicurio.registry.rest.client.admin.rules.RulesRequestBuilder;
import java.util.HashMap;
import java.util.Objects;
/**
 * Builds and executes requests for operations under /admin
 */
@jakarta.annotation.Generated("com.microsoft.kiota")
public class AdminRequestBuilder extends BaseRequestBuilder {
    /**
     * The list of artifact types supported by this instance of Registry.
     */
    @jakarta.annotation.Nonnull
    public ArtifactTypesRequestBuilder artifactTypes() {
        return new ArtifactTypesRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * The config property
     */
    @jakarta.annotation.Nonnull
    public ConfigRequestBuilder config() {
        return new ConfigRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * Provides a way to export registry data.
     */
    @jakarta.annotation.Nonnull
    public ExportRequestBuilder export() {
        return new ExportRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * Provides a way to import data into the registry.
     */
    @jakarta.annotation.Nonnull
    public ImportRequestBuilder importEscaped() {
        return new ImportRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * Collection to manage role mappings for authenticated principals
     */
    @jakarta.annotation.Nonnull
    public RoleMappingsRequestBuilder roleMappings() {
        return new RoleMappingsRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * Manage the global rules that apply to all artifacts if not otherwise configured.
     */
    @jakarta.annotation.Nonnull
    public RulesRequestBuilder rules() {
        return new RulesRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * Instantiates a new AdminRequestBuilder and sets the default values.
     * @param pathParameters Path parameters for the request
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public AdminRequestBuilder(@jakarta.annotation.Nonnull final HashMap<String, Object> pathParameters, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/admin", pathParameters);
    }
    /**
     * Instantiates a new AdminRequestBuilder and sets the default values.
     * @param rawUrl The raw URL to use for the request builder.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public AdminRequestBuilder(@jakarta.annotation.Nonnull final String rawUrl, @jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}/admin", rawUrl);
    }
}
