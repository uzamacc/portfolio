"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer id="contact" className="w-full flex flex-col">
      {/* Top Black Section */}
      <div className="relative bg-black text-white w-full h-[40vh] md:h-[50vh] flex justify-center items-start pt-16 md:pt-24 overflow-hidden border-t border-white/5">
        {/* Background Faint Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 select-none">
          <span className="text-[40vw] font-serif text-white/50 whitespace-nowrap leading-none tracking-tighter ml-[20vw]">
            the end
          </span>
        </div>

        {/* Foreground Content */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white/90 font-sans text-lg md:text-xl font-medium tracking-wide"
        >
          thanks for scrolling
        </motion.p>
      </div>

      {/* Bottom Light Section */}
      <div className="relative bg-[#e2e2e2] text-black w-full min-h-[40vh] md:h-[50vh] flex flex-col justify-end p-8 md:p-12 lg:p-16 overflow-hidden">
        {/* Background Faint Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10 select-none">
          <span className="text-[45vw] font-serif text-black/40 whitespace-nowrap leading-none tracking-tighter mr-[10vw]">
            Contact
          </span>
        </div>

        {/* Foreground Content Grid */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          {/* Left Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-[20vw] md:text-[14vw] lg:text-[12vw]  tracking-tighter leading-[0.8]">
              for work
            </h2>
          </motion.div>

          {/* Right Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-1 text-black/80 font-sans text-base md:text-lg mb-0 pb-4 md:pb-6 lg:pb-8"
          >
            {/* Social Links Minimum Design */}
            <div className="flex flex-wrap items-center gap-6 mb-6 md:mb-8 font-sans text-sm md:text-base font-medium uppercase tracking-widest text-black/60">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group hover:text-black transition-colors duration-500 flex items-center gap-2"
                aria-label="LinkedIn"
              >
                <span>LinkedIn</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </a>
              <span className="text-black/30 select-none">•</span>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group hover:text-black transition-colors duration-500 flex items-center gap-2"
                aria-label="Behance"
              >
                <span>Behance</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </a>
            </div>

            <div className="flex flex-col gap-1">
              <a
                href="tel:+919745828754"
                className="hover:text-black transition-colors block"
              >
                +91 97458 28754
              </a>
              <a
                href="tel:+966506700734"
                className="hover:text-black transition-colors block"
              >
                +966 50 670 0734
              </a>
            </div>
            <a
              href="mailto:uzammuhammed@gmail.com"
              className="hover:text-black transition-colors"
            >
              uzammuhammed@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
