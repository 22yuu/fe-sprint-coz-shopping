import React from 'react';
import bookmark from '../assets/bookmark-icon.svg';
import product from '../assets/product-icon.svg';
import { Link } from 'react-router-dom';

export default function DropDownMenu({ onClick }) {
  return (
    <div className="flex flex-col dropDownMenu">
      <ul className="flex flex-col">
        <li className="px-2.5 py-3 cursor-default">OOO님, 안녕하세요!</li>
        <li className="px-2.5 py-3 line" onClick={onClick}>
          <Link to="productlist">
            <img className="inline mr-2" src={product} alt="상품 아이콘" />
            상품리스트 페이지
          </Link>
        </li>
        <li className="px-2.5 py-3 line" onClick={onClick}>
          <Link to="bookmark">
            <img className="inline mr-2" src={bookmark} alt="북마크 아이콘" />
            북마크 페이지
          </Link>
        </li>
      </ul>
    </div>
  );
}
