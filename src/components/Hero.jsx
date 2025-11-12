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
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 flex flex-col items-center text-center">
        {/* Title (above card on mobile) */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="text-3xl sm:text-4xl md:text-6xl font-light tracking-tight mt-35"
        >
          Beosound Premiere
        </motion.h1>

        {/* Card wrapper: gives an explicit responsive height so TiltedCard (100%) has a real size */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="w-full flex justify-center items-center"
        >
          <div
            className="
              w-[90vw] sm:w-[85vw] md:w-[750px]
              max-w-[900px] mt-10
              aspect-3/2
               sm:h-[44vh] md:h-[50vh] lg:h-[51vh]
              flex items-center justify-center
            "
          >
            <TiltedCard
              videoSrc="/videos/BeosoundPremiereBO.mp4" // 👈 your video file
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

        {/* Description under the card */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="text-gray-300 text-sm sm:text-base md:text-lg max-w-lg leading-relaxed mt-6 mb-8 px-4"
        >
          A first-of-its-kind form: bold, sculptural, unapologetic. More than a
          soundbar, it’s a statement.
        </motion.p>
      </div>

      {/* cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent -z-5" />
    </section>
  );
};

export default Hero;
