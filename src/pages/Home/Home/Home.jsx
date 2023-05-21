import React from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import WhatPeopleSay from "../WhatPeopleSay/WhatPeopleSay";
import GetInTouch from "../GetInTouch/GetInTouch";
import { Helmet } from "react-helmet";
import BannerNew from "../Banner/BannerNew";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Turbo Toy</title>
      </Helmet>
      {/* <BannerNew></BannerNew> */}
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <WhatPeopleSay></WhatPeopleSay>
      <GetInTouch></GetInTouch>
    </>
  );
};

export default Home;
