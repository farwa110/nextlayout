"use client";
import { useState } from "react";

const HeroImage = ({ activeImage, setActiveImage, activeColor, setActiveColor }) => {
  const colors = [
    { name: "gray", class: "bg-gray-500", image: "/gray.png" },
    { name: "pink", class: "bg-pink-500", image: "/pink.png" },
    { name: "mint", class: "bg-green-400", image: "/mint.png" },
  ];

  return (
    <section className="flex flex-col items-end p-12">
      <div className="flex flex-col p-12 mt-[-620px] mr-[230px]">
        <img src={activeImage} alt="Watch" className="w-[500px] h-auto" />
      </div>
      <div className="flex  flex-col gap-5 mt-[-350px] mr-[100px]">
        {colors.map((color) => (
          <div
            key={color.name}
            className={` w-8 h-8 rounded-full cursor-pointer transition-transform duration-300 
              ${color.class} ${activeColor === color.name ? "scale-125 ring-2 ring-black" : ""}`}
            onClick={() => {
              setActiveColor(color.name);
              setActiveImage(color.image);
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroImage;
