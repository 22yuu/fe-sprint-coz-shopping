import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';
import types from './constants/types';

const { All, Brand, Category, Exhibition, Product } = types;
const filters = [All, Brand, Category, Exhibition, Product];

export default function App(props) {
  const [isOpenModal, setOpenModal] = useState(false);

  const [modalItem, setModalItem] = useState({});
  const [filter, setFilter] = useState(filters[0]);

  const handleModal = () => {
    setOpenModal(!isOpenModal);
  };

  const handleChangeFilter = (type: string) => {
    setFilter(type);
  };

  return (
    <>
      <Header />
      {props.outlet ? (
        props.outlet
      ) : (
        <Outlet
          context={{
            filter,
            handleChangeFilter,
            handleModal,
            setModalItem,
          }}
        />
      )}

      <Footer />
      {isOpenModal && <Modal item={modalItem} handleModal={handleModal} />}
    </>
  );
}
