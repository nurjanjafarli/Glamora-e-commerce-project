import React from "react";
import { useTranslation } from "react-i18next";
import style from "./Submit.module.css";
import { toast } from "react-toastify";

const Submit = () => {
  const { t } = useTranslation();

  return (
    <div className={style.fullContainer}>
      <h1>{t('contact.title')}</h1>
      <div className={style.register}>
        <div className={style.forms}>
          <form action="">
            <div>
              <label htmlFor="name">{t('contact.firstName')}</label>
              <input type="text" name="name" />
            </div>

            <div>
              <label htmlFor="surname">{t('contact.lastName')}</label>
              <input type="text" name="surname" />
            </div>

            <div>
              <label htmlFor="email">{t('contact.email')}</label>
              <input type="text" name="email" />
            </div>
            <div>
              <label htmlFor="phone">{t('contact.phone')}</label>
              <input type="text" name="phone" />
            </div>
            <div>
              <label htmlFor="message">{t('contact.message')}</label>
              <textarea name="message" id="" cols="30" rows="5"></textarea>
            </div>

            <button
              onClick={(event) => {
                event.preventDefault();
                toast.success(t('contact.thankYou'));
              }}
            >
              {t('contact.submit')}
            </button>
          </form>
        </div>
        <div className={style.images}>
          <img
            src="https://assets-global.website-files.com/6567048fc6561b46b6462167/659e25aa8b8832bc5418996e_contact-p-800.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Submit;
