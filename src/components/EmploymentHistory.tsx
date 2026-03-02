"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Unich Labs",
    role: "Multimedia Designer / Production Design",
    type: "(Remote Fulltime)",
  },
  {
    company: "SSS VENTURES",
    role: "Production Design / UX-UI Designer",
    type: "(Fulltime)",
  },
  {
    company: "Allday Network",
    role: "Sub Leader Creative Team",
    type: "(Fulltime)",
  },
  {
    company: "Freelance Graphic Designer",
    role: "",
    type: "(Fulltime)",
  },
];

const EmploymentHistory = () => {
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
            employment history/
          </h2>
        </motion.div>

        {/* Right Side: Experience List */}
        <div className="flex flex-col space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col space-y-2 group"
            >
              <h3 className="font-sans text-xl md:text-2xl font-bold tracking-tight">
                {exp.company}
              </h3>
              <div className="flex flex-col text-white/60 font-light tracking-wide text-sm md:text-base leading-relaxed">
                {exp.role && <span>{exp.role}</span>}
                <span className="opacity-50">{exp.type}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmploymentHistory;
