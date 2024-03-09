export default function Button({isMenuOpen, toggleMenu, closeMenuOnClick}) {
  return (
    <>
      <button
        className={`buttonOpenMenu ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}>
        ☰
      </button>
      <button
        className={`buttonCloseMenu ${isMenuOpen ? "active" : "inactive"}`}
        onClick={closeMenuOnClick}>
        X
      </button>
    </>
  );
}
