// src/components/ProductCardMobile.jsx
import React from "react";
import { motion } from "framer-motion";

const ProductCardMobile = ({ imageSrc, title, subtitle, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
      className="relative w-full h-[80vh] flex items-end justify-start overflow-hidden rounded-3xl shadow-lg"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-6 text-white w-full">
        <h2 className="text-2xl font-semibold tracking-tight mb-2">
          {title || "Beosound A1"}
        </h2>
        <p className="text-sm text-gray-300 mb-5 leading-snug">
          {subtitle || "Discover the new colourway: Rustic Red."}
        </p>
        <button
          onClick={onClick}
          className="px-5 py-2 border border-white rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
        >
          Discover more
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCardMobile;
