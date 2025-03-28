"use client";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="gallery-nav">
        <FaArrowLeft />
        <RxDividerVertical />
        <FaArrowRight />
      </div>
      <div className="galleri-images">
        <div className="greywatch-wrapper">
          <img src="/grey.png" alt="Watch 1" className="galleri-img" />
        </div>
        <div className="greenwatch-wrapper">
          <img src="/green.png" alt="Watch 3" className="galleri-img" />
        </div>
        <div className="pinkwatch-wrapper">
          <img src="/pinkwatch.png" alt="Watch 2" className="galleri-img" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
