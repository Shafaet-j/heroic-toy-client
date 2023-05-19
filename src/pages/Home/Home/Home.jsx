import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import WhatPeopleSay from "../WhatPeopleSay/WhatPeopleSay";
import GetInTouch from "../GetInTouch/GetInTouch";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
       <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <WhatPeopleSay></WhatPeopleSay>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default Home;
