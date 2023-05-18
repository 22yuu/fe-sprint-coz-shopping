import ItemCard from './ItemCard';

export default function ItemList({ title, items }) {
  return (
    <section className="w-full mb-10">
      {title && <h2>{title}</h2>}
      <ul className="flex gap-4">
        {items.length > 0
          ? items.map((item) => <ItemCard key={item.id} item={item} />)
          : '텅'}
      </ul>
    </section>
  );
}
