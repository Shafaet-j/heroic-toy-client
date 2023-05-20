import React from "react";
import picture from "../../../assets/Get.png";

const GetInTouch = () => {
  return (
    <section className="container mx-auto my-10 overflow-hidden">
        <h2 className=" lg:text-5xl font-extrabold text-center">Get in Touch</h2>
      <div className="hero my-9 container mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse gap-9">
          <div className="text-center lg:text-left" data-aos="fade-left">
            <img className=" max-h-[600px]" src={picture} alt="" />
          </div>
          <div
            className="card flex-shrink-0 w-full max-w-sm border-2"
            data-aos="fade-right"
          >
            <div className="">
              <form className=" space-y-6">
                <div className="form-control">
                  <input
                    type="email"
                    name="Name"
                    placeholder="Your Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <textarea
                    placeholder="Your Message"
                    className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn bg-[#FF5733] border-0">
                    Login
                  </button>
                </div>
                <div></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
