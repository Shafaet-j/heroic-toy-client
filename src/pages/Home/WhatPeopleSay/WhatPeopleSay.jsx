import React from "react";
import nahid from "../../../assets/nahid.jpg";
import nipun from "../../../assets/nipun.jpg";
import shaft from "../../../assets/shaft.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const WhatPeopleSay = () => {
  return (
    <section className=" container mx-auto">
      <h2 className="text-3xl lg:text-5xl font-extrabold text-center my-10">
        What my Client say
      </h2>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className=" bg-slate-100 w-full h-96 rounded-2xl flex items-center justify-center flex-col gap-5">
            <div className="avatar">
              <div className="w-24 mask mask-squircle">
                <img src={nipun} />
              </div>
            </div>
            <h3 className=" font-semibold text-2xl">Sheikh Nipun</h3>
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
                <img src={nahid} />
              </div>
            </div>
            <h3 className=" font-semibold text-2xl">Nahid Ibn Ali</h3>
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
                <img src={shaft} />
              </div>
            </div>
            <h3 className=" font-semibold text-2xl">Shafaet Hossen</h3>
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
                <img src={nahid} />
              </div>
            </div>
            <h3 className=" font-semibold text-2xl">Abdullah Tarafdar</h3>
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
