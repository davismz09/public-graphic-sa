import {nosotros} from "../textos.json";
import useIntersection from "./Hooks/useInterseccion.jsx";
import Signo from "../components/Signo.jsx";

export default function Nosotros() {
  const [titulosRef, isIntersecting] = useIntersection({threshold: 0.7});
  const [imgMVRef, isIntersecting2] = useIntersection({threshold: 0.5});
  const [imgPRef, isIntersecting3] = useIntersection({threshold: 0.5});

  const handleVisibility = (entry) => entry && "visible";

  const {Misión, Visión, Propuesta, imagenes} = nosotros;
  return (
    <section className='sobre-nosotros' id='nosotros'>
      <div className='contenedor'>
        <div
          className={`titulos titulos--animation ${handleVisibility(
            isIntersecting,
          )}`}>
          <h2 className='titulo' ref={titulosRef}>
            <span>Quienes</span> <br /> Somos
          </h2>
          <Signo />
        </div>
        <div className='contenedor-sobre-nosotros'>
          <div className='contenido-textos'>
            <div className='contenedor-mision-vision'>
              <div>
                <h3>{Misión.titulo}</h3>
                <p>{Misión.contenido}</p>
                <h3>{Visión.titulo}</h3>
                <p>{Visión.contenido}</p>
              </div>
              <img
                ref={imgMVRef}
                src={imagenes.misionVision.src}
                alt={imagenes.misionVision.alt}
                className={`imagen-mision-vision imgMV--animation ${handleVisibility(
                  isIntersecting2,
                )}`}
              />
            </div>
            <div className='contenedor-propuesta'>
              <div>
                <h3>{Propuesta.titulo}</h3>
                <p>{Propuesta.contenido}</p>
              </div>
              <img
                ref={imgPRef}
                className={`imgP--animation ${handleVisibility(
                  isIntersecting3,
                )}`}
                src={imagenes.Propuesta.src}
                alt={imagenes.Propuesta.alt}
              />
            </div>
            <img src={imagenes.img1.src} alt={imagenes.img1.alt} />
          </div>
        </div>
      </div>
    </section>
  );
}
