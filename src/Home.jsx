import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {motion} from "framer-motion";
import data from "./productosdest.json";
import ImagePortafolio from "./components/Productos/ImagePortafolio.jsx";

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
              <motion.img
                src={image}
                alt={`hero${index + 1}`}
                className='carousel-image'
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 1, scale: 1, transition: {duration: 0.5}}}
              />
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
            <ImagePortafolio key={item.titulo} producto={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
