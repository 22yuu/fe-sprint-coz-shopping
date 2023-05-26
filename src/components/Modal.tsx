import { nanoid } from 'nanoid';
import { useState } from 'react';

import bookmarkOff from '../assets/bookmark-off.svg';
import bookmarkOn from '../assets/bookmark-on.svg';
import close from '../assets/close.svg';
import { useBookmark } from '../context/BookmarkContext';
import getTypeData from '../utils/getTypeData';

export default function Modal({ item, handleModal }) {
  const { bookmarkList, handleAddBookmark, handleDeleteBookmark } =
    useBookmark();

  const { title, image } = getTypeData(item);

  const [isModalBookmark, setModalBookmark] = useState(
    bookmarkList[item.id] !== undefined
  );

  const handleModalBookmark = () => {
    console.log('clicked!!!');
    if (!isModalBookmark) {
      const bookmarkSavedTime = new Date().getSeconds();
      // console.log(bookmarkSavedTime);

      setModalBookmark((prev) => !prev);
      handleAddBookmark({
        ...bookmarkList,
        [item.id]: {
          ...item,
          bookmarkId: nanoid(),
          time: bookmarkSavedTime,
        },
      });
    } else {
      handleDeleteBookmark(item);
      setModalBookmark((prev) => !prev);
    }
  };

  return (
    <div
      className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-white/50"
      onClick={handleModal}
    >
      <div
        className="relative w-3/5 h-1/2 z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          className="w-full h-full rounded-2xl"
          src={image}
          alt="modal image"
        />
        <button
          className="absolute top-5 right-8 text-2xl text-white flex items-center justify-center"
          onClick={handleModal}
        >
          <img src={close} alt="close button" />
        </button>
        <div className="absolute bottom-2 left-5 flex">
          <button onClick={handleModalBookmark}>
            <img src={isModalBookmark ? bookmarkOn : bookmarkOff} />
          </button>
          <h2 className="text-white">{title}</h2>
        </div>
      </div>
    </div>
  );
}
