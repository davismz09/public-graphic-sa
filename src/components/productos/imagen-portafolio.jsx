import {useNavigate} from "react-router-dom";
import useMenu from "../hooks/use-menu.jsx";

const ImagePortafolio = ({producto, baseRoute}) => {
  const navigate = useNavigate();
  const {handleTimeout} = useMenu();

  const handleClick = () => {
    navigate(`${baseRoute}/${producto.id}`);
    handleTimeout();
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
