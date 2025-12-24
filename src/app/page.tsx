import About from "@/components/About";
import { Hero } from "@/components/Hero";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <About />
      <Skill />
    </div>
  );
}
