import React from "react";
import style from "./SingleCard.module.css";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

import { SlBasket } from "react-icons/sl";
import { useSearchParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import WislistBtn from "../WislistBtn";

const SingleCard = ({ product }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addItem } = useCart();
  return (
    <>
      <div className="col-lg-4 p-3 col-md-4">
        <div className={style.card} style={{ width: "90%" }}>
          <img src={product.image} alt="" className={style.cardImage} />
          <div className="cardInfo">
            <div className={style.firthBox}>
              <h1 className={style.cardTitle}>{product.title}</h1>
              <div className={style.icons}>
                <Link
                  key={product.id}
                  to={`/shop/productPage/product?id=${product.id}`}
                >
                  {" "}
                  <button>
                    <IoEyeOutline />
                  </button>
                </Link>
                <Link>
                  <button>
                    <WislistBtn mehsul={product} />
                  </button>
                </Link>
                <Link>
                  <button
                    onClick={() => {
                      addItem(product);
                      toast.success("Products susccesfully added");
                    }}
                  >
                    {" "}
                    <SlBasket />
                  </button>
                </Link>
              </div>
            </div>
            <h2 className={style.cardPrice}>{product.price} $ </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
