import {HashRouter, Route, Routes} from "react-router-dom";
import ProductoLista from "./components/Productos/ProductoLista.jsx";
import Nosotros from "./components/Pages/Nosotros.jsx";
import Portafolio from "./components/Pages/Portafolio";
import Home from "./components/Pages/Home.jsx";
import Header from "./components/Pages/Header.jsx";
import Error404Page from "./components/Pages/Error404.jsx";
import Contacto from "./components/Pages/Contacto.jsx";

export default function App() {
  return (
    <HashRouter basename='/'>
      <Header />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/productos' element={<Portafolio />} />
        <Route path='/productos/:id' element={<ProductoLista />} />
        <Route path='contactos' element={<Contacto />} />
        <Route path='*' element={<Error404Page />} />
      </Routes>
    </HashRouter>
  );
}
