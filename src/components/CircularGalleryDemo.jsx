import React from "react";
import DotGrid from "./DotGrid";
import CircularGallery from "./CircularGallery";

export default function CircularGalleryDemo() {
  const items = [
    { image: "https://picsum.photos/seed/1/800/600?grayscale", text: "Bridge" },
    {
      image: "https://picsum.photos/seed/2/800/600?grayscale",
      text: "Desk Setup",
    },
    {
      image: "https://picsum.photos/seed/3/800/600?grayscale",
      text: "Waterfall",
    },
    {
      image: "https://picsum.photos/seed/4/800/600?grayscale",
      text: "Strawberries",
    },
    {
      image: "https://picsum.photos/seed/5/800/600?grayscale",
      text: "Deep Diving",
    },
  ];

  return (
    <div
      style={{
        height: "600px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
      <CircularGallery
        items={items}
        bend={3}
        textColor="#ffffff"
        borderRadius={0.05}
        scrollSpeed={0.7}
        scrollEase={0.02}

      />
    </div>
  );
}
