import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import DotGrid from "./DotGrid";

const History = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });

  return (
    <section className="w-full h-screen flex flex-col md:flex-row overflow-hidden">
      <div className="relative hidden md:flex w-1/2 h-full items-center px-12">
        <div className="absolute inset-0 -z-20 opacity-[0.85] pointer-events-none bg-black">
          <DotGrid
            dotSize={10}
            gap={22}
            baseColor="#1A1A1A"
            activeColor="#CFA15B"
            proximity={150}
            shockRadius={250}
            shockStrength={5}
            resistance={800}
            returnDuration={1.4}
          />
        </div>

        {/* Soft blur overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] -z-10"></div>

        {/* TEXT CONTENT WITH FADE-IN */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-md text-left"
        >
          <h2 className="text-4xl font-light text-white mb-6 leading-tight">
            From 1925, into the future
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            Since 1925, our iconic audio and home entertainment products have
            defined entire decades. And we’re nowhere near finished.
          </p>
        </motion.div>
      </div>

      {/* RIGHT SIDE — Fullscreen Video (desktop) + background for mobile */}
      <div className="relative w-full md:w-1/2 h-full overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="/videos/100-year-timeline-video-1025-02-16x9 (online-video-cutter.com) (1) (1).mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* MOBILE OVERLAY TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 md:hidden p-6 flex flex-col justify-center 
                     bg-linear-to-b from-black/60 via-black/30 to-black/70"
        >
          <h2 className="text-3xl font-light text-white mb-4 leading-snug">
            From 1925, into the future
          </h2>

          <p className="text-white/80 text-base leading-relaxed mb-4">
            Since 1925, our iconic audio and home entertainment products have
            defined entire decades. And we’re nowhere near finished.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default History;
