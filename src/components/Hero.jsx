import React from "react";
import { motion } from "framer-motion";
import DotGrid from "./DotGrid";

const Hero = () => {
  return (
    <section className="relative w-full h-500 overflow-hidden flex flex-col items-center justify-center text-center text-white">
      {/* --- Background Layers --- */}
      <div className="absolute inset-0 bg-[#0D0D0F] -z-20" />{" "}
      {/* Deep matte base */}
      <div className="absolute inset-0 -z-10 opacity-90">
        <DotGrid
          dotSize={8}
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
      {/* --- Hero Content --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10 px-6"
      >
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-offwhite">
          ENGINEERED FOR SOUND.
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mt-4">
          Designed for timeless acoustics and beauty.
        </p>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition">
            Explore Collection
          </button>
          <button className="border border-gray-500 px-8 py-3 rounded-full font-medium hover:bg-gray-700 transition">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
