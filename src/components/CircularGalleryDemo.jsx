import React from "react";
import DotGrid from "./DotGrid";
import CircularGallery from "./CircularGallery";
import useIsMobile from "../hooks/useIsMobile";
import ProductCardMobile from "./ProductCardMobile"; // 👈 import our new card component

export default function CircularGalleryDemo() {
  const isMobile = useIsMobile(); // ✅ detect screen size

  const items = [
    {
      image: "/Products/beosound-a1.webp",
      text: "Beosound A1",
      subtitle: "Discover the new colourway: Rustic Red.",
    },
    {
      image: "/Products/Packshot-Beoplay-H100.webp",
      text: "Beosound 2",
      subtitle: "The home speaker made to impress.",
    },
    {
      image: "/Products/Packshot-Beoplay-Eleven.webp",
      text: "Beoplay Eleven",
      subtitle: "Vivid sound or pure silence.",
    },
    {
      image: "/Products/Beosound-2.webp",
      text: "Beoplay Eleven",
      subtitle: "Vivid sound or pure silence.",
    },
  ];

  return (
    <div
      style={{
        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
      className="relative"
    >
      {/* background */}
      <div className="absolute inset-0 bg-[#0a0a0b] -z-20" />
      <div className="absolute inset-0 -z-10 opacity-90">
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

      {/* ---- Conditional Rendering ---- */}
      {!isMobile ? (
        // 🖥️ Desktop → keep ReactBits circular gallery
        <CircularGallery
          items={items}
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollSpeed={0.7}
          scrollEase={0.02}
        />
      ) : (
        // 📱 Mobile → show simple elegant product cards
        <div className="flex flex-col gap-10 w-full px-4 overflow-y-scroll snap-y snap-mandatory h-[100vh] pb-10">
          {items.map((product, index) => (
            <div key={index} className="snap-center">
              <ProductCardMobile
                imageSrc={product.image}
                title={product.text}
                subtitle={product.subtitle}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
