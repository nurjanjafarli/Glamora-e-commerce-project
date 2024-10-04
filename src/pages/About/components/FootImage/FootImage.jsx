import React from "react";
import style from "./FootImage.module.css";
import { Link } from "react-router-dom";
const FootImage = () => {
  return (
    <div className={style.container}>
      <div className={style.box1}></div>
      <div className={style.box2}></div>
      <div className={style.box3}></div>
      <div className={style.box4}></div>
    </div>
  );
};

export default FootImage;
