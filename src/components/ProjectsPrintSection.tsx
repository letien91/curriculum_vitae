"use client";

import type { Project } from "@/types/cv";
import { useLanguage } from "@/context/LanguageContext";
import { uiLabels } from "@/i18n/labels";
import { assetPath } from "@/lib/asset-path";
import { t } from "@/lib/i18n";

function ProjectPrintBlock({ project }: { project: Project }) {
  const { locale } = useLanguage();

  return (
    <article className="cv-print-project break-inside-avoid border-b border-gray-200 pb-6 last:border-b-0">
      {project.images.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {project.images.map((image, index) => (
            <img
              key={image}
              src={assetPath(image)}
              alt={`${project.title} screenshot ${index + 1}`}
              className="h-36 w-auto rounded border border-gray-200 bg-cream-dark object-contain print:h-32"
            />
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-sm font-bold text-navy uppercase">{project.title}</h3>
        {project.role && (
          <span className="rounded bg-gold/15 px-2 py-0.5 text-[10px] font-bold text-gold uppercase">
            {t(project.role, locale)}
          </span>
        )}
      </div>

      {project.description && (
        <p className="mt-2 text-sm leading-relaxed text-gray-700">
          {t(project.description, locale)}
        </p>
      )}

      {project.tech.length > 0 && (
        <div className="mt-3 space-y-1">
          {project.tech.map((spec) => (
            <div key={t(spec.label, locale)} className="text-xs text-gray-700">
              <span className="font-semibold">{t(spec.label, locale)}: </span>
              <span>{spec.values.join(", ")}</span>
            </div>
          ))}
        </div>
      )}

      {project.integratedProjects && project.integratedProjects.length > 0 && (
        <p className="mt-2 text-xs text-gray-700">
          <span className="font-semibold">
            {t(uiLabels.misc.projectsIntegrated, locale)}:{" "}
          </span>
          {project.integratedProjects.join(", ")}
        </p>
      )}

      {project.links && project.links.length > 0 && (
        <div className="mt-2 text-xs text-gray-700">
          <span className="font-semibold">
            {t(uiLabels.buttons.linkStore, locale)}:{" "}
          </span>
          {project.links.map((link) => (
            <span key={link.url} className="mr-2">
              {t(link.label, locale)} ({link.url})
            </span>
          ))}
        </div>
      )}

      {project.testAccounts && project.testAccounts.length > 0 && (
        <div className="mt-2 text-xs text-gray-700">
          <span className="font-semibold">
            {t(uiLabels.buttons.testAccount, locale)}:{" "}
          </span>
          {project.testAccounts
            .map((account) => `${t(account.label, locale)}: ${account.value}`)
            .join(" · ")}
        </div>
      )}
    </article>
  );
}

type ProjectsPrintSectionProps = {
  projects: Project[];
};

export function ProjectsPrintSection({ projects }: ProjectsPrintSectionProps) {
  const { locale } = useLanguage();

  return (
    <section className="cv-print-section">
      <h2 className="flex items-center gap-2 text-lg font-bold tracking-wide text-navy uppercase">
        <span className="text-gold">◆</span>
        {t(uiLabels.sections.allProjects, locale)}
      </h2>
      <div className="mt-6 space-y-8">
        {projects.map((project) => (
          <ProjectPrintBlock key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
