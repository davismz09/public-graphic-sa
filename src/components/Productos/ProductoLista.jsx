import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../../productos.json";
import useInterseccion from "../Hooks/useInterseccion.jsx";
import Loader from "../Loader.jsx";

const ProductoLista = () => {
  const {items} = data;
  const params = useParams();
  const [imgRef, isIntersecting] = useInterseccion({threshold: 0.5});
  const [loading, setLoading] = useState(true);
  const handleVisibility = (entry) => (loading !== entry ? "visible" : "");

  useEffect(() => {
    setLoading(true);
    const images = [];
    items.forEach((item) => {
      if (item.id === parseInt(params.id)) {
        if (item.carrusel) {
          Object.values(item.carrusel).forEach((imagen) => {
            const img = new Image();
            img.src = imagen.url;
            img.onload = () => {
              images.push(imagen.codigo);
              if (images.length === Object.values(item.carrusel).length) {
                setLoading(false);
              }
            };
          });
        } else {
          setLoading(false);
        }
      }
    });
  }, [params.id, items]);

  return (
    <main className='portafolio_container'>
      {items.map((item) => {
        if (item.id === parseInt(params.id)) {
          return (
            <section className='portafolio_producto' key={item.id}>
              <h2 ref={imgRef} className='titulo-servicios'>
                {item.titulo}
              </h2>
              {loading ? (
                <Loader />
              ) : (
                <>
                  {item.carrusel ? (
                    <Carousel
                      autoPlay
                      infiniteLoop
                      showArrows
                      interval={1500}
                      showStatus={false}
                      className={`imagen-port--animation ${handleVisibility(
                        isIntersecting,
                      )}`}>
                      {Object.values(item.carrusel).map((imagen) => (
                        <div key={imagen.codigo}>
                          <h3>Código: {imagen.codigo}</h3>
                          <img src={imagen.url} alt={imagen.alt} />
                        </div>
                      ))}
                    </Carousel>
                  ) : (
                    <div
                      className={`imagen-port imagen-port--animation ${handleVisibility(
                        isIntersecting,
                      )}`}>
                      <img src={item.imagen} alt={item.titulo} />
                    </div>
                  )}
                </>
              )}
            </section>
          );
        } else {
          return null;
        }
      })}
    </main>
  );
};

export default ProductoLista;
