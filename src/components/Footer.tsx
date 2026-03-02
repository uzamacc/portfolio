"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="pt-[30vh] pb-12 px-8 md:px-16 lg:px-24 bg-background"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="border-t border-secondary/30 pt-24 mb-32">
          <h2 className="text-[12vw] md:text-[10vw] font-bold tracking-tighter uppercase leading-[0.8] mb-12">
            Let's work together.
          </h2>

          <div className="flex flex-wrap gap-12 mt-20">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted mb-4">
                Contact
              </p>
              <a
                href="mailto:info@nickzoutendijk.nl"
                className="text-2xl font-bold hover:opacity-50 transition-opacity"
              >
                info@nickzoutendijk.nl
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted mb-4">
                Social
              </p>
              <div className="flex gap-6 font-bold">
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
                <a href="#" className="hover:underline">
                  Behance
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-muted border-t border-secondary/10 pt-8">
          <p>&copy; 2024 Nick Zoutendijk</p>
          <div className="flex gap-8">
            <span>AMSTERDAM</span>
            <span>12:34 PM</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
