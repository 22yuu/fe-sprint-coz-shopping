import { useContext, createContext, useEffect, useState } from 'react';
import ToastContainer from '../components/ToastContainer';
import {
  readBookmarkFromLocalStorage,
  setBookmarkLocalStorage,
} from '../utils/storageUtil';

export const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const [bookmarkList, setBookmarkList] = useState(() =>
    readBookmarkFromLocalStorage()
  );
  const [toasts, setToasts] = useState([]);

  const handleAddBookmark = (item) => {
    setBookmarkLocalStorage('bookmarkList', item, setBookmarkList);
    setToasts([...toasts, { id: item.bookmarkId, isBookmarked: true }]);
  };

  const handleDeleteBookmark = (item) => {
    delete bookmarkList[item.id];
    setBookmarkLocalStorage('bookmarkList', bookmarkList, setBookmarkList);
    setToasts([...toasts, { id: item.bookmarkId, isBookmarked: false }]);
  };

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
