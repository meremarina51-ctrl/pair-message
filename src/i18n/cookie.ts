import { LOCALE_COOKIE, type Locale } from "./config";

/** Remembers the chosen language so that visiting "/" later opens the same one. */
export function rememberLocale(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}
