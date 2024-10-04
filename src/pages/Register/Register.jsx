import React, { useState } from "react";
import supabase from "../../supabase";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import style from "./Register.module.css";

const Register = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            user_name: formData.userName,
          },
        },
      });
      if (error) throw error;
      alert(t('register.verificationMessage'));
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <h1>{t('register.title')}</h1>
        <input
          type="text"
          name="userName"
          onChange={handleChange}
          placeholder={t('register.usernamePlaceholder')}
          className={style.input}
          required
        />
        <input
          type="email"
          placeholder={t('register.emailPlaceholder')}
          name="email"
          onChange={handleChange}
          className={style.input}
          required
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder={t('register.passwordPlaceholder')}
          className={style.input}
          required
        />
        <button type="submit" className={style.button}>
          {t('register.buttonText')}
        </button>
        <div className={style.link}>
          <p>
            {t('register.alreadyHaveAccount')} <Link to="/login">{t('register.loginLink')}</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
