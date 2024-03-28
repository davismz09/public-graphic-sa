import {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import data from "../../productos.json";
import Loader from "../loader.jsx";
import useIntersection from "../hooks/use-interseccion.jsx";
import useMenu from "../hooks/use-menu.jsx";
import {CSSTransition} from "react-transition-group";
import "../../transition.css";

const ProductoLista = () => {
  const {items} = data;
  const params = useParams();
  const navigate = useNavigate();
  const {handleTimeout} = useMenu();
  const [imgRef] = useIntersection();
  const [loading, setLoading] = useState(true);
  const currentItem = items.find((item) => item.id === parseInt(params.id));

  const handleClick = (base, codigo) => {
    navigate(`/productos/${base}/${codigo}`);
    handleTimeout();
  };

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
    <section className='portafolio_producto' key={currentItem?.id}>
      <div className='contenedor'>
        <h2 ref={imgRef.current} className='titulo-servicios'>
          {currentItem?.titulo}
        </h2>
        {loading ? (
          <Loader />
        ) : currentItem?.carrusel ? (
          <div className='galeria-port'>
            {Object.values(currentItem.carrusel).map((imagen, index) => (
              <div
                key={index}
                className={`imagen-port`}
                onClick={() => handleClick(currentItem?.id, imagen.codigo)}>
                <h2 style={{textAlign: "center", padding: "15px 0"}}>
                  {imagen.codigo}
                </h2>
                <CSSTransition
                  in={true}
                  appear={true}
                  timeout={500}
                  classNames='fade'>
                  <img
                    decoding='async'
                    src={imagen.url}
                    alt={imagen.codigo}
                    title={imagen.titulo}
                  />
                </CSSTransition>
              </div>
            ))}
          </div>
        ) : (
          <div className={`imagen-port`}>
            <CSSTransition
              in={true}
              appear={true}
              timeout={500}
              classNames='fade'>
              <img
                decoding='async'
                src={currentItem.imagen}
                alt={currentItem.titulo}
              />
            </CSSTransition>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductoLista;
