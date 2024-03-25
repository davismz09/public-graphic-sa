import data from "../../textos.json";

export default function Contacto() {
  const {contacto} = data;
  const {contenido, titulo} = contacto;
  return (
    <section className='contacto' id='contactos'>
      <div className='contenedor-contacto'>
        <a
          href='https://linktr.ee/PublicGraphic'
          target='_blank'
          title='Enlace redes sociales | PublicGraphic'>
          {titulo}
        </a>
        <h2 className='titulo-final'>{contenido} </h2>
      </div>
    </section>
  );
}
