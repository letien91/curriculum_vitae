"use client";

import type { PersonalInfo } from "@/types/cv";
import { useLanguage } from "@/context/LanguageContext";
import { uiLabels } from "@/i18n/labels";
import { t } from "@/lib/i18n";

type ContactFooterProps = {
  personal: PersonalInfo;
};

const iconClass = "h-4 w-4 shrink-0";

function EmailIcon() {
  return (
    <svg
      className={iconClass}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  );
}

function ZaloIcon() {
  return (
    <svg
      className={iconClass}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C6.48 2 2 5.82 2 10.5c0 2.76 1.5 5.22 3.86 6.84L5 22l4.74-2.37c.73.12 1.48.18 2.26.18 5.52 0 10-3.82 10-8.5S17.52 2 12 2zm0 14.75c-.65 0-1.28-.06-1.89-.17l-.35-.07-2.1 1.05.55-2.05-.23-.37A6.08 6.08 0 0 1 6 10.5C6 7.46 8.69 5 12 5s6 2.46 6 5.5-2.69 5.25-6 5.25z" />
    </svg>
  );
}

export function ContactFooter({ personal }: ContactFooterProps) {
  const { locale } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="scroll-mt-24">
      <div className="rounded-xl bg-navy px-6 py-8 text-white sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold tracking-wide uppercase">
              {t(uiLabels.sections.contact, locale)}
            </h2>
            <p className="mt-2 max-w-md text-sm text-white/70">
              {t(uiLabels.misc.contactDescription, locale)}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2.5 text-sm font-medium transition hover:border-gold hover:text-gold"
            >
              <EmailIcon />
              {t(uiLabels.buttons.sendEmail, locale)}
            </a>
            <a
              href={personal.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-2.5 text-sm font-medium transition hover:border-gold hover:text-gold"
            >
              <ZaloIcon />
              Zalo
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-200 pt-6 text-xs text-gray-500">
        <p>
          © {year} {personal.name}. {t(uiLabels.misc.copyright, locale)}
        </p>
      </div>
    </footer>
  );
}
