import React, { useState, useEffect } from 'react';
import { useProductApi } from '../context/ProductContext';
import ItemCard from '../components/ItemCard';

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
      <ul className="flex gap-4">
        {products.map((product) => (
          <ItemCard key={product.id} item={product} />
        ))}
      </ul>
    </main>
  );
}
