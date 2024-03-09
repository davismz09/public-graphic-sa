import {Link} from "react-router-dom";

export default function Menu({menu, handleClick, isMenuOpen}) {
  return (
    <nav className={`menu  ${isMenuOpen ? "active" : ""} `}>
      <Link to={"/"} onClick={() => handleClick()}>
        {menu.inicio}
      </Link>
      <Link to={"/nosotros"} onClick={() => handleClick()}>
        {menu.nosotros}
      </Link>
      <Link to={"/productos"} onClick={() => handleClick()}>
        {menu.servicios}
      </Link>
      <Link to={"/trabajos"} onClick={() => handleClick()}>
        {menu.trabajo}
      </Link>
      <Link to={"/contactos"} onClick={() => handleClick()}>
        {menu.contacto}
      </Link>
    </nav>
  );
}
