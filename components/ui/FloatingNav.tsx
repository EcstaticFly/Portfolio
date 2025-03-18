"use client";

import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isDropdownOpen && !target.closest(".nav-dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isDropdownOpen]);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => document.removeEventListener("keydown", handleEscKey);
  }, [isDropdownOpen]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-4 sm:top-10 inset-x-0 mx-auto border rounded-full shadow-md z-[5000] px-3 sm:px-5 py-2 items-center justify-center space-x-2 sm:space-x-4 border-white/[0.2] bg-black-100",
          className
        )}
      >
        <div className="hidden xs:flex space-x-2 sm:space-x-4">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className="relative dark:text-neutral-50 flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 hover:bg-white/10 transition-colors duration-300 rounded-full py-1 px-2"
            >

              <span className="hidden xs:block sm:hidden">{navItem.icon}</span>
              <span className="!cursor-pointer text-xs xs:text-sm whitespace-nowrap">{navItem.name}</span>
            </Link>
          ))}
        </div>

        <button className="border bg-purple/[0.1] text-xs sm:text-sm font-medium relative border-neutral-200 text-white px-3 sm:px-4 py-2 sm:py-2 rounded-full hover:bg-gradient-to-b from-blue-800/[0.3] to-purple/[0.3]">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap">
            Resume
          </a>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>

        <div className="nav-dropdown-container relative">
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              setIsDropdownOpen(!isDropdownOpen);
            }}
            className="p-1 xs:hidden text-white rounded-full hover:bg-white/10 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isDropdownOpen ? "Close menu" : "Open menu"}
            aria-expanded={isDropdownOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isDropdownOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                {isDropdownOpen ? <X size={18} /> : <Menu size={18} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-10 right-0 w-36 bg-black-100 rounded-lg shadow-md border border-white/[0.2] overflow-hidden"
                role="menu"
              >
                {navItems.map((navItem, idx) => (
                  <Link
                    key={`link-${idx}`}
                    href={navItem.link}
                    className="block px-3 py-2 text-white hover:bg-purple/[0.2] transition-colors duration-200"
                    onClick={() => setIsDropdownOpen(false)}
                    role="menuitem"
                  >
                    <div className="flex items-center">
                      {navItem.icon && <span className="mr-2">{navItem.icon}</span>}
                      <span className="text-xs">{navItem.name}</span>
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
