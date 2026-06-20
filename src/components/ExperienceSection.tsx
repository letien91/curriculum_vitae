"use client";

import { useState } from "react";
import type { Experience } from "@/types/cv";
import { useLanguage } from "@/context/LanguageContext";
import { uiLabels } from "@/i18n/labels";
import { formatExperiencePeriod, t } from "@/lib/i18n";

const INITIAL_VISIBLE = 3;

type ExperienceSectionProps = {
  experiences: Experience[];
};

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
  const { locale } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? experiences : experiences.slice(0, INITIAL_VISIBLE);
  const hasMore = experiences.length > INITIAL_VISIBLE;

  return (
    <section id="experience" className="scroll-mt-24">
      <h2 className="flex items-center gap-2 text-lg font-bold tracking-wide text-navy uppercase">
        <span className="text-gold">◆</span>
        {t(uiLabels.sections.experience, locale)}
      </h2>

      <div className="relative mt-8 space-y-8 pl-6">
        <div className="absolute top-2 bottom-2 left-[7px] w-px bg-gold/30" />

        {visible.map((experience) => (
          <article key={`${experience.company}-${experience.from}`} className="relative">
            <span className="absolute -left-6 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-gold bg-white" />

            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <time className="text-sm font-bold text-gold">
                {formatExperiencePeriod(
                  experience.from,
                  experience.to,
                  experience.toNow,
                  locale,
                )}
              </time>
              <h3 className="text-base font-bold text-navy">
                {t(experience.role, locale)}{" "}
                <span className="font-normal text-gray-500">|</span>{" "}
                {experience.company}
              </h3>
            </div>

            <ul className="mt-3 space-y-2">
              {experience.items.map((item) => (
                <li
                  key={t(item, locale).slice(0, 50)}
                  className="flex gap-2 text-sm leading-relaxed text-gray-700"
                >
                  <span className="text-gold">•</span>
                  <span>{t(item, locale)}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-6 flex items-center gap-2 text-sm font-semibold text-gold transition hover:text-gold-dark"
        >
          {expanded
            ? t(uiLabels.buttons.seeLess, locale)
            : t(uiLabels.buttons.seeMore, locale)}
          <span className="text-xs">{expanded ? "▲" : "▼"}</span>
        </button>
      )}
    </section>
  );
}
