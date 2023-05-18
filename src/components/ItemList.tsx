import ItemCard from './ItemCard';

import empty from '../assets/empty.png';

export default function ItemList({ title, items }) {
  return (
    <section className="w-full mb-10">
      {title && <h2>{title}</h2>}
      <ul className="grid grid-colos-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.length > 0 ? (
          items.map((item) => <ItemCard key={item.id} item={item} />)
        ) : (
          <img className="mx-auto" src={empty} alt="empty image" />
        )}
      </ul>
    </section>
  );
}
