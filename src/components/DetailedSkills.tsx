"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "Design Expertise",
    items:
      "Branding & Visual Identity, Logo Design, Poster Design, Marketing Collateral, Package Design, Typography, Layout Design",
    type: "(Advanced Level)",
  },
  {
    label: "Digital Design",
    items:
      "Social Media Graphics, Digital Advertising, Online Campaign Visuals",
    type: "(Advanced Level)",
  },
  {
    label: "Software",
    items: "Adobe Photoshop, Adobe Illustrator, Adobe InDesign",
    type: "(Expert Level)",
  },
  {
    label: "Creative Skills",
    items:
      "Visual Storytelling, Colour Theory, Composition, Concept Development",
    type: "(Professional Level)",
  },
  {
    label: "Professional Skills",
    items: "Client Collaboration, Project Coordination, Time Management",
    type: "(Professional Level)",
  },
];

const DetailedSkills = () => {
  return (
    <section className="bg-black text-white py-32 px-8 md:px-16 lg:px-24 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 md:gap-32">
        {/* Left Side: Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-start"
        >
          <h2 className="text-xl md:text-3xl font-sans font-light text-white/40 tracking-tighter lowercase leading-none">
            skills/
          </h2>
        </motion.div>

        {/* Right Side: Skills List */}
        <div className="flex flex-col space-y-16">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col space-y-2 group"
            >
              <h3 className="font-sans text-xl md:text-2xl font-bold tracking-tight">
                {category.label}
              </h3>
              <div className="flex flex-col text-white/60 font-light tracking-wide text-sm md:text-base leading-relaxed">
                <span>{category.items}</span>
                <span className="opacity-50">{category.type}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedSkills;
