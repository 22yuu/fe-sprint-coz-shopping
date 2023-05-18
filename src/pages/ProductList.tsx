import { useState, useEffect } from 'react';

import Filter from '../components/Filter';
import ItemList from '../components/ItemList';
import { useProductApi } from '../context/ProductContext';
import types from '../constants/types';

const { All, Brand, Category, Exhibition, Product } = types;
const filters = [All, Brand, Category, Exhibition, Product];

export default function ProductList() {
  const { productApi } = useProductApi();
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(filters[0]);

  const handleChangeFilter = (type) => {
    console.log(type);
    setFilter(type);
  };

  useEffect(() => {
    // productApi.getAllProducts().then((res) => setProducts([...res]);
    productApi.getAllProducts().then((res) => setProducts(res));
  }, []);

  return (
    <main className="flex-1">
      <section className="w-full mb-2">
        <Filter filter={filter} onChangeFilter={handleChangeFilter} />
      </section>
      <ItemList filter={filter} items={products} />
    </main>
  );
}
