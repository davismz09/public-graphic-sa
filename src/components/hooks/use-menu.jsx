import {useEffect, useState} from "react";

const useMenu = () => {
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

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  const closeMenuOnClick = () => setIsMenuOpen(false);

  const handleTimeout = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
      // Desplazamiento: Ubica al usuario al inicio de la página
    }, 0);
    // Tiempo: retraso de 0s para hacerlo automaticamente
  };

  const handleClick = () => {
    closeMenuOnClick();
    handleTimeout();
  };

  return {
    isMenuOpen,
    toggleMenu,
    closeMenuOnClick,
    handleClick,
    handleTimeout,
    scrolling,
  };
};

export default useMenu;
