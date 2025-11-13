import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import { animate } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import CircularGalleryDemo from "./components/ProductShowcase";
import CommunitySection from "./components/CommunitySection";
import FooterSection from "./components/FooterSection";
import History from "./components/History";
import Beosound_A5 from "./components/Beosound_A5";

const App = () => {
  useEffect(() => {
    const smoothScrollToTop = () => {
      animate(window.scrollY, 0, {
        duration: 3,
        ease: "easeInOut",
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    };

    smoothScrollToTop();
    window.addEventListener("pageshow", smoothScrollToTop);

    return () => window.removeEventListener("pageshow", smoothScrollToTop);
  }, []);

  return (
    <>
      {window.innerWidth > 768 && <CustomCursor />}

      <Navbar />
      <Hero />
      <Beosound_A5 />
      <CircularGalleryDemo />
      <History />
      <CommunitySection />
      <FooterSection />
    </>
  );
};

export default App;
