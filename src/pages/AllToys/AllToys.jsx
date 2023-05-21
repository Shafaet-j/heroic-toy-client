import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToyCard from "./ToyCard";
import { Helmet } from "react-helmet";

const AllToys = () => {
  const toys = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    event.preventDefault()
    setSearchTerm(event.target.value);
  };
  const filteredToys = toys.filter((toy) =>
    toy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="container mx-auto my-16">
      <Helmet>
        <title>All Toys - Turbo Toy</title>
      </Helmet>

      <div className=" my-10">
        <form>
          <input
            type="text"
            placeholder="Search Your Toys"
            className="input input-bordered w-full max-w-xs"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {/* <button className="btn" type="submit">
            Search
          </button> */}
        </form>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label></label>
              </th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Reviews</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredToys.slice(0, 20).map((toy) => (
              <ToyCard key={toy?._id} toy={toy}></ToyCard>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllToys;
