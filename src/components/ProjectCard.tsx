"use client";

import { ExternalLink, Github } from "lucide-react";
import { motion, Variants } from "motion/react";

import { TechBadge } from "@/components/ui/TechBadge";
import { Project } from "./Projects";
import { BlurFade } from "./magicui/blur-fade";
import { BorderBeam } from "./magicui/border-beam";
import { TextAnimate } from "./magicui/text-animate";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const cardVariants: Variants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      className={`flex flex-col gap-8 lg:gap-12 items-center ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } mb-24 last:mb-0`}
    >
      {/* Image */}
      <div className="w-full lg:w-3/5 relative group">
        <div className="relative overflow-hidden rounded-xl border border-border shadow-2xl bg-card">
          <BorderBeam
            size={60}
            duration={8}
            borderWidth={2}
            className="pointer-events-none"
          />

          <div className="absolute inset-0 bg-primary/10 z-10 group-hover:bg-transparent transition-colors duration-300" />

          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content */}
      <div
        className={`w-full lg:w-2/5 flex flex-col ${
          isEven ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"
        }`}
      >
        <TextAnimate
          as="h3"
          animation="blurInUp"
          by="word"
          duration={0.4}
          once
          className="text-3xl font-bold text-foreground mb-4"
        >
          {project.title}
        </TextAnimate>

        <BlurFade
          inView
          direction="up"
          blur="8px"
          duration={0.5}
          className={`mb-6 z-20 ${isEven ? "lg:-ml-16" : "lg:-mr-16"}`}
        >
          <div className="p-6 bg-card/95 backdrop-blur-md rounded-lg shadow-xl border border-border text-muted-foreground leading-relaxed">
            <BorderBeam
              size={60}
              duration={8}
              borderWidth={2}
              className="pointer-events-none"
            />

            {project.description}
          </div>
        </BlurFade>

        {/* Tech Stack */}
        <div
          className={`flex flex-wrap gap-2 mb-6 ${
            isEven ? "justify-end" : "justify-start"
          }`}
        >
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {project.links.map((link) => (
            <a
              key={link.type}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label={`Link to ${link.type} for ${project.title}`}
            >
              {link.type === "repo" ? (
                <Github className="w-6 h-6 lg:w-7 lg:h-7 stroke-[1.5]" />
              ) : (
                <ExternalLink className="w-6 h-6 lg:w-7 lg:h-7 stroke-[1.5]" />
              )}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
