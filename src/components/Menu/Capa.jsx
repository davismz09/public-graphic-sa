export default function Capa({isMenuOpen, closeMenuOnClick}) {
  return (
    <div
      id='capaOpacity'
      className={`capa--opacity ${isMenuOpen ? "active" : ""}`}
      onClick={closeMenuOnClick}></div>
  );
}
