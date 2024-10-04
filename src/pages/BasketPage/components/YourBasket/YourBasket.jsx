import React, { useEffect, useState } from "react";
import style from './YourBasket.module.css';
import { useCart } from "react-use-cart";
import { Link, useNavigate } from "react-router-dom";
import CustomAlert from '../../../../CustomAlert/CustomAlert';
import { BsMinecartLoaded } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const YourBasket = () => {
  const { items, updateItemQuantity, removeItem, isEmpty } = useCart();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  const handleBuyNowClick = () => {
    if (isAuthenticated) {
      navigate('/checkout');
    } else {
      setShowAlert(true); // Show alert if not authenticated
    }
  };

  // Calculate total price
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  if (isEmpty) {
    return (
      <div className={style.emptyCartContainer}>
        <div className={style.emptyCartIcon}>
          <Link>
            <BsMinecartLoaded />
          </Link>
        </div>
        <h2 className={style.emptyCartMessage}>{t("yourBasket.emptyCartTitle")}</h2>
        <p className={style.emptyCartText}>
          {t("yourBasket.emptyCartMessage")}
        </p>
        <Link to="/shop">
          <button className={style.continueShoppingButton}>
            {t("yourBasket.continueShopping")}
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className={style.fullBasket}>
      <table>
        <thead>
          <tr>
            <th scope="col">{t("yourBasket.title")}</th>
            <th scope="col">{t("yourBasket.image")}</th>
            <th scope="col">{t("yourBasket.price")}</th>
            <th scope="col">{t("yourBasket.quantity")}</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>
                <img src={item.image} alt={item.title} className={style.image} />
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td className={style.price}>
                <button className={style.buttonss} onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                  -
                </button>
                <td><p>{item.quantity}</p></td>
                <button  className={style.buttonss}  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
              </td>
              <td >
                <button   className={ style.delete}onClick={() => removeItem(item.id)}>
                  {t("yourBasket.delete")}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={style.totalContainer}>
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button className={style.buyNowButton} onClick={handleBuyNowClick}>
          {t("yourBasket.buyNow")}
        </button>
      </div>

      {showAlert && (
        <CustomAlert
          message={t("yourBasket.loginAlert")}
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
};

export default YourBasket;
