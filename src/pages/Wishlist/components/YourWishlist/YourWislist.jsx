import React from "react";
import { useWishlist } from "react-use-wishlist";
import SingleCard from "../../../../components/SingleCard/SingleCard";
import { FaHeartBroken } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import style from './YourWislist.module.css'

const YourWishlist = () => {
  const { t } = useTranslation();
  const { items } = useWishlist();

  if (!items.length) return (
    <div className={style.noWishlistContainer}>
      <div className={style.noWishlistIcon}>
        <Link><FaHeartBroken /></Link>
      </div>
      <h2 className={style.noWishlistMessage}>{t('wishlist.emptyMessage')}</h2>
      <p className={style.noWishlistText}>{t('wishlist.emptyText')}</p>
      <Link to='/shop'>
        <button className={style.startBrowsingButton}>{t('wishlist.startBrowsing')}</button>
      </Link>
    </div>
  );

  return (
    <div className={style.fullContainer}>
   
      <div className="container">
        <div className="row">
          {items.map((item) => (
            <SingleCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourWishlist;
