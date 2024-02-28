import ImagePortafolio from "./ImagePortafolio.jsx";
import data from "../../productos.json";

const Portafolio = ({title}) => {
  const {items} = data;
  return (
    <section className='portafolio' id='servicios'>
      <div className='contenedor'>
        <div className='seccion-servicios'>
          <h2 className='titulo-servicios'>{title}</h2>
        </div>
        <div className='galeria-port'>
          {items.map((item) => (
            <ImagePortafolio
              key={item.id}
              producto={item}
              baseRoute={`/productos`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portafolio;
