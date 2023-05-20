import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";

const ShopByCategory = () => {
  const [category, setCategory] = useState(" ");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`https://heroic-toy-hub-server-shafaet-j.vercel.app/allToys/${category}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [category]);

  return (
    <section className=" container mx-auto px-5 lg:px-0">
      <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
        <TabList>
          <Tab onClick={() => setCategory("transformer")}>Transformers</Tab>
          <Tab onClick={() => setCategory("starwar")}>Star Wars</Tab>
          <Tab onClick={() => setCategory("marvel")}>Marvel</Tab>
        </TabList>
        <TabPanel>
          <div className=" grid grid-cols-3 gap-5 ">
            {jobs.map((job) => (
              <CategoryCard key={job._id} job={job}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" grid grid-cols-3 gap-5">
            {jobs.map((job) => (
              <CategoryCard key={job._id} job={job}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" grid grid-cols-3 gap-5">
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
