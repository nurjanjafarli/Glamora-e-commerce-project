import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import supabase from "../../../../supabase";
import style from "./ProductPage.module.css";
import { IoMdHeartEmpty } from "react-icons/io";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import WislistBtn from "../../../../components/WislistBtn";
const ProductPage = ({ item }) => {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const productId = searchParams.get("id");
  const { items, updateItemQuantity, removeItem } = useCart();
  const { addItem } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      if (productId) {
        const { data, error } = await supabase
          .from("product")
          .select("*")
          .eq("id", productId)
          .single();
        if (error) {
          setError("Error fetching product details");
          console.error(error);
        } else {
          setProduct(data);
        }
      }
    };

    fetchProduct();
  }, [productId]);

  if (error) return <div>{error}</div>;
  if (!product) return <div>...</div>;

  return (
    <div className={style.fullContainer}>
      <div className={style.infoContainer}>
        <div className={style.imageBox}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={style.textBox}>
          <h1>{product.title}</h1>
          <p>${product.price}</p>
          <h2>{product.description}</h2>
          <div className={style.box}>
            <div>
              <button
                className={style.unicButton}
                onClick={() => {
                  addItem(product);
                  toast.success("Products susccesfully added");
                }}
              >
                {" "}
                Add to cart{" "}
              </button>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
