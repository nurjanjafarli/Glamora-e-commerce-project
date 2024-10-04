import React from "react";
import style from "./MarqueeContainer.module.css";
import Marquee from "react-fast-marquee";

const MarqueeContainer = () => {
  return (
    <Marquee>
      <div className={style.marqueeBoxes}>
        <img
          src="https://i.pinimg.com/736x/9e/32/1c/9e321ce9b6ec7e4b8831675dcfb06dba.jpg"
          alt=""
        />
          <img
          src="https://i.pinimg.com/564x/81/20/cc/8120cc96aba783a80bbc3568e9e17ff3.jpg"
          alt=""
        />
          <img
          src="https://i.pinimg.com/564x/a8/48/6e/a8486ee78e51bd98abfa4cbdb78cfc4b.jpg"
          alt=""
        />
          <img
          src="https://i.pinimg.com/564x/36/2c/93/362c93b27e3f0c290e461f7fc514858d.jpg"
          alt=""
        />
          <img
          src="https://i.pinimg.com/736x/16/8d/7e/168d7e420d704bfcfb72c67695f86bb8.jpg"
          alt=""
        />
        <img src="https://i.pinimg.com/564x/9e/4b/2a/9e4b2a245a02bbf20738d9d661846040.jpg" alt="" />
      </div>
    </Marquee>
  );
};

export default MarqueeContainer;
