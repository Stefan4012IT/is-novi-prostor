const validator = require("validator");

const sanitizeName = (value = "") =>
  value
    .trim()
    .replace(/\s{2,}/g, " ")
    .slice(0, 60);

const validateFormData = (data = {}) => {
  const errors = {};

  const name = sanitizeName(data.name || "");
  const email = String(data.email || "").trim().toLowerCase();
  const childsAge = String(data.childs_age || "").trim();
  const countryCode = String(data["country-code"] || "").trim();
  const areaCode = String(data["area-code"] || "").trim();
  const phoneNumber = String(data["phone-number"] || "").trim();
  const website = String(data.website || "").trim();
  const institution = String(data.institution || "").trim().toLowerCase();
  const leadEventId = String(data.lead_event_id || data.leadEventId || "").trim();

  if (website) {
    errors.website = "Spam detected.";
  }

  if (!/^[A-Za-zÀ-žĆČŠĐŽćčšđž\s'-]{2,60}$/.test(name)) {
    errors.name = "Ime i prezime nisu u ispravnom formatu.";
  }

  if (!validator.isEmail(email)) {
    errors.email = "Email nije ispravan.";
  }

  const ageNum = Number(childsAge);
  if (!Number.isInteger(ageNum) || ageNum < 3 || ageNum > 19) {
    errors.childs_age = "Uzrast mora biti između 3 i 19.";
  }

  if (!/^\+\d{1,4}$/.test(countryCode)) {
    errors["country-code"] = "Pozivni broj države nije ispravan.";
  }

  if (!/^\d{1,4}$/.test(areaCode)) {
    errors["area-code"] = "Pozivni broj mreže nije ispravan.";
  }

  if (!/^\d{5,12}$/.test(phoneNumber)) {
    errors["phone-number"] = "Broj telefona nije ispravan.";
  }

  if (!["sos", "sg", "is"].includes(institution)) {
    errors.institution = "Institution nije ispravan.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitizedData: {
      name,
      email,
      childs_age: childsAge,
      "country-code": countryCode,
      "area-code": areaCode,
      "phone-number": phoneNumber,
      lead_event_id: /^ld_\d{10,13}_[a-z0-9]{4,16}$/.test(leadEventId)
        ? leadEventId
        : "",
      institution,
    },
  };
};

module.exports = {
  validateFormData,
};
