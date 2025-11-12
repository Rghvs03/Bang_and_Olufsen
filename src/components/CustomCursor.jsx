import { useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorSize = 20;

  // Base motion values
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const scale = useSpring(1, { stiffness: 150, damping: 15 });

  // Follow mouse position
  useEffect(() => {
    const moveCursor = (e) => {
      x.set(e.clientX - cursorSize / 2);
      y.set(e.clientY - cursorSize / 2);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [x, y]);

  // Detect interactive hover
  useEffect(() => {
    const handleHover = () => scale.set(1.8);
    const handleLeave = () => scale.set(1);

    const interactiveEls = document.querySelectorAll(
      "a, button, .cursor-hover"
    );
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, [scale]);

  return (
    <motion.div
      ref={cursorRef}
      style={{
        x,
        y,
        scale,
      }}
      className="
        fixed top-0 left-0 z-9999 
        pointer-events-none 
        w-[20px] h-[20px] 
        rounded-full 
        bg-white/90 
        shadow-[0_0_12px_#cfa15b80] 
        mix-blend-difference 
      "
    />
  );
};

export default CustomCursor;
