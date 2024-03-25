import {useParams} from "react-router-dom";
import data from "../../productos.json";

export default function Producto() {
  const numero = "#"; //Modificar: ubicacion de variable
  const {items} = data;
  const {id: paramsId, producto: paramsProducto} = useParams();
  const currentItem = items.find((item) => item.id === parseInt(paramsId));
  const currentImage = currentItem.carrusel
    ? Object.values(currentItem.carrusel).find(
        (imagen) => imagen.codigo === paramsProducto,
      )
    : currentItem.imagen;

  return (
    <section className='producto_individual'>
      <h1>Tienda</h1>
      <div className='contenedor_producto'>
        <div className='producto'>
          <h2>{currentImage.titulo}</h2>
          <h3>{currentImage.codigo}</h3>
          <div className='galeria-port'>
            <img src={currentImage.url} alt={currentImage.codigo} />
          </div>
        </div>
        <div className='contacto_whatsapp'>
          <h3>{`Comprar "${currentImage.titulo}"`}</h3>
          <p>Te interesa este producto?</p>
          <p>Envíanos un mensaje por WhatsApp para más detalles</p>
          <button>
            <a
              href={`https://api.whatsapp.com/send/?phone=${numero}&text=Hola%2C%20buenos%20días%20me%20podría%20dar%20mas%20información%20sobre%20el%20producto%20${currentImage.titulo}%20con%20código%20${currentImage.codigo},%20por%20favor.`}
              target='_blank'
              rel='noopener noreferrer'>
              Whatsapp
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
