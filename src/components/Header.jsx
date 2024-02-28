import {useEffect, useState} from "react";
import Menu from "./Menu/Menu";
import data from "../textos.json";
import Button from "./Menu/Button.jsx";
import Capa from "./Menu/Capa.jsx";
import useMenu from "./Hooks/useMenu";

export default function Header() {
  const {menu} = data;
  const {isMenuOpen, toggleMenu, closeMenuOnClick, handleClick} = useMenu();
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
    <header id='inicio' className={`header ${scrolling ? "scroll" : ""}`}>
      <Capa isMenuOpen={isMenuOpen} closeMenuOnClick={closeMenuOnClick} />
      <Button
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        closeMenuOnClick={closeMenuOnClick}
      />
      <div className='container-header-image'>
        <img
          onClick={(e) => handleClick("", e)}
          style={{height: "55px"}}
          src={menu.img.src}
          alt='Logo Public Graphic'
        />
      </div>
      <Menu menu={menu} handleClick={handleClick} isMenuOpen={isMenuOpen} />
    </header>
  );
}
