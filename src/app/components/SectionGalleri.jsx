"use client";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";

const Gallery = ({ setActiveImage }) => {
  return (
    <section className="flex justify-between items-center p-8">
      <div className="flex items-center justify-start gap-5 ml-30">
        <FaArrowLeft className="w-7 h-7 cursor-pointer" />
        <RxDividerVertical className="w-1 h-7 opacity-50" />
        <FaArrowRight className="w-7 h-7 cursor-pointer" />
      </div>
      <div className="flex gap-12 mt-12 mr-2">
        <div className="inline-flex justify-center bg-[#43455899] p-2 rounded-lg w-60 h-40">
          <img src="/navy.png" alt="Watch 1" className="w-full h-auto object-cover cursor-pointer" onClick={() => setActiveImage("/navy.png")} />
        </div>
        <div className="inline-flex justify-center bg-[#6addcc99] p-2 rounded-lg w-60 h-40">
          <img src="/mint.png" alt="Watch 2" className="w-full h-auto object-cover cursor-pointer" onClick={() => setActiveImage("/mint.png")} />
        </div>
        <div className="inline-flex justify-center bg-[#f9cdc499] p-2 rounded-lg w-60 h-40">
          <img src="/ocean.png" alt="Watch 3" className="w-full h-auto object-cover cursor-pointer" onClick={() => setActiveImage("/ocean.png")} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
