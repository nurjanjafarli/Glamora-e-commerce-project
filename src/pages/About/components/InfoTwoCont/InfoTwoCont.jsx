import React from "react";
import style from "./InfoTwoCont.module.css";
import { useTranslation } from "react-i18next";

const InfoTwoCont = () => {
  const { t } = useTranslation();

  return (
    <div className={style.containerTwo}>
      <div className={style.txtBox}>
        <p>{t('infoTwo.beauty')}</p>
        <h1>{t('infoTwo.designPriority')}</h1>
        <h2>{t('infoTwo.description')}</h2>
      </div>
      <div className={style.imgBox}></div>
    </div>
  );
};

export default InfoTwoCont;
