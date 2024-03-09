import {useState, useRef, useEffect} from "react";

function useIntersection(opciones = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersectedOnce, setHasIntersectedOnce] = useState(false); // Nuevo estado para verificar si ya se intersectó

  const elementoRef = useRef();

  useEffect(() => {
    const elemento = elementoRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!hasIntersectedOnce && entry.isIntersecting) {
          setIsIntersecting(true);
          setHasIntersectedOnce(true); // Se marca como intersectado una vez que se ha observado
        }
      });
    }, opciones);

    if (elemento) {
      observer.observe(elemento);
    }

    return () => {
      if (elemento) observer.unobserve(elemento);
    };
  }, [opciones, hasIntersectedOnce]); // Añadir hasIntersectedOnce al array de dependencias

  return [elementoRef, isIntersecting];
}

export default useIntersection;
