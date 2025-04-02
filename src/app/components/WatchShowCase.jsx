"use client";
import { useState } from "react";
import HeroWatch from "./HeroWatch";
import SectionGalleri from "./SectionGalleri";

export default function WatchShowcase() {
  const [activeImage, setActiveImage] = useState("/mint.png");
  const [activeColor, setActiveColor] = useState("mint");

  return (
    <div>
      <HeroWatch activeImage={activeImage} setActiveImage={setActiveImage} activeColor={activeColor} setActiveColor={setActiveColor} />
      <SectionGalleri setActiveImage={setActiveImage} setActiveColor={setActiveColor} />
    </div>
  );
}
