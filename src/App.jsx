import {HashRouter, Route, Routes} from "react-router-dom";
import ProductoLista from "./components/Productos/ProductoLista.jsx";
import Nosotros from "./components/Nosotros.jsx";
import Portafolio from "./components/Productos/Portafolio";
import Home from "./Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Contacto from "./Contacto.jsx";

export default function App() {
  return (
    <HashRouter basename='/'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/servicios' element={<Portafolio />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='productos/:id' element={<ProductoLista />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
