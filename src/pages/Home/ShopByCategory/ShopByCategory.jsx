import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const [category, setCategory] = useState("");
  console.log(category);
  return (
    <div>
      <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
        <TabList>
          <Tab onClick={()=> setCategory('Transformers')}>Transformers</Tab>
          <Tab onClick={()=> setCategory('Star Wars')}>Wars</Tab>
          <Tab onClick={()=> setCategory('Marvel')}>Marvel</Tab>
        </TabList>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
