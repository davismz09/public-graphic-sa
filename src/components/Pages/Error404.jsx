import {useNavigate} from "react-router-dom";
import {useEffect} from "react"; // Importa useEffect desde React
import "./Error404.css";

const Error404Page = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Llama a navigate() dentro de un useEffect
    navigate("/");
  }); // Asegúrate de que este efecto solo se ejecute una vez al montar el componente

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

        {/* Elimina el onClick de aquí */}
        <a href='' className='home-link'>
          Volver a la página de inicio
        </a>
      </div>
    </div>
  );
};

export default Error404Page;
