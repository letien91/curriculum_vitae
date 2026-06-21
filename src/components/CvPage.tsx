"use client";

import { cvData } from "@/data/cv";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { PersonalSidebar } from "@/components/PersonalSidebar";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ContactFooter } from "@/components/ContactFooter";
import { FloatingButtons } from "@/components/FloatingButtons";

export function CvPage() {
  const {
    personal,
    stats,
    skillBars,
    languages,
    valueCards,
    achievements,
    experiences,
    projects,
  } = cvData;

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cream">
        <Navbar navName={personal.navName} logo={personal.logo} />
        <HeroSection personal={personal} stats={stats} />

        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="grid items-start gap-6 md:gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[300px_minmax(0,1fr)]">
            <div className="lg:sticky lg:top-20">
              <PersonalSidebar
                personal={personal}
                skillBars={skillBars}
                languages={languages}
              />
            </div>

            <div className="min-w-0 space-y-10 md:space-y-12">
              <AboutSection personal={personal} valueCards={valueCards} />
              <AchievementsSection achievements={achievements} />
              <ExperienceSection experiences={experiences} />
              <ProjectsSection projects={projects} />
              <ContactFooter personal={personal} />
            </div>
          </div>
        </div>

        <FloatingButtons />
      </div>
    </LanguageProvider>
  );
}
