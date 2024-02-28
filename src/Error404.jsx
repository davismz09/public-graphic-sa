import {useNavigate} from "react-router-dom";
import "./Error404.css";

const Error404Page = () => {
  const navigate = useNavigate();
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

        <a href='' onClick={navigate("/")} className='home-link'>
          Volver a la página de inicio
        </a>
      </div>
    </div>
  );
};

export default Error404Page;
