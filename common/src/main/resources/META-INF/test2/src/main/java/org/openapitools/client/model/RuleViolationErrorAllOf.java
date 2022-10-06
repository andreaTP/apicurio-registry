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
import org.openapitools.client.model.RuleViolationCause;

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
 * RuleViolationErrorAllOf
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2022-10-06T10:56:59.396445+01:00[Europe/Lisbon]")
public class RuleViolationErrorAllOf {
  public static final String SERIALIZED_NAME_CAUSES = "causes";
  @SerializedName(SERIALIZED_NAME_CAUSES)
  private List<RuleViolationCause> causes = new ArrayList<>();

  public RuleViolationErrorAllOf() { 
  }

  public RuleViolationErrorAllOf causes(List<RuleViolationCause> causes) {
    
    this.causes = causes;
    return this;
  }

  public RuleViolationErrorAllOf addCausesItem(RuleViolationCause causesItem) {
    this.causes.add(causesItem);
    return this;
  }

   /**
   * List of rule violation causes.
   * @return causes
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "List of rule violation causes.")

  public List<RuleViolationCause> getCauses() {
    return causes;
  }


  public void setCauses(List<RuleViolationCause> causes) {
    this.causes = causes;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RuleViolationErrorAllOf ruleViolationErrorAllOf = (RuleViolationErrorAllOf) o;
    return Objects.equals(this.causes, ruleViolationErrorAllOf.causes);
  }

  @Override
  public int hashCode() {
    return Objects.hash(causes);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RuleViolationErrorAllOf {\n");
    sb.append("    causes: ").append(toIndentedString(causes)).append("\n");
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
    openapiFields.add("causes");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("causes");
  }

 /**
  * Validates the JSON Object and throws an exception if issues found
  *
  * @param jsonObj JSON Object
  * @throws IOException if the JSON Object is invalid with respect to RuleViolationErrorAllOf
  */
  public static void validateJsonObject(JsonObject jsonObj) throws IOException {
      if (jsonObj == null) {
        if (RuleViolationErrorAllOf.openapiRequiredFields.isEmpty()) {
          return;
        } else { // has required fields
          throw new IllegalArgumentException(String.format("The required field(s) %s in RuleViolationErrorAllOf is not found in the empty JSON string", RuleViolationErrorAllOf.openapiRequiredFields.toString()));
        }
      }

      Set<Entry<String, JsonElement>> entries = jsonObj.entrySet();
      // check to see if the JSON string contains additional fields
      for (Entry<String, JsonElement> entry : entries) {
        if (!RuleViolationErrorAllOf.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `RuleViolationErrorAllOf` properties. JSON: %s", entry.getKey(), jsonObj.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : RuleViolationErrorAllOf.openapiRequiredFields) {
        if (jsonObj.get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonObj.toString()));
        }
      }
      JsonArray jsonArraycauses = jsonObj.getAsJsonArray("causes");
      if (jsonArraycauses != null) {
        // ensure the json data is an array
        if (!jsonObj.get("causes").isJsonArray()) {
          throw new IllegalArgumentException(String.format("Expected the field `causes` to be an array in the JSON string but got `%s`", jsonObj.get("causes").toString()));
        }

        // validate the optional field `causes` (array)
        for (int i = 0; i < jsonArraycauses.size(); i++) {
          RuleViolationCause.validateJsonObject(jsonArraycauses.get(i).getAsJsonObject());
        };
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!RuleViolationErrorAllOf.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'RuleViolationErrorAllOf' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<RuleViolationErrorAllOf> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(RuleViolationErrorAllOf.class));

       return (TypeAdapter<T>) new TypeAdapter<RuleViolationErrorAllOf>() {
           @Override
           public void write(JsonWriter out, RuleViolationErrorAllOf value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public RuleViolationErrorAllOf read(JsonReader in) throws IOException {
             JsonObject jsonObj = elementAdapter.read(in).getAsJsonObject();
             validateJsonObject(jsonObj);
             return thisAdapter.fromJsonTree(jsonObj);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of RuleViolationErrorAllOf given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of RuleViolationErrorAllOf
  * @throws IOException if the JSON string is invalid with respect to RuleViolationErrorAllOf
  */
  public static RuleViolationErrorAllOf fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, RuleViolationErrorAllOf.class);
  }

 /**
  * Convert an instance of RuleViolationErrorAllOf to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

