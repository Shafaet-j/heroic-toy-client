import React from "react";
import ppl from "../../../assets/bg1.jpg";
import ppl1 from "../../../assets/bg2.jpg";
import ppl2 from "../../../assets/bg3.jpg";
import ppl3 from "../../../assets/bg4.jpg";

const WhatPeopleSay = () => {
  return (
    <section className="">
      <h1 className=" text-5xl font-extrabold my-7">What People say </h1>
      <div className="carousel max-w-[1080px] mx-auto" data-aos="flip-left">
        <div id="slide1" className="carousel-item relative w-full">
          <div className=" bg-slate-100 w-full h-96 rounded-2xl flex items-center justify-center flex-col gap-5">
            <div className="avatar">
              <div className="w-24 mask mask-squircle">
                <img src={ppl} />
              </div>
            </div>
            <h3 className=" text-2xl font-semibold">John</h3>
            <p>
              I have been able to use eBay Cars to research exactly what car I
              want, in what trim and average prices for it. It's a great tool to
              have available to me.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className=" bg-slate-100 w-full h-96 rounded-2xl flex items-center justify-center flex-col gap-5">
            <div className="avatar">
              <div className="w-24 mask mask-squircle">
                <img src={ppl1} />
              </div>
            </div>
            <h3 className=" font-semibold text-2xl">Sam</h3>
            <p>
              I have been able to use eBay Cars to research exactly what car I
              want, in what trim and average prices for it. It's a great tool to
              have available to me.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className=" bg-slate-100 w-full h-96 rounded-2xl flex items-center justify-center flex-col gap-5">
            <div className="avatar">
              <div className="w-24 mask mask-squircle">
                <img src={ppl2} />
              </div>
            </div>
            <h3 className=" font-semibold text-2xl">Ramsy Bolton</h3>
            <p>
              I have been able to use eBay Cars to research exactly what car I
              want, in what trim and average prices for it. It's a great tool to
              have available to me.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className=" bg-slate-100 w-full h-96 rounded-2xl flex items-center justify-center flex-col gap-5">
            <div className="avatar">
              <div className="w-24 mask mask-squircle">
                <img src={ppl3} />
              </div>
            </div>
            <h3 className=" font-semibold text-2xl">John</h3>
            <p>
              I have been able to use eBay Cars to research exactly what car I
              want, in what trim and average prices for it. It's a great tool to
              have available to me.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatPeopleSay;
