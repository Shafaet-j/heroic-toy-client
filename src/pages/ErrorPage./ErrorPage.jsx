import React from "react";
import error from "../../assets/error.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" container mx-auto">
      <img className=" lg:w-full mx-auto" src={error} alt="" />
      <Link to="/">
        <button className="mt-7 bg-[#FF5733] text-white px-4 py-2 rounded-md">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
