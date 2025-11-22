import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SelecionarRoda() {
  const navigate = useNavigate();
  const [virado, setVirado] = useState(false);
  const [selectedWheel, setSelectedWheel] = useState(null);

  // 🔵 Rodas com caminhão normal
  const rodasNormais = [
    { id: 1, left: "13.4%", top: "64.7%" },
    { id: 2, left: "31.4%", top: "64.7%" },
    { id: 3, left: "71.2%", top: "64.7%" },
  ];

  // 🟢 Rodas com caminhão virado
  const rodasVirado = [
    { id: 4, left: "15.1%", top: "64.7%" },
    { id: 5, left: "54.8%", top: "64.7%" },
    { id: 6, left: "72.8%", top: "64.7%" },
  ];

  // Seleciona automaticamente qual conjunto usar
  const rodasAtivas = virado ? rodasVirado : rodasNormais;

  return (
    <div className="relative h-screen w-full bg-white flex flex-col">

      {/* 🔶 BARRA SUPERIOR */}
      <div className="flex items-center justify-between px-4 py-4">
        <img
          src="/assets/back.svg"
          alt="Voltar"
          className="w-6 cursor-pointer"
          onClick={() => navigate("/selecionar-veiculo")}
        />

        <div className="flex items-center gap-4">
          <img src="/assets/user.svg" className="w-10 cursor-pointer" />
          <img src="/assets/menu.svg" className="w-7 cursor-pointer" />
        </div>
      </div>

      {/* TÍTULO */}
      <h1 className="text-3xl font-semibold text-orange-500 text-center mb-2">
        Selecione uma Roda
      </h1>

      {/* Botão girar */}
      <div className="flex justify-end pr-10">
        <img
          src="/assets/rotate.svg"
          className="w-10 cursor-pointer"
          onClick={() => {
            setVirado(!virado);
            setSelectedWheel(null);
          }}
        />
      </div>

      {/* CAMINHÃO + RODAS */}
      <div
        className="relative mx-auto mt-4 w-[320px]"
        onClick={() => setSelectedWheel(null)}
      >
        <img
          src="/assets/caminhao.svg"
          className={`w-full transition-transform duration-300 ${
            virado ? "scale-x-[-1]" : ""
          }`}
        />

        {/* Bolinhas clicáveis */}
        {rodasAtivas.map((r) => (
          <div
            key={r.id}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedWheel(r.id);
            }}
            className={`absolute w-11 h-11 rounded-full cursor-pointer transition-all
                ${
                  selectedWheel === r.id
                    ? "border-0 bg-green-500/60"
                    : "border-0 bg-transparent"
                }`}
            style={{ left: r.left, top: r.top }}
          />
        ))}
      </div>

      {/* SETA PARA AVANÇAR */}
      {selectedWheel && (
        <img
          src="/assets/arrow-right.svg"
          className="w-12 absolute right-10 bottom-10 cursor-pointer"
          onClick={() => navigate(`/detalhes-roda/${selectedWheel}`)}
        />
      )}
    </div>
  );
}
