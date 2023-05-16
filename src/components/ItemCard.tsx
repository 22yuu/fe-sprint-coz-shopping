import React, { useState } from 'react';
import types from '../constants/types';
import bookmarkOff from '../assets/bookmark-off.svg';
import bookmarkOn from '../assets/bookmark-on.svg';

const { Brand, Product, Category, Exhibition } = types;

export default function ItemCard({ item }) {
  const { title, subTitle, image, price, discount, follower } =
    getTypeData(item);

  const [isBookmark, setIsBookmark] = useState(false);

  const handleBookmark = () => {
    setIsBookmark(!isBookmark);
  };

  return (
    <li className="w-1/4 h-64">
      <div id="imgSection" className="relative w-full h-4/5">
        <img src={image} className="w-full h-full" />
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

function getTypeData(item) {
  let obj = {};

  switch (item.type) {
    case Brand:
      obj = {
        title: item.brand_name,
        image: item.brand_image_url,
        follower: item.follower,
      };
      break;
    case Product:
      obj = {
        title: item.title,
        image: item.image_url,
        price: item.price,
        discount: item.discountPercentage,
      };
      break;
    case Category:
      obj = {
        title: `# ${item.title}`,
        image: item.image_url,
      };
      break;
    case Exhibition:
      obj = {
        title: item.title,
        subTitle: item.sub_title,
        image: item.image_url,
      };
      break;
  }

  return obj;
}
