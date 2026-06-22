"use client";

import type { LanguageSkill, PersonalInfo, SkillBar } from "@/types/cv";
import { useLanguage } from "@/context/LanguageContext";
import { uiLabels } from "@/i18n/labels";
import { t } from "@/lib/i18n";

type PersonalSidebarProps = {
  personal: PersonalInfo;
  skillBars: SkillBar[];
  languages: LanguageSkill[];
};

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="flex items-center gap-2 text-sm font-bold tracking-wide text-navy uppercase">
      <span className="inline-block h-4 w-1 shrink-0 rounded-full bg-gold" />
      {title}
    </h2>
  );
}

function SidebarCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-fit w-full rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5 sm:p-5">
      {children}
    </div>
  );
}

function InfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: string;
  label?: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="mt-0.5 shrink-0 text-base">{icon}</span>
      <span className="min-w-0">
        {label && (
          <span className="block text-[11px] font-semibold tracking-wide text-gray-400 uppercase">
            {label}
          </span>
        )}
        <span className="text-sm break-words text-gray-700">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex gap-3 rounded-lg p-2 transition hover:bg-cream-dark"
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return <div className="flex gap-3 p-2">{content}</div>;
}

export function PersonalSidebar({
  personal,
  skillBars,
  languages,
}: PersonalSidebarProps) {
  const { locale } = useLanguage();

  return (
    <aside id="skills" className="flex w-full flex-col gap-5 lg:max-w-[300px] lg:gap-6">
      <SidebarCard>
        <SectionHeading title={t(uiLabels.sections.personalInfo, locale)} />
        <div className="mt-4 space-y-1">
          <InfoItem
            icon="✉"
            value={personal.email}
            href={`mailto:${personal.email}`}
          />
          <InfoItem icon="☎" value={personal.phone} href={personal.zaloUrl} />
          <InfoItem icon="📍" value={t(personal.location, locale)} />
        </div>
      </SidebarCard>

      <SidebarCard>
        <SectionHeading title={t(uiLabels.sections.expertise, locale)} />
        <div className="mt-4 space-y-3">
          {skillBars.map((skill) => (
            <div key={t(skill.name, locale)}>
              <div className="mb-1.5 flex items-start justify-between gap-2 text-sm">
                <span className="min-w-0 font-medium text-gray-800">
                  {t(skill.name, locale)}
                </span>
                <span className="shrink-0 text-xs font-semibold text-gold">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-cream-dark">
                <div
                  className="h-full rounded-full bg-gold transition-all duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </SidebarCard>

      <SidebarCard>
        <SectionHeading title={t(uiLabels.sections.languages, locale)} />
        <ul className="mt-4 space-y-2">
          {languages.map((lang) => (
            <li
              key={t(lang.name, locale)}
              className="flex items-center justify-between gap-2 text-sm"
            >
              <span className="font-medium text-gray-800">
                {t(lang.name, locale)}
              </span>
              <span className="shrink-0 text-gray-500">{t(lang.level, locale)}</span>
            </li>
          ))}
        </ul>
      </SidebarCard>

      <SidebarCard>
        <SectionHeading title={t(uiLabels.sections.education, locale)} />
        <p className="mt-4 text-sm leading-relaxed text-gray-700">
          {t(personal.education, locale)}
        </p>
      </SidebarCard>
    </aside>
  );
}
