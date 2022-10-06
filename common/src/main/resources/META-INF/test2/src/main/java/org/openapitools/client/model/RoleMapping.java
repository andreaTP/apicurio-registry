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
import org.openapitools.client.model.RoleType;

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
 * The mapping between a user/principal and their role.
 */
@ApiModel(description = "The mapping between a user/principal and their role.")
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2022-10-06T10:56:59.396445+01:00[Europe/Lisbon]")
public class RoleMapping {
  public static final String SERIALIZED_NAME_PRINCIPAL_ID = "principalId";
  @SerializedName(SERIALIZED_NAME_PRINCIPAL_ID)
  private String principalId;

  public static final String SERIALIZED_NAME_ROLE = "role";
  @SerializedName(SERIALIZED_NAME_ROLE)
  private RoleType role;

  public static final String SERIALIZED_NAME_PRINCIPAL_NAME = "principalName";
  @SerializedName(SERIALIZED_NAME_PRINCIPAL_NAME)
  private String principalName;

  public RoleMapping() { 
  }

  public RoleMapping principalId(String principalId) {
    
    this.principalId = principalId;
    return this;
  }

   /**
   * 
   * @return principalId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public String getPrincipalId() {
    return principalId;
  }


  public void setPrincipalId(String principalId) {
    this.principalId = principalId;
  }


  public RoleMapping role(RoleType role) {
    
    this.role = role;
    return this;
  }

   /**
   * Get role
   * @return role
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")

  public RoleType getRole() {
    return role;
  }


  public void setRole(RoleType role) {
    this.role = role;
  }


  public RoleMapping principalName(String principalName) {
    
    this.principalName = principalName;
    return this;
  }

   /**
   * A friendly name for the principal.
   * @return principalName
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "A friendly name for the principal.")

  public String getPrincipalName() {
    return principalName;
  }


  public void setPrincipalName(String principalName) {
    this.principalName = principalName;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RoleMapping roleMapping = (RoleMapping) o;
    return Objects.equals(this.principalId, roleMapping.principalId) &&
        Objects.equals(this.role, roleMapping.role) &&
        Objects.equals(this.principalName, roleMapping.principalName);
  }

  @Override
  public int hashCode() {
    return Objects.hash(principalId, role, principalName);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RoleMapping {\n");
    sb.append("    principalId: ").append(toIndentedString(principalId)).append("\n");
    sb.append("    role: ").append(toIndentedString(role)).append("\n");
    sb.append("    principalName: ").append(toIndentedString(principalName)).append("\n");
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
    openapiFields.add("principalId");
    openapiFields.add("role");
    openapiFields.add("principalName");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("principalId");
    openapiRequiredFields.add("role");
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to RoleMapping
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (RoleMapping.openapiRequiredFields.isEmpty()) {
          return;
        } else { // has required fields
          throw new IllegalArgumentException(String.format("The required field(s) %s in RoleMapping is not found in the empty JSON string", RoleMapping.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!RoleMapping.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `RoleMapping` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : RoleMapping.openapiRequiredFields) {
        if (jsonObj.get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonObj.toString()));
        }
      }
      if (jsonObj.get("principalId") != null && !jsonObj.get("principalId").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `principalId` to be a primitive type in the JSON string but got `%s`", jsonObj.get("principalId").toString()));
      }
      if (jsonObj.get("principalName") != null && !jsonObj.get("principalName").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `principalName` to be a primitive type in the JSON string but got `%s`", jsonObj.get("principalName").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!RoleMapping.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'RoleMapping' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<RoleMapping> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(RoleMapping.class));

       return (TypeAdapter<T>) new TypeAdapter<RoleMapping>() {
           @Override
           public void write(JsonWriter out, RoleMapping value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public RoleMapping read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of RoleMapping given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of RoleMapping
  * @throws IOException if the JSON string is invalid with respect to RoleMapping
  */
  public static RoleMapping fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, RoleMapping.class);
  }

 /**
  * Convert an instance of RoleMapping to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

