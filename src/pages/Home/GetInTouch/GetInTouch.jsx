import React from "react";
import picture from "../../../assets/Get.png";

const GetInTouch = () => {
  return (
    <section>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-9">
          <div className="text-center lg:text-left" data-aos="fade-left">
            <img className=" h-[600px]" src={picture} alt="" />
          </div>
          <div
            className="card flex-shrink-0 w-full max-w-sm border-2"
            data-aos="fade-right"
          >
            <div className="card-body">
              <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
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
