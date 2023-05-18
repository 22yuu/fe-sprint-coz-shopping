import React from 'react';

import filterAll from '../assets/filter-all.png';
import filterBrand from '../assets/filter-brand.png';
import filterCategory from '../assets/filter-category.png';
import filterExhibition from '../assets/filter-exhibition.png';
import filterProduct from '../assets/filter-product.png';
import types from '../constants/types';

import FilterItem from './FilterItem';

const { All, Brand, Category, Exhibition, Product } = types;

const mapFilter = [
  { filter: All, text: '전체', img: filterAll },
  { filter: Product, text: '상품', img: filterProduct },
  { filter: Category, text: '카테고리', img: filterCategory },
  { filter: Exhibition, text: '기획전', img: filterExhibition },
  { filter: Brand, text: '브랜드', img: filterBrand },
];
export default function Filter({ filter, onChangeFilter }) {
  return (
    <ul className="flex gap-10 justify-center p-4">
      {mapFilter.map((item, index) => (
        <FilterItem
          key={index}
          item={item}
          filter={filter}
          onChangeFilter={onChangeFilter}
        />
      ))}
    </ul>
  );
}
