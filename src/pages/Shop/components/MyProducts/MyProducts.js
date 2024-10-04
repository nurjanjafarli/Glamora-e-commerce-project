import React, { useState, useEffect } from "react";
import SingleCard from "../../../../components/SingleCard/SingleCard";
import style from "./MyProducts.module.css";
import { CircleLoader } from "react-spinners";
import { useTranslation } from 'react-i18next';

const MyProducts = ({ products }) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("title-asc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.trim());
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const filteredProducts = (products || []).filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = (() => {
    switch (sortOption) {
      case "title-asc":
        return filteredProducts
          .slice()
          .sort((a, b) => a.title.localeCompare(b.title));
      case "title-desc":
        return filteredProducts
          .slice()
          .sort((a, b) => b.title.localeCompare(a.title));
      case "price-asc":
        return filteredProducts.slice().sort((a, b) => a.price - b.price);
      case "price-desc":
        return filteredProducts.slice().sort((a, b) => b.price - a.price);
      default:
        return filteredProducts;
    }
  })();

  if (loading) {
    return (
      <div className={style.loader}>
        <CircleLoader size={200} />
      </div>
    );
  }

  return (
    <div className="container">
      <div className={style.searchBox}>
        <input
          type="text"
          placeholder={t('myProducts.searchPlaceholder')}
          value={searchQuery}
          onChange={handleSearchChange}
          className={style.searchInput}
        />
      </div>
      <div className={style.sortBox}>
        <select
          value={sortOption}
          onChange={handleSortChange}
          className={style.sortSelect}
        >
          <option value="title-asc">{t('myProducts.sortTitleAsc')}</option>
          <option value="title-desc">{t('myProducts.sortTitleDesc')}</option>
          <option value="price-asc">{t('myProducts.sortPriceAsc')}</option>
          <option value="price-desc">{t('myProducts.sortPriceDesc')}</option>
        </select>
      </div>
      <div className="row">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((item) => (
            <SingleCard key={item.id} product={item} />
          ))
        ) : (
          <p>{t('myProducts.noProducts')}</p>
        )}
      </div>
    </div>
  );
};

export default MyProducts;
