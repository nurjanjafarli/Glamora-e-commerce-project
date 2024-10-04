import React, { useState, useEffect } from 'react';
import supabase from '../../../../supabase';
import MyProducts from '../MyProducts/MyProducts';
import style from './FilteredProducts.module.css';
import { useTranslation } from 'react-i18next';

const FilteredProducts = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    const getProducts = async () => {
      const { data, error } = await supabase.from('product').select('*');
      if (error) {
        console.error('Data not found', error);
      } else {
        setProducts(data);
        setFilteredProducts(data); 
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    if (category === 'All') {
      setFilteredProducts(products); 
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  }, [category, products]);

  return (
    <div className={style.container}>

      <div className={style.textBox}>
        <button onClick={() => setCategory('All')}>{t('filteredProducts.all')}</button>
        <button onClick={() => setCategory('Rings')}>{t('filteredProducts.rings')}</button>
        <button onClick={() => setCategory('Necklaces')}>{t('filteredProducts.necklaces')}</button>
        <button onClick={() => setCategory('Earrings')}>{t('filteredProducts.earrings')}</button>
      </div>
      {filteredProducts.length > 0 ? (
        <MyProducts products={filteredProducts} />
      ) : (
        <p>{t('filteredProducts.noData')}</p>
      )}
    </div>
  );
};

export default FilteredProducts;
