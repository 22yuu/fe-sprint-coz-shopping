import React, { useState, useEffect } from 'react';
import { useProductApi } from '../context/ProductContext';
import ItemList from '../components/ItemList';

export default function Main() {
  const { productApi } = useProductApi();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // productApi.getAllProducts().then((res) => setProducts(res));
    productApi.getBy(4).then((res) => setProducts(res));
    // productApi.getBy(10).then((res) => setProducts(res));
  }, []);
  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <ItemList title="상품 리스트" items={products} />
      <ItemList title="북마크 리스트" items={products} />
    </main>
  );
}
