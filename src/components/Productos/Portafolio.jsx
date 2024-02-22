import ImagePortafolio from "./ImagePortafolio.jsx";
import data from "../../productos.json";

export default function Portafolio() {
  const {items} = data;

  return (
    <section className='portafolio' id='servicios'>
      <div className='contenedor'>
        <div className='seccion-servicios'>
          <h2 className='titulo-servicios'>NUESTROS SERVICIOS</h2>
        </div>
        <div className='galeria-port'>
          {items.map((item) => (
            <ImagePortafolio key={item.id} producto={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
