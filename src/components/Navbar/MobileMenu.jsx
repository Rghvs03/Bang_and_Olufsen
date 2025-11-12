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
  "B&O Professional",
  "Partner Audio",
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
          <motion.div
            key="menu-panel"
            initial={{ clipPath: "circle(0% at 0% 50%)" }}
            animate={{ clipPath: "circle(150% at 0% 50%)" }}
            exit={{ clipPath: "circle(0% at 0% 50%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="relative w-full md:w-[30%] h-full bg-[#0D0D0F]/95 flex flex-col"
          >
            {/* SCROLLABLE INNER WRAPPER */}
            <div
              className="flex-1 overflow-y-auto overscroll-contain px-10  py-10  md:pt-[140px] scrollbar-thin  scrollbar-thumb-[#a2834b]/20  scrollbar-track-transparent hover:scrollbar-thumb-[#a2834b]/40"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#181818 transparent",
              }}
            >
              <div className="flex justify-between items-center md:hidden">
                <button onClick={onClose} className="flex items-center gap-2">
                  <X size={26} />
                  <span className="text-sm uppercase tracking-wide">Close</span>
                </button>

                <div className="text-offwhite hover:text-gold transition">
                  <User size={22} className="opacity-0" />
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-6 pb-20">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link}
                    href="#"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      delay: 0.15 + i * 0.05,
                      duration: 0.6,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                    className="group relative text-white text-2xl md:text-3xl font-light cursor-pointer overflow-hidden"
                  >
                    <span className="block transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:-translate-y-[120%] group-hover:opacity-0">
                      {link}
                    </span>

                    <span className="absolute left-0 top-[120%] block text-gold opacity-0 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] group-hover:top-0 group-hover:opacity-100">
                      {link}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

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
