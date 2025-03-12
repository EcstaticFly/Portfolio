import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border rounded-full shadow-md z-[5000] px-5 py-2 items-center justify-center space-x-4 border-white/[0.2] bg-black-100",
          className
        )}
      >

        <div className="hidden 2xs:flex space-x-4">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className="relative dark:text-neutral-50 flex items-center space-x-1 text-neutral-600 hover:text-neutral-500"
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="!cursor-pointer text-sm">{navItem.name}</span>
            </Link>
          ))}
        </div>

        <button className="border bg-purple/[0.1] text-sm font-medium relative border-neutral-200 text-white px-4 py-2 rounded-full">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>

        <div className="2xs:hidden ">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="border p-2 rounded-full bg-purple/[0.1] text-white"
          >
            <FaBars />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-12 right-0 w-40 bg-black-100 rounded-lg shadow-md">
              {navItems.map((navItem, idx) => (
                <Link
                  key={`link-${idx}`}
                  href={navItem.link}
                  className="block px-4 py-2 text-white hover:bg-purple/[0.2]"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {navItem.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};