import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Modal from './components/Modal';

export default function App(props) {
  const [isOpenModal, setOpenModal] = useState(false);
  const [modalItem, setModalItem] = useState({});

  const handleModal = () => {
    setOpenModal(!isOpenModal);
  };

  return (
    <>
      <Header />
      {props.outlet ? (
        props.outlet
      ) : (
        <Outlet
          context={{
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
