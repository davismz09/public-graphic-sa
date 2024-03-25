import data from "../../productos-destacados.json";
import CustomSwiper from "../custom-swiper.jsx";
import ImagePortafolio from "../productos/imagen-portafolio.jsx";

const Home = () => {
  const {items} = data;
  const images = [
    "img/fondo-imagen.webp",
    "img/fondo-imagen.webp",
    "img/fondo-imagen.webp",
  ];

  return (
    <section className='hero' id='inicio'>
      <CustomSwiper images={images} effect='creative' />
      <div className='contenido-hero'>
        <div className='textos-hero'>
          <div className='titulo-lineas-container'>
            <div className='linea'></div>
            <h2 className='titulo-hero'>Productos destacados</h2>
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
