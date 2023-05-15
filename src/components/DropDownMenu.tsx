import React from 'react';
import bookmark from '../assets/bookmark.svg';
import product from '../assets/product.svg';

export default function DropDownMenu() {
  return (
    <div className="flex flex-col dropDownMenu">
      <ul className="flex flex-col">
        <li className="px-2.5 py-3 cursor-default">OOO님, 안녕하세요!</li>
        <li className="px-2.5 py-3 line">
          <a href="#">
            <img className="inline mr-2" src={product} alt="상품 아이콘" />
            상품리스트 페이지
          </a>
        </li>
        <li className="px-2.5 py-3 line">
          <a href="#">
            <img className="inline mr-2" src={bookmark} alt="북마크 아이콘" />
            북마크 페이지
          </a>
        </li>
      </ul>
    </div>
  );
}
