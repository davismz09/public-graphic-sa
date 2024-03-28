import {useNavigate} from "react-router-dom";
import useMenu from "../hooks/use-menu.jsx";
import {CSSTransition} from "react-transition-group";
import "../../transition.css";

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
        <CSSTransition in={true} appear={true} timeout={500} classNames='fade'>
          <img
            decoding='async'
            src={producto.imagen}
            alt={producto.titulo}
            title={producto.titulo}
          />
        </CSSTransition>
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
