"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "BONO",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "LUMINA",
    category: "App Design",
    image:
      "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "AXO",
    category: "Motion Graphics",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    title: "SILK",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19251a42?auto=format&fit=crop&q=80&w=1000",
  },
];

const WorkGrid = () => {
  return (
    <section
      id="work"
      className="py-section px-8 md:px-16 lg:px-24 bg-background"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-32 gap-8">
          <h2 className="text-[10vw] md:text-[6vw] font-bold uppercase tracking-tighter">
            Select Work
          </h2>
          <p className="text-sm opacity-50 max-w-[200px] text-right">
            A curated selection of my most recent design projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "circOut",
              }}
              className="group relative aspect-[4/5] bg-secondary overflow-hidden grid-hover"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

              <div className="absolute bottom-8 left-8 z-10">
                <h3 className="text-4xl font-bold tracking-tighter leading-none mb-2">
                  {project.title}
                </h3>
                <p className="text-sm uppercase tracking-widest opacity-60">
                  {project.category}
                </p>
              </div>

              {/* Placeholder Overlay to mimic the branding look */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="text-[15vw] font-bold tracking-tighter mix-blend-overlay">
                  {project.title}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;
