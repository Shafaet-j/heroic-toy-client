import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import WhatPeopleSay from "../WhatPeopleSay/WhatPeopleSay";
import GetInTouch from "../GetInTouch/GetInTouch";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <WhatPeopleSay></WhatPeopleSay>
      <GetInTouch></GetInTouch>
    </div>
  );
};

export default Home;
