import React, { useState, useEffect } from 'react';
import { useProductApi } from '../context/ProductContext';

export default function Main() {
  const { productApi } = useProductApi();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(productApi.getAllProducts().then((res) => setProducts(res)));
  }, []);
  return (
    <main className="flex-1">
      <ul>
        {products.map((product) => (
          <li>{product.title}</li>
        ))}
      </ul>
    </main>
  );
}
