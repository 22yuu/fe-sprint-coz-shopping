import bookmarkOff from '../assets/bookmark-off.svg';
import bookmarkOn from '../assets/bookmark-on.svg';

export default function Toast({ state }) {
  return (
    <div className="flex justify-center items-center font-bold text-center w-74 h-10 p-4 border rounded-xl my-1">
      <img
        className="w-4 h-4 mr-2"
        src={state ? bookmarkOn : bookmarkOff}
        alt="bookmark icon"
      />
      <p>상품이 북마크에 {state ? '추가' : '삭제'}되었습니다.</p>
    </div>
  );
}
