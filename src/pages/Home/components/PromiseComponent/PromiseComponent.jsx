import React from "react";
import style from "./PromiseComponent.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const PromiseComponent = () => {
  const { t } = useTranslation();
  return (
    <div className={style.fullPromiseContainer}>
      <div className={style.box2}>
        {" "}
        <img
          src="https://assets.website-files.com/5fff1ad5a5243c743f9e3557/5fff32703cb4023ae9e5ffab_Necklaces-00003.jpg"
          alt=""
        />
      </div>
      <div className={style.box3}>
        <p>{t("promise.promise-yazi1")}</p>
        <h1>{t("promise.promise-yazi2")}</h1>
        <h2>{t("promise.promise-yazi3")}</h2>
        <div className={style.button}>
          <Link to="/about">
            <button>{t("promise.promise-yazi4")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromiseComponent;
