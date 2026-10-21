import { useEffect, useState } from 'react';
import { portfolioConfig } from '../config/portfolio.config';
import type { CaseStudy } from '../types/portfolio.types';

export function useHashRoute() {
  const [activeProject, setActiveProject] = useState<CaseStudy | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const slug = hash.replace('#project/', '');
        const found = portfolioConfig.projects.find(
          (p) => p.slug === slug || p.id === slug
        );
        if (found) {
          setActiveProject(found);
          return;
        }
      }
      setActiveProject(null);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash on mount

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openProject = (project: CaseStudy) => {
    window.location.hash = `project/${project.slug}`;
    setActiveProject(project);
  };

  const closeProject = () => {
    // Clear hash without jump
    window.history.pushState(
      '',
      document.title,
      window.location.pathname + window.location.search
    );
    setActiveProject(null);
  };

  return {
    activeProject,
    openProject,
    closeProject,
  };
}
