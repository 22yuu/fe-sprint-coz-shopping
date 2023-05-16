# fe-sprint-coz-shopping

## 기술 스택

- vite
- react 18
- typescript
- tailwindcss 3.3.2
- storybook 7
- jest
- react-router-dom 6
- redux, react-redux, rtk

## :star: GOAL

- 리액트를 이용해 솔로 프로젝트 과제를 수행한다.
- 이번 과제를 통해 typescript에 익숙해진다.
- 이번 과제를 통해 tailwind에 익숙해진다.
- 이번 과제를 통해 storybook을 이용한 컴포넌트 기반 개발을 해본다.
- 이번 과제를 통해 리덕스 툴킷에 익숙해진다.

## :rocket: 기능 구현 목록

**공통 컴포넌트**

- Header
  - Header 내 햄버거 버튼 클릭 시 DropDown 메뉴를 보여준다.
  - 햄버거 버튼
    - 상품리스트 → 클릭하면 `/products/list` 페이지로 이동
    - 북마크페이지 → 클릭하면 `/bookmark` 페이지로 이동
- Footer
- ItemList
- ItemCard
- FilterList
  - 전체(all), 카테고리(category), 기획전(rapple), 브랜드(brand)
- FilterItem
- Toast
- Modal

**Pages**

- Main Page

  - path: `/`
  - [] Header와 Footer를 갖고 있으며, 해당 GNB와 Footer는 어느 페이지를 가더라도 항상 존재해야 한다.
  - [] 화면 가운데는 Main 영역으로 모든 타입의 상품 정보를 4개 보여준다. (필터 기능 없이)
  - [] 모든 타입의 북마크된 상품 정보를 4개 보여준다. (필터 기능 없이)

- ProductList Page

  - path: `/products/list`
  - [] 무한 스크롤 기능을 통해 상품 리스트를 계속 보여줄 수 있어야 한다.
  - [] 각 상품은 타입이 존재한다. (상품, 카테고리, 기획전, 브랜드)
  - [] 필터 버튼을 통해 상품을 타입별로 보여줄 수 있어야한다.
  - [] 각 상품을 클릭하면 해당 상품의 사진을 보여주는 모달을 띄울 수 있어야 한다.
  - [] 각 상품에 존재하는 북마크 버튼을 눌러 원하는 상품을 북마크할 수 있어야 한다.
    - [] 북마크 버튼은 토글 기능을 제공해야 한다. 버튼 클릭을 통해 북마크 추가/삭제 기능을 제공한다.
    - [] 북마크 추가/삭제가 될 때 사용자에게 알림 토스트가 표시되어야 한다.

- Bookmark Page

  - path: `/bookmark`
  - [] 사용자가 북마크 한 상품 들을 확인할 수 있는 페이지로 무한 스크롤이 가능해야 한다.
  - [] 상품리스트 페이지에 존재하는 필터링 버튼과 같은 버튼을 이용해 상품을 타입별로 필터해 보여줄 수 있어야 한다.

## 시연
