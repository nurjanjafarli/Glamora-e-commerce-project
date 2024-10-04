import React from "react";
import style from "./InfoThree.module.css";
import { useTranslation } from "react-i18next";

const InfoThree = () => {
  const { t } = useTranslation();

  return (
    <div className={style.containerThree}>
      <div className={style.imgBox}></div>
      <div className={style.txtBox}>
        <h1>{t('infoThree.vision')}</h1>
        <h2>{t('infoThree.description')}</h2>
      </div>
    </div>
  );
};

export default InfoThree;
