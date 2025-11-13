import React from "react";
import { motion } from "framer-motion";

const Beosound_A5 = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        src="/videos/BeosoundA5.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent md:to-black/20"></div>

      <div
        className="
          relative z-10 
          h-full w-full 
          flex flex-col justify-center 
          px-6 md:px-16 
          text-white
        "
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-light mb-6 max-w-xl"
        >
          Beosound A5
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-base md:text-lg text-white/85 leading-relaxed max-w-lg mb-8"
        >
          Beosound A5, with a little piece of history woven in. Featuring a
          checkered grill pattern inspired by the surface of our first radios,
          this special edition celebrates 100 years of design mastery.
        </motion.p>

        {/* BUTTON */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          href="#"
          className="
            inline-block
            w-50
            border border-white/80 hover:border-white 
            px-6 md:px-10 
            py-3
            rounded-full 
            text-sm md:text-base
            font-medium 
            transition-all
            backdrop-blur-sm
          "
        >
          Available now
        </motion.a>
      </div>
    </section>
  );
};

export default Beosound_A5;
