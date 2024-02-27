import {useEffect, useState} from "react";

export default function Menu({menu, handleClick, isMenuOpen}) {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`menu ${scrolling ? "scroll" : ""} ${
        isMenuOpen ? "active" : ""
      }`}>
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
