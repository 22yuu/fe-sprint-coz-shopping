import { useContext, createContext, useEffect, useState } from 'react';

export const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const [bookmarkList, setBookmarkList] = useState({});

  const handleAddBookmark = (item) => {
    localStorage.setItem('bookmarkList', JSON.stringify(item));
    setBookmarkList({ ...item });
  };

  const handleDeleteBookmark = (item) => {
    for (let key in bookmarkList) {
      if (key == item.id) {
        delete bookmarkList[key];
        break;
      }
    }

    // console.log(bookmarkList);
    localStorage.setItem('bookmarkList', JSON.stringify(bookmarkList));
    setBookmarkList({ ...bookmarkList });
  };

  useEffect(() => {
    if ('bookmarkList' in localStorage) {
      const list = JSON.parse(localStorage.bookmarkList);
      setBookmarkList(list);
    } else {
      localStorage.setItem('bookmarkList', '{}');
    }
    return;
  }, []);

  return (
    <BookmarkContext.Provider
      value={{ bookmarkList, handleAddBookmark, handleDeleteBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmark() {
  return useContext(BookmarkContext);
}
