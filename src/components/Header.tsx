import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import hambuger from '../assets/hambuger.svg';
import logo from '../assets/logo.svg';
import DropDownMenu from './DropDownMenu';

export default function Header() {
  const [openDropDown, setOpenDropDown] = useState(false);

  const handleClickHambuger = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <section
      data-testid="header-wrapper"
      className="w-full h-20 flex items-center justify-between px-20 py-4 shadow-lg sticky mb-6"
    >
      <Link to="/">
        <section data-testid="left" className="flex">
          <img src={logo} alt="logo" className="w-14 h-8 mr-2" />
          <span className="text-2xl font-bold">COZ Shopping</span>
        </section>
      </Link>
      <section data-testid="right">
        <button className="w-8 h-8" onClick={handleClickHambuger}>
          <img src={hambuger} alt="hambuger-btn" />
        </button>
        {openDropDown && <DropDownMenu onClick={handleClickHambuger} />}
      </section>
    </section>
  );
}
