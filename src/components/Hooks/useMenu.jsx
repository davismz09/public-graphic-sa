import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const useMenu = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenuOnClick = () => {
    setIsMenuOpen(false);
  };

  const handleClick = (sectionId) => {
    closeMenuOnClick();
    navigate(sectionId, {replace: true}); // Usando `replace` para evitar agregar a la historia del navegador
    setTimeout(() => {
      window.scrollTo(0, 0); // Desplaza al inicio después de la navegación
    }, 0); // Un retraso de 0 puede ser suficiente para este propósito, pero podrías necesitar ajustarlo
  };

  return {
    isMenuOpen,
    toggleMenu,
    closeMenuOnClick,
    handleClick,
    scrolling,
  };
};

export default useMenu;
