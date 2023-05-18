import React from "react";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toys = useLoaderData();
  console.log(toys);
  return <div>Total toys: {toys.length}</div>;
};

export default AllToys;
