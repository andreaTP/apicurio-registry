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


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.ArtifactReference;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.openapitools.client.JSON;

/**
 * 
 */
@ApiModel(description = "")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2022-10-06T10:56:59.396445+01:00[Europe/Lisbon]")
public class ContentCreateRequest {
  public static final String SERIALIZED_NAME_CONTENT = "content";
  @SerializedName(SERIALIZED_NAME_CONTENT)
  private String content;

  public static final String SERIALIZED_NAME_REFERENCES = "references";
  @SerializedName(SERIALIZED_NAME_REFERENCES)
  private List<ArtifactReference> references = new ArrayList<>();

  public ContentCreateRequest() { 
  }

  public ContentCreateRequest content(String content) {
    
    this.content = content;
    return this;
  }

   /**
   * Raw content of the artifact or a valid (and accessible) URL where the content can be found.
   * @return content
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "", required = true, value = "Raw content of the artifact or a valid (and accessible) URL where the content can be found.")

  public String getContent() {
    return content;
  }


  public void setContent(String content) {
    this.content = content;
  }


  public ContentCreateRequest references(List<ArtifactReference> references) {
    
    this.references = references;
    return this;
  }

  public ContentCreateRequest addReferencesItem(ArtifactReference referencesItem) {
    this.references.add(referencesItem);
    return this;
  }

   /**
   * Collection of references to other artifacts.
   * @return references
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "Collection of references to other artifacts.")

  public List<ArtifactReference> getReferences() {
    return references;
  }


  public void setReferences(List<ArtifactReference> references) {
    this.references = references;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ContentCreateRequest contentCreateRequest = (ContentCreateRequest) o;
    return Objects.equals(this.content, contentCreateRequest.content) &&
        Objects.equals(this.references, contentCreateRequest.references);
  }

  @Override
  public int hashCode() {
    return Objects.hash(content, references);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ContentCreateRequest {\n");
    sb.append("    content: ").append(toIndentedString(content)).append("\n");
    sb.append("    references: ").append(toIndentedString(references)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("content");
    openapiFields.add("references");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("content");
    openapiRequiredFields.add("references");
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to ContentCreateRequest
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (ContentCreateRequest.openapiRequiredFields.isEmpty()) {
          return;
        } else { // has required fields
          throw new IllegalArgumentException(String.format("The required field(s) %s in ContentCreateRequest is not found in the empty JSON string", ContentCreateRequest.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!ContentCreateRequest.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `ContentCreateRequest` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : ContentCreateRequest.openapiRequiredFields) {
        if (jsonObj.get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonObj.toString()));
        }
      }
      if (jsonObj.get("content") != null && !jsonObj.get("content").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `content` to be a primitive type in the JSON string but got `%s`", jsonObj.get("content").toString()));
      }
      JsonArray jsonArrayreferences = jsonObj.getAsJsonArray("references");
      if (jsonArrayreferences != null) {
        // ensure the json data is an array
        if (!jsonObj.get("references").isJsonArray()) {
          throw new IllegalArgumentException(String.format("Expected the field `references` to be an array in the JSON string but got `%s`", jsonObj.get("references").toString()));
        }

        // validate the optional field `references` (array)
        for (int i = 0; i < jsonArrayreferences.size(); i++) {
          ArtifactReference.validateJsonObject(jsonArrayreferences.get(i).getAsJsonObject());
        };
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!ContentCreateRequest.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'ContentCreateRequest' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<ContentCreateRequest> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(ContentCreateRequest.class));

       return (TypeAdapter<T>) new TypeAdapter<ContentCreateRequest>() {
           @Override
           public void write(JsonWriter out, ContentCreateRequest value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public ContentCreateRequest read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of ContentCreateRequest given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of ContentCreateRequest
  * @throws IOException if the JSON string is invalid with respect to ContentCreateRequest
  */
  public static ContentCreateRequest fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, ContentCreateRequest.class);
  }

 /**
  * Convert an instance of ContentCreateRequest to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

