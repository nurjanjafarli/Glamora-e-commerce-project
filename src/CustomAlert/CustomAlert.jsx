import React from "react";
import style from './CustomAlert.module.css'

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className={style.customAlert}>
      <div className={style.alertMessage}>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CustomAlert;
