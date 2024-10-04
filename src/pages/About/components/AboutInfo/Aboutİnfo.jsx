import React from 'react';
import style from './AboutInfo.module.css';
import { useTranslation } from 'react-i18next';

const AboutInfo = () => {
  const { t } = useTranslation();

  return (
    <div className={style.aboutInfoContainer}>
      <h1>{t('aboutInfo.title')}</h1>
    </div>
  );
};

export default AboutInfo;
