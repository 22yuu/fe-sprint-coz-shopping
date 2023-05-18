import { useState, useEffect } from 'react';

import ItemList from '../components/ItemList';
import { useProductApi } from '../context/ProductContext';

export default function ProductList() {
  const { productApi } = useProductApi();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // productApi.getAllProducts().then((res) => setProducts([...res]);
    productApi.getAllProducts().then((res) => setProducts(res));
  }, []);
  return (
    <main className="flex-1">
      <section className="w-full">
        <ul className="flex justify-center p-4">
          <li>전체</li>
          <li>상품</li>
          <li>카테고리</li>
          <li>기획전</li>
          <li>브랜드</li>
        </ul>
      </section>
      <ItemList items={products} />
    </main>
  );
}
