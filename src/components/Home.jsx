import Nosotros from "./Nosotros.jsx";
import Portafolio from "./Productos/Portafolio.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
export default function Landing() {
  return (
    <>
      <Header />
      <main>
        <Nosotros />
        <Portafolio />
      </main>
      <Footer />
    </>
  );
}
