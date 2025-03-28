// import Image from "next/image";
import Header from "@/app/components/Header";
import SectionHero from "./components/SectionHero";
import HeroWatch from "./components/HeroWatch";
import SectionGalleri from "./components/SectionGalleri";

export default function Home() {
  return (
    <div>
      <Header />
      <SectionHero />
      <HeroWatch />
      <SectionGalleri />
    </div>
  );
}
