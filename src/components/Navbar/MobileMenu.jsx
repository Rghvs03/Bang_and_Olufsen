import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, User } from "lucide-react";

const navLinks = [
  "Speakers",
  "Headphones",
  "Soundbars",
  "Televisions",
  "Accessories",
  "Design your own",
  "Gift Guide",
  "The World of B&O",
  "Home Sound Systems",
];

const MobileMenu = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-40 flex "
        >
          {/* --- Semi-circular expanding panel --- */}
          <motion.div
            key="menu-panel"
            initial={{ clipPath: "circle(0% at 0% 50%)" }}
            animate={{ clipPath: "circle(150% at 0% 50%)" }}
            exit={{ clipPath: "circle(0% at 0% 50%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="relative w-[75%] md:w-[30%] h-full bg-[#0D0D0F]/95 flex flex-col"
          >
            {/* SCROLLABLE INNER WRAPPER */}
            <div
              className="
                flex-1 
                overflow-y-auto md:overflow-hidden
                px-10 
                py-10 
                md:pt-[140px]
                scrollbar-thin scrollbar-thumb-[#a2834b]/30 scrollbar-track-transparent
              "
            >
              <div className="flex justify-between items-center md:hidden">
                <button
                  onClick={onClose}
                  className="flex items-center gap-2"
                >
                  <X size={26} />
                  <span className="text-sm uppercase tracking-wide">Close</span>
                </button>

                <div className="text-offwhite hover:text-gold transition">
                  <User size={22} className="opacity-0" /> {/* spacer */}
                </div>
              </div>

              {/* --- Navigation links --- */}
              <div className="mt-10 flex flex-col gap-6 pb-20">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link}
                    href="#"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ delay: 0.2 + i * 0.06 }}
                    className="text-white text-2xl md:text-3xl font-light hover:text-gold transition-colors"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* --- Bottom fixed section (always visible) --- */}
            <div className="border-t border-white/10 px-10 py-6 flex flex-col gap-4 text-gray-400">
              <div className="flex items-center gap-2 hover:text-gold transition">
                <MapPin size={18} />
                <span>Find Store</span>
              </div>
              <div className="flex items-center gap-2 hover:text-gold transition">
                <User size={18} />
                <span>Account</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
