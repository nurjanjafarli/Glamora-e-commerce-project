import React from "react";
import style from "./InfoContact.module.css";
import { useTranslation } from "react-i18next"; 

const InfoContact = () => {
  const { t } = useTranslation(); 
  return (
    <div className={style.container}>
      <div className={style.images}>
        <img
          src="https://assets.website-files.com/5fff1ad5a5243c2a939e355b/5fff30eb9b136cee65436476_Bracelets-00001.jpg"
          alt=""
        />
      </div>
      <div className={style.txt}>
        <h1>{t("infoContact.title")}</h1>
        <h2>{t("infoContact.description")}</h2>
        <p>{t("infoContact.address")}</p>
        <p>{t("infoContact.email")}</p>
      </div>
    </div>
  );
};

export default InfoContact;
