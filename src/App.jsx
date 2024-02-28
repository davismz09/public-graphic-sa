import {HashRouter, Route, Routes} from "react-router-dom";
import ProductoLista from "./components/Productos/ProductoLista.jsx";
import Nosotros from "./components/Nosotros.jsx";
import Portafolio from "./components/Productos/Portafolio";
import Home from "./Home.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Error404Page from "./Error404.jsx";

export default function App() {
  return (
    <HashRouter basename='/'>
      <Header />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/servicios' element={<Portafolio />} />
        <Route path='productos/:id' element={<ProductoLista />} />
        <Route path='*' element={<Error404Page />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
