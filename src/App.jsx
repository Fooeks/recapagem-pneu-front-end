import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SelecionarVeiculo from "./pages/SelecionarVeiculo";
import RegistrarVeiculo from "./pages/RegistrarVeiculo";
import SelecionarRoda from "./pages/SelecionarRoda";
import DetalhesRoda from "./pages/DetalhesRoda"; 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/selecionar-veiculo" element={<SelecionarVeiculo />} />
        <Route path="/registrar-veiculo" element={<RegistrarVeiculo />} />
        <Route path="/selecionar-roda" element={<SelecionarRoda />} />
        <Route path="/detalhes-roda/:id" element={<DetalhesRoda />} />
      </Routes>
    </BrowserRouter>
  );
}
