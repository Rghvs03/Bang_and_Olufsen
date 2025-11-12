import React from "react";
import { motion } from "framer-motion";
import DotGrid from "./DotGrid";
import TiltedCard from "./TiltedCard";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0D0D0F] -z-20" />
      <div className="absolute inset-0 -z-10 opacity-90">
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

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-4 sm:px-6 md:px-12 h-full justify-center mt-20">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight mb-4 sm:mb-6 text-center"
        >
          Beosound Premiere
        </motion.h1>

        {/* Tilted Video Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="
            w-full flex justify-center items-center
            px-3
          "
        >
          <div
            className="
              w-full sm:w-[85vw] md:w-[750px]
              max-w-[900px]
              aspect-3/2
              sm:h-[45vh] md:h-[50vh] lg:h-[52vh]
              flex items-center justify-center
            "
          >
            <TiltedCard
              videoSrc="/videos/BeosoundPremiereBO.mp4"
              altText="Beosound Premiere"
              captionText="Beosound Premiere"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={10}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={false}
            />
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="
            text-gray-300 text-sm sm:text-base md:text-lg
            max-w-md leading-relaxed mt-4 sm:mt-6
            px-4 sm:px-0
          "
        >
          A first-of-its-kind form: bold, sculptural, unapologetic. <br />
          More than a soundbar, it’s a statement.
        </motion.p>
      </div>

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent -z-5" />
    </section>
  );
};

export default Hero;
