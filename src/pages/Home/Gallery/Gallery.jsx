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
      <div className="container mx-auto space-y-3">
        <div className="grid grid-cols-4 grid-rows-2 max-h-[500px] gap-3" data-aos="fade-right">
          <div className=" col-start-1 col-end-3 row-start-1 row-end-3" data-aos="zoom-in">
            <img
              className="object-cover h-full w-full rounded-md"
              src={pic1}
              alt=""
            />
          </div>
          <div className="col-start-3">
            <img
              className="h-full object-cover w-full rounded-md"
              src={pic2}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-full object-cover w-full rounded-md"
              src={pic3}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-full object-cover w-full rounded-md"
              src={pic4}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-full object-cover w-full rounded-md"
              src={pic5}
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-cols-4 grid-rows-2 max-h-[500px] gap-3" data-aos="fade-left">
          <div>
            <img
              className="object-cover h-full w-full rounded-md"
              src={pic10}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-full object-cover w-full rounded-md"
              src={pic9}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-full object-cover w-full rounded-md"
              src={pic8}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-full object-cover w-full rounded-md"
              src={pic7}
              alt=""
            />
          </div>
          <div className="col-start-3 row-start-1 row-end-3 col-end-5" data-aos="zoom-in">
            <img
              className="h-full object-cover w-full rounded-md"
              src={pic6}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
