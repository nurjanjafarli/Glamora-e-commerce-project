import React, { useEffect, useState } from "react";
import SingleCard from "../../../../components/SingleCard/SingleCard";
import supabase from "../../../../supabase";
import style from "./HomeProducts.module.css";
import { Link } from "react-router-dom";
const fetchProducts = async () => {
  const { data, error } = await supabase.from("product").select("*");

  if (error) {
    console.error("Error fetching products:", error);
    return [];
  }
  return data;
};

const HomeProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts();
      setProducts(products.slice(13, 16));
    };

    loadProducts();
  }, []);

  return (
    <div className={style.fullContainer}>
      <h1 className={style.txt}>Trending designs</h1>
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

export default HomeProducts;
