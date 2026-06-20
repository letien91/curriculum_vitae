"use client";

import { useLanguage } from "@/context/LanguageContext";
import { uiLabels } from "@/i18n/labels";
import { printPagePath } from "@/lib/print-path";
import { t } from "@/lib/i18n";

export function DownloadPdfButton() {
  const { locale } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => window.open(printPagePath(), "_blank", "noopener,noreferrer")}
      className="rounded border border-white/40 px-4 py-2 text-xs font-bold tracking-wide text-white uppercase transition hover:border-gold hover:text-gold sm:px-5 sm:py-2.5 sm:text-sm"
    >
      {t(uiLabels.buttons.downloadPdf, locale)}
    </button>
  );
}
