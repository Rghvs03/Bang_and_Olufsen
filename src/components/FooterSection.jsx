import React from "react";
import { motion } from "framer-motion";
import DotGrid from "./DotGrid";
import { Globe2 } from "lucide-react";

export default function FooterSection() {
  const footerLinks = [
    {
      title: "Customer Care",
      links: [
        "Shipping and Delivery",
        "Returns",
        "Product Support",
        "Contact Us",
        "FAQ",
        "Find Store",
      ],
    },
    {
      title: "Our Policies",
      links: [
        "Accessibility",
        "Counterfeit",
        "Change Cookie Settings",
        "Cookie Policy",
        "Privacy Policy",
        "Policies and Terms",
      ],
    },
    {
      title: "Our Company",
      links: [
        "Responsibility",
        "Investors",
        "Careers",
        "Press",
        "Custom Integration",
        "Become a Sales Partner",
        "Contact Us",
      ],
    },
    {
      title: "Social Links",
      links: [
        "Facebook",
        "Instagram",
        "LinkedIn",
        "X",
        "YouTube",
        "TikTok",
        "Pinterest",
      ],
    },
  ];

  return (
    <footer className="relative w-full h-screen text-white overflow-hidden flex flex-col justify-between">
      
      <div className="absolute inset-0 bg-[#0a0a0b] -z-20" />

      <div className="absolute inset-0 -z-10 opacity-60">
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

      
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/20 to-black/40 -z-5"></div>

  
      <div className="flex-1 flex items-center">
        <div
          className="relative max-w-7xl mx-auto px-8 md:px-12 grid
          grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
          gap-14 md:gap-20 z-10"
        >
          {footerLinks.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <h3 className="text-[#CFA15B] uppercase tracking-[3px] text-base md:text-lg font-semibold mb-6">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/75 hover:text-[#CFA15B] transition-colors text-sm md:text-base leading-relaxed"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

    
      <div className="max-w-7xl mx-auto w-full px-8 md:px-12 mt-4">
        <div className="border-t border-white/10"></div>
      </div>

      
      <div
        className="max-w-7xl mx-auto px-8 md:px-12 py-6 flex flex-col md:flex-row 
        justify-between items-center gap-4 text-sm text-white/60"
      >
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1 text-xs md:text-sm"
        >
          © {new Date().getFullYear()} Bang & Olufsen. All rights reserved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-1 md:order-2 flex items-center gap-3 
            bg-black/40 backdrop-blur-md px-5 py-2.5 
            rounded-full border border-white/10 
            hover:border-[#CFA15B] hover:bg-black/50 transition-all cursor-pointer"
        >
          <Globe2 className="w-5 h-5 text-[#CFA15B]" />
          <span className="text-white/80 text-sm md:text-base">
            International
          </span>
          <span className="text-white/50 text-xs md:text-sm">English</span>
        </motion.div>
      </div>
    </footer>
  );
}
