"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const centerTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reveal animation
    const tl = gsap.timeline();

    tl.fromTo(
      bgTextRef.current,
      { y: 50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 0.8, scale: 1, duration: 2, ease: "expo.out" },
    ).fromTo(
      centerTextRef.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" },
      "-=1",
    );

    // Parallax on scroll
    gsap.to(bgTextRef.current, {
      y: -150,
      scale: 1.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black "
    >
      {/* Background Decorative Text - Silver Metallic "Bisakata" font */}
      <div
        ref={bgTextRef}
        className="absolute h-screen inset-0 flex items-center justify-center pointer-events-none select-none z-0 px-8 md:px-16 lg:px-24"
      >
        {/* <span className="text-[44vw] md:text-[37vw] font-bisakata font-light text-silver-gradient whitespace-nowrap leading-normal pt-12 pb-12">
          Portfolio
        </span> */}
        <span
          className="
    text-[44vw] md:text-[37vw]
    font-bisakata font-light
    bg-[linear-gradient(to_bottom,_#000000_0%,_#0a0a0a_20%,_#2b2b2b_40%,_#bfbfbf_50%,_#2b2b2b_60%,_#0a0a0a_80%,_#000000_100%)]
    bg-clip-text
    text-transparent
    whitespace-nowrap
    leading-normal
    pt-12 pb-12
  "
        >
          Portfolio
        </span>
      </div>

      {/* Centered Primary Text - Matching Reference Image */}
      <div
        ref={centerTextRef}
        className="relative z-10 flex items-center justify-center"
      >
        <div className="flex items-start gap-1 text-white">
          <div className="flex flex-col gap-0.5 items-start leading-[0.8] tracking-tighter">
            <h1 className="text-[48px] md:text-[62px] font-light">
              uzama{" "}
              <span className="text-[14px] md:text-[18px] opacity-40 translate-y-3 -top-1.5 absolute">
                ©
              </span>{" "}
            </h1>

            <h1 className="text-[48px] md:text-[62px] font-light relative left-8 ">
              muhammed
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
