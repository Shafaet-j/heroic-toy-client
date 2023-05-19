import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ job }) => {
  const { picture_url, name, price, rating,_id } = job;
  return (
    <div className="card card-compact max-w-96 bg-base-100 shadow-xl p-0 my-10">
      <figure>
        <img src={picture_url} alt="Shoes" />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title">{name}</h2>
        <div className=" flex justify-between items-center mb-7">
          <div className=" text-left">
            <p className=" text-xl font-semibold text-[#FF5733]">
              Price:{price}
            </p>
            <p className=" font-semibold">Rating:{rating}</p>
          </div>
          <Link to={`/toys/${_id}`}>
            <button className=" btn bg-[#FF5733] border-0">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
