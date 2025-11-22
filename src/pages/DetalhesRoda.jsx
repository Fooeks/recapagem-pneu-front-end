import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function DetalhesRoda() {
  const navigate = useNavigate();
  const { id } = useParams(); // ID da roda selecionada

  // Caminhão deve ficar espelhado para as rodas 4, 5 e 6
  const isVirado = ["4", "5", "6"].includes(id);

  // -------------------------------------------
  // POSIÇÕES MANUAIS DO DESTAQUE DE CADA RODA
  // -------------------------------------------
  const posicoesRodas = {
    1: { left: "14%", top: "60%", size: 22 },
    2: { left: "31%", top: "60%", size: 22 },
    3: { left: "71%", top: "60%", size: 22 },
    4: { left: "15%", top: "60%", size: 22 },
    5: { left: "55%", top: "60%", size: 22 },
    6: { left: "73%", top: "60%", size: 22 },
  };

  // Obtém posição da roda atual
  const pos =
    posicoesRodas[id] || { left: "-9999px", top: "-9999px", size: 44 };

  // -------------------------------
  // ESTADOS TEMPORÁRIOS (inputs)
  // -------------------------------
  const [inputPressao, setInputPressao] = useState("");
  const [inputSulco, setInputSulco] = useState("");

  // -------------------------------
  // ESTADOS CONFIRMADOS (exibidos)
  // -------------------------------
  const [pressaoConfirmada, setPressaoConfirmada] = useState(0);
  const [sulcoConfirmado, setSulcoConfirmado] = useState(0);

  // Estado da roda
  const [status, setStatus] = useState("rodizio");

  const handleToggle = (value) => setStatus(value);

  // Lista de opções
  const opcoes = [
    { id: "rodizio", label: "Rodízio" },
    { id: "conserto", label: "Conserto" },
    { id: "recapagem", label: "Recapagem" },
    { id: "estoque", label: "Estoque" },
    { id: "vendido", label: "Vendido" },
    { id: "sucateado", label: "Sucateado" },
  ];

  // -------------------------------
  // CONFIRMAR VALORES + RESET INPUTS
  // -------------------------------
  const handleConfirmarValores = () => {
    if (inputPressao !== "") setPressaoConfirmada(inputPressao);
    if (inputSulco !== "") setSulcoConfirmado(inputSulco);

    setInputPressao("");
    setInputSulco("");
  };

  return (
    <div className="relative h-screen w-full bg-white flex flex-col">

      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 py-4">
        <img
          src="/assets/back.svg"
          alt="Voltar"
          className="w-6 cursor-pointer"
          onClick={() => navigate("/selecionar-roda")}
        />

        <div className="flex items-center gap-4">
          <img src="/assets/user.svg" className="w-10 cursor-pointer" />
          <img src="/assets/menu.svg" className="w-7 cursor-pointer" />
        </div>
      </div>

      {/* IMAGEM + INFO FIXA */}
      <div className="flex flex-col items-center justify-center mt-2 mb-4">

        {/* Caminhão */}
        <div className="relative">
          <img
            src="/assets/caminhao.svg"
            className={`w-40 mb-3 transition-transform duration-300 ${
              isVirado ? "scale-x-[-1]" : ""
            }`}
            alt="Caminhão"
          />

          {/* DESTAQUE DA RODA */}
          <div
            className="absolute rounded-full bg-green-500/60 transition-all"
            style={{
              left: pos.left,
              top: pos.top,
              width: pos.size + "px",
              height: pos.size + "px",
            }}
          />
        </div>

        {/* Caixa com dados */}
        <div className="bg-orange-10 w-[60%] border-2 border-orange-500 rounded-2xl py-4 px-6 shadow">

          <div className="flex justify-between text-lg mb-2">
            <span className="font-semibold text-orange-500">
              Roda selecionada:
            </span>
            <span className="font-medium">#{id}</span>
          </div>

          <div className="flex justify-between text-lg mb-2">
            <span className="font-semibold text-orange-500">N° de Fogo:</span>
            <span className="font-medium">12345</span>
          </div>

          <div className="flex justify-between text-lg mb-2">
            <span className="font-semibold text-orange-500">Pressão:</span>
            <span className="font-medium">{pressaoConfirmada} PSI</span>
          </div>

          <div className="flex justify-between text-lg">
            <span className="font-semibold text-orange-500">Sulco:</span>
            <span className="font-medium">{sulcoConfirmado} mm</span>
          </div>

        </div>
      </div>

      {/* CAMPOS INPUT */}
      <div className="flex flex-col gap-6 px-10">

        {/* Pressão */}
        <div className="flex flex-col">
          <label className="text-lg font-medium">Pressão (PSI)</label>
          <input
            type="number"
            value={inputPressao}
            onChange={(e) => setInputPressao(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2 text-lg outline-none"
          />
        </div>

        {/* Sulco */}
        <div className="flex flex-col">
          <label className="text-lg font-medium">Sulco (mm)</label>
          <input
            type="number"
            value={inputSulco}
            onChange={(e) => setInputSulco(e.target.value)}
            className="border border-gray-300 rounded-xl px-4 py-2 text-lg outline-none"
          />
        </div>

        {/* TOGGLES */}
        <div className="flex flex-col gap-2 mt-2">
          <label className="text-lg font-medium">Estado da Roda</label>

          <div className="grid grid-cols-2 gap-4 mt-1">
            {opcoes.map((item) => (
              <div
                key={item.id}
                onClick={() => handleToggle(item.id)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img
                  src={
                    status === item.id
                      ? "/assets/toggle-on.svg"
                      : "/assets/toggle-off.svg"
                  }
                  className="w-12"
                />
                <span className="text-lg">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* BOTÃO SALVAR */}
      <img
        src="/assets/arrow-right.svg"
        onClick={handleConfirmarValores}
        className="w-12 absolute right-10 bottom-10 cursor-pointer"
      />
    </div>
  );
}
