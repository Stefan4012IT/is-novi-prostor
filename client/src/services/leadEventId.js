let leadEventId = "";
let hasPushedLeadEventId = false;

const LANDING_OPTIONS = {
  institution: "is",
  formName: "novi prostor - is",
  landingSlug: "is-novi-prostor",
};

function generateLeadEventId() {
  return `ld_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export function getLeadEventId() {
  if (!leadEventId) {
    leadEventId = generateLeadEventId();
  }

  return leadEventId;
}

function getPageTrackingFields() {
  if (typeof window === "undefined") return {};

  return {
    hostname: window.location.hostname,
    page_path: window.location.pathname,
    page_url: window.location.href,
  };
}

function getEventPayload(id, options) {
  return {
    transaction_id: id,
    external_id: id,
    event_id: id,
    lead_id: id,
    client_lead_id: id,
    lead_event_id: id,
    affiliation: "IS",
    form_type: "react_form",
    landing_slug: options.landingSlug,
    form_name: options.formName,
    ...getPageTrackingFields(),
  };
}

export function pushLeadEventIdToDataLayer(id = getLeadEventId(), options = LANDING_OPTIONS) {
  if (typeof window === "undefined" || hasPushedLeadEventId) return;

  window.leadEventId = id;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "lead_id_ready",
    ...getEventPayload(id, { ...LANDING_OPTIONS, ...options }),
  });

  hasPushedLeadEventId = true;
}

export function pushLeadSubmitToDataLayer(id = getLeadEventId(), options = LANDING_OPTIONS) {
  if (typeof window === "undefined") return;

  window.leadEventId = id;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "purchase",
    ...getEventPayload(id, { ...LANDING_OPTIONS, ...options }),
  });
}

export const leadTrackingOptions = LANDING_OPTIONS;
