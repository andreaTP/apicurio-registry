/*
Apicurio Registry API [v2]

Apicurio Registry is a datastore for standard event schemas and API designs. Apicurio Registry enables developers to manage and share the structure of their data using a REST interface. For example, client applications can dynamically push or pull the latest updates to or from the registry without needing to redeploy. Apicurio Registry also enables developers to create rules that govern how registry content can evolve over time. For example, this includes rules for content validation and version compatibility.  The Apicurio Registry REST API enables client applications to manage the artifacts in the registry. This API provides create, read, update, and delete operations for schema and API artifacts, rules, versions, and metadata.   The supported artifact types include: - Apache Avro schema - AsyncAPI specification - Google protocol buffers - GraphQL schema - JSON Schema - Kafka Connect schema - OpenAPI specification - Web Services Description Language - XML Schema Definition   **Important**: The Apicurio Registry REST API is available from `https://MY-REGISTRY-URL/apis/registry/v2` by default. Therefore you must prefix all API operation paths with `../apis/registry/v2` in this case. For example: `../apis/registry/v2/ids/globalIds/{globalId}`. 

API version: 2.3.1-SNAPSHOT
Contact: apicurio@lists.jboss.org
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
	"fmt"
)

// RuleType 
type RuleType string

// List of RuleType
const (
	VALIDITY RuleType = "VALIDITY"
	COMPATIBILITY RuleType = "COMPATIBILITY"
)

// All allowed values of RuleType enum
var AllowedRuleTypeEnumValues = []RuleType{
	"VALIDITY",
	"COMPATIBILITY",
}

func (v *RuleType) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := RuleType(value)
	for _, existing := range AllowedRuleTypeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid RuleType", value)
}

// NewRuleTypeFromValue returns a pointer to a valid RuleType
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewRuleTypeFromValue(v string) (*RuleType, error) {
	ev := RuleType(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for RuleType: valid values are %v", v, AllowedRuleTypeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v RuleType) IsValid() bool {
	for _, existing := range AllowedRuleTypeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to RuleType value
func (v RuleType) Ptr() *RuleType {
	return &v
}

type NullableRuleType struct {
	value *RuleType
	isSet bool
}

func (v NullableRuleType) Get() *RuleType {
	return v.value
}

func (v *NullableRuleType) Set(val *RuleType) {
	v.value = val
	v.isSet = true
}

func (v NullableRuleType) IsSet() bool {
	return v.isSet
}

func (v *NullableRuleType) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRuleType(val *RuleType) *NullableRuleType {
	return &NullableRuleType{value: val, isSet: true}
}

func (v NullableRuleType) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRuleType) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

