import {nosotros} from "../textos.json";
import useIntersection from "./Hooks/useInterseccion.jsx";
import Signo from "../components/Signo.jsx";

export default function Nosotros() {
  const [titulosRef, isIntersecting] = useIntersection({threshold: 0.7});
  const [imgMRef, isIntersecting2] = useIntersection({threshold: 0.5});
  const [imgVRef, isIntersecting3] = useIntersection({threshold: 0.5});
  const [imgPRef, isIntersecting4] = useIntersection({threshold: 0.5});

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
            <div className='contenedor-mision'>
              <div>
                <h3>{Misión.titulo}</h3>
                <p>{Misión.contenido}</p>
              </div>
              <img
                ref={imgMRef}
                src={imagenes.mision.src}
                alt={imagenes.mision.alt}
                className={`imgM--animation ${handleVisibility(
                  isIntersecting2,
                )}`}
              />
            </div>

            <div className='contenedor-vision'>
              <div>
                <h3>{Visión.titulo}</h3>
                <p>{Visión.contenido}</p>
              </div>
              <img
                ref={imgVRef}
                className={`imgV--animation ${handleVisibility(
                  isIntersecting3,
                )}`}
                src={imagenes.vision.src}
                alt={imagenes.vision.alt}
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
                  isIntersecting4,
                )}`}
                src={imagenes.propuesta.src}
                alt={imagenes.propuesta.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
