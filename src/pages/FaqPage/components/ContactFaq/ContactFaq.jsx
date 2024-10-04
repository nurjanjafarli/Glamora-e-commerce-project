import React from "react";
import style from "./ContactFaq.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
const ContactFaq = () => {
  const { t } = useTranslation(); 

  return (
    <div className={style.container}>
      <div className={style.txt}>
        <h1>{t("contactFaq.title")}</h1>
        <p>{t("contactFaq.description")}</p>
        <Link to="/contact"><button>{t("contactFaq.button")}</button></Link>  
      </div>
      <div className={style.images}>
        <img
          src="https://assets.website-files.com/5fff1ad5a5243c743f9e3557/5fff3245d305e6687f819ba1_Model-Shots-00003.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ContactFaq;

