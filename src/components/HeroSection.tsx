"use client";

import type { PersonalInfo, Stat } from "@/types/cv";
import { useLanguage } from "@/context/LanguageContext";
import { uiLabels } from "@/i18n/labels";
import { assetPath } from "@/lib/asset-path";
import { t } from "@/lib/i18n";

type HeroSectionProps = {
  personal: PersonalInfo;
  stats: Stat[];
};

export function HeroSection({ personal, stats }: HeroSectionProps) {
  const { locale } = useLanguage();

  return (
    <section id="hero" className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 text-[120px] font-bold text-white/10 select-none">
          {"</>"}
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-16">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-gold" />
            <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
              {t(personal.heroBadge, locale)}
            </span>
          </div>

          <h1 className="text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl">
            {t(personal.heroHeadline, locale)}{" "}
            {t(personal.heroHighlight, locale)}
          </h1>

          <p className="mt-4 text-[11px] leading-snug font-semibold tracking-wide text-white/65 sm:text-xs">
            {t(personal.heroTags, locale)}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3 sm:gap-4">
            {stats.map((stat) => (
              <div key={stat.value + t(stat.label, locale)}>
                <div className="text-2xl font-bold text-gold sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-[11px] leading-snug font-semibold tracking-wide text-white/65 uppercase sm:text-xs">
                  {t(stat.label, locale)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#about"
              className="rounded bg-gold px-5 py-2.5 text-sm font-bold tracking-wide text-navy uppercase transition hover:bg-gold-light"
            >
              {t(uiLabels.buttons.viewProfile, locale)}
            </a>
            <a
              href="#contact"
              className="rounded border border-white/40 px-5 py-2.5 text-sm font-bold tracking-wide text-white uppercase transition hover:border-gold hover:text-gold"
            >
              {t(uiLabels.buttons.contactMe, locale)}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative mx-auto aspect-square w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
            <div className="absolute inset-0 rounded-full bg-gold/10 blur-3xl" />
            <img
              src={assetPath(personal.avatar)}
              alt={personal.name}
              className="relative z-10 h-full w-full rounded-full object-cover object-top shadow-2xl ring-2 ring-white/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
