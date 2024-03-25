import {HashRouter, Route, Routes} from "react-router-dom";
import ProductoLista from "./components/productos/producto-lista.jsx";
import Nosotros from "./components/pages/nosotros.jsx";
import Portafolio from "./components/pages/portafolio.jsx";
import Home from "./components/pages/home.jsx";
import Header from "./components/pages/header.jsx";
import Error404Page from "./components/pages/error-404.jsx";
import Contacto from "./components/pages/contacto.jsx";
import Producto from "./components/productos/producto.jsx";

export default function App() {
  return (
    <HashRouter basename='/'>
      <Header />
      <main>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/productos' element={<Portafolio />} />
          <Route path='/productos/:id' element={<ProductoLista />} />
          <Route
            path='/productos/comprar/:id/:producto'
            element={<Producto />}
          />
          <Route path='contactos' element={<Contacto />} />
          <Route path='*' element={<Error404Page />} />
        </Routes>
      </main>
    </HashRouter>
  );
}
