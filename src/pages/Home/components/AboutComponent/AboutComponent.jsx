import React from "react";
import style from "./AboutComponent.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AboutComponent = () => {
  const { t } = useTranslation();

  return (
    <div className={style.aboutComponent}>
      <div className={style.box1}>
        <img
          src="https://cdn.prod.website-files.com/664dba28a7ff416978f4c0ec/6686853561e02fbafcbecca8_about-04-p-500.jpg"
          alt=""
        />
      </div>
      <div className={style.box2}>
        <h1>{t('aboutComponent.title')}</h1>
        <p>{t('aboutComponent.description')}</p>
        <Link to="/about">
          <button>{t('aboutComponent.aboutUsButton')}</button>
        </Link>
      </div>
      <div className={style.box3}>
        <img
          src="https://cdn.prod.website-files.com/664dba28a7ff416978f4c0ec/66868535682fce4489cb8d46_about-03-p-500.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutComponent;
