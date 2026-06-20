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
        <Navbar shortName={personal.shortName} />
        <HeroSection personal={personal} stats={stats} />

        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[300px_1fr] xl:grid-cols-[320px_1fr]">
            <PersonalSidebar
              personal={personal}
              skillBars={skillBars}
              languages={languages}
            />

            <div className="space-y-14">
              <AboutSection personal={personal} valueCards={valueCards} />
              <ExperienceSection experiences={experiences} />
              <ProjectsSection projects={projects} />
              <AchievementsSection achievements={achievements} />
              <ContactFooter personal={personal} />
            </div>
          </div>
        </div>

        <FloatingButtons />
      </div>
    </LanguageProvider>
  );
}
