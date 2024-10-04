import React, { useEffect, useState } from "react";
import SingleCard from "../../../../components/SingleCard/SingleCard";
import supabase from "../../../../supabase";
import style from './Recommended.module.css';
import { useTranslation } from 'react-i18next';

const fetchProducts = async () => {
  const { data, error } = await supabase.from("product").select("*");

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }
  return data;
};

const Recommended = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts();
      setProducts(products.slice(18, 21));
    };

    loadProducts();
  }, []);

  return (
    <div className={style.fullContainer}>
      <p>{t('recommended.waitMessage')}</p>
      <h1 className={style.txt}>
        {t('recommended.title')} <span>{t('recommended.highlight')}</span>
      </h1>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <SingleCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommended;
