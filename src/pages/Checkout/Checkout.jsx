import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import styles from "./Checkout.module.css";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };

  const handleInputFocus = (e) => {
    setCardDetails({
      ...cardDetails,
      focus: e.target.name,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment submitted successfully!");
  };

  return (
    <div className={styles.fullContainer}>
      {" "}
      <div className={styles.container}>
        <div className={styles.cardWrapper}>
          <Cards
            number={cardDetails.number}
            name={cardDetails.name}
            expiry={cardDetails.expiry}
            cvc={cardDetails.cvc}
            focused={cardDetails.focus}
          />
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              value={cardDetails.number}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              maxLength="16"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Cardholder Name"
              value={cardDetails.name}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              required
              className={styles.input}
            />
          </div>
          <div className={styles.row}>
            <div className={styles.formGroupSmall}>
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={cardDetails.expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                maxLength="5"
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formGroupSmall}>
              <input
                type="tel"
                name="cvc"
                placeholder="CVC"
                value={cardDetails.cvc}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                maxLength="3"
                required
                className={styles.input}
              />
            </div>
          </div>
          <Link to="/thankYouPage">   <button type="submit" className={styles.submitButton}>
            Pay Now
          </button></Link>
       
        </form>
      </div>
    </div>
  );
};

export default Checkout;
