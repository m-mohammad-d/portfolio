"use client";

import { cn } from "@/lib/utils";
import { ArrowUp, Github, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { ModeToggle } from "../ui/mode-toggle";

const links = [
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Project", href: "#project" },
  { title: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsScrolled(currentScrollY > 0);
    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsDrawerOpen(false);
    }
  };

  return (
    <header className={cn("top-8 sm:top-10 sticky z-50")}>
      <div
        className={cn(
          "mx-auto flex justify-between gap-10 items-center transition-all duration-300 p-4 z-50 ",
          isScrolled
            ? "bg-white/80 backdrop-blur-md md:p-6 dark:bg-zinc-900/80 xl:w-[90%] shadow -translate-y-8 md:rounded-3xl"
            : "bg-transparent w-full xl:w-[70%]"
        )}
      >
        <div className="flex items-center gap-2 text-xl font-bold">M</div>
        <div className="flex-1 items-center gap-3 justify-center hidden sm:flex">
          {links.map((link) => (
            <HeaderLink
              key={link.title}
              title={link.title}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/m-mohammad-d"
            target="_blank"
            rel="noopener noreferrer"
            className="border p-2 rounded-2xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300"
          >
            <Github />
          </a>
          <ModeToggle />
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border size-10 rounded-xl p-2 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors duration-300 sm:hidden"
              >
                <Menu />
                <span className="sr-only">Menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="min-h-dvh">
              <DrawerHeader className="flex justify-between">
                <DrawerTitle className="flex items-center gap-2 text-xl font-bold">
                  M mohammad
                </DrawerTitle>
                <DrawerClose asChild className="self-end -translate-y-14 z-50">
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="size-8"
                  >
                    <X />
                  </Button>
                </DrawerClose>
              </DrawerHeader>
              <div className="px-6 flex flex-col gap-4">
                {links.map((link) => (
                  <button
                    key={link.title}
                    className="flex items-center gap-2 font-medium text-xl text-left"
                    onClick={() => handleLinkClick(link.href)}
                  >
                    {link.title}
                  </button>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

interface HeaderLinkProps {
  title: string;
  href: string;
  onClick: () => void;
}

const HeaderLink = ({ title, onClick }: HeaderLinkProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
    >
      {title}
    </button>
  );
};
