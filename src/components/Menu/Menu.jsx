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
      className={`menu  ${isMenuOpen ? "active" : ""} ${
        scrolling ? "scroll" : ""
      }`}>
      <img
        onClick={(e) => handleClick("", e)}
        style={{height: "55px"}}
        src={menu.img.src}
        alt='Logo Public Graphic'
      />
      <div className='botonesNav'>
        <a onClick={(e) => handleClick("", e)}>{menu.inicio}</a>
        <a onClick={(e) => handleClick("nosotros", e)}>{menu.nosotros}</a>
        <a onClick={(e) => handleClick("servicios", e)}>{menu.servicios}</a>
        <a onClick={(e) => handleClick("trabajos", e)}>{menu.trabajo}</a>
        <a onClick={(e) => handleClick("contactos", e)}>{menu.contacto}</a>
      </div>
    </nav>
  );
}
