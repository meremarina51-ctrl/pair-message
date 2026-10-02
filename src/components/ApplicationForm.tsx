"use client";

import { Check, CircleCheck } from "@lucide/icons";
import { useActionState, useEffect, useRef, useState, type ReactNode } from "react";
import { type ApplicationState, submitApplication } from "@/app/[lang]/vacancies/actions";
import type { ApplicationField, Dictionary } from "@/i18n/types";
import { formatPhone, maskPhoneInput, skipPhoneSeparators } from "@/lib/phone";
import { buttonClass } from "./Button";
import { Icon } from "./icons/Icon";

const INITIAL: ApplicationState = { status: "idle" };

const CONTROL =
  "w-full rounded-[10px] border border-foreground/15 bg-background/60 px-4 py-3 text-[14px] text-foreground placeholder:text-foreground/35 transition-colors hover:border-foreground/30 focus:border-accent-soft focus:outline-none aria-invalid:border-accent";

type Props = { labels: Dictionary["vacancies"] };

export function ApplicationForm({ labels }: Props) {
  const { form, errors } = labels;
  const [state, formAction, pending] = useActionState(submitApplication, INITIAL);
  const [dismissed, setDismissed] = useState<ApplicationState | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const showSuccess = state.status === "success" && dismissed !== state;
  const fieldErrors = state.status === "error" ? state.errors : {};
  const values = state.status === "error" ? state.values : {};

  useEffect(() => {
    if (state.status === "success") {
      successRef.current?.focus();
    } else if (state.status === "error") {
      formRef.current?.querySelector<HTMLElement>("[aria-invalid=true]")?.focus();
    }
  }, [state]);

  if (showSuccess) {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="flex flex-col items-center gap-4 py-10 text-center focus:outline-none"
      >
        <Icon icon={CircleCheck} size={44} className="text-accent-soft" />
        <h2 className="font-display text-3xl font-bold">{labels.success.title}</h2>
        <p className="max-w-[40ch] text-[14px] leading-relaxed text-foreground/65">
          {labels.success.text}
        </p>
        <button
          type="button"
          onClick={() => setDismissed(state)}
          className={buttonClass("outline", "mt-2")}
        >
          {labels.success.again}
        </button>
      </div>
    );
  }

  const error = (field: ApplicationField) => {
    const code = fieldErrors[field];
    return code ? errors[code] : undefined;
  };

  const field = (name: ApplicationField, optional = false) => ({
    id: `application-${name}`,
    name,
    "aria-invalid": Boolean(fieldErrors[name]),
    "aria-describedby": fieldErrors[name] ? `application-${name}-error` : undefined,
    required: !optional,
  });

  return (
    <form ref={formRef} action={formAction} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label={form.labels.name} error={error("name")} className="sm:col-span-2">
          <input
            {...field("name")}
            type="text"
            autoComplete="name"
            maxLength={200}
            placeholder={form.placeholders.name}
            defaultValue={values.name}
            className={CONTROL}
          />
        </Field>
        <Field name="phone" label={form.labels.phone} error={error("phone")}>
          <input
            {...field("phone")}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            placeholder={form.placeholders.phone}
            defaultValue={values.phone && formatPhone(values.phone)}
            onChange={maskPhoneInput}
            onKeyDown={skipPhoneSeparators}
            onFocus={(e) => {
              if (!e.target.value) e.target.value = "+7 ";
            }}
            onBlur={(e) => {
              if (e.target.value.replace(/\D/g, "") === "7") e.target.value = "";
            }}
            className={CONTROL}
          />
        </Field>
        <Field name="email" label={form.labels.email} error={error("email")}>
          <input
            {...field("email")}
            type="email"
            autoComplete="email"
            maxLength={200}
            placeholder={form.placeholders.email}
            defaultValue={values.email}
            className={CONTROL}
          />
        </Field>
      </div>

      <Field
        name="role"
        label={form.labels.role}
        optional={form.optional}
        error={error("role")}
      >
        <input
          {...field("role", true)}
          type="text"
          maxLength={200}
          placeholder={form.placeholders.role}
          defaultValue={values.role}
          className={CONTROL}
        />
      </Field>

      <Field
        name="about"
        label={form.labels.about}
        optional={form.optional}
        error={error("about")}
      >
        <textarea
          {...field("about", true)}
          rows={5}
          maxLength={3000}
          placeholder={form.placeholders.about}
          defaultValue={values.about}
          className={`${CONTROL} resize-y`}
        />
      </Field>

      <div>
        <label className="group flex cursor-pointer items-start gap-3 text-[13px] leading-relaxed text-foreground/70 transition-colors hover:text-foreground/85">
          <span className="relative flex h-lh shrink-0 items-center">
            <input
              {...field("consent")}
              type="checkbox"
              defaultChecked={values.consent === "on"}
              className="peer size-5 cursor-pointer appearance-none rounded-md border border-foreground/25 bg-background/60 transition-[background-color,border-color,box-shadow] group-hover:border-foreground/45 checked:border-accent-soft checked:bg-linear-to-br checked:from-accent-soft checked:to-accent checked:shadow-[0_0_14px_rgb(224_41_63/0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft aria-invalid:border-accent motion-reduce:transition-none"
            />
            <Icon
              icon={Check}
              size={14}
              strokeWidth={3}
              className="pointer-events-none absolute inset-0 m-auto scale-50 text-[#150708] opacity-0 transition-[opacity,scale] duration-200 peer-checked:scale-100 peer-checked:opacity-100 motion-reduce:transition-none"
            />
          </span>
          <span>{form.labels.consent}</span>
        </label>
        <div className="mt-1 pl-8">
          <FieldError name="consent" message={error("consent")} />
        </div>
      </div>

      {state.status === "error" && state.send && (
        <p role="alert" className="text-[13px] text-accent-soft">
          {errors.send}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className={buttonClass("solid", "mt-1 self-start disabled:cursor-wait disabled:opacity-60")}
      >
        {pending ? form.sending : form.submit}
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  optional,
  error,
  className = "",
  children,
}: {
  name: ApplicationField;
  label: string;
  optional?: string;
  error?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label
        htmlFor={`application-${name}`}
        className="text-[12px] font-bold uppercase tracking-[0.1em] text-foreground/80"
      >
        {label}
        {optional && (
          <span className="ml-1.5 font-semibold normal-case tracking-normal text-foreground/45">
            ({optional})
          </span>
        )}
      </label>
      {children}
      <FieldError name={name} message={error} />
    </div>
  );
}

function FieldError({ name, message }: { name: ApplicationField; message?: string }) {
  if (!message) return null;
  return (
    <p id={`application-${name}-error`} className="text-[12.5px] text-accent-soft">
      {message}
    </p>
  );
}
