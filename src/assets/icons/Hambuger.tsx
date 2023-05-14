import hambuger from '../hambuger.svg';

export default function Hambuger() {
  return (
    <button className="w-8 h-8">
      <img src={hambuger} alt="hambuger-btn" />
    </button>
  );
}
