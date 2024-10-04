import React from "react";
import MyProducts from "./components/MyProducts/MyProducts";
import ImageBack from "./components/ImageBack/ImageBack";
import FilteredProducts from "./components/FilteredProducts/FilteredProducts";

const Shop = () => {
  return (
    <div>
      <ImageBack />
      <FilteredProducts />
   
    </div>
  );
};

export default Shop;
