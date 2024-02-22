import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import ProductoLista from "./components/Productos/ProductoLista.jsx";

export default function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='productos/:id' element={<ProductoLista />} />
      </Routes>
    </HashRouter>
  );
}
