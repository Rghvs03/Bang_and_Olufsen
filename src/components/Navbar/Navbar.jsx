import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, User, MapPin, ShoppingBag } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position to darken navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR CONTAINER */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
          ${
            scrolled
              ? "bg-black/70 backdrop-blur-xl"
              : "bg-black/25 backdrop-blur-md"
          }
        `}
      >
        <div className="relative flex justify-between items-center px-6 md:px-12 h-[95px] md:h-[120px] text-offwhite">
          {/* LEFT SECTION */}
          <div className="flex items-center">
            {/* Desktop: Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="hidden md:flex items-center gap-2 group text-white"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
              <span className="text-sm uppercase tracking-wide group-hover:text-gold transition-colors">
                Menu
              </span>
            </button>

            {/* Mobile: Hamburger Icon */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white hover:text-gold transition-colors"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* CENTER — LOGO */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 flex items-center justify-center shadow-lg hover:shadow-gold/20 transition">
              <img src="/BO_Logo_Black.svg" alt="B&O" className="h-8 md:h-10" />
            </div>
            <h1 className="mt-1 text-[10px] md:text-xs text-gray-400 tracking-widest uppercase">
              Est. 1925
            </h1>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-5 md:gap-7 text-white">
            {/* Desktop Icons */}
            <div className="hidden md:flex items-center gap-7">
              <User
                size={22}
                className="hover:text-gold transition-colors cursor-pointer"
              />
              <MapPin
                size={22}
                className="hover:text-gold transition-colors cursor-pointer"
              />
              <ShoppingBag
                size={22}
                className="hover:text-gold transition-colors cursor-pointer"
              />
            </div>

            {/* Mobile: Shopping Bag (right) */}
            <button className="md:hidden text-white hover:text-gold transition-colors">
              <ShoppingBag size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
