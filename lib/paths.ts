import type { Locale } from "./types";

export function localizePath(locale: Locale, path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "ar") {
    return normalized === "/" ? "/ar" : `/ar${normalized}`;
  }
  return normalized;
}

export function switchLocalePath(currentPath: string, nextLocale: Locale) {
  const withoutAr = currentPath.replace(/^\/ar(?=\/|$)/, "") || "/";
  return localizePath(nextLocale, withoutAr);
}
