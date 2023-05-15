import React from 'react';
import { fireEvent, cleanup, render, screen } from '@testing-library/react';
import { resq$ } from 'resq';

import Header from '../Header';
/* 
Header component

Story. 페이지 내 스크롤이 발생해도 항상 상단에 붙어 있어야 한다.
Story. Header의 왼쪽 섹션은 로고 이미지와 쇼핑몰 이름이 Font로 작성된다.
Story. Header의 오른쪽 섹션에는 페이지 이동을 위한 햄버거 버튼이 있습니다.
*/

describe('<Header />', () => {
  afterAll(() => {
    cleanup();
  });

  // given : Header 컴포넌트는
  // when : 스크롤이 발생했을 때
  // then : 항상 상단에 붙어 있어야 하므로 position:sticky가 적용되어야 한다.
  it('Header 컴포넌트는 스크롤이 발생했을 때 항상 상단에 붙어 있어야 하므로 position:sticky가 적용되어야 한다.', () => {
    render(<Header />);
    expect(
      screen.getByTestId('header-wrapper').classList.contains('sticky')
    ).toBe(true);
  });

  // given : Header의 왼쪽 섹션은
  // when : 렌더링되었을 때
  // then : 로고 이미지와 쇼핑몰 이름은 font로 작성되어 렌더링되어야 한다.
  it('Header의 왼쪽 섹션은 렌더링되었을 때 로고 이미지와 쇼핑몰 이름은 font로 작성되어 렌더링되어야 한다.', () => {
    const { container } = render(<Header />);

    const logo = resq$('Logo', container);

    expect(logo).toBeTruthy();

    screen.getByText('COZ Shopping');
  });

  // given: Header의 오른쪽 섹션은
  // when : 렌더링되었을 때
  // then : DropDown 메뉴를 보여줄 수 있는 햄버거 버튼이 렌더링되어야 한다.
  it('Header의 오른쪽 섹션은 렌더링되었을 때 DropDown 메뉴를 보여줄 수 있는 햄버거 버튼이 렌더링되어야 한다.', () => {
    const { container } = render(<Header />);

    const hambuger = resq$('Hambuger', container);

    expect(hambuger).toBeTruthy();
  });

  // given: 헤더에서
  // when : Hambuger 버튼을 누를 때
  // then : 사용자가 이동할 수 있는 페이지 목록을 DropDown 메뉴로 보여줘야 합니다.
  it('헤더에서 Hambuger 버튼을 누를 때 사용자가 이동할 수 있는 페이지 목록을 DropDown 메뉴로 보여줘야 합니다.', () => {});
});
