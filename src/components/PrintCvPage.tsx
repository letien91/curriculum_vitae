"use client";

import { useEffect, useRef } from "react";
import { cvData } from "@/data/cv";
import { LanguageProvider } from "@/context/LanguageContext";
import { PersonalSidebar } from "@/components/PersonalSidebar";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsPrintSection } from "@/components/ProjectsPrintSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ContactFooter } from "@/components/ContactFooter";
import { useLanguage } from "@/context/LanguageContext";
import { uiLabels } from "@/i18n/labels";
import { assetPath } from "@/lib/asset-path";
import { t } from "@/lib/i18n";

function hidePrintUi() {
  document.querySelectorAll("[data-print-ui]").forEach((el) => {
    (el as HTMLElement).style.setProperty("display", "none", "important");
  });
}

function showPrintUi() {
  document.querySelectorAll("[data-print-ui]").forEach((el) => {
    (el as HTMLElement).style.removeProperty("display");
  });
}

function triggerPrint() {
  hidePrintUi();
  requestAnimationFrame(() => window.print());
}

function PrintToolbar() {
  const { locale } = useLanguage();

  return (
    <div
      data-print-ui
      className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 px-4 py-3 backdrop-blur print:hidden sm:px-6"
    >
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-gray-600">{t(uiLabels.misc.printHint, locale)}</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={triggerPrint}
            className="rounded bg-gold px-4 py-2 text-sm font-bold text-navy uppercase"
          >
            {t(uiLabels.buttons.printNow, locale)}
          </button>
          <button
            type="button"
            onClick={() => window.close()}
            className="rounded border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700"
          >
            {locale === "vi" ? "Đóng" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}

function PrintHero() {
  const { locale } = useLanguage();
  const { personal, stats } = cvData;

  return (
    <header className="cv-print-section cv-print-hero bg-navy px-6 py-8 text-white print:rounded-none">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
        <img
          src={assetPath(personal.avatar)}
          alt={personal.name}
          className="mx-auto h-28 w-28 shrink-0 rounded-full object-cover object-top ring-2 ring-white/20 sm:mx-0"
        />
        <div className="min-w-0 flex-1 text-center sm:text-left">
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
            {t(personal.heroBadge, locale)}
          </p>
          <h1 className="mt-2 text-2xl font-bold leading-tight">
            {t(personal.heroHeadline, locale)}{" "}
            {t(personal.heroHighlight, locale)}
          </h1>
          <p className="mt-2 text-xs font-semibold tracking-wide text-white/70">
            {t(personal.heroTags, locale)}
          </p>
          <p className="mt-3 text-sm text-white/80">
            {personal.email} · {personal.phone} · {t(personal.location, locale)}
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3 border-t border-white/15 pt-4">
            {stats.map((stat) => (
              <div key={stat.value + t(stat.label, locale)}>
                <div className="text-xl font-bold text-gold">{stat.value}</div>
                <div className="text-[10px] font-semibold uppercase tracking-wide text-white/65">
                  {t(stat.label, locale)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function PrintCvContent() {
  const {
    personal,
    skillBars,
    languages,
    valueCards,
    achievements,
    experiences,
    projects,
  } = cvData;
  const printed = useRef(false);

  useEffect(() => {
    if (printed.current) return;
    printed.current = true;

    const onBeforePrint = () => hidePrintUi();
    const onAfterPrint = () => showPrintUi();
    window.addEventListener("beforeprint", onBeforePrint);
    window.addEventListener("afterprint", onAfterPrint);

    const timer = window.setTimeout(() => triggerPrint(), 1200);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("beforeprint", onBeforePrint);
      window.removeEventListener("afterprint", onAfterPrint);
    };
  }, []);

  return (
    <>
      <PrintToolbar />
      <div className="cv-print-root min-h-screen bg-cream print:bg-white">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 print:max-w-none print:px-0 print:py-0">
        <PrintHero />

        <div className="mt-8 grid gap-8 lg:grid-cols-[260px_1fr] print:mt-6 print:grid-cols-[220px_1fr] print:gap-6">
          <PersonalSidebar
            personal={personal}
            skillBars={skillBars}
            languages={languages}
          />

          <div className="min-w-0 space-y-10 print:space-y-8">
            <AboutSection personal={personal} valueCards={valueCards} />
            <AchievementsSection achievements={achievements} />
            <ExperienceSection experiences={experiences} showAllItems />
            <ProjectsPrintSection projects={projects} />
            <ContactFooter personal={personal} />
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export function PrintCvPage() {
  return (
    <LanguageProvider>
      <PrintCvContent />
    </LanguageProvider>
  );
}
