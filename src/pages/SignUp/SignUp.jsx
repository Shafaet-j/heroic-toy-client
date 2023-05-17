import React from "react";
import picture from "../../assets/logImg.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-9">
          <div className="text-center lg:text-left">
            <img className=" h-[600px]" src={picture} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm border-2">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
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
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
              <div>
                <h3 className=" divider">Or login with</h3>

                <p>
                  Already have an account??
                  <button className=" btn-link">
                    <Link to="/login">SignUp</Link>
                  </button>
                  here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
