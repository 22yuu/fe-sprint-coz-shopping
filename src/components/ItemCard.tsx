import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import bookmarkOff from '../assets/bookmark-off.svg';
import bookmarkOn from '../assets/bookmark-on.svg';
import { useBookmark } from '../context/BookmarkContext';
import getTypeData from '../utils/getTypeData';

export default function ItemCard({ item }) {
  const { title, subTitle, image, price, discount, follower } =
    getTypeData(item);

  const { bookmarkList, handleAddBookmark, handleDeleteBookmark } =
    useBookmark();

  const [isBookmark, setIsBookmark] = useState(
    bookmarkList[item.id] !== undefined
  );

  const { handleModal, setModalItem } = useOutletContext();

  const handleBookmark = () => {
    // add bookmark
    if (!isBookmark) {
      setIsBookmark((prev) => !prev);
      handleAddBookmark({
        ...bookmarkList,
        [item.id]: {
          ...item,
          bookmarkId: nanoid(),
        },
      });
    }
    // delete bookmark
    else {
      handleDeleteBookmark(item);
      setIsBookmark((prev) => !prev);
    }
  };

  const onClickItemCard = () => {
    handleModal();
    setModalItem(item);
  };

  useEffect(() => {
    setIsBookmark(bookmarkList[item.id] !== undefined);
  }, [bookmarkList]);

  return (
    <li className="flex flex-col gap-1 m-1 h-64 hover:cursor-pointer">
      <div id="imgSection" className="relative w-full h-4/5">
        <img
          src={image}
          className="w-full h-full rounded-2xl"
          onClick={onClickItemCard}
        />
        <button className="absolute bottom-1 right-1" onClick={handleBookmark}>
          <img src={isBookmark ? bookmarkOn : bookmarkOff} />
        </button>
      </div>
      <div id="textSection">
        <div id="textSection-top" className="flex relative">
          <span className="basis-52 shrink font-bold truncate">{title}</span>
          {discount && (
            <span className="grow absolute right-0 font-bold text-blue-600">
              {discount}%
            </span>
          )}
          {follower && (
            <span className="grow absolute right-0 font-bold">관심고객수</span>
          )}
        </div>
        <div id="textSection-bottom" className="flex relative">
          {subTitle && <span className="absolute left-0">{subTitle}</span>}
          {follower && (
            <span className="grow absolute right-0 font-bold">
              {follower.toLocaleString('ko-KR')}
            </span>
          )}
          {price && (
            <span className="grow absolute right-0 font-bold">
              {Number(price).toLocaleString('ko-KR')}원
            </span>
          )}
        </div>
      </div>
    </li>
  );
}
