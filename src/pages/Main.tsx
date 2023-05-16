import React, { useState, useEffect } from 'react';
import { useProductApi } from '../context/ProductContext';

export default function Main() {
  const { productApi } = useProductApi();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // productApi.getAllProducts().then((res) => setProducts(res));
    // productApi.getBy(4).then((res) => setProducts(res));
    productApi.getBy(10).then((res) => setProducts(res));
  }, []);
  return (
    <main className="flex-1">
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.type}</li>
        ))}
      </ul>
    </main>
  );
}
