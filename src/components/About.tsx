"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-black text-white px-8 md:px-16 lg:px-24 border-t border-white/5 flex items-center justify-center min-h-screen"
    >
      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">
        {/* Left Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0 relative w-[280px] h-[350px] md:w-[320px] md:h-[400px]"
        >
          {/* Using a placeholder since user didn't provide image asset */}
          <div className="w-full h-full  rounded-2xl overflow-hidden relative">
            <Image
              src="https://res.cloudinary.com/dmaoarir8/image/upload/v1772477221/Uza_1_jgulgf.png" // Note: User needs to provide this image
              alt="Nguyen Thanh Phong - Paxton"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              onError={(e) => {
                // Fallback if image doesn't exist
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            {/* Fallback silhouette if image fails to load */}
          </div>
        </motion.div>

        {/* Right Side: Text Information */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center space-y-16 max-w-[650px]"
        >
          {/* Header Info */}
          <div className="flex flex-col gap-1">
            <span className="block text-white/40 font-sans text-sm tracking-widest mb-4">
              name/
            </span>
            <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight leading-tight">
              uzama muhammed{" "}
              <span className="text-white/40 font-light">(uzam)</span>
            </h2>
            <div className="h-1" />
            <h3 className="text-2xl md:text-3xl font-sans font-light text-white/80 tracking-tight">
              graphic designer
            </h3>
          </div>

          {/* Background Text */}
          <div className="max-w-[600px]  relative top-6 flex flex-col gap-1">
            <span className="block text-white/40 font-sans text-sm tracking-widest mb-5">
              background/
            </span>
            <p className="text-white/80 font-sans text-lg md:text-xl leading-relaxed ">
              Graphic designer with over 2 years of experience in branding and
              visual communication. Specialized in logo design, packaging,
              social media creatives, and typography. Skilled at building strong
              and memorable brand identities. Focused on combining creativity
              with strategy to deliver impactful design solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
