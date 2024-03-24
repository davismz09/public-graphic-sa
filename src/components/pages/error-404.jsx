import {Link} from "react-router-dom";
import useMenu from "../hooks/use-menu.jsx";
import "./error-404.css";

const Error404Page = () => {
  const {handleTimeout} = useMenu();
  return (
    <div className='error-404-page'>
      <div className='error-container'>
        <h2 className='error-heading'>Oops!</h2>
        <p className='error-message'>
          Parece que te has perdido en la web o la página está en construcción.
        </p>
        <p className='error-description'>
          La página que estás buscando no pudo ser encontrada.
        </p>
        <h2>404</h2>

        <Link to='/' onClick={() => handleTimeout()} className='home-link'>
          Volver a la página de inicio
        </Link>
      </div>
    </div>
  );
};

export default Error404Page;
