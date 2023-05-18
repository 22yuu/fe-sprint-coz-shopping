import { useContext, createContext, useEffect, useState } from 'react';
import Toast from '../components/Toast';
import ToastContainer from '../components/ToastContainer';

export const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const [bookmarkList, setBookmarkList] = useState({});
  const [toasts, setToasts] = useState([]);

  const handleAddBookmark = (item) => {
    localStorage.setItem('bookmarkList', JSON.stringify(item));
    setBookmarkList({ ...item });
    setToasts([...toasts, { id: item.bookmarkId, isBookmarked: true }]);
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
    setToasts([...toasts, { id: item.bookmarkId, isBookmarked: false }]);
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
      }}
    >
      {children}
      <ToastContainer time={1000} toasts={toasts} setToastState={setToasts} />
    </BookmarkContext.Provider>
  );
}

export function useBookmark() {
  return useContext(BookmarkContext);
}
