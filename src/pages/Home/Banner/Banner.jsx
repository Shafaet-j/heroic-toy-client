import React from "react";
import bg1 from "../../../assets/bg1.jpg";
import bg2 from "../../../assets/bg2.jpg";
import bg3 from "../../../assets/bg3.jpg";
import bg4 from "../../../assets/bg4.jpg";

const Banner = () => {
  return (
    <section className=" w-full">
      <div
      
        className="hero min-h-[90vh] bg-gradient-to-bl"
        style={{
          backgroundImage: `url(${bg2})`,
        }}
      >
        
        <div className="hero-content text-center text-neutral-content ">
          <div className="text-white">
            <h1 className="mb-5 text-4xl lg:text-7xl font-bold ">
              Find Your Best SuperHero Toy
            </h1>
            <p className="mb-5 text-3xl lg:text-4xl">
              Flat 10% Off On Order Above $29.99
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
