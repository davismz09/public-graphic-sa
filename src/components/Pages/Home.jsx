import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../../productosdest.json";
import ImagePortafolio from "../Productos/ImagePortafolio.jsx";

const Home = () => {
  const {items} = data;

  const images = ["img/fondo_imagen.webp", "img/nosotros_final.webp"];

  return (
    <section className='hero' id='inicio'>
      <div className='carousel-container'>
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          interval={1500}
          showStatus={false}
          showThumbs={false}
          className='fullscreen-carousel'>
          {images.map((image, index) => (
            <div key={index} className='carousel-image-container'>
              <img src={image} alt='imagen' className='carousel-image' />
            </div>
          ))}
        </Carousel>
      </div>
      <div className='contenido-hero'>
        <div className='textos-hero'>
          <div className='titulo-lineas-container'>
            <div className='linea'></div>
            <h1 className='titulo-hero'>Productos destacados</h1>
            <div className='linea'></div>
          </div>
        </div>
        <div className='galeria-port'>
          {items.map((item) => (
            <ImagePortafolio
              key={item.titulo}
              producto={item}
              baseRoute={"/productos"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
