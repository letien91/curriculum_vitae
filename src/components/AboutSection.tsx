"use client";

import type { PersonalInfo, ValueCard } from "@/types/cv";
import { useLanguage } from "@/context/LanguageContext";
import { uiLabels } from "@/i18n/labels";
import { t } from "@/lib/i18n";

const cardIcons = ["👥", "⚙", "🎯", "📈"];

type AboutSectionProps = {
  personal: PersonalInfo;
  valueCards: ValueCard[];
};

export function AboutSection({ personal, valueCards }: AboutSectionProps) {
  const { locale } = useLanguage();
  const paragraphs = t(personal.summary, locale).split("\n\n");

  return (
    <section id="about" className="scroll-mt-24">
      <h2 className="flex items-center gap-2 text-lg font-bold tracking-wide text-navy uppercase">
        <span className="text-gold">◆</span>
        {t(uiLabels.sections.about, locale)}
      </h2>

      <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-gray-700">
            {paragraph}
          </p>
        ))}
      </div>

      {valueCards.length > 0 && (
        <div className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">
          {valueCards.map((card, index) => (
            <article
              key={t(card.title, locale)}
              className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition hover:shadow-md sm:p-5"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-cream-dark text-lg">
                {cardIcons[index] ?? "★"}
              </div>
              <h3 className="text-sm font-bold tracking-wide text-navy uppercase">
                {t(card.title, locale)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {t(card.description, locale)}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
