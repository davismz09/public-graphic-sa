import Menu from "./Menu.jsx";
import data from "../../textos.json";
import Button from "./Button.jsx";
import Capa from "./Capa.jsx";
import useMenu from "../Hooks/useMenu";

export default function Nav() {
  const {menu} = data;
  const {isMenuOpen, toggleMenu, closeMenuOnClick, handleClick} = useMenu();

  return (
    <>
      <Capa isMenuOpen={isMenuOpen} closeMenuOnClick={closeMenuOnClick} />
      <Button
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        closeMenuOnClick={closeMenuOnClick}
      />
      <Menu menu={menu} handleClick={handleClick} isMenuOpen={isMenuOpen} />
    </>
  );
}
