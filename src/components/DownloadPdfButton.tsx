"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { uiLabels } from "@/i18n/labels";
import { printPagePath, type PrintImageMode } from "@/lib/print-path";
import { t } from "@/lib/i18n";

export function DownloadPdfButton() {
  const { locale } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const close = (event: MouseEvent) => {
      if (rootRef.current?.contains(event.target as Node)) return;
      setOpen(false);
    };

    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);

  const openPrint = (mode: PrintImageMode) => {
    setOpen(false);
    window.open(printPagePath(mode), "_blank", "noopener,noreferrer");
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="rounded border border-white/40 px-4 py-2 text-xs font-bold tracking-wide text-white uppercase transition hover:border-gold hover:text-gold sm:px-5 sm:py-2.5 sm:text-sm"
      >
        {t(uiLabels.buttons.downloadPdf, locale)}
        <span className="ml-1.5 text-[10px] opacity-70" aria-hidden>
          ▾
        </span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 bottom-full z-[60] mb-2 min-w-[12rem] overflow-hidden rounded-lg border border-white/15 bg-navy-light shadow-xl sm:min-w-[14rem]"
        >
          <button
            type="button"
            role="menuitem"
            onClick={() => openPrint("full")}
            className="block w-full px-4 py-3 text-left text-sm text-white transition hover:bg-white/10"
          >
            <span className="font-semibold">{t(uiLabels.buttons.saveCvFull, locale)}</span>
            <span className="mt-0.5 block text-xs text-white/60">~30 MB</span>
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => openPrint("none")}
            className="block w-full border-t border-white/10 px-4 py-3 text-left text-sm text-white transition hover:bg-white/10"
          >
            <span className="font-semibold">{t(uiLabels.buttons.saveCvNoImages, locale)}</span>
            <span className="mt-0.5 block text-xs text-white/60">&lt; 1 MB</span>
          </button>
        </div>
      )}
    </div>
  );
}
