"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { X, Menu } from "lucide-react";

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
        <div className="hidden xs:flex space-x-4">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className="relative dark:text-neutral-50 flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 hover:bg-white/10 transition-colors duration-300 rounded-full py-1"
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="!cursor-pointer text-sm">{navItem.name}</span>
            </Link>
          ))}
        </div>

        <button className="border bg-purple/[0.1] text-sm font-medium relative border-neutral-200 text-white px-4 py-2 rounded-full hover:bg-gradient-to-b from-blue-800/[0.3] to-purple/[0.3]">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>

        <div className="xs:hidden ">
          <motion.button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="p-2 text-white rounded-full hover:bg-white/10 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isDropdownOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isDropdownOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                {isDropdownOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

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
