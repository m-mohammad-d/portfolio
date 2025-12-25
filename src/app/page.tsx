import About from "@/components/About";
import ContactSection from "@/components/Contact";
import { Hero } from "@/components/Hero";
import ProjectsSection from "@/components/Projects";
import Skill from "@/components/Skill";
import { Contact } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <About />
      <Skill />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
