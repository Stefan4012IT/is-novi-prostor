const axios = require("axios");

const sendToUIS = async (formData) => {
  const webhookUrl = process.env.UIS_WEBHOOK_URL;
  const accessKey = process.env.UIS_WEBHOOK_TOKEN;

  if (!webhookUrl) {
    throw new Error("UIS_WEBHOOK_URL nije postavljen.");
  }

  if (!accessKey) {
    throw new Error("UIS_WEBHOOK_TOKEN nije postavljen.");
  }

  const payload = {
    name: formData.name,
    email: formData.email,
    childs_age: formData.childs_age,
    "country-code": formData["country-code"],
    "area-code": formData["area-code"],
    "phone-number": formData["phone-number"],
    lead_event_id: formData.lead_event_id,
    institution: formData.institution,
    form_name: formData.institution === "is" ? "novi prostor - is" : "novi prostor - sos",
  };

  try {
    const response = await axios.post(webhookUrl, payload, {
      headers: {
        "Content-Type": "application/json",
        AccessKey: accessKey,
      },
      timeout: 15000,
    });

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    if (error.response) {
      throw new Error(
        `UIS webhook greška: ${error.response.status} ${JSON.stringify(error.response.data)}`
      );
    }

    throw error;
  }
};

module.exports = {
  sendToUIS,
};
