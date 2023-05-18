export default function FilterItem({ item, filter, onChangeFilter }) {
  return (
    <li onClick={() => onChangeFilter(item.filter)}>
      <img src={item.img} alt={item.text} />
      <p
        className={`text-center ${
          item.filter === filter &&
          'text-blue-500 decoration-solid decoration-4'
        }`}
      >
        {item.text}
      </p>
    </li>
  );
}
