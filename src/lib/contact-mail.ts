const GENERAL_INQUIRIES_EMAIL = "info@quantumleap-mm.com";
const QUOTATIONS_EMAIL = "cs@quantumleap-mm.com";
const DEFAULT_FROM_EMAIL = "QUANTUM LEAP Website <website@send.quantumleap-myanmar.com>";
const PRODUCTION_HOSTNAMES = ["quantumleap-myanmar.com", "www.quantumleap-myanmar.com"];
const PRODUCTION_ORIGINS = PRODUCTION_HOSTNAMES.map((hostname) => `https://${hostname}`);

type ContactEnv = {
  RESEND_API_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
  TURNSTILE_ALLOWED_HOSTNAMES?: string;
  TURNSTILE_EXPECTED_ACTION?: string;
  CONTACT_ALLOWED_ORIGINS?: string;
  CONTACT_FROM_EMAIL?: string;
  CONTACT_GENERAL_EMAIL?: string;
  CONTACT_QUOTATIONS_EMAIL?: string;
};

type ContactMessage = {
  name: string;
  company: string;
  email: string;
  phone: string;
  serviceInterest: string;
  message: string;
  inquiryProduct: string;
  inquiryCategory: string;
};

function jsonResponse(
  body: Record<string, unknown>,
  status = 200,
  additionalHeaders?: HeadersInit,
) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...additionalHeaders,
    },
  });
}

function getEnvValue(env: unknown, key: keyof ContactEnv) {
  if (env && typeof env === "object" && key in env) {
    const value = (env as ContactEnv)[key];
    if (typeof value === "string" && value.trim()) return value.trim();
  }

  const value = process.env[key];
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function getCsvEnvValue(env: unknown, key: keyof ContactEnv, fallback: string[]) {
  return (getEnvValue(env, key) ?? fallback.join(","))
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

function cleanText(value: FormDataEntryValue | null, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, maxLength);
}

function cleanMessage(value: FormDataEntryValue | null) {
  if (typeof value !== "string") return "";
  return value.replace(/\r\n/g, "\n").trim().slice(0, 4000);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildMessage(formData: FormData): ContactMessage {
  return {
    name: cleanText(formData.get("name"), 120),
    company: cleanText(formData.get("company"), 160),
    email: cleanText(formData.get("email"), 200).toLowerCase(),
    phone: cleanText(formData.get("phone"), 80),
    serviceInterest: cleanText(formData.get("service_interest"), 160),
    message: cleanMessage(formData.get("message")),
    inquiryProduct: cleanText(formData.get("inquiry_product"), 120),
    inquiryCategory: cleanText(formData.get("inquiry_category"), 80),
  };
}

function validateMessage(message: ContactMessage) {
  if (!message.name) return "Name is required.";
  if (!message.email || !isValidEmail(message.email)) return "A valid email is required.";
  if (!message.message) return "Message is required.";
  return undefined;
}

async function verifyTurnstile(formData: FormData, request: Request, env: unknown) {
  const secret = getEnvValue(env, "TURNSTILE_SECRET_KEY");
  if (!secret) {
    console.error("TURNSTILE_SECRET_KEY is not configured.");
    return "unavailable";
  }

  const token = cleanText(formData.get("cf-turnstile-response"), 2048);
  if (!token) return "invalid";

  const body = new URLSearchParams({
    secret,
    response: token,
  });
  const remoteIp = request.headers.get("x-real-ip") ?? request.headers.get("cf-connecting-ip");
  if (remoteIp) body.set("remoteip", remoteIp);

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body,
    });

    if (!response.ok) {
      console.error(`Turnstile verification failed with status ${response.status}.`);
      return "unavailable";
    }

    const result = (await response.json()) as {
      success?: boolean;
      hostname?: string;
      action?: string;
      "error-codes"?: string[];
    };

    if (!result.success) {
      console.warn("Turnstile rejected a contact submission.", result["error-codes"]);
      return "invalid";
    }

    const production = process.env.NODE_ENV === "production";
    const allowedHostnames = getCsvEnvValue(
      env,
      "TURNSTILE_ALLOWED_HOSTNAMES",
      production ? PRODUCTION_HOSTNAMES : ["localhost", "127.0.0.1"],
    );
    if (!result.hostname || !allowedHostnames.includes(result.hostname)) {
      console.warn("Turnstile returned an unexpected hostname.", result.hostname);
      return "invalid";
    }

    const expectedAction =
      getEnvValue(env, "TURNSTILE_EXPECTED_ACTION") ?? (production ? "contact" : undefined);
    if (expectedAction && result.action !== expectedAction) {
      console.warn("Turnstile returned an unexpected action.", result.action);
      return "invalid";
    }

    return "valid";
  } catch (error) {
    console.error("Turnstile verification failed.", error);
    return "unavailable";
  }
}

