// src/types/i18n.d.ts
export interface Project {
  name: string;
  description: string;
  links: {
    demo: string;
    source: string;
  };
}

export interface LanguageContent {
  projects: {
    title: string;
    course: Project;
    nexium: Project;
    azogeh: Project;
    threeJs: Project;
  };
}
