import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import ItemList from '../components/ItemList';
import itemCounts from '../constants/itemCounts';
import { useBookmark } from '../context/BookmarkContext';
import { useProductApi } from '../context/ProductContext';

export default function Main() {
  const [products, setProducts] = useState([]);
  const { productApi } = useProductApi();
  const { bookmarkList } = useBookmark();
  const { filter } = useOutletContext();

  useEffect(() => {
    productApi
      .getBy(itemCounts.defaultCount)
      .then((res: any) => setProducts(res));
  }, []);

  return (
    <main className="flex-1 flex flex-col items-center justify-center">
      <ItemList title="상품 리스트" filter={filter} items={products} />
      <ItemList
        title="북마크 리스트"
        filter={filter}
        items={Object.values(bookmarkList).slice(0, 4)}
      />
    </main>
  );
}
