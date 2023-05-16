import bookmarkOff from '../assets/bookmark-off.svg';
import bookmarkOn from '../assets/bookmark-on.svg';
import close from '../assets/close.svg';

export default function Modal({
  imgSrc,
  handleModal,
  handleModalBookmark,
  isModalBookmark,
  modalText,
}) {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-white/50">
      <div className="relative w-3/5 h-1/2 z-50">
        <img
          className="w-full h-full rounded-2xl"
          src={imgSrc}
          alt="modal image"
        />
        <button
          className="absolute top-5 right-8 text-2xl text-white flex items-center justify-center"
          onClick={handleModal}
        >
          <img src={close} alt="close button" />
        </button>
        <div className="absolute bottom-2 left-5 flex">
          <button onClick={handleModalBookmark}>
            <img src={isModalBookmark ? bookmarkOn : bookmarkOff} />
          </button>
          <h2 className="text-white">{modalText}</h2>
        </div>
      </div>
    </div>
  );
}
