import { useState, useEffect } from 'react';

import ItemList from '../components/ItemList';
import { useProductApi } from '../context/ProductContext';

import filterAll from '../assets/filter-all.png';
import filterBrand from '../assets/filter-brand.png';
import filterCategory from '../assets/filter-category.png';
import filterExhibition from '../assets/filter-exhibition.png';
import filterProduct from '../assets/filter-product.png';

export default function ProductList() {
  const { productApi } = useProductApi();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // productApi.getAllProducts().then((res) => setProducts([...res]);
    productApi.getAllProducts().then((res) => setProducts(res));
  }, []);
  return (
    <main className="flex-1">
      <section className="w-full mb-2">
        <ul className="flex gap-10 justify-center p-4">
          <li>
            <img src={filterAll} alt="전체" />
            <p className="text-center">전체</p>
          </li>
          <li>
            <img src={filterProduct} alt="전체" />
            <p className="text-center">상품</p>
          </li>
          <li>
            <img src={filterCategory} alt="전체" />
            <p className="text-center">카테고리</p>
          </li>
          <li>
            <img src={filterExhibition} alt="전체" />
            <p className="text-center">기획전</p>
          </li>
          <li>
            <img src={filterBrand} alt="전체" />
            <p className="text-center">브랜드</p>
          </li>
        </ul>
      </section>
      <ItemList items={products} />
    </main>
  );
}