function chooseRecipient(message: ContactMessage, env: unknown) {
  const generalEmail = getEnvValue(env, "CONTACT_GENERAL_EMAIL") ?? GENERAL_INQUIRIES_EMAIL;
  const quotationsEmail = getEnvValue(env, "CONTACT_QUOTATIONS_EMAIL") ?? QUOTATIONS_EMAIL;
  const generalRecipientServices = new Set(["general inquiry", "career", "other"]);

  return generalRecipientServices.has(message.serviceInterest.toLowerCase())
    ? generalEmail
    : quotationsEmail;
}

function buildSubject(message: ContactMessage) {
  const service = message.serviceInterest || "Website inquiry";
  return `Website inquiry: ${service} - ${message.name}`;
}

function buildTextBody(message: ContactMessage) {
  return [
    "Website inquiry",
    "",
    `Name: ${message.name}`,
    `Company: ${message.company || "-"}`,
    `Email: ${message.email}`,
    `Phone: ${message.phone || "-"}`,
    `Service interest: ${message.serviceInterest || "-"}`,
    `Product inquiry: ${message.inquiryProduct || "-"}`,
    `Inquiry category: ${message.inquiryCategory || "-"}`,
    "",
    "Message:",
    message.message,
  ].join("\n");
}

function buildHtmlBody(message: ContactMessage) {
  const rows: Array<[string, string]> = [
    ["Name", message.name],
    ["Company", message.company || "-"],
    ["Email", message.email],
    ["Phone", message.phone || "-"],
    ["Service interest", message.serviceInterest || "-"],
    ["Product inquiry", message.inquiryProduct || "-"],
    ["Inquiry category", message.inquiryCategory || "-"],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.5;">
      <h2 style="margin: 0 0 16px;">Website inquiry</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 680px;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <th style="text-align: left; vertical-align: top; padding: 8px 12px; border: 1px solid #e5e7eb; background: #f9fafb; width: 180px;">${escapeHtml(label)}</th>
                  <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">${escapeHtml(value)}</td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
      <h3 style="margin: 24px 0 8px;">Message</h3>
      <div style="white-space: pre-wrap; padding: 16px; border: 1px solid #e5e7eb; background: #f9fafb; max-width: 680px;">${escapeHtml(message.message)}</div>
    </div>
  `;
}

async function sendWithResend(message: ContactMessage, env: unknown) {
  const apiKey = getEnvValue(env, "RESEND_API_KEY");
  if (!apiKey) {
    return jsonResponse(
      {
        ok: false,
        error: "Email service is not configured.",
      },
      503,
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: getEnvValue(env, "CONTACT_FROM_EMAIL") ?? DEFAULT_FROM_EMAIL,
      to: [chooseRecipient(message, env)],
      subject: buildSubject(message),
      html: buildHtmlBody(message),
      text: buildTextBody(message),
      reply_to: message.email,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error(`Resend contact email failed: ${response.status} ${errorBody}`);
    return jsonResponse({ ok: false, error: "Email delivery failed." }, 502);
  }

  return jsonResponse({ ok: true });
}

export async function handleContactRequest(request: Request, env: unknown) {
  const url = new URL(request.url);

  if (request.method !== "POST") {
    return jsonResponse({ ok: false, error: "Method not allowed." }, 405);
  }

  const origin = request.headers.get("origin");
  const production = process.env.NODE_ENV === "production";
  const allowedOrigins = new Set(
    getCsvEnvValue(env, "CONTACT_ALLOWED_ORIGINS", production ? PRODUCTION_ORIGINS : [url.origin]),
  );
  if (origin && !allowedOrigins.has(origin)) {
    return jsonResponse({ ok: false, error: "Invalid request origin." }, 403);
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 64 * 1024) {
    return jsonResponse({ ok: false, error: "Request is too large." }, 413);
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return jsonResponse({ ok: false, error: "Invalid form data." }, 400);
  }

  if (cleanText(formData.get("website"), 200)) {
    return jsonResponse({ ok: true });
  }

  const turnstileResult = await verifyTurnstile(formData, request, env);
  if (turnstileResult === "unavailable") {
    return jsonResponse({ ok: false, error: "Security verification is unavailable." }, 503);
  }
  if (turnstileResult !== "valid") {
    return jsonResponse({ ok: false, error: "Security verification failed." }, 400);
  }

  const message = buildMessage(formData);
  const validationError = validateMessage(message);

  if (validationError) {
    return jsonResponse({ ok: false, error: validationError }, 400);
  }

  return sendWithResend(message, env);
}
