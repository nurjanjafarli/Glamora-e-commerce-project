import React from "react";
import style from "./FindUs.module.css";
import { useTranslation } from "react-i18next";

const FindUs = () => {
  const { t } = useTranslation();

  return (
    <div className={style.findContainer}>
      <div className={style.findData}>
        <p>{t('findUs.getInTouch')}</p>
        <h1>{t('findUs.findUsHere')}</h1>
        <h2>{t('findUs.address')}</h2>
        <h3>{t('findUs.phone')}</h3>
        <h4>{t('findUs.email')}</h4>
      </div>
      <div className={style.findImg}>
        <img
          src="https://cdn.prod.website-files.com/664dba28a7ff416978f4c0ec/668794e9667ffcf96c132e85_our-store-p-1080.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default FindUs;
