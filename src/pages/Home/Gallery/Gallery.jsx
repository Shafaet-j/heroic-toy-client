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
    <section>
      <div className="container mx-auto gap-5">
        <div className=" grid grid-cols-3 gap-5">
          <div className=" row-start-1 row-end-3">
            <img src={pic1} alt="" />
          </div>
          <div className="col-start-2">
            <img src={pic2} alt="" />
          </div>
          <div>
            <img src={pic3} alt="" />
          </div>
          <div className="">
            <img src={pic4} alt="" />
          </div>
          <div>
            <img src={pic5} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
