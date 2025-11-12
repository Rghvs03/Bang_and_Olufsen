import React, { useEffect } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import { animate } from "framer-motion";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  useEffect(() => {
    const smoothScrollToTop = () => {
      animate(window.scrollY, 0, {
        duration: 1.2,
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
    </>
  );
};

export default App;
