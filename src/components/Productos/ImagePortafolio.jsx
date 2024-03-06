import {useNavigate} from "react-router-dom";

const ImagePortafolio = ({producto, baseRoute}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${baseRoute}/${producto.id}`);
    // Programar el desplazamiento al inicio de la página
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0); // Un retraso de 0 ms significa que se ejecuta lo antes posible en el próximo ciclo del event loop
  };

  return (
    <div className='container-imagen-port' onClick={handleClick}>
      <div className='imagen-port'>
        <img src={producto.imagen} alt={producto.titulo} />
      </div>
      <div className='textos-galeria'>
        <h3>{producto.titulo}</h3>
        {producto.lista ? (
          <List items={producto.lista} />
        ) : (
          <p>Codigo {producto.codigo}</p>
        )}
      </div>
    </div>
  );
};

const List = ({items}) => (
  <ul className='list-galeria'>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default ImagePortafolio;
