import Menu from "./Menu.jsx";
import data from "../../textos.json";

export default function Nav({handleClick, isMenuOpen}) {
  const {menu} = data;
  return <Menu menu={menu} handleClick={handleClick} isMenuOpen={isMenuOpen} />;
}
