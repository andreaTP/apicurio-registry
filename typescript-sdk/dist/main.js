import { apiClientProxifier as oe, ParseNodeFactoryRegistry as re, AnonymousAuthenticationProvider as ie } from "@microsoft/kiota-abstractions";
import { FetchRequestAdapter as se } from "@microsoft/kiota-http-fetchlibrary";
import { JsonParseNodeFactory as pe, JsonSerializationWriterFactory as de } from "@microsoft/kiota-serialization-json";
function H(t) {
  return je;
}
function d(t) {
  return Fe;
}
function S(t) {
  return ve;
}
function ue(t) {
  return ze;
}
function Y(t) {
  return Oe;
}
function le(t) {
  return De;
}
function z(t) {
  return Pe;
}
function _(t) {
  return Ae;
}
function ce(t) {
  return Ee;
}
function me(t) {
  return Ue;
}
function J(t) {
  return we;
}
function K(t) {
  return xe;
}
function r(t) {
  return We;
}
function ge(t) {
  return Le;
}
function a(t) {
  return X;
}
function k(t) {
  return $e;
}
function ye(t) {
  return Ge;
}
function i(t) {
  return He;
}
function fe(t) {
  return Ye;
}
function Q(t) {
  return _e;
}
function Be(t) {
  return Je;
}
function Me(t) {
  return Ke;
}
function Te(t) {
  return ke;
}
function qe(t) {
  return Qe;
}
function Ce(t) {
  return Xe;
}
function Ve(t) {
  return Ze;
}
function Re(t) {
  return et;
}
function Ie(t) {
  return at;
}
function Ne(t) {
  return nt;
}
function Se(t) {
  return tt;
}
function be(t) {
  return ot;
}
function h(t) {
  return rt;
}
function p(t) {
  return it;
}
function he(t) {
  return st;
}
function je(t = {}) {
  return {
    artifactId: (e) => {
      t.artifactId = e.getStringValue();
    },
    artifactType: (e) => {
      t.artifactType = e.getStringValue();
    },
    createdOn: (e) => {
      t.createdOn = e.getDateValue();
    },
    description: (e) => {
      t.description = e.getStringValue();
    },
    groupId: (e) => {
      t.groupId = e.getStringValue();
    },
    labels: (e) => {
      t.labels = e.getObjectValue(r);
    },
    modifiedBy: (e) => {
      t.modifiedBy = e.getStringValue();
    },
    modifiedOn: (e) => {
      t.modifiedOn = e.getDateValue();
    },
    name: (e) => {
      t.name = e.getStringValue();
    },
    owner: (e) => {
      t.owner = e.getStringValue();
    }
  };
}
function Fe(t = {}) {
  return {
    artifactId: (e) => {
      t.artifactId = e.getStringValue();
    },
    groupId: (e) => {
      t.groupId = e.getStringValue();
    },
    name: (e) => {
      t.name = e.getStringValue();
    },
    version: (e) => {
      t.version = e.getStringValue();
    }
  };
}
function ve(t = {}) {
  return {
    artifacts: (e) => {
      t.artifacts = e.getCollectionOfObjectValues(Be);
    },
    count: (e) => {
      t.count = e.getNumberValue();
    }
  };
}
function ze(t = {}) {
  return {
    name: (e) => {
      t.name = e.getStringValue();
    }
  };
}
function Oe(t = {}) {
  return {
    artifactId: (e) => {
      t.artifactId = e.getStringValue();
    },
    branchId: (e) => {
      t.branchId = e.getStringValue();
    },
    createdOn: (e) => {
      t.createdOn = e.getDateValue();
    },
    description: (e) => {
      t.description = e.getStringValue();
    },
    groupId: (e) => {
      t.groupId = e.getStringValue();
    },
    modifiedBy: (e) => {
      t.modifiedBy = e.getStringValue();
    },
    modifiedOn: (e) => {
      t.modifiedOn = e.getDateValue();
    },
    owner: (e) => {
      t.owner = e.getStringValue();
    },
    systemDefined: (e) => {
      t.systemDefined = e.getBooleanValue();
    }
  };
}
function De(t = {}) {
  return {
    branches: (e) => {
      t.branches = e.getCollectionOfObjectValues(Me);
    },
    count: (e) => {
      t.count = e.getNumberValue();
    }
  };
}
function Pe(t = {}) {
  return {
    commentId: (e) => {
      t.commentId = e.getStringValue();
    },
    createdOn: (e) => {
      t.createdOn = e.getDateValue();
    },
    owner: (e) => {
      t.owner = e.getStringValue();
    },
    value: (e) => {
      t.value = e.getStringValue();
    }
  };
}
function Ae(t = {}) {
  return {
    description: (e) => {
      t.description = e.getStringValue();
    },
    label: (e) => {
      t.label = e.getStringValue();
    },
    name: (e) => {
      t.name = e.getStringValue();
    },
    type: (e) => {
      t.type = e.getStringValue();
    },
    value: (e) => {
      t.value = e.getStringValue();
    }
  };
}
function Ee(t = {}) {
  return {
    artifact: (e) => {
      t.artifact = e.getObjectValue(H);
    },
    version: (e) => {
      t.version = e.getObjectValue(h);
    }
  };
}
function Ue(t = {}) {
  return {
    downloadId: (e) => {
      t.downloadId = e.getStringValue();
    },
    href: (e) => {
      t.href = e.getStringValue();
    }
  };
}
function we(t = {}) {
  return {
    createdOn: (e) => {
      t.createdOn = e.getDateValue();
    },
    description: (e) => {
      t.description = e.getStringValue();
    },
    groupId: (e) => {
      t.groupId = e.getStringValue();
    },
    labels: (e) => {
      t.labels = e.getObjectValue(r);
    },
    modifiedBy: (e) => {
      t.modifiedBy = e.getStringValue();
    },
    modifiedOn: (e) => {
      t.modifiedOn = e.getDateValue();
    },
    owner: (e) => {
      t.owner = e.getStringValue();
    }
  };
}
function xe(t = {}) {
  return {
    count: (e) => {
      t.count = e.getNumberValue();
    },
    groups: (e) => {
      t.groups = e.getCollectionOfObjectValues(Te);
    }
  };
}
function We(t = {}) {
  return {};
}
function Le(t = {}) {
  return {
    maxArtifactDescriptionLengthChars: (e) => {
      t.maxArtifactDescriptionLengthChars = e.getNumberValue();
    },
    maxArtifactLabelsCount: (e) => {
      t.maxArtifactLabelsCount = e.getNumberValue();
    },
    maxArtifactNameLengthChars: (e) => {
      t.maxArtifactNameLengthChars = e.getNumberValue();
    },
    maxArtifactPropertiesCount: (e) => {
      t.maxArtifactPropertiesCount = e.getNumberValue();
    },
    maxArtifactsCount: (e) => {
      t.maxArtifactsCount = e.getNumberValue();
    },
    maxLabelSizeBytes: (e) => {
      t.maxLabelSizeBytes = e.getNumberValue();
    },
    maxPropertyKeySizeBytes: (e) => {
      t.maxPropertyKeySizeBytes = e.getNumberValue();
    },
    maxPropertyValueSizeBytes: (e) => {
      t.maxPropertyValueSizeBytes = e.getNumberValue();
    },
    maxRequestsPerSecondCount: (e) => {
      t.maxRequestsPerSecondCount = e.getNumberValue();
    },
    maxSchemaSizeBytes: (e) => {
      t.maxSchemaSizeBytes = e.getNumberValue();
    },
    maxTotalSchemasCount: (e) => {
      t.maxTotalSchemasCount = e.getNumberValue();
    },
    maxVersionsPerArtifactCount: (e) => {
      t.maxVersionsPerArtifactCount = e.getNumberValue();
    }
  };
}
function X(t = {}) {
  return {
    detail: (e) => {
      t.detail = e.getStringValue();
    },
    instance: (e) => {
      t.instance = e.getStringValue();
    },
    name: (e) => {
      t.nameEscaped = e.getStringValue();
    },
    status: (e) => {
      t.status = e.getNumberValue();
    },
    title: (e) => {
      t.title = e.getStringValue();
    },
    type: (e) => {
      t.type = e.getStringValue();
    }
  };
}
function $e(t = {}) {
  return {
    principalId: (e) => {
      t.principalId = e.getStringValue();
    },
    principalName: (e) => {
      t.principalName = e.getStringValue();
    },
    role: (e) => {
      t.role = e.getEnumValue(Vt);
    }
  };
}
function Ge(t = {}) {
  return {
    count: (e) => {
      t.count = e.getNumberValue();
    },
    roleMappings: (e) => {
      t.roleMappings = e.getCollectionOfObjectValues(k);
    }
  };
}
function He(t = {}) {
  return {
    config: (e) => {
      t.config = e.getStringValue();
    },
    ruleType: (e) => {
      t.ruleType = e.getEnumValue(u);
    }
  };
}
function Ye(t = {}) {
  return {
    context: (e) => {
      t.context = e.getStringValue();
    },
    description: (e) => {
      t.description = e.getStringValue();
    }
  };
}
function _e(t = {}) {
  return {
    ...X(t),
    causes: (e) => {
      t.causes = e.getCollectionOfObjectValues(fe);
    }
  };
}
function Je(t = {}) {
  return {
    artifactId: (e) => {
      t.artifactId = e.getStringValue();
    },
    artifactType: (e) => {
      t.artifactType = e.getStringValue();
    },
    createdOn: (e) => {
      t.createdOn = e.getDateValue();
    },
    description: (e) => {
      t.description = e.getStringValue();
    },
    groupId: (e) => {
      t.groupId = e.getStringValue();
    },
    labels: (e) => {
      t.labels = e.getObjectValue(r);
    },
    modifiedBy: (e) => {
      t.modifiedBy = e.getStringValue();
    },
    modifiedOn: (e) => {
      t.modifiedOn = e.getDateValue();
    },
    name: (e) => {
      t.name = e.getStringValue();
    },
    owner: (e) => {
      t.owner = e.getStringValue();
    }
  };
}
function Ke(t = {}) {
  return {
    artifactId: (e) => {
      t.artifactId = e.getStringValue();
    },
    branchId: (e) => {
      t.branchId = e.getStringValue();
    },
    createdOn: (e) => {
      t.createdOn = e.getDateValue();
    },
    description: (e) => {
      t.description = e.getStringValue();
    },
    groupId: (e) => {
      t.groupId = e.getStringValue();
    },
    modifiedBy: (e) => {
      t.modifiedBy = e.getStringValue();
    },
    modifiedOn: (e) => {
      t.modifiedOn = e.getDateValue();
    },
    owner: (e) => {
      t.owner = e.getStringValue();
    },
    systemDefined: (e) => {
      t.systemDefined = e.getBooleanValue();
    }
  };
}
function ke(t = {}) {
  return {
    createdOn: (e) => {
      t.createdOn = e.getDateValue();
    },
    description: (e) => {
      t.description = e.getStringValue();
    },
    groupId: (e) => {
      t.groupId = e.getStringValue();
    },
    labels: (e) => {
      t.labels = e.getObjectValue(r);
    },
    modifiedBy: (e) => {
      t.modifiedBy = e.getStringValue();
    },
    modifiedOn: (e) => {
      t.modifiedOn = e.getDateValue();
    },
    owner: (e) => {
      t.owner = e.getStringValue();
    }
  };
}
function Qe(t = {}) {
  return {
    artifactId: (e) => {
      t.artifactId = e.getStringValue();
    },
    artifactType: (e) => {
      t.artifactType = e.getStringValue();
    },
    contentId: (e) => {
      t.contentId = e.getNumberValue();
    },
    createdOn: (e) => {
      t.createdOn = e.getDateValue();
    },
    description: (e) => {
      t.description = e.getStringValue();
    },
    globalId: (e) => {
      t.globalId = e.getNumberValue();
    },
    groupId: (e) => {
      t.groupId = e.getStringValue();
    },
    labels: (e) => {
      t.labels = e.getObjectValue(r);
    },
    modifiedBy: (e) => {
      t.modifiedBy = e.getStringValue();
    },
    modifiedOn: (e) => {
      t.modifiedOn = e.getDateValue();
    },
    name: (e) => {
      t.name = e.getStringValue();
    },
    owner: (e) => {
      t.owner = e.getStringValue();
    },
    state: (e) => {
      t.state = e.getEnumValue(v);
    },
    version: (e) => {
      t.version = e.getStringValue();
    }
  };
}
function Xe(t = {}) {
  return {
    snapshotId: (e) => {
      t.snapshotId = e.getStringValue();
    }
  };
}
function Ze(t = {}) {
  return {
    builtOn: (e) => {
      t.builtOn = e.getDateValue();
    },
    description: (e) => {
      t.description = e.getStringValue();
    },
    name: (e) => {
      t.name = e.getStringValue();
    },
    version: (e) => {
      t.version = e.getStringValue();
    }
  };
}
function et(t = {}) {
  return {
    admin: (e) => {
      t.admin = e.getBooleanValue();
    },
    developer: (e) => {
      t.developer = e.getBooleanValue();
    },
    displayName: (e) => {
      t.displayName = e.getStringValue();
    },
    username: (e) => {
      t.username = e.getStringValue();
    },
    viewer: (e) => {
      t.viewer = e.getBooleanValue();
    }
  };
}
function tt(t = {}) {
  return {
    auth: (e) => {
      t.auth = e.getObjectValue(Ie);
    },
    features: (e) => {
      t.features = e.getObjectValue(Ne);
    },
    ui: (e) => {
      t.ui = e.getObjectValue(be);
    }
  };
}
function at(t = {}) {
  return {
    obacEnabled: (e) => {
      t.obacEnabled = e.getBooleanValue();
    },
    options: (e) => {
      t.options = e.getObjectValue(r);
    },
    rbacEnabled: (e) => {
      t.rbacEnabled = e.getBooleanValue();
    },
    type: (e) => {
      t.type = e.getEnumValue(Rt);
    }
  };
}
function nt(t = {}) {
  return {
    breadcrumbs: (e) => {
      t.breadcrumbs = e.getBooleanValue();
    },
    deleteArtifact: (e) => {
      t.deleteArtifact = e.getBooleanValue();
    },
    deleteGroup: (e) => {
      t.deleteGroup = e.getBooleanValue();
    },
    deleteVersion: (e) => {
      t.deleteVersion = e.getBooleanValue();
    },
    draftMutability: (e) => {
      t.draftMutability = e.getBooleanValue();
    },
    readOnly: (e) => {
      t.readOnly = e.getBooleanValue();
    },
    roleManagement: (e) => {
      t.roleManagement = e.getBooleanValue();
    },
    settings: (e) => {
      t.settings = e.getBooleanValue();
    }
  };
}
function ot(t = {}) {
  return {
    contextPath: (e) => {
      t.contextPath = e.getStringValue();
    },
    navPrefixPath: (e) => {
      t.navPrefixPath = e.getStringValue();
    },
    oaiDocsUrl: (e) => {
      t.oaiDocsUrl = e.getStringValue();
    }
  };
}
function rt(t = {}) {
  return {
    artifactId: (e) => {
      t.artifactId = e.getStringValue();
    },
    artifactType: (e) => {
      t.artifactType = e.getStringValue();
    },
    contentId: (e) => {
      t.contentId = e.getNumberValue();
    },
    createdOn: (e) => {
      t.createdOn = e.getDateValue();
    },
    description: (e) => {
      t.description = e.getStringValue();
    },
    globalId: (e) => {
      t.globalId = e.getNumberValue();
    },
    groupId: (e) => {
      t.groupId = e.getStringValue();
    },
    labels: (e) => {
      t.labels = e.getObjectValue(r);
    },
    modifiedBy: (e) => {
      t.modifiedBy = e.getStringValue();
    },
    modifiedOn: (e) => {
      t.modifiedOn = e.getDateValue();
    },
    name: (e) => {
      t.name = e.getStringValue();
    },
    owner: (e) => {
      t.owner = e.getStringValue();
    },
    state: (e) => {
      t.state = e.getEnumValue(v);
    },
    version: (e) => {
      t.version = e.getStringValue();
    }
  };
}
function it(t = {}) {
  return {
    count: (e) => {
      t.count = e.getNumberValue();
    },
    versions: (e) => {
      t.versions = e.getCollectionOfObjectValues(qe);
    }
  };
}
function st(t = {}) {
  return {
    state: (e) => {
      t.state = e.getEnumValue(v);
    }
  };
}
function pt(t, e = {}) {
  e && (t.writeStringValue("version", e.version), t.writeAdditionalData(e.additionalData));
}
function dt(t, e = {}) {
  e && (t.writeStringValue("artifactId", e.artifactId), t.writeStringValue("groupId", e.groupId), t.writeStringValue("name", e.name), t.writeStringValue("version", e.version), t.writeAdditionalData(e.additionalData));
}
function ut(t, e = {}) {
  e && (t.writeStringValue("artifactId", e.artifactId), t.writeStringValue("artifactType", e.artifactType), t.writeStringValue("description", e.description), t.writeObjectValue("firstVersion", e.firstVersion, Z), t.writeObjectValue("labels", e.labels, s), t.writeStringValue("name", e.name), t.writeAdditionalData(e.additionalData));
}
function lt(t, e = {}) {
  e && (t.writeStringValue("branchId", e.branchId), t.writeStringValue("description", e.description), t.writeCollectionOfPrimitiveValues("versions", e.versions), t.writeAdditionalData(e.additionalData));
}
function ct(t, e = {}) {
  e && (t.writeStringValue("description", e.description), t.writeStringValue("groupId", e.groupId), t.writeObjectValue("labels", e.labels, s), t.writeAdditionalData(e.additionalData));
}
function j(t, e = {}) {
  e && (t.writeStringValue("config", e.config), t.writeEnumValue("ruleType", e.ruleType), t.writeAdditionalData(e.additionalData));
}
function Z(t, e = {}) {
  e && (t.writeCollectionOfPrimitiveValues("branches", e.branches), t.writeObjectValue("content", e.content, te), t.writeStringValue("description", e.description), t.writeBooleanValue("isDraft", e.isDraft), t.writeObjectValue("labels", e.labels, s), t.writeStringValue("name", e.name), t.writeStringValue("version", e.version), t.writeAdditionalData(e.additionalData));
}
function mt(t, e = {}) {
  e && (t.writeStringValue("description", e.description), t.writeObjectValue("labels", e.labels, s), t.writeStringValue("name", e.name), t.writeStringValue("owner", e.owner), t.writeAdditionalData(e.additionalData));
}
function gt(t, e = {}) {
  e && (t.writeStringValue("description", e.description), t.writeAdditionalData(e.additionalData));
}
function yt(t, e = {}) {
  e && (t.writeStringValue("description", e.description), t.writeObjectValue("labels", e.labels, s), t.writeAdditionalData(e.additionalData));
}
function ft(t, e = {}) {
  e && (t.writeStringValue("description", e.description), t.writeObjectValue("labels", e.labels, s), t.writeStringValue("name", e.name), t.writeAdditionalData(e.additionalData));
}
function s(t, e = {}) {
  e && t.writeAdditionalData(e.additionalData);
}
function ee(t, e = {}) {
  e && (t.writeStringValue("value", e.value), t.writeAdditionalData(e.additionalData));
}
function Bt(t, e = {}) {
  e && (t.writeCollectionOfPrimitiveValues("versions", e.versions), t.writeAdditionalData(e.additionalData));
}
function Mt(t, e = {}) {
  e && (t.writeStringValue("principalId", e.principalId), t.writeStringValue("principalName", e.principalName), t.writeEnumValue("role", e.role), t.writeAdditionalData(e.additionalData));
}
function F(t, e = {}) {
  e && (t.writeStringValue("config", e.config), t.writeEnumValue("ruleType", e.ruleType), t.writeAdditionalData(e.additionalData));
}
function Tt(t, e = {}) {
  e && (t.writeStringValue("value", e.value), t.writeAdditionalData(e.additionalData));
}
function qt(t, e = {}) {
  e && (t.writeEnumValue("role", e.role), t.writeAdditionalData(e.additionalData));
}
function te(t, e = {}) {
  e && (t.writeStringValue("content", e.content), t.writeStringValue("contentType", e.contentType), t.writeCollectionOfObjectValues("references", e.references, dt), t.writeAdditionalData(e.additionalData));
}
function Ct(t, e = {}) {
  e && (t.writeEnumValue("state", e.state), t.writeAdditionalData(e.additionalData));
}
const Vt = {
  READ_ONLY: "READ_ONLY",
  DEVELOPER: "DEVELOPER",
  ADMIN: "ADMIN"
}, u = {
  VALIDITY: "VALIDITY",
  COMPATIBILITY: "COMPATIBILITY",
  INTEGRITY: "INTEGRITY"
}, Rt = {
  None: "none",
  Basic: "basic",
  Oidc: "oidc"
}, v = {
  ENABLED: "ENABLED",
  DISABLED: "DISABLED",
  DEPRECATED: "DEPRECATED",
  DRAFT: "DRAFT"
}, It = "{+baseurl}/admin/config/artifactTypes", Nt = {
  get: {
    uriTemplate: It,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "sendCollection",
    responseBodyFactory: ue
  }
}, c = "{+baseurl}/admin/config/properties/{propertyName}", St = {
  delete: {
    uriTemplate: c,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: c,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: _
  },
  put: {
    uriTemplate: c,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: Tt,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, bt = "{+baseurl}/admin/config/properties", ht = {
  byPropertyName: {
    requestsMetadata: St,
    pathParametersMappings: ["propertyName"]
  }
}, jt = {
  get: {
    uriTemplate: bt,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "sendCollection",
    responseBodyFactory: _
  }
}, Ft = {
  artifactTypes: {
    requestsMetadata: Nt
  },
  properties: {
    requestsMetadata: jt,
    navigationMetadata: ht
  }
}, vt = "{+baseurl}/admin/export{?forBrowser*}", zt = {
  get: {
    uriTemplate: vt,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: me
  }
}, Ot = "{+baseurl}/admin/import{?requireEmptyRegistry*}", Dt = {
  post: {
    uriTemplate: Ot,
    responseBodyContentType: "application/json",
    errorMappings: {
      409: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/zip",
    requestInformationContentSetMethod: "setStreamContent"
  }
}, m = "{+baseurl}/admin/roleMappings/{principalId}", Pt = {
  delete: {
    uriTemplate: m,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: m,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: k
  },
  put: {
    uriTemplate: m,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: qt,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, O = "{+baseurl}/admin/roleMappings{?limit*,offset*}", At = {
  byPrincipalId: {
    requestsMetadata: Pt,
    pathParametersMappings: ["principalId"]
  }
}, Et = {
  get: {
    uriTemplate: O,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: ye
  },
  post: {
    uriTemplate: O,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: Mt,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, g = "{+baseurl}/admin/rules/{ruleType}", Ut = {
  delete: {
    uriTemplate: g,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: g,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: i
  },
  put: {
    uriTemplate: g,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: i,
    requestBodyContentType: "application/json",
    requestBodySerializer: F,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, y = "{+baseurl}/admin/rules", wt = {
  byRuleType: {
    requestsMetadata: Ut,
    pathParametersMappings: ["ruleType"]
  }
}, xt = {
  delete: {
    uriTemplate: y,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: y,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "sendCollectionOfEnum",
    enumObject: u
  },
  post: {
    uriTemplate: y,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      409: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: j,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, Wt = "{+baseurl}/admin/snapshots", Lt = {
  post: {
    uriTemplate: Wt,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: Ce
  }
}, $t = {
  config: {
    navigationMetadata: Ft
  },
  exportEscaped: {
    requestsMetadata: zt
  },
  importEscaped: {
    requestsMetadata: Dt
  },
  roleMappings: {
    requestsMetadata: Et,
    navigationMetadata: At
  },
  rules: {
    requestsMetadata: xt,
    navigationMetadata: wt
  },
  snapshots: {
    requestsMetadata: Lt
  }
}, f = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/branches/{branchId}/versions{?limit*,offset*}", Gt = {
  get: {
    uriTemplate: f,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: p
  },
  post: {
    uriTemplate: f,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      409: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: pt,
    requestInformationContentSetMethod: "setContentFromParsable"
  },
  put: {
    uriTemplate: f,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: Bt,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, B = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/branches/{branchId}", Ht = {
  versions: {
    requestsMetadata: Gt
  }
}, Yt = {
  delete: {
    uriTemplate: B,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      409: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: B,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: Y
  },
  put: {
    uriTemplate: B,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: gt,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, D = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/branches{?limit*,offset*}", _t = {
  byBranchId: {
    requestsMetadata: Yt,
    navigationMetadata: Ht,
    pathParametersMappings: ["branchId"]
  }
}, Jt = {
  get: {
    uriTemplate: D,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: le
  },
  post: {
    uriTemplate: D,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      409: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: Y,
    requestBodyContentType: "application/json",
    requestBodySerializer: lt,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, M = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/rules/{ruleType}", Kt = {
  delete: {
    uriTemplate: M,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: M,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: i
  },
  put: {
    uriTemplate: M,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: i,
    requestBodyContentType: "application/json",
    requestBodySerializer: F,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, T = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/rules", kt = {
  byRuleType: {
    requestsMetadata: Kt,
    pathParametersMappings: ["ruleType"]
  }
}, Qt = {
  delete: {
    uriTemplate: T,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: T,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendCollectionOfEnum",
    enumObject: u
  },
  post: {
    uriTemplate: T,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      409: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: j,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, P = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/versions/{versionExpression}/comments/{commentId}", Xt = {
  delete: {
    uriTemplate: P,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  put: {
    uriTemplate: P,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: ee,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, A = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/versions/{versionExpression}/comments", Zt = {
  byCommentId: {
    requestsMetadata: Xt,
    pathParametersMappings: ["commentId"]
  }
}, ea = {
  get: {
    uriTemplate: A,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      500: a
    },
    adapterMethodName: "sendCollection",
    responseBodyFactory: z
  },
  post: {
    uriTemplate: A,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: z,
    requestBodyContentType: "application/json",
    requestBodySerializer: ee,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, E = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/versions/{versionExpression}/content{?references*}", ta = {
  get: {
    uriTemplate: E,
    responseBodyContentType: "*/*, application/json",
    errorMappings: {
      400: a,
      404: a,
      500: a
    },
    adapterMethodName: "sendPrimitive",
    responseBodyFactory: "ArrayBuffer"
  },
  put: {
    uriTemplate: E,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      405: a,
      409: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: te,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, aa = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/versions/{versionExpression}/references{?refType*}", na = {
  get: {
    uriTemplate: aa,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      500: a
    },
    adapterMethodName: "sendCollection",
    responseBodyFactory: d
  }
}, U = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/versions/{versionExpression}/state{?dryRun*}", oa = {
  get: {
    uriTemplate: U,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: he
  },
  put: {
    uriTemplate: U,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      409: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: Ct,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, q = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/versions/{versionExpression}", ra = {
  comments: {
    requestsMetadata: ea,
    navigationMetadata: Zt
  },
  content: {
    requestsMetadata: ta
  },
  references: {
    requestsMetadata: na
  },
  state: {
    requestsMetadata: oa
  }
}, ia = {
  delete: {
    uriTemplate: q,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      405: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: q,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: h
  },
  put: {
    uriTemplate: q,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: ft,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, w = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}/versions{?dryRun*,limit*,offset*,order*,orderby*}", sa = {
  byVersionExpression: {
    requestsMetadata: ia,
    navigationMetadata: ra,
    pathParametersMappings: ["versionExpression"]
  }
}, pa = {
  get: {
    uriTemplate: w,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: p
  },
  post: {
    uriTemplate: w,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      409: Q,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: h,
    requestBodyContentType: "application/json",
    requestBodySerializer: Z,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, C = "{+baseurl}/groups/{groupId}/artifacts/{artifactId}", da = {
  branches: {
    requestsMetadata: Jt,
    navigationMetadata: _t
  },
  rules: {
    requestsMetadata: Qt,
    navigationMetadata: kt
  },
  versions: {
    requestsMetadata: pa,
    navigationMetadata: sa
  }
}, ua = {
  delete: {
    uriTemplate: C,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      405: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: C,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: H
  },
  put: {
    uriTemplate: C,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: mt,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, V = "{+baseurl}/groups/{groupId}/artifacts{?canonical*,dryRun*,ifExists*,limit*,offset*,order*,orderby*}", la = {
  byArtifactId: {
    requestsMetadata: ua,
    navigationMetadata: da,
    pathParametersMappings: ["artifactId"]
  }
}, ca = {
  delete: {
    uriTemplate: V,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: V,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: S
  },
  post: {
    uriTemplate: V,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      409: Q,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: ce,
    requestBodyContentType: "application/json",
    requestBodySerializer: ut,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, R = "{+baseurl}/groups/{groupId}/rules/{ruleType}", ma = {
  delete: {
    uriTemplate: R,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: R,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: i
  },
  put: {
    uriTemplate: R,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: i,
    requestBodyContentType: "application/json",
    requestBodySerializer: F,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, I = "{+baseurl}/groups/{groupId}/rules", ga = {
  byRuleType: {
    requestsMetadata: ma,
    pathParametersMappings: ["ruleType"]
  }
}, ya = {
  delete: {
    uriTemplate: I,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: I,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendCollectionOfEnum",
    enumObject: u
  },
  post: {
    uriTemplate: I,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      404: a,
      409: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: j,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, N = "{+baseurl}/groups/{groupId}", fa = {
  artifacts: {
    requestsMetadata: ca,
    navigationMetadata: la
  },
  rules: {
    requestsMetadata: ya,
    navigationMetadata: ga
  }
}, Ba = {
  delete: {
    uriTemplate: N,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      405: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent"
  },
  get: {
    uriTemplate: N,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: J
  },
  put: {
    uriTemplate: N,
    responseBodyContentType: "application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendNoResponseContent",
    requestBodyContentType: "application/json",
    requestBodySerializer: yt,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, x = "{+baseurl}/groups{?limit*,offset*,order*,orderby*}", Ma = {
  byGroupId: {
    requestsMetadata: Ba,
    navigationMetadata: fa,
    pathParametersMappings: ["groupId"]
  }
}, Ta = {
  get: {
    uriTemplate: x,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: K
  },
  post: {
    uriTemplate: x,
    responseBodyContentType: "application/json",
    errorMappings: {
      409: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: J,
    requestBodyContentType: "application/json",
    requestBodySerializer: ct,
    requestInformationContentSetMethod: "setContentFromParsable"
  }
}, qa = "{+baseurl}/ids/contentHashes/{contentHash}/references", Ca = {
  get: {
    uriTemplate: qa,
    responseBodyContentType: "application/json",
    adapterMethodName: "sendCollection",
    responseBodyFactory: d
  }
}, Va = "{+baseurl}/ids/contentHashes/{contentHash}", Ra = {
  references: {
    requestsMetadata: Ca
  }
}, Ia = {
  get: {
    uriTemplate: Va,
    responseBodyContentType: "*/*, application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendPrimitive",
    responseBodyFactory: "ArrayBuffer"
  }
}, Na = {
  byContentHash: {
    requestsMetadata: Ia,
    navigationMetadata: Ra,
    pathParametersMappings: ["contentHash"]
  }
}, Sa = "{+baseurl}/ids/contentIds/{contentId}/references", ba = {
  get: {
    uriTemplate: Sa,
    responseBodyContentType: "application/json",
    adapterMethodName: "sendCollection",
    responseBodyFactory: d
  }
}, ha = "{+baseurl}/ids/contentIds/{contentId}", ja = {
  references: {
    requestsMetadata: ba
  }
}, Fa = {
  get: {
    uriTemplate: ha,
    responseBodyContentType: "*/*, application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendPrimitive",
    responseBodyFactory: "ArrayBuffer"
  }
}, va = {
  byContentId: {
    requestsMetadata: Fa,
    navigationMetadata: ja,
    pathParametersMappings: ["contentId"]
  }
}, za = "{+baseurl}/ids/globalIds/{globalId}/references{?refType*}", Oa = {
  get: {
    uriTemplate: za,
    responseBodyContentType: "application/json",
    adapterMethodName: "sendCollection",
    responseBodyFactory: d
  }
}, Da = "{+baseurl}/ids/globalIds/{globalId}{?references*,returnArtifactType*}", Pa = {
  references: {
    requestsMetadata: Oa
  }
}, Aa = {
  get: {
    uriTemplate: Da,
    responseBodyContentType: "*/*, application/json",
    errorMappings: {
      404: a,
      500: a
    },
    adapterMethodName: "sendPrimitive",
    responseBodyFactory: "ArrayBuffer"
  }
}, Ea = {
  byGlobalId: {
    requestsMetadata: Aa,
    navigationMetadata: Pa,
    pathParametersMappings: ["globalId"]
  }
}, Ua = {
  contentHashes: {
    navigationMetadata: Na
  },
  contentIds: {
    navigationMetadata: va
  },
  globalIds: {
    navigationMetadata: Ea
  }
}, W = "{+baseurl}/search/artifacts{?artifactId*,artifactType*,canonical*,contentId*,description*,globalId*,groupId*,labels*,limit*,name*,offset*,order*,orderby*}", wa = {
  get: {
    uriTemplate: W,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: S
  },
  post: {
    uriTemplate: W,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: S,
    requestInformationContentSetMethod: "setStreamContent"
  }
}, xa = "{+baseurl}/search/groups{?description*,groupId*,labels*,limit*,offset*,order*,orderby*}", Wa = {
  get: {
    uriTemplate: xa,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: K
  }
}, L = "{+baseurl}/search/versions{?artifactId*,artifactType*,canonical*,contentId*,description*,globalId*,groupId*,labels*,limit*,name*,offset*,order*,orderby*,state*,version*}", La = {
  get: {
    uriTemplate: L,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: p
  },
  post: {
    uriTemplate: L,
    responseBodyContentType: "application/json",
    errorMappings: {
      400: a,
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: p,
    requestInformationContentSetMethod: "setStreamContent"
  }
}, $a = {
  artifacts: {
    requestsMetadata: wa
  },
  groups: {
    requestsMetadata: Wa
  },
  versions: {
    requestsMetadata: La
  }
}, Ga = "{+baseurl}/system/info", Ha = {
  get: {
    uriTemplate: Ga,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: Ve
  }
}, Ya = "{+baseurl}/system/limits", _a = {
  get: {
    uriTemplate: Ya,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: ge
  }
}, Ja = "{+baseurl}/system/uiConfig", Ka = {
  get: {
    uriTemplate: Ja,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: Se
  }
}, ka = {
  info: {
    requestsMetadata: Ha
  },
  limits: {
    requestsMetadata: _a
  },
  uiConfig: {
    requestsMetadata: Ka
  }
}, Qa = "{+baseurl}/users/me", Xa = {
  get: {
    uriTemplate: Qa,
    responseBodyContentType: "application/json",
    errorMappings: {
      500: a
    },
    adapterMethodName: "send",
    responseBodyFactory: Re
  }
}, Za = {
  me: {
    requestsMetadata: Xa
  }
};
function en(t) {
  const e = {
    baseurl: t.baseUrl
  };
  return oe(t, e, tn, void 0);
}
const rn = "{+baseurl}", tn = {
  admin: {
    navigationMetadata: $t
  },
  groups: {
    requestsMetadata: Ta,
    navigationMetadata: Ma
  },
  ids: {
    navigationMetadata: Ua
  },
  search: {
    navigationMetadata: $a
  },
  system: {
    navigationMetadata: ka
  },
  users: {
    navigationMetadata: Za
  }
};
class b {
  constructor() {
    this.contentTypeAssociatedFactories = /* @__PURE__ */ new Map();
  }
  getValidContentType() {
    throw new Error("The registry supports multiple content types. Get the registered factory instead.");
  }
  getSerializationWriter(e) {
    if (!e)
      throw new Error("content type cannot be undefined or empty");
    const n = e.split(";")[0];
    let o = this.contentTypeAssociatedFactories.get(n);
    if (o)
      return o.getSerializationWriter(n);
    const l = n.replace(/[^/]+\+/gi, "");
    if (o = this.contentTypeAssociatedFactories.get(l), o)
      return o.getSerializationWriter(l);
    throw new Error(`Content type ${l} does not have a factory registered to be serialized`);
  }
}
b.defaultInstance = new b();
const ae = new re(), $ = new pe();
ae.contentTypeAssociatedFactories.set($.getValidContentType(), $);
const ne = new b(), G = new de();
ne.contentTypeAssociatedFactories.set(G.getValidContentType(), G);
class sn {
  static createRegistryClient(e, n) {
    e.endsWith("/") && (e = e.substring(0, e.length - 1)), n == null && (n = new ie());
    const o = new se(n, ae, ne);
    return o.baseUrl = e, en(o);
  }
}
export {
  tn as ApicurioRegistryClientNavigationMetadata,
  rn as ApicurioRegistryClientUriTemplate,
  sn as RegistryClientFactory,
  en as createApicurioRegistryClient
};
