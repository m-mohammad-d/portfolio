"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Highlighter } from "./magicui/text-highlighter";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="about"
      className="container mx-auto px-0 sm:px-6 lg:px-8 py-4 sm:py-16 lg:py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-4 sm:space-y-12"
      >
        {/* Title section */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 sm:gap-12 px-2 sm:px-0"
        >
          <h2
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl font-black whitespace-nowrap bg-clip-text text-transparent",
              "bg-primary"
            )}
          >
            &lt;About Me/&gt;
          </h2>
          <span className="h-0.5 w-full bg-primary" />
        </motion.div>

        {/* Content section */}
        <div className="space-y-3 sm:space-y-6 px-2 sm:px-0">
          <p className="text-[15px] sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            I'm a frontend developer specializing in{" "}
            <Highlighter action="circle" color="#87CEFA">
              React, Next.js, and TypeScript
            </Highlighter>
            . I focus on building modern, performant, and user-friendly web
            applications with clean and maintainable code.
          </p>

          <p className="text-[15px] sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            I have experience managing{" "}
            <Highlighter action="underline" color="#FF9800">
              complex React projects
            </Highlighter>{" "}
            and optimizing frontend performance. I also enjoy exploring{" "}
            <Highlighter action="underline" color="#FF9800">
              Three.js
            </Highlighter>{" "}
            to create interactive 3D web experiences and experimenting with{" "}
            <Highlighter action="underline" color="#FF9800">
              AI integrations
            </Highlighter>{" "}
            in web apps.
          </p>

          <p className="text-[15px] sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            My background in software engineering and problem-solving allows me
            to bridge{" "}
            <Highlighter action="circle" color="#87CEFA">
              design and code
            </Highlighter>
            , building interfaces that are both functional and visually
            appealing. I'm passionate about learning new technologies and
            applying them to real-world projects.
          </p>

          <p className="text-[15px] sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
            Outside of coding, I enjoy exploring history, finance, and trading,
            constantly seeking ways to grow my knowledge and apply it in
            creative ways.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
