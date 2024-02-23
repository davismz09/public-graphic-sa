import {useState} from "react";

const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenuOnClick = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({behavior: "smooth"});
      closeMenuOnClick();
    } else {
      console.error(`Section with ID ${sectionId} not found`);
    }
  };

  const handleClick = (sectionId, event) => {
    event.preventDefault(); // Evita que el enlace se siga
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);
  };

  return {
    isMenuOpen,
    toggleMenu,
    closeMenuOnClick,
    scrollToSection,
    handleClick,
  };
};

export default useMenu;
