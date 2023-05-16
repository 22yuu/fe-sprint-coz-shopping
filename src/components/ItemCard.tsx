import React from 'react';
import types from '../constants/types';

const { Brand, Product, Category, Exhibition } = types;

export default function ItemCard(item) {
  return <li>{item.type}</li>;
}

function getTypeData(item) {
  switch (item.type) {
    case Brand:
      break;
    case Product:
      break;
    case Category:
      break;
    case Exhibition:
      break;
  }
}
