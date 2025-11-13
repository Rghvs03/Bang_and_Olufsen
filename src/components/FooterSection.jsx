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
    <footer
      className="
        relative w-full 
        h-screen md:h-screen 
        min-h-[810px]
        text-white 
        overflow-hidden 
        flex flex-col
      "
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0b] -z-20" />
      <div className="absolute inset-0 -z-10 opacity-70">
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

      {/* TOP SPACING - dynamic, prevents clipping on mobile */}
      <div className="pt-10 md:pt-20" />

      {/* Grid Content */}
      <div
        className="
          flex-1 
          max-w-7xl mx-auto 
          px-6 md:px-12 
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          gap-10 md:gap-16
          md:mt-50
        "
      >
        {footerLinks.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <h3 className="text-[#CFA15B] uppercase tracking-[2px] text-sm font-medium mb-4">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-[#CFA15B] transition-colors md:text-2xl text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 mt-10">
        <div className="border-t border-white/10"></div>
      </div>

      {/* Bottom Bar */}
      <div
        className="
          max-w-7xl mx-auto 
          w-full 
          px-6 md:px-12 
          py-6 
          flex flex-col md:flex-row 
          justify-between 
          items-center 
          gap-4 
          text-white/60 
          text-sm
        "
      >
        <p className="text-xs md:text-sm">
          © {new Date().getFullYear()} Bang & Olufsen. All rights reserved.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            flex items-center gap-2 
            bg-black/30 backdrop-blur-sm 
            px-4 py-2 
            rounded-full 
            border border-white/10 
            hover:border-[#CFA15B] 
            transition-colors 
            cursor-pointer
          "
        >
          <Globe2 className="w-4 h-4 text-[#CFA15B]" />
          <span className="text-white/80">International</span>
          <span className="text-white/50 text-xs">English</span>
        </motion.div>
      </div>
    </footer>
  );
}
