import { useContext, createContext, useEffect, useState } from 'react';
import Toast from '../components/Toast';

export const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const [bookmarkList, setBookmarkList] = useState({});
  const [toast, setToast] = useState(false);
  const [isBookmark, setToastBookmark] = useState(false);

  const handleAddBookmark = (item) => {
    localStorage.setItem('bookmarkList', JSON.stringify(item));
    setBookmarkList({ ...item });
    setToastBookmark(!isBookmark);
    setToast(true);
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
    setToastBookmark(!isBookmark);
    setToast(true);
  };

  const handleShowToast = () => {
    setToast(!toast);
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
      value={{
        bookmarkList,
        handleAddBookmark,
        handleDeleteBookmark,
        handleShowToast,
      }}
    >
      {children}
      {toast && <Toast state={isBookmark} setToastState={setToast} />}
    </BookmarkContext.Provider>
  );
}

export function useBookmark() {
  return useContext(BookmarkContext);
}
