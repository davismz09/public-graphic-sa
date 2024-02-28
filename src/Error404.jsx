const Error404Page = () => {
  return (
    <div className='error-404-page'>
      <div className='error-container'>
        <h1 className='error-heading'>Oops!</h1>
        <p className='error-message'>Parece que te has perdido en la web.</p>
        <p className='error-description'>
          La página que estás buscando no pudo ser encontrada.
        </p>
        <h1>404</h1>

        <a href='/' className='home-link'>
          Volver a la página de inicio
        </a>
      </div>
    </div>
  );
};

export default Error404Page;
