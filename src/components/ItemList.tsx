import React from 'react';
import ItemCard from './ItemCard';

export default function ItemList({ title, items }) {
  return (
    <section className="w-full mb-10">
      {title && <h2>{title}</h2>}
      <ul className="flex gap-4">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
