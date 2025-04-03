"use client";
import { useState } from "react";
import HeroWatch from "./HeroWatch";
import SectionGalleri from "./SectionGalleri";

import Mint from "@/app/assets/img/mint.png";

export default function WatchShowcase() {
  const [activeImage, setActiveImage] = useState(Mint);

  return (
    <div>
      <HeroWatch activeImage={activeImage} setActiveImage={setActiveImage} />
      <SectionGalleri activeImage={activeImage} setActiveImage={setActiveImage} />
    </div>
  );
}
