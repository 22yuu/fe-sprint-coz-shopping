import { useState, useEffect } from 'react';

import Filter from '../components/Filter';
import ItemList from '../components/ItemList';
import { useProductApi } from '../context/ProductContext';
import { useOutletContext } from 'react-router-dom';

export default function ProductList() {
  const { productApi } = useProductApi();
  const [products, setProducts] = useState([]);
  const { filter, handleChangeFilter } = useOutletContext();

  useEffect(() => {
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
