import React from 'react';
import style from './FaqBackImg.module.css';
import { useTranslation } from 'react-i18next';

const FaqBackImg = () => {
  const { t } = useTranslation();

  return (
    <div className={style.container}>
      <h1>{t('faq.title')}</h1>
    </div>
  );
}

export default FaqBackImg;
