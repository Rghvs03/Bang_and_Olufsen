import React from "react";
import { motion } from "framer-motion";
import DotGrid from "./DotGrid";
import { Check } from "lucide-react";

export default function CommunitySection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-stretch justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[#0a0a0b]" />
      <div className="absolute inset-0 -z-0 opacity-70">
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

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        className="w-full md:w-1/2 h-[40vh] md:h-auto overflow-hidden relative"
      >
        <img
          src="\Products\community.jpg.webp"
          alt="Bang & Olufsen TV"
          className="object-cover w-full h-full rounded-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent md:hidden" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        className="relative w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-16 py-10 md:py-0
                    backdrop-blur-xs "
      >
        <div className="max-w-md mx-auto text-left space-y-6">
          <h3 className="text-[#CFA15B] uppercase tracking-[4px] text-sm font-medium">
            THE HOUSE OF B&O
          </h3>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-light leading-snug">
            Join our global community for exclusive <br />
            benefits and news about
          </h2>

          <ul className="text-white/80 space-y-2 mt-6 text-sm sm:text-base">
            <li className="flex gap-3"> {<Check />} New & limited products</li>
            <li className="flex gap-3">{<Check />} Exclusive events</li>
            <li className="flex gap-3">{<Check />} Personalised content</li>
            <li className="flex gap-3">{<Check />} Special offers</li>
            <li className="flex gap-3">{<Check />} Behind the scenes</li>
          </ul>

          <form className="space-y-4 mt-8">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-white/30 focus:border-[#CFA15B] outline-none py-2 text-white placeholder:text-white/60"
              required
            />
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="First name"
                className="w-1/2 bg-transparent border-b border-white/30 focus:border-[#CFA15B] outline-none py-2 text-white placeholder:text-white/60"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-1/2 bg-transparent border-b border-white/30 focus:border-[#CFA15B] outline-none py-2 text-white placeholder:text-white/60"
                required
              />
            </div>

            <p className="text-xs text-white/50 leading-relaxed">
              I accept that Bang & Olufsen can contact me via digital
              communication, including email with personalised marketing of our
              products and events. Unsubscribing is possible at any time.
            </p>

            <button
              type="submit"
              className="mt-4 px-6 py-2 rounded-full border border-[#CFA15B] text-[#CFA15B] font-medium hover:bg-[#CFA15B] hover:text-black transition-all"
            >
              Subscribe
            </button>

            <p className="text-[11px] text-white/40 mt-3 leading-relaxed">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="#" className="underline hover:text-[#CFA15B]">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="underline hover:text-[#CFA15B]">
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
