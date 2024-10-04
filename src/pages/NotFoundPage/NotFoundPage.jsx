
import React from 'react';
import { Link } from 'react-router-dom';
import style from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1 className={style.errorCode}>404</h1>
        <h2 className={style.message}>This page has been probably moved somewhere...</h2>
        <p className={style.subMessage}>Please back to homepage </p>
        <Link to="/" className={style.homeButton}>Back To Homepage</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
