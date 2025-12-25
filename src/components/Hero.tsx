"use client";

import {
  type AnimationVariant,
  TextAnimate,
} from "@/components/magicui/text-animate";
import { Compare } from "@/components/ui/compare";
import { Cover } from "@/components/ui/cover";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { memo, useEffect, useState } from "react";

const ROLE_TITLES = [
  "Frontend Developer",
  "React & Next.js Specialist",
  "TypeScript-Focused Engineer",
  "UI Performance Optimizer",
  "Clean Architecture Advocate",
];

const animationTypes: AnimationVariant[] = [
  "fadeIn",
  "blurInUp",
  "slideUp",
  "slideLeft",
  "scaleUp",
];

export const Hero = () => {
  const [currentText, setCurrentText] = useState(ROLE_TITLES[0]);
  const [currentAnimation, setCurrentAnimation] =
    useState<AnimationVariant>("fadeIn");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => {
        const index = ROLE_TITLES.indexOf(prev);
        return ROLE_TITLES[(index + 1) % ROLE_TITLES.length];
      });

      setCurrentAnimation(
        animationTypes[Math.floor(Math.random() * animationTypes.length)]
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen xl:w-[85%] mx-auto flex items-center justify-center overflow-x-hidden">
      <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-center gap-20 px-2 md:px-6">
        <div className="flex-1 relative w-full lg:w-auto">
          <div className="text-xs bg-zinc-100 dark:bg-gray-800/50 w-max rounded-full border flex items-center gap-2 px-3 py-1.5">
            <div className="size-2 rounded-full bg-indigo-700 font-medium animate-pulse" />
            Welcome to my world
          </div>
          <div className="flex flex-row gap-4 items-center my-4 lg:my-0 lg:block">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight my-4 md:my-8 dark:text-zinc-300 text-zinc-700">
              Hello<span className="lg:hidden">,</span>
            </h1>

            <Title />
          </div>

          {/* Responsive positioning for floating elements */}
          <div className="px-3 py-2 hidden sm:block absolute top-8 left-16 sm:left-32 bg-purple-500/20 rounded-[6px] w-max font-medium dark:text-purple-300 text-purple-500 border border-purple-500/20 animate-wiggle duration-1000">
            UI Magic
          </div>

          <div className="px-3 py-2 hidden sm:block absolute top-24 right-4 sm:right-10 bg-blue-500/20 rounded-[6px] w-max font-medium dark:text-blue-300 text-blue-500 border border-blue-500/20 animate-wiggle duration-1000">
            Clean Code
          </div>

          {/* <div className="px-3 py-2 hidden sm:block absolute bottom-36 right-2 sm:right-20 bg-yellow-500/20 rounded-[6px] w-max font-medium dark:text-yellow-300 text-yellow-500 border border-yellow-500/20 animate-wiggle duration-1000">
          Innovation
          </div> */}

          <div className="flex items-center justify-center md:justify-start">
            <motion.div
              layout
              className={cn(
                "md:w-fit w-full py-2 px-4 sm:px-8 text-base sm:text-lg md:text-xl font-bold my-5 rounded-lg pt-2 pb-3 text-center text-black dark:text-white",
                "[background:linear-gradient(to_bottom,var(--color-gray-100),var(--color-gray-200))]",
                "shadow-[inset_0_-1px_var(--color-gray-300),inset_0_0_0_1px_var(--color-gray-300),0_4px_8px_var(--color-gray-300)]",
                "dark:[background:linear-gradient(to_bottom,var(--color-neutral-700),var(--color-neutral-800))]",
                "dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),0_4px_8px_#00000052]"
              )}
            >
              <TextAnimate
                duration={1}
                animation={currentAnimation}
                by="character"
                startOnView={false}
                className="wrap-break-word"
              >
                {currentText}
              </TextAnimate>
            </motion.div>
          </div>
          <div className="text-lg text-zinc-900 dark:text-zinc-400 my-6 md:my-10 font-bold">
            React Enthusiast ⚛️ | Next.js Explorer 🚀
            <br />{" "}
            <span className="font-normal italic">
              Leading scalable UI development & shaping modern web experiences
              with clean, efficient code 💻✨
            </span>
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end w-full mt-8 lg:mt-0">
          <CompareDemo />
        </div>
      </div>
    </div>
  );
};

function CompareDemo() {
  return (
    <div className="w-full max-w-xl lg:max-w-2xl border rounded-3xl bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 overflow-hidden">
      <Compare
        firstImage="/compare-1.png"
        secondImage="/compare-2.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-65 sm:h-80 md:h-105 lg:h-130 w-full"
        slideMode="hover"
      />
    </div>
  );
}

const Title = memo(() => {
  return (
    <span className="block sm:inline">
      I&apos;m <Cover>Mohammad</Cover>
    </span>
  );
});

Title.displayName = "Title";
