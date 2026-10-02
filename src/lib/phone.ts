import type { ChangeEvent, KeyboardEvent } from "react";

function normalizeDigits(value: string) {
  let digits = value.replace(/\D/g, "");
  if (!digits) return "";
  if (digits[0] === "8") digits = `7${digits.slice(1)}`;
  else if (digits[0] !== "7") digits = `7${digits}`;
  return digits.slice(0, 11);
}

export function formatPhone(value: string) {
  const d = normalizeDigits(value);
  if (!d) return "";

  let out = "+7";
  if (d.length > 1) out += ` ${d.slice(1, 4)}`;
  if (d.length > 4) out += ` ${d.slice(4, 7)}`;
  if (d.length > 7) out += `-${d.slice(7, 9)}`;
  if (d.length > 9) out += `-${d.slice(9, 11)}`;
  return out;
}

export const isCompletePhone = (value: string) => /^[78]\d{10}$/.test(value.replace(/\D/g, ""));

const countDigits = (value: string) => value.replace(/\D/g, "").length;

function caretAfterDigits(formatted: string, n: number) {
  let seen = 0;
  for (let i = 0; i < formatted.length && seen < n; i++) {
    if (/\d/.test(formatted[i]) && ++seen === n) return i + 1;
  }
  return n > 0 ? formatted.length : 0;
}

export function maskPhoneInput(e: ChangeEvent<HTMLInputElement>) {
  const input = e.target;
  const raw = input.value;
  const caret = input.selectionStart ?? raw.length;

  const formatted = formatPhone(raw);
  const shift = normalizeDigits(raw).length > countDigits(raw) ? 1 : 0;
  const position = caretAfterDigits(formatted, countDigits(raw.slice(0, caret)) + shift);

  input.value = formatted;
  input.setSelectionRange(position, position);
}

export function skipPhoneSeparators(e: KeyboardEvent<HTMLInputElement>) {
  const input = e.currentTarget;
  const { selectionStart: start, selectionEnd: end, value } = input;
  if (start === null || start !== end) return;

  let position = start;
  if (e.key === "Backspace") {
    while (position > 0 && /[\s-]/.test(value[position - 1])) position--;
  } else if (e.key === "Delete") {
    while (position < value.length && /[\s-]/.test(value[position])) position++;
  }
  if (position !== start) input.setSelectionRange(position, position);
}
