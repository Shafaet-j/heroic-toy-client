import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toyDetails = useLoaderData();
  console.log(toyDetails);
  const { picture_url, rating, available_quantity, price, description, name } =
    toyDetails;
  return (
    <section>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content items-start flex-col lg:flex-row">
          <img src={picture_url} className="w-full lg:w-1/2 lg:h-[600px] object-cover rounded-lg shadow-2xl" />
          <div className=" lg:w-1/2 text-left space-y-5">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className=" text-2xl text-orange-600 font-semibold">
              Price: {price}
            </p>
            <p className="font-semibold">Rating :{rating}</p>
            <p className=" font-semibold">Quantity: {available_quantity}</p>
            <p className="py-6">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToyDetails;
