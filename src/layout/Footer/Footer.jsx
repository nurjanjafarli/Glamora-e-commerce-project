import React from "react";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={style.footerContainer}>
      <h1>Glamora</h1>
      <div className={style.footer}>
        <div className={style.footTxt}>
          <div className={style.box}>
            <h2>{t('footer.company')}</h2>
            <Link to="/about">{t('footer.aboutUs')}</Link>
            <Link to="/faq">{t('footer.faq')}</Link>
            <Link to="/blogs">{t('footer.ourBlog')}</Link>
            <Link to="/shop">{t('footer.ourShop')}</Link>
            <Link to="/contact">{t('footer.contact')}</Link>
          </div>
          <div className={style.box}>
            <h2>{t('footer.followUs')}</h2>
            <a href="https://www.facebook.com/QodeInteractive/">{t('footer.facebook')}</a>
            <a href="https://www.instagram.com/qodeinteractive/">{t('footer.instagram')}</a>
            <a href="https://www.youtube.com/QodeInteractiveVideos">{t('footer.youtube')}</a>
            <a href="https://www.pinterest.com/qodeinteractive/">{t('footer.pinterest')}</a>
          </div>
        </div>
        <div className={style.footerImage}>
          <img
            src="https://valeska.qodeinteractive.com/wp-content/uploads/2021/05/footer-flower.png"
            alt=""
          />
        </div>
      </div>
      <div className={style.copyright}>
        <h6>{t('footer.copyright')}</h6>
      </div>
    </div>
  );
};

export default Footer;
