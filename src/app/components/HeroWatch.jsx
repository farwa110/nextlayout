import Image from "next/image";

import Mint from "@/app/assets/img/mint.png";
import Navy from "@/app/assets/img/navy.png";
import Ocean from "@/app/assets/img/ocean.png";

const HeroImage = ({ activeImage, setActiveImage }) => {
  // const colors = [
  //   { name: "gray", class: "bg-gray-500", image: "/gray.png" },
  //   { name: "pink", class: "bg-pink-500", image: "/pink.png" },
  //   { name: "mint", class: "bg-green-400", image: "/mint.png" },
  // ];

  return (
    <section className="flex flex-col items-end p-12">
      <div className="flex flex-col p-12 mt-[-620px] mr-[230px]">
        <Image src={activeImage} alt="Watch" className="w-[500px] h-auto" width={600} height={600} />
      </div>
      <div className="flex  flex-col gap-5 mt-[-350px] mr-[100px]">
        <div
          className={` w-8 h-8 rounded-full cursor-pointer transition-transform duration-300 
            bg-[#43455899] ${activeImage === Navy && "scale-125 ring-2 ring-black"}`}
          onClick={() => {
            setActiveImage(Navy);
          }}
        />
        <div
          className={` w-8 h-8 rounded-full cursor-pointer transition-transform duration-300 
            bg-[#58D7C4] ${activeImage === Mint && "scale-125 ring-2 ring-black"}`}
          onClick={() => {
            setActiveImage(Mint);
          }}
        />
        <div
          className={` w-8 h-8 rounded-full cursor-pointer transition-transform duration-300 
            bg-[#F2CEC6] ${activeImage === Ocean && "scale-125 ring-2 ring-black"}`}
          onClick={() => {
            setActiveImage(Ocean);
          }}
        />
      </div>
    </section>
  );
};

export default HeroImage;
