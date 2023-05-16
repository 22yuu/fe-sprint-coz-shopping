import React from 'react';
import ItemCard from './ItemCard';

export default function ItemList({ title, products }) {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul className="flex gap-4">
        {products.map((product) => (
          <ItemCard key={product.id} item={product} />
        ))}
      </ul>
    </section>
  );
}
