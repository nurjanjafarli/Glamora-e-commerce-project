import React from "react";
import style from "./BackImage.module.css";
import { useTranslation } from "react-i18next";

const BackImage = () => {
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <h1>{t('backImages.wishlistTitle')}</h1>
    </div>
  );
};

export default BackImage;
