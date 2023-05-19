import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";

const ShopByCategory = () => {
  const [category, setCategory] = useState("transformers");
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/allToys/${category}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [category]);
  console.log(category);
  return (
    <div className=" container mx-auto">
      <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
        <TabList>
          <Tab  onClick={() => setCategory("transformer")}>Transformers</Tab>
          <Tab onClick={() => setCategory("starwar")}>Star Wars</Tab>
          <Tab onClick={() => setCategory("marvel")}>Marvel</Tab>
        </TabList>
        <TabPanel>
          <div className=" flex items-center gap-5">
            {jobs.map((job) => (
              <CategoryCard key={job._id} job={job}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" flex items-center gap-5">
            {jobs.map((job) => (
              <CategoryCard key={job._id} job={job}></CategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" flex items-center gap-5">
            {jobs.map((job) => (
              <CategoryCard key={job._id} job={job}></CategoryCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
