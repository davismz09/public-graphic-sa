import {useParams} from "react-router-dom";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../../productos.json";

const ProductoLista = () => {
  const {items} = data;
  const params = useParams();

  return (
    <main className='portafolio_container'>
      {items.map((item) => {
        if (item.id === parseInt(params.id)) {
          return (
            <section className='portafolio_producto' key={item.id}>
              <h2 className='titulo-servicios'>{item.titulo}</h2>
              {item.carrusel ? (
                <Carousel autoPlay infiniteLoop showArrows>
                  {Object.values(item.carrusel).map((imagen) => (
                    <div key={imagen.codigo}>
                      <h3>Código: {imagen.codigo}</h3>
                      <img src={imagen.url} alt={imagen.alt} />
                    </div>
                  ))}
                </Carousel>
              ) : (
                <div className='imagen-port'>
                  <img src={item.imagen} alt={item.titulo} />
                </div>
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
