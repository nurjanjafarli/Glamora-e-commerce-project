import React from "react";
import style from "./UniqueStyle.module.css";
import { useTranslation } from "react-i18next";

const UniqueStyle = () => {
  const { t } = useTranslation();

  return (
    <div className={style.fullContainer}>
      <div className={style.box1}>
        <img
          src="https://valeska.qodeinteractive.com/wp-content/uploads/2021/05/h5-img-3.jpg"
          alt=""
        />
      </div>
      <div className={style.box2}>
        <img
          src="https://valeska.qodeinteractive.com/wp-content/uploads/2021/05/h5-img-4.jpg"
          alt=""
        />
      </div>
      <div className={style.box3}>
        <p>{t('uniqueStyle.latestCollection')}</p>
        <h1>{t('uniqueStyle.title')}</h1>
        <h2>{t('uniqueStyle.description')}</h2>
      </div>
    </div>
  );
};

export default UniqueStyle;
