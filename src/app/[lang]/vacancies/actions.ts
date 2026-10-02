"use server";

import type { ApplicationField, Dictionary } from "@/i18n/types";
import { formatPhone, isCompletePhone } from "@/lib/phone";

type ErrorCode = keyof Dictionary["vacancies"]["errors"];

export type ApplicationState =
  | { status: "idle" }
  | { status: "success" }
  | {
      status: "error";
      errors: Partial<Record<ApplicationField, ErrorCode>>;
      send?: boolean;
      values: Partial<Record<ApplicationField, string>>;
    };

const MAX_SHORT = 200;
const MAX_LONG = 3000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const text = (formData: FormData, key: ApplicationField) => {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
};

export async function submitApplication(
  _prev: ApplicationState,
  formData: FormData,
): Promise<ApplicationState> {
  const values = {
    name: text(formData, "name"),
    phone: text(formData, "phone"),
    email: text(formData, "email"),
    role: text(formData, "role"),
    about: text(formData, "about"),
  };
  const consent = formData.get("consent") === "on";

  const errors: Partial<Record<ApplicationField, ErrorCode>> = {};

  if (!values.name) errors.name = "required";
  else if (values.name.length > MAX_SHORT) errors.name = "tooLong";

  if (!values.phone) errors.phone = "required";
  else if (!isCompletePhone(values.phone)) errors.phone = "phone";
  else values.phone = formatPhone(values.phone);

  if (!values.email) errors.email = "required";
  else if (values.email.length > MAX_SHORT || !EMAIL_RE.test(values.email)) errors.email = "email";

  if (values.role.length > MAX_SHORT) errors.role = "tooLong";
  if (values.about.length > MAX_LONG) errors.about = "tooLong";

  if (!consent) errors.consent = "consent";

  const submitted = { ...values, consent: consent ? "on" : "" };
  if (Object.keys(errors).length > 0) return { status: "error", errors, values: submitted };

  try {
    await deliver(values);
  } catch (error) {
    console.error("Failed to deliver job application", error);
    return { status: "error", errors: {}, send: true, values: submitted };
  }

  return { status: "success" };
}

type Application = Record<Exclude<ApplicationField, "consent">, string>;

async function deliver(application: Application) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    if (process.env.NODE_ENV !== "production") {
      console.info("Job application (Telegram is not configured):", application);
      return;
    }
    throw new Error("TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID must be set");
  }

  const lines = [
    "Новая заявка на вакансию",
    "",
    `Имя: ${application.name}`,
    `Телефон: ${application.phone}`,
    `Email: ${application.email}`,
    application.role ? `Роль: ${application.role}` : null,
    application.about ? `Дополнительно: ${application.about}` : null,
  ].filter((line) => line !== null);

  const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text: lines.join("\n") }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    throw new Error(`Telegram responded with ${response.status}`);
  }
}
