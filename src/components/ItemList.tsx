import ItemCard from './ItemCard';

import empty from '../assets/empty.png';
import types from '../constants/types';

export default function ItemList({ title, filter, items }) {
  const filteredItems = getFilteredItems(filter, items);
  // console.log(filteredItems);

  return (
    <section className="w-full mb-10">
      {title && <h2>{title}</h2>}
      {filteredItems.length > 0 ? (
        <ul className="grid grid-colos-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <img className="mx-auto" src={empty} alt="empty image" />
      )}
    </section>
  );
}

function getFilteredItems(filter, items) {
  if (types.All === filter) return items;

  return items.filter((item) => item.type === filter);
}
