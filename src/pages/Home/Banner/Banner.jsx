import React from "react";
import bg2 from "../../../assets/bg2.jpg";

const Banner = () => {
  return (
    <section className=" w-full">
      <div
        className="hero min-h-[90vh]"
        style={{
          backgroundImage: `linear-gradient(to right top, rgba(255, 87, 51, 0.7), rgba(64, 224, 208, 0.4)),url(${bg2})`,
        }}
      data-aos='fade-up' >
        <div className="hero-content text-center text-neutral-content ">
          <div className="text-white" data-aos='fade-up'>
            <h1 className="mb-5 text-4xl lg:text-7xl font-bold ">
              Find Your Best Car Toy
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
