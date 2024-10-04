import React from "react";
import style from "./Testimonials.module.css";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();

  return (
    <div className={style.testimonialsContainer}>
      <p>{t('testimonials.title')}</p>
      <h1>{t('testimonials.customer')}</h1>
      <h2>{t('testimonials.feedback')}</h2>
      <span>{t('testimonials.author')}</span>
    </div>
  );
};

export default Testimonials;
