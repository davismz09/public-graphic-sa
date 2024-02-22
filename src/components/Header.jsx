import Nav from "./Menu/Nav.jsx";
import Button from "./Menu/Button.jsx";
import Capa from "./Menu/Capa.jsx";
import useMenu from "./Hooks/useMenu.jsx";
import data from "../textos.json";

export default function Header() {
  const {menu} = data;

  const {isMenuOpen, toggleMenu, closeMenuOnClick, handleClick} = useMenu();

  return (
    <header id='inicio' className='header'>
      <Capa isMenuOpen={isMenuOpen} closeMenuOnClick={closeMenuOnClick} />
      <Button
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        closeMenuOnClick={closeMenuOnClick}
      />
      <Nav handleClick={handleClick} isMenuOpen={isMenuOpen} />
      <img className='logo_inicio' src={menu.img.src} alt={menu.img.alt} />
    </header>
  );
}
