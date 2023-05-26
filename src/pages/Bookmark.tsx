import { useOutletContext } from 'react-router-dom';

import Filter from '../components/Filter';
import ItemList from '../components/ItemList';
import { useBookmark } from '../context/BookmarkContext';

export default function Bookmark() {
  const { bookmarkList } = useBookmark();
  const { filter, handleChangeFilter } = useOutletContext();

  return (
    <main className="flex-1">
      <section className="w-full mb-2">
        <Filter filter={filter} onChangeFilter={handleChangeFilter} />
      </section>
      <ItemList filter={filter} items={Object.values(bookmarkList)} />
    </main>
  );
}
