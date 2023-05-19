import React from "react";
import { useLoaderData } from "react-router-dom";
import ToyCard from "./ToyCard";

const AllToys = () => {
  const toys = useLoaderData();

  return (
    <section className="container mx-auto">
      {/* <Helmet>
        <title>All Toy</title>
      </Helmet> */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Reviews</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy) => (
              <ToyCard key={toy?._id} toy={toy}></ToyCard>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllToys;
