import React from 'react';
import Hambuger from '../assets/icons/Hambuger';
import Logo from '../assets/icons/Logo';

export default function Header() {
  return (
    <section
      data-testid="header-wrapper"
      className="w-full h-20 flex items-center justify-between px-20 py-4 shadow-lg sticky"
    >
      <section data-testid="left" className="flex hover:cursor-pointer">
        <Logo />
        <span className="text-2xl font-bold">COZ Shopping</span>
      </section>
      <section data-testid="right">
        <Hambuger />
      </section>
    </section>
  );
}
