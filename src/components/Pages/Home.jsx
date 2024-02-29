import data from "../../productosdest.json";
import CustomSwiper from "../CustomSwiper.jsx";
import ImagePortafolio from "../Productos/ImagePortafolio.jsx";

const Home = () => {
  const {items} = data;
  const images = [
    "img/fondo_imagen.webp",
    "img/fondo_imagen.webp",
    "img/fondo_imagen.webp",
  ];

  return (
    <section className='hero' id='inicio'>
      <div className='carousel-container'>
        <CustomSwiper images={images} effect='creative' />
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
