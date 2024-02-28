export default function Menu({menu, handleClick, isMenuOpen}) {
  return (
    <nav className={`menu  ${isMenuOpen ? "active" : ""} `}>
      <a onClick={(e) => handleClick("", e)}>{menu.inicio}</a>
      <a onClick={(e) => handleClick("nosotros", e)}>{menu.nosotros}</a>
      <a onClick={(e) => handleClick("productos", e)}>{menu.servicios}</a>
      <a onClick={(e) => handleClick("trabajos", e)}>{menu.trabajo}</a>
      <a onClick={(e) => handleClick("contactos", e)}>{menu.contacto}</a>
    </nav>
  );
}
