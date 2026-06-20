"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/types/cv";
import { useLanguage } from "@/context/LanguageContext";
import { uiLabels } from "@/i18n/labels";
import { assetPath } from "@/lib/asset-path";
import { t } from "@/lib/i18n";
import { ImageLightbox } from "./ImageLightbox";

const PREVIEW_IMAGE_COUNT = 4;

function getTechTags(project: Project): string[] {
  const tags = new Set<string>();
  for (const spec of project.tech) {
    for (const value of spec.values) {
      tags.add(value);
    }
  }
  return Array.from(tags).slice(0, 5);
}

function MobileScreenshot({
  src,
  alt,
  onClick,
  className = "",
}: {
  src: string;
  alt: string;
  onClick?: () => void;
  className?: string;
}) {
  const image = (
    <img
      src={assetPath(src)}
      alt={alt}
      loading="lazy"
      className={`h-40 w-auto shrink-0 rounded-lg border border-gray-200 bg-cream-dark object-contain shadow-sm sm:h-44 ${onClick ? "cursor-zoom-in transition hover:ring-2 hover:ring-gold/50" : ""} ${className}`}
    />
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className="shrink-0">
        {image}
      </button>
    );
  }

  return image;
}

function ProjectImageStrip({
  images,
  title,
  maxCount = PREVIEW_IMAGE_COUNT,
}: {
  images: string[];
  title: string;
  maxCount?: number;
}) {
  if (images.length === 0) return null;

  const previewImages = images.slice(0, maxCount);

  return (
    <div className="overflow-x-auto bg-cream-dark px-3 py-3">
      <div className="flex gap-2.5">
        {previewImages.map((image, index) => (
          <MobileScreenshot
            key={image}
            src={image}
            alt={`${title} screenshot ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { locale } = useLanguage();
  const tags = getTechTags(project);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5">
      <ProjectImageStrip images={project.images} title={project.title} />

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-bold text-navy uppercase">{project.title}</h3>
          {project.role && (
            <span className="shrink-0 rounded bg-gold/15 px-2 py-0.5 text-[10px] font-bold tracking-wide text-gold uppercase">
              {t(project.role, locale)}
            </span>
          )}
        </div>

        <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-gray-600">
          {t(project.description, locale)}
        </p>

        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-cream-dark px-2 py-0.5 text-[10px] font-medium text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  const { locale } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <article className="border-b border-gray-100 pb-8 last:border-b-0 last:pb-0">
      {project.images.length > 0 && (
        <div className="mb-4 flex gap-3 overflow-x-auto pb-2">
          {project.images.map((image, index) => (
            <MobileScreenshot
              key={image}
              src={image}
              alt={`${project.title} screenshot ${index + 1}`}
              onClick={() => setLightboxIndex(index)}
            />
          ))}
        </div>
      )}

      {lightboxIndex !== null && (
        <ImageLightbox
          images={project.images}
          initialIndex={lightboxIndex}
          title={project.title}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-base font-bold text-navy uppercase">{project.title}</h3>
        {project.role && (
          <span className="rounded bg-gold/15 px-2 py-0.5 text-[10px] font-bold text-gold uppercase">
            {t(project.role, locale)}
          </span>
        )}
      </div>

      {project.description && (
        <p className="mt-3 text-sm leading-relaxed text-gray-700">
          {t(project.description, locale)}
        </p>
      )}

      {project.tech.length > 0 && (
        <div className="mt-4 space-y-1.5">
          {project.tech.map((spec) => (
            <div key={t(spec.label, locale)} className="text-sm text-gray-700">
              <span className="font-semibold text-gray-900">
                {t(spec.label, locale)}:{" "}
              </span>
              <span>{spec.values.join(", ")}</span>
            </div>
          ))}
        </div>
      )}

      {project.integratedProjects && project.integratedProjects.length > 0 && (
        <p className="mt-3 text-sm text-gray-700">
          <span className="font-semibold">
            {t(uiLabels.misc.projectsIntegrated, locale)}:{" "}
          </span>
          {project.integratedProjects.join(", ")}
        </p>
      )}

      {project.links && project.links.length > 0 && (
        <div className="mt-4 space-y-1 text-sm">
          <div className="font-semibold text-gray-900">
            {t(uiLabels.buttons.linkStore, locale)}:
          </div>
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gold underline-offset-2 hover:underline"
            >
              {t(link.label, locale)}
            </a>
          ))}
        </div>
      )}

      {project.testAccounts && project.testAccounts.length > 0 && (
        <div className="mt-4 space-y-1 text-sm text-gray-700">
          <div className="font-semibold text-gray-900">
            {t(uiLabels.buttons.testAccount, locale)}
          </div>
          {project.testAccounts.map((account) => (
            <div key={`${account.label}-${account.value}`}>
              <span className="font-medium">{t(account.label, locale)}: </span>
              {account.value.startsWith("http") ? (
                <a
                  href={account.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold underline-offset-2 hover:underline"
                >
                  {account.value}
                </a>
              ) : (
                <span>{account.value}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const { locale } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const featured = useMemo(
    () => projects.filter((project) => project.featured),
    [projects],
  );

  const otherProjects = useMemo(
    () => projects.filter((project) => !project.featured),
    [projects],
  );

  const maxIndex = Math.max(0, featured.length - 1);

  const goPrev = () => setCarouselIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const goNext = () => setCarouselIndex((i) => (i >= maxIndex ? 0 : i + 1));

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-lg font-bold tracking-wide text-navy uppercase">
          <span className="text-gold">◆</span>
          {t(uiLabels.sections.featuredProjects, locale)}
        </h2>
        <button
          type="button"
          onClick={() => setShowAll((value) => !value)}
          className="text-xs font-semibold tracking-wide text-gold uppercase hover:underline"
        >
          {showAll
            ? t(uiLabels.sections.featuredProjects, locale)
            : t(uiLabels.buttons.viewAllProjects, locale)}
        </button>
      </div>

      {!showAll && featured.length > 0 && (
        <div className="relative mt-6">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
            >
              {featured.map((project) => (
                <div key={project.id} className="w-full shrink-0 px-1">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          {featured.length > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous project"
                className="absolute top-1/2 -left-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md ring-1 ring-black/5 hover:bg-gold hover:text-white"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next project"
                className="absolute top-1/2 -right-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md ring-1 ring-black/5 hover:bg-gold hover:text-white"
              >
                ›
              </button>
              <div className="mt-4 flex justify-center gap-1.5">
                {featured.map((project, index) => (
                  <button
                    key={project.id}
                    type="button"
                    aria-label={`Go to ${project.title}`}
                    onClick={() => setCarouselIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === carouselIndex
                        ? "w-6 bg-gold"
                        : "w-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {showAll && (
        <div className="mt-6 space-y-10">
          <div>
            <h3 className="mb-6 text-sm font-bold tracking-wide text-gray-500 uppercase">
              {t(uiLabels.sections.featuredProjects, locale)}
            </h3>
            <div className="space-y-10">
              {featured.map((project) => (
                <ProjectDetail key={project.id} project={project} />
              ))}
            </div>
          </div>

          {otherProjects.length > 0 && (
            <div>
              <h3 className="mb-6 text-sm font-bold tracking-wide text-gray-500 uppercase">
                {t(uiLabels.sections.allProjects, locale)}
              </h3>
              <div className="space-y-10">
                {otherProjects.map((project) => (
                  <ProjectDetail key={project.id} project={project} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
