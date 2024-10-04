import React from 'react';
import style from './ImageBack.module.css';
import { useTranslation } from 'react-i18next';

const ImageBack = () => {
  const { t } = useTranslation();

  return (
    <div className={style.background}>
      <h1>{t('imageBack.header')}</h1>
    </div>
  );
}

export default ImageBack;
