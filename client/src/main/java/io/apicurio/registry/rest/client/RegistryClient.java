package io.apicurio.registry.rest.client;

import com.microsoft.kiota.ApiClientBuilder;
import com.microsoft.kiota.BaseRequestBuilder;
import com.microsoft.kiota.RequestAdapter;
import com.microsoft.kiota.serialization.FormParseNodeFactory;
import com.microsoft.kiota.serialization.FormSerializationWriterFactory;
import com.microsoft.kiota.serialization.JsonParseNodeFactory;
import com.microsoft.kiota.serialization.JsonSerializationWriterFactory;
import com.microsoft.kiota.serialization.MultipartSerializationWriterFactory;
import com.microsoft.kiota.serialization.ParseNodeFactoryRegistry;
import com.microsoft.kiota.serialization.SerializationWriterFactoryRegistry;
import com.microsoft.kiota.serialization.TextParseNodeFactory;
import com.microsoft.kiota.serialization.TextSerializationWriterFactory;
import io.apicurio.registry.rest.client.admin.AdminRequestBuilder;
import io.apicurio.registry.rest.client.groups.GroupsRequestBuilder;
import io.apicurio.registry.rest.client.ids.IdsRequestBuilder;
import io.apicurio.registry.rest.client.search.SearchRequestBuilder;
import io.apicurio.registry.rest.client.system.SystemRequestBuilder;
import io.apicurio.registry.rest.client.users.UsersRequestBuilder;
import java.util.HashMap;
import java.util.Objects;
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
@jakarta.annotation.Generated("com.microsoft.kiota")
public class RegistryClient extends BaseRequestBuilder {
    /**
     * The admin property
     */
    @jakarta.annotation.Nonnull
    public AdminRequestBuilder admin() {
        return new AdminRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * Collection of the groups in the registry.
     */
    @jakarta.annotation.Nonnull
    public GroupsRequestBuilder groups() {
        return new GroupsRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * The ids property
     */
    @jakarta.annotation.Nonnull
    public IdsRequestBuilder ids() {
        return new IdsRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * The search property
     */
    @jakarta.annotation.Nonnull
    public SearchRequestBuilder search() {
        return new SearchRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * The system property
     */
    @jakarta.annotation.Nonnull
    public SystemRequestBuilder system() {
        return new SystemRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * The users property
     */
    @jakarta.annotation.Nonnull
    public UsersRequestBuilder users() {
        return new UsersRequestBuilder(pathParameters, requestAdapter);
    }
    /**
     * Instantiates a new RegistryClient and sets the default values.
     * @param requestAdapter The request adapter to use to execute the requests.
     */
    public RegistryClient(@jakarta.annotation.Nonnull final RequestAdapter requestAdapter) {
        super(requestAdapter, "{+baseurl}");
        this.pathParameters = new HashMap<>();
        ApiClientBuilder.registerDefaultSerializer(JsonSerializationWriterFactory.class);
        ApiClientBuilder.registerDefaultSerializer(TextSerializationWriterFactory.class);
        ApiClientBuilder.registerDefaultSerializer(FormSerializationWriterFactory.class);
        ApiClientBuilder.registerDefaultSerializer(MultipartSerializationWriterFactory.class);
        ApiClientBuilder.registerDefaultDeserializer(JsonParseNodeFactory.class);
        ApiClientBuilder.registerDefaultDeserializer(FormParseNodeFactory.class);
        ApiClientBuilder.registerDefaultDeserializer(TextParseNodeFactory.class);
    }
}
