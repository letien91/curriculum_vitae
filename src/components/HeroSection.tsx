"use client";

import type { PersonalInfo, Stat } from "@/types/cv";
import { useLanguage } from "@/context/LanguageContext";
import { uiLabels } from "@/i18n/labels";
import { assetPath } from "@/lib/asset-path";
import { t } from "@/lib/i18n";
import { DownloadPdfButton } from "./DownloadPdfButton";

type HeroSectionProps = {
  personal: PersonalInfo;
  stats: Stat[];
};

function HeroAvatar({
  name,
  avatar,
  size,
}: {
  name: string;
  avatar: string;
  size: "mobile" | "desktop";
}) {
  const sizeClass =
    size === "mobile"
      ? "h-36 w-36 sm:h-40 sm:w-40"
      : "h-28 w-28 md:h-32 md:w-32 lg:h-36 lg:w-36";

  return (
    <div className={`relative shrink-0 ${sizeClass}`}>
      <div className="absolute inset-0 rounded-full bg-gold/10 blur-2xl" />
      <img
        src={assetPath(avatar)}
        alt={name}
        className="relative z-10 h-full w-full rounded-full object-cover object-top shadow-2xl ring-2 ring-white/20"
      />
    </div>
  );
}

export function HeroSection({ personal, stats }: HeroSectionProps) {
  const { locale } = useLanguage();

  return (
    <section id="hero" className="relative bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-10 right-10 text-[80px] font-bold text-white/10 select-none sm:text-[120px]">
          {"</>"}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8">
        <div className="flex justify-center md:hidden">
          <HeroAvatar name={personal.name} avatar={personal.avatar} size="mobile" />
        </div>

        <div className="mt-6 grid items-start gap-5 md:mt-0 md:grid-cols-[minmax(0,1fr)_auto] md:gap-6 lg:gap-8">
          <div className="min-w-0">
            <div className="mb-3 flex items-center gap-3 sm:mb-4">
              <span className="h-px w-8 bg-gold" />
              <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
                {t(personal.heroBadge, locale)}
              </span>
            </div>

            <h1 className="text-2xl leading-tight font-bold text-white sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl">
              {t(personal.heroHeadline, locale)}{" "}
              {t(personal.heroHighlight, locale)}
            </h1>

            <p className="mt-3 text-[11px] leading-snug font-semibold tracking-wide text-white/65 sm:mt-4 sm:text-xs">
              {t(personal.heroTags, locale)}
            </p>
          </div>

          <div className="hidden justify-end md:flex md:pt-1 lg:pt-2">
            <HeroAvatar
              name={personal.name}
              avatar={personal.avatar}
              size="desktop"
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:gap-4 sm:pt-8">
          {stats.map((stat) => (
            <div key={stat.value + t(stat.label, locale)}>
              <div className="text-xl font-bold text-gold sm:text-2xl lg:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-[10px] leading-snug font-semibold tracking-wide text-white/65 uppercase sm:text-[11px] lg:text-xs">
                {t(stat.label, locale)}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
          <a
            href="#about"
            className="rounded bg-gold px-4 py-2 text-xs font-bold tracking-wide text-navy uppercase transition hover:bg-gold-light sm:px-5 sm:py-2.5 sm:text-sm"
          >
            {t(uiLabels.buttons.viewProfile, locale)}
          </a>
            <a
              href="#contact"
              className="rounded border border-white/40 px-4 py-2 text-xs font-bold tracking-wide text-white uppercase transition hover:border-gold hover:text-gold sm:px-5 sm:py-2.5 sm:text-sm"
            >
              {t(uiLabels.buttons.contactMe, locale)}
            </a>
            <DownloadPdfButton />
          </div>
      </div>
    </section>
  );
}
