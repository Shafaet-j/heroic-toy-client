import React from "react";
import { FaGoogle } from "react-icons/fa";
import picture from "../../assets/logImg.png";
import { Link } from "react-router-dom";

const Login = () => {
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
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                <h3 className=" divider">Or login with</h3>
                <button>
                  <FaGoogle />
                </button>
                <p>
                  Need an account??{" "}
                  <button className=" btn-link">
                    <Link to="/signUp">SignUp</Link>
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

export default Login;
