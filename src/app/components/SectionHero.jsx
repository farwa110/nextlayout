"use client";

const SectionHero = () => {
  return (
    <section className="flex flex-col items-start p-12 mx-24 my-24">
      <h1 className="text-5xl font-bold">
        Make The Perfect Moment <br />
        <span className="font-normal">between the Past And</span> <br /> <span className="font-normal">Future</span>
      </h1>
      <button className="text-white border-2  w-[300px] border-white  py-2 px-5 text-lg font-bold rounded-full mt-24 hover:bg-white hover:opacity-30 transition-all duration-300">Buy Now</button>
    </section>
  );
};

export default SectionHero;
