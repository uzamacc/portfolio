"use client";

import { motion } from "framer-motion";

const TechSkills = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden min-h-[40vh] py-20 md:py-0 md:h-[50vh] border-t border-white/5 flex items-center">
      {/* Large Background Gradient Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden w-full">
        <span
          className="
            text-[16vw]
            font-bisakata font-light
            bg-[linear-gradient(to_bottom_right,_#000000_0%,_#0a0a0a_20%,_#1a1a1a_30%,_#8a8a8a_45%,_#ffffff_50%,_#8a8a8a_55%,_#1a1a1a_70%,_#0a0a0a_80%,_#000000_100%)]
            bg-clip-text
            text-transparent
            whitespace-nowrap
            leading-none
            tracking-[-0.05em]
            text-center
            w-full
          "
        >
          technical skills
        </span>
      </div>
    </section>
  );
};

export default TechSkills;
