"use client";

import { Github, Mail, Send } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { BorderBeam } from "./magicui/border-beam";
import { TextAnimate } from "./magicui/text-animate";
import { TypingAnimation } from "./magicui/typing-animation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const ContactSection = () => {
  return (
    <section id="contact" className="relative w-full py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Title */}
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
            &lt;Contact/&gt;
          </h2>
          <span className="h-0.5 w-full bg-border" />
        </motion.div>

        {/* Card */}
        <div className="relative max-w-3xl mx-auto">
          <div className="relative rounded-2xl border border-border bg-card p-10 shadow-2xl overflow-hidden group">
            <BorderBeam
              size={100}
              duration={12}
              borderWidth={1}
              colorFrom="#C0C0C0"
              colorTo="#FFFFFF"
              className="pointer-events-none"
            />

            <TypingAnimation
              as="p"
              loop={true}
              className="text-center text-muted-foreground text-lg mb-10"
            >
              Have a question, idea, or just want to connect? Reach out through
              GitHub, Telegram, or email.
            </TypingAnimation>

            {/* Links */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://github.com/m-mohammad-d"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-background hover:border-primary hover:shadow-lg transition-all"
              >
                <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-medium text-foreground">GitHub</span>
              </a>

              <a
                href="https://t.me/silver_shade1"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-background hover:border-primary hover:shadow-lg transition-all"
              >
                <Send className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-medium text-foreground">Telegram</span>
              </a>

              <a
                href="mailto:silverShade1000@gmail.com"
                className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-border bg-background hover:border-primary hover:shadow-lg transition-all"
              >
                <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="font-medium text-foreground">Email Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
