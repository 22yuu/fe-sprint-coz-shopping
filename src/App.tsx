import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { ProductProvider } from './context/ProductContext';
import { Outlet } from 'react-router-dom';
import Modal from './components/Modal';

export default function App() {
  const [isOpenModal, setOpenModal] = useState(false);
  const [imgSrc, setImgSrc] = useState('');
  const [isModalBookmark, setModalBookmark] = useState(false);
  const [modalText, setModalText] = useState('');

  const handleModal = () => {
    setOpenModal(!isOpenModal);
  };

  const handleModalBookmark = () => {
    setModalBookmark(!isModalBookmark);
  };

  return (
    <>
      <Header />
      <ProductProvider>
        <Outlet
          context={{ handleModal, setImgSrc, setModalBookmark, setModalText }}
        />
      </ProductProvider>
      <Footer />

      {isOpenModal && (
        <Modal
          imgSrc={imgSrc}
          handleModal={handleModal}
          handleModalBookmark={handleModalBookmark}
          isModalBookmark={isModalBookmark}
          modalText={modalText}
        />
      )}
    </>
  );
}
