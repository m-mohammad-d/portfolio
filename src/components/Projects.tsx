"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export interface ProjectLink {
  url: string;
  type: "repo" | "demo";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  links: ProjectLink[];
}

const PROJECTS_DATA: Project[] = [
  {
    id: "nexolive",
    title: "NexoLive",
    description:
      "A next-generation real-time live streaming platform focused on performance, interactivity, and community. Built to enable seamless creator–audience connections at scale.",
    techStack: ["Next.js", "TypeScript", "WebSockets", "Tailwind"],
    image: "/projects/nexolive.jpg",
    links: [
      { url: "https://github.com/m-mohammad-d/nexolive", type: "repo" },
      { url: "https://nexo-live.vercel.app", type: "demo" },
    ],
  },
  {
    id: "azogeh",
    title: "Azogeh",
    description:
      "A full-stack food e-commerce platform built with the MERN stack, supporting product browsing, cart management, and order processing with a scalable backend.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
      "Tailwind",
    ],
    image: "/projects/azogeh.jpeg",
    links: [
      { url: "https://github.com/m-mohammad-d/azogeh", type: "repo" },
      { url: "https://azogeh.onrender.com/", type: "demo" },
    ],
  },
  {
    id: "notion-clone",
    title: "Notion Clone",
    description:
      "A Notion-inspired productivity app featuring real-time collaboration, document management, authentication, and a modern scalable architecture.",
    techStack: ["Next.js", "Convex", "Clerk", "TypeScript", "Tailwind"],
    image: "/projects/notion.jpg",
    links: [
      { url: "https://github.com/m-mohammad-d/notion", type: "repo" },
      { url: "https://notion-web-delta.vercel.app", type: "demo" },
    ],
  },
  {
    id: "fitland",
    title: "FitLand",
    description:
      "A modern e-commerce web application for sportswear, featuring authentication, advanced product filtering, cart management, and checkout flows.",
    techStack: ["React", "TypeScript", "Tailwind", "E-commerce"],
    image: "/projects/fitland.png",
    links: [
      { url: "https://github.com/m-mohammad-d/fitland", type: "repo" },
      { url: "https://fitland-store.vercel.app", type: "demo" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="work" className="relative w-full py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-2 sm:gap-12 mb-20"
        >
          <h2
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl font-black whitespace-nowrap bg-clip-text text-transparent",
              "bg-primary"
            )}
          >
            &lt;Projects/&gt;
          </h2>
          <span className="h-0.5 w-full bg-border" />
        </motion.div>

        <div className="flex flex-col">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
