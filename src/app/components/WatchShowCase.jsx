"use client";
import { useState } from "react";
import HeroImage from "./HeroImage";
import Gallery from "./Gallery";

export default function WatchShowcase() {
  const [activeImage, setActiveImage] = useState("/mint.png");
  const [activeColor, setActiveColor] = useState("mint");

  return (
    <div>
      <HeroImage activeImage={activeImage} setActiveImage={setActiveImage} activeColor={activeColor} setActiveColor={setActiveColor} />
      <Gallery setActiveImage={setActiveImage} setActiveColor={setActiveColor} />
    </div>
  );
}
