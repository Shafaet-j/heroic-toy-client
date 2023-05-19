import React from "react";
import pic1 from "../../../assets/ga1.jpg";
import pic2 from "../../../assets/ga2.jpg";
import pic3 from "../../../assets/ga3.jpg";
import pic4 from "../../../assets/ga4.jpg";
import pic5 from "../../../assets/ga5.jpg";
import pic6 from "../../../assets/ga6.jpg";
import pic7 from "../../../assets/ga7.jpg";
import pic8 from "../../../assets/ga8.jpg";
import pic9 from "../../../assets/ga9.jpg";
import pic10 from "../../../assets/ga10.jpg";

const Gallery = () => {
  return (
    <section className=" my-10">
      <div data-aos="fade-right"  className="container mx-auto gap-5">
        <div className=" grid grid-cols-4 grid-rows-2 max-h-[500px] space-x-3">
          <div className=" row-span-3 col-span-2">
            <img className=" object-cover h-[100%] w-full" src={pic1} alt="" />
          </div>
          <div className=" col-start-3">
            <img className="h-[100%] object-cover w-full" src={pic2} alt="" />
          </div>
          <div className="">
            <img className=" h-full object-cover w-full" src={pic3} alt="" />
          </div>
          <div className="">
            <img className=" h-[100%] object-cover w-full" src={pic4} alt="" />
          </div>
          <div>
            <img className=" h-full object-cover w-full" src={pic5} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
