export default function Menu({menu, handleClick, isMenuOpen}) {
  return (
    <nav className={`menu ${isMenuOpen ? "active" : ""}`}>
      <a href='#inicio' onClick={(e) => handleClick("inicio", e)}>
        {menu.inicio}
      </a>
      <a href='#nosotros' onClick={(e) => handleClick("nosotros", e)}>
        {menu.nosotros}
      </a>
      <a href='#servicios' onClick={(e) => handleClick("servicios", e)}>
        {menu.servicios}
      </a>
      <a href='#contacto' onClick={(e) => handleClick("contacto", e)}>
        {menu.contacto}
      </a>
    </nav>
  );
}
