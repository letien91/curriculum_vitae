"use client";

import type { Achievement } from "@/types/cv";
import { useLanguage } from "@/context/LanguageContext";
import { uiLabels } from "@/i18n/labels";
import { t } from "@/lib/i18n";

const icons = ["🏆", "⭐", "🎖", "👑"];

type AchievementsSectionProps = {
  achievements: Achievement[];
};

export function AchievementsSection({ achievements }: AchievementsSectionProps) {
  const { locale } = useLanguage();

  return (
    <section id="achievements" className="scroll-mt-24">
      <h2 className="flex items-center gap-2 text-lg font-bold tracking-wide text-navy uppercase">
        <span className="text-gold">◆</span>
        {t(uiLabels.sections.achievements, locale)}
      </h2>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {achievements.map((item, index) => (
          <article
            key={t(item.title, locale)}
            className="rounded-xl bg-white p-5 text-center shadow-sm ring-1 ring-black/5"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-2xl">
              {icons[index] ?? "★"}
            </div>
            <h3 className="mt-3 text-sm font-bold text-navy">
              {t(item.title, locale)}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-gray-600">
              {t(item.description, locale)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
