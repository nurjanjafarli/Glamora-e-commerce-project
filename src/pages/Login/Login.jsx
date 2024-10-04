import React, { useState } from "react";
import supabase from "../../supabase";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./Login.module.css";

const Login = ({ setToken }) => {
  let navigate = useNavigate();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
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
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      setToken(data);
      alert(t('login.successMessage'));
      navigate("/");
    } catch (error) {
      alert(error.message || t('login.errorMessage'));
    }
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>{t('login.title')}</h1>
        <input
          className={styles.input}
          type="email"
          placeholder={t('login.emailPlaceholder')}
          name="email"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          className={styles.input}
          type="password"
          name="password"
          onChange={handleChange}
          placeholder={t('login.passwordPlaceholder')}
          value={formData.password}
          required
        />
        <button className={styles.button} type="submit">
          {t('login.buttonText')}
        </button>
        <div className={styles.link}>
          <p>
            {t('login.noAccount')} <Link to="/register">{t('login.signupLink')}</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
