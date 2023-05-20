import React from "react";
import ppl2 from "../../../assets/ga4.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const WhatPeopleSay = () => {
  return (
    <section className=" container mx-auto">
      <h2 className=" lg:text-5xl font-extrabold text-center my-10">
        What my Client say
      </h2>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className=" bg-slate-100 w-full h-96 rounded-2xl flex items-center justify-center flex-col gap-5">
            <div className="avatar">
              <div className="w-24 mask mask-squircle">
                <img src={ppl2} />
              </div>
            </div>
            <h3 className=" font-semibold text-2xl">Ramsy Bolton</h3>
            <p>
              I have been able to use toy Cars to research exactly what car I
              want, in what trim and average prices for it. It's a great tool to
              have available to me.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-slate-100 w-full h-96 rounded-2xl flex items-center justify-center flex-col gap-5">
            <div className="avatar">
              <div className="w-24 mask mask-squircle">
                <img src={ppl2} />
              </div>
            </div>
            <h3 className=" font-semibold text-2xl">Ramsy Bolton</h3>
            <p>
              I have been able to use toy Cars to research exactly what car I
              want, in what trim and average prices for it. It's a great tool to
              have available to me.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-slate-100 w-full h-96 rounded-2xl flex items-center justify-center flex-col gap-5">
            <div className="avatar">
              <div className="w-24 mask mask-squircle">
                <img src={ppl2} />
              </div>
            </div>
            <h3 className=" font-semibold text-2xl">Ramsy Bolton</h3>
            <p>
              I have been able to use toy Cars to research exactly what car I
              want, in what trim and average prices for it. It's a great tool to
              have available to me.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-slate-100 w-full h-96 rounded-2xl flex items-center justify-center flex-col gap-5">
            <div className="avatar">
              <div className="w-24 mask mask-squircle">
                <img src={ppl2} />
              </div>
            </div>
            <h3 className=" font-semibold text-2xl">Ramsy Bolton</h3>
            <p>
              I have been able to use toy Cars to research exactly what car I
              want, in what trim and average prices for it. It's a great tool to
              have available to me.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default WhatPeopleSay;
