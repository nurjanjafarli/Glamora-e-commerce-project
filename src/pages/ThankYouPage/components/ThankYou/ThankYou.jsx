import React from "react";
import { Link } from "react-router-dom";
import styles from './ThankYou.module.css';
import { useTranslation } from 'react-i18next';

const ThankYou = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.title}>
          <h1>{t('thankYou.title')}</h1>
        </div>
        <p className={styles.message}>
          {t('thankYou.message')}
        </p>
        <Link to="/shop" className={styles.button}>
          {t('thankYou.continueShopping')}
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
