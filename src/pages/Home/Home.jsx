import React from "react";
import Swiper from "../Home/components/Swiper/Swiper";
import PromiseComponent from "./components/PromiseComponent/PromiseComponent";
import UniqueStyle from "./components/UniqueStyle/UniqueStyle";
import BackImageOne from "./components/BackImageOne/BackImageOne";
import Marquee from "react-fast-marquee";
import MarqueeContainer from "./components/MarqueeContainer/MarqueeContainer";
import FindUs from "./components/FindUs/FindUs";
import AboutComponent from "./components/AboutComponent/AboutComponent";
import Features from "./components/Features/Features";
import HomeProducts from "./components/HomeProducts/HomeProducts";

const Home = () => {
  return (
    <div>
      <Swiper />

      <PromiseComponent />
      <Features />
      <MarqueeContainer />
      <AboutComponent />

      <BackImageOne />
      <HomeProducts />
      <UniqueStyle />

      <FindUs />
    </div>
  );
};

export default Home;
