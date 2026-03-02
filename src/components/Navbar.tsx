"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Magnetic from "./Magnetic";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#work" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] px-8 md:px-16 lg:px-24 transition-all duration-500 ${
          scrolled
            ? "py-4 bg-black/80 backdrop-blur-md"
            : "py-12 bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex justify-between items-center w-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="text-2xl font-sans tracking-tighter text-white">
              uzama.
            </span>
          </motion.div>

          {/* Menu Button */}
          <div className="flex items-center space-x-8">
            <Magnetic>
              <button
                onClick={() => setIsOpen(true)}
                className="group flex items-center space-x-3 text-foreground"
              >
                <span className="font-sans text-[11px] uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity mt-1">
                  Menu
                </span>
                <div className="w-10 h-10 rounded-full border border-foreground/10 flex flex-col items-center justify-center space-y-1 group-hover:bg-foreground transition-all duration-500 overflow-hidden">
                  <div className="w-5 h-[1.5px] bg-foreground group-hover:bg-white transition-colors" />
                  <div className="w-5 h-[1.5px] bg-foreground group-hover:bg-white transition-colors" />
                </div>
              </button>
            </Magnetic>
          </div>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[480px] z-[200] bg-black p-8 md:p-12 lg:p-16 flex flex-col justify-between border-l border-white/10"
            >
              <div className="flex justify-between items-center">
                <span className=" text-2xl text-white tracking-tighter uppercase opacity-50">
                  Menu
                </span>
                <Magnetic>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="group w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white transition-all duration-500"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-white group-hover:text-black"
                    >
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </Magnetic>
              </div>

              <div className="flex flex-col space-y-4 md:space-y-6 my-12">
                {menuLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className=" text-[clamp(2.5rem,8vw,5rem)] leading-[1.1] text-white/20 hover:text-white transition-colors uppercase tracking-tighter block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col space-y-8 border-t border-white/5 pt-8">
                <div className="flex flex-col space-y-2">
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/20">
                    Get in touch
                  </span>
                  <a
                    href="mailto:hello@uzama.com"
                    className="font-sans text-sm text-white/60 hover:text-white transition-colors"
                  >
                    hello@uzama.com
                  </a>
                </div>
                <div className="flex space-x-6">
                  {["Instagram", "LinkedIn", "Behance"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="font-sans text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors whitespace-nowrap"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
