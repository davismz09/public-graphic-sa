import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../../productos.json";
import Loader from "../loader.jsx";
import useIntersection from "../hooks/use-interseccion.jsx";

const ProductoLista = () => {
  const {items} = data;
  const params = useParams();
  const [imgRef, isIntersecting] = useIntersection();
  const [loading, setLoading] = useState(true);
  const currentItem = items.find((item) => item.id === parseInt(params.id));

  useEffect(() => {
    setLoading(true);
    if (!currentItem) {
      setLoading(false);
      return;
    }
    const images = currentItem.carrusel
      ? Object.values(currentItem.carrusel)
      : [currentItem.imagen];
    const imagePromises = images.map(
      (imagen) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = imagen.url;
          img.onload = () => resolve(imagen.codigo);
        }),
    );

    Promise.all(imagePromises).then(() => setLoading(false));
  }, [params.id, currentItem]);

  return (
    <main className='portafolio_container'>
      <section className='portafolio_producto' key={currentItem?.id}>
        <h2 ref={imgRef.current} className='titulo-servicios'>
          {currentItem?.titulo}
        </h2>
        {loading ? (
          <Loader />
        ) : currentItem?.carrusel ? (
          <Carousel
            autoPlay
            infiniteLoop
            showArrows
            interval={1500}
            showStatus={false}
            showThumbs={false}
            className={`imagen-port--animation ${
              isIntersecting ? "visible" : ""
            }`}>
            {Object.values(currentItem.carrusel).map((imagen) => (
              <div key={imagen.codigo}>
                <h3>Código: {imagen.codigo}</h3>
                <img src={imagen.url} alt={imagen.alt} />
              </div>
            ))}
          </Carousel>
        ) : (
          <div
            className={`imagen-port imagen-port--animation ${
              isIntersecting ? "visible" : ""
            }`}>
            <img src={currentItem.imagen} alt={currentItem.titulo} />
          </div>
        )}
      </section>
    </main>
  );
};

export default ProductoLista;
