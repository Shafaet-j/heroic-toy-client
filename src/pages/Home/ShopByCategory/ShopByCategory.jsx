import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";

const ShopByCategory = () => {
  const [category, setCategory] = useState("truck");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(
      `https://heroic-toy-hub-server-shafaet-j.vercel.app/allToys/${category}`
    )
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [category]);

  return (
    <section className=" container mx-auto px-5 lg:px-0">
      <h2 className="text-3xl lg:text-5xl font-extrabold text-center my-10">Product Category</h2>
      <Tabs  defaultIndex={1} onSelect={(index) => console.log(index)}>
        <TabList className=" border-0 tabs tabs-boxed">
          <Tab className=" text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none duration-300 cursor-pointer" onClick={() => setCategory("regular")}>Regular car</Tab>
          <Tab className=" text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none duration-300 cursor-pointer" onClick={() => setCategory("truck")}>Truck Toy</Tab>
          <Tab className=" text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none duration-300 cursor-pointer" onClick={() => setCategory("police")}>Police car</Tab>
        </TabList>
        <TabPanel>
          <div className=" grid lg:grid-cols-3 lg:gap-5 ">
            {jobs.map((job) => (
              <CategoryCard key={job._id} job={job}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" grid lg:grid-cols-3 lg:gap-5">
            {jobs.map((job) => (
              <CategoryCard key={job._id} job={job}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" grid lg:grid-cols-3 lg:gap-5">
            {jobs.map((job) => (
              <CategoryCard key={job._id} job={job}></CategoryCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default ShopByCategory;
