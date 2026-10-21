import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/hero/HeroSection';
import { MarqueeTicker } from './components/ui/MarqueeTicker';
import { AboutSection } from './components/about/AboutSection';
import { SelectedWork } from './components/work/SelectedWork';
import { CapabilitiesSection } from './components/capabilities/CapabilitiesSection';
import { EducationSection } from './components/education/EducationSection';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { CaseStudyModal } from './components/work/CaseStudyModal';
import { useActiveSection } from './hooks/useActiveSection';
import { useHashRoute } from './hooks/useHashRoute';
import { portfolioConfig } from './config/portfolio.config';

export const App: React.FC = () => {
  const activeSection = useActiveSection(
    ['hero', 'about', 'work', 'skills', 'education', 'contact'],
    150
  );
  const { activeProject, openProject, closeProject } = useHashRoute();

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenFeaturedProject = () => {
    if (portfolioConfig.projects.length > 0) {
      openProject(portfolioConfig.projects[0]);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#111111] text-[#F7F5F0] flex flex-col selection:bg-[#F04419] selection:text-white overflow-x-hidden font-sans">
      {/* Top Hairline Accent Line in Burnt Orange */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-[#F04419] z-50 pointer-events-none" />

      {/* Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections with Alternating Rhythm */}
      <main className="flex-1 w-full">
        {/* 1. HERO (Burnt Orange #F04419) */}
        <HeroSection
          onExploreClick={() => handleScrollTo('work')}
          onContactClick={() => handleScrollTo('contact')}
          onOpenFeaturedProject={handleOpenFeaturedProject}
        />

        {/* 2. RUNNING TICKER (Deep Black #111111) */}
        <MarqueeTicker />

        {/* 3. ABOUT — EDITORIAL STORYTELLING (Warm White #F7F5F0) */}
        <AboutSection />

        {/* 4. SELECTED PROJECTS (Deep Black #111111) */}
        <SelectedWork onSelectProject={openProject} />

        {/* 5. TOOLS OF THE TRADE (Warm White #F7F5F0) */}
        <CapabilitiesSection />

        {/* 6. EDUCATION & ACHIEVEMENTS (Deep Black #111111) */}
        <EducationSection />

        {/* 7. CONTACT — MEMORABLE ENDING (Warm White #F7F5F0) */}
        <ContactSection />
      </main>

      {/* 8. FOOTER WITH GIANT WORDMARK (Deep Black #111111) */}
      <Footer />

      {/* Deep Dive Case Study View (Modal & Hash Route) */}
      {activeProject && (
        <CaseStudyModal
          project={activeProject}
          onClose={closeProject}
          onNavigate={openProject}
        />
      )}
    </div>
  );
};

export default App;
