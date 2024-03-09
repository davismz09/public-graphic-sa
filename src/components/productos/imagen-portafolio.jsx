import {useNavigate} from "react-router-dom";

const ImagePortafolio = ({producto, baseRoute}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${baseRoute}/${producto.id}`);
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
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
