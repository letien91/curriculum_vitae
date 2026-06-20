import type { Locale, LocalizedString } from "@/types/cv";

export function t(text: LocalizedString, locale: Locale): string {
  return text[locale];
}

export function formatExperiencePeriod(
  from: string,
  to: string,
  toNow: boolean | undefined,
  locale: Locale,
): string {
  const end = toNow ? (locale === "vi" ? "Hiện tại" : "Present") : to;
  return `${from} – ${end}`;
}
