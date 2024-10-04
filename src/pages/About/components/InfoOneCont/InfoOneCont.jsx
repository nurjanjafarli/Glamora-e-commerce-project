import React from "react";
import style from "./InfoOneCont.module.css";
import { useTranslation } from "react-i18next";

const InfoOneCont = () => {
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <div className={style.imgBox}></div>
      <div className={style.txtBox}>
        <p>{t('infoOne.mission')}</p>
        <h1>{t('infoOne.uniqueMessage')}</h1>
      </div>
    </div>
  );
};

export default InfoOneCont;
