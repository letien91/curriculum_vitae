"use client";

import type { LocalizedString } from "@/types/cv";
import { useLanguage } from "@/context/LanguageContext";
import { uiLabels } from "@/i18n/labels";
import { assetPath } from "@/lib/asset-path";
import { t } from "@/lib/i18n";

const navItems = [
  { id: "hero", key: "home" as const },
  { id: "about", key: "about" as const },
  { id: "achievements", key: "achievements" as const },
  { id: "experience", key: "experience" as const },
  { id: "projects", key: "projects" as const },
  { id: "skills", key: "skills" as const },
  { id: "contact", key: "contact" as const },
];

type NavbarProps = {
  navName: LocalizedString;
  logo: string;
};

export function Navbar({ navName, logo }: NavbarProps) {
  const { locale, setLocale } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="flex shrink-0 items-center gap-2.5 text-sm font-bold tracking-wide text-white sm:text-base"
        >
          <img
            src={assetPath(logo)}
            alt="LDT"
            className="h-8 w-8 rounded-lg object-cover sm:h-9 sm:w-9"
          />
          <span>{t(navName, locale)}</span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs font-semibold tracking-wider text-white/75 uppercase transition hover:text-gold"
            >
              {t(uiLabels.nav[item.key], locale)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="flex overflow-hidden rounded-full border border-white/20 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setLocale("vi")}
              className={`px-3 py-1.5 transition ${
                locale === "vi"
                  ? "bg-gold text-navy"
                  : "text-white/80 hover:bg-white/10"
              }`}
            >
              VI
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`px-3 py-1.5 transition ${
                locale === "en"
                  ? "bg-gold text-navy"
                  : "text-white/80 hover:bg-white/10"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
