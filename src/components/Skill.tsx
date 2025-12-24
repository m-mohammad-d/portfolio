"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SkillCard from "./SkillCard";

const skills = [
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS3", icon: "https://cdn.simpleicons.org/css/1572B6" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
  { name: "Redux", icon: "https://cdn.simpleicons.org/redux/764ABC" },
  {
    name: "React Query",
    icon: "https://cdn.simpleicons.org/reactquery/3178C6",
  },
  { name: "Zod", icon: "https://cdn.simpleicons.org/zod/8CBBF2" },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  },
  { name: "shadcn/ui", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Three.js", icon: "https://cdn.simpleicons.org/three.js/000000" },
  { name: "Storybook", icon: "https://cdn.simpleicons.org/storybook/FF4785" },
  { name: "Jest", icon: "https://cdn.simpleicons.org/jest/C21325" },
  { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E535AB" },
  { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/0C344B" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
  { name: "npm", icon: "https://cdn.simpleicons.org/npm/CB3837" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express/000000" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "PWA", icon: "https://cdn.simpleicons.org/pwa/5C6BC0" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function Skill() {
  return (
    <section
      id="Skill"
      className=" mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex items-center gap-2 sm:gap-12 mb-10"
      >
        <h2
          className={cn(
            "text-3xl sm:text-4xl md:text-5xl font-black whitespace-nowrap bg-clip-text text-transparent",
            "bg-primary"
          )}
        >
          &lt;Skill/&gt;
        </h2>
        <span className="h-0.5 w-full bg-primary" />
      </motion.div>

      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <SkillCard skills={skills} />
      </motion.ul>
    </section>
  );
}
