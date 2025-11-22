import { useNavigate } from "react-router-dom";

export default function SelecionarVeiculo() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white flex flex-col">

      {/* Barra superior */}
      <div className="flex items-center justify-between px-4 py-4">
        <img
          src="/assets/back.svg"
          alt="Voltar"
          className="w-6 cursor-pointer"
          onClick={() => navigate("/")}  // Volta para login
        />

        <div className="flex items-center gap-4">
          <img src="/assets/user.svg" alt="Usuário" className="w-10" />
          <img src="/assets/menu.svg" alt="Menu" className="w-7" />
        </div>
      </div>

      {/* Título */}
      <h1 className="text-3xl font-semibold text-orange-500 px-6 mb-4">
        Selecione um Veículo
      </h1>

      {/* Faixa laranja */}
      <div className="bg-orange-400 w-full h-[12px]"></div>

      {/* Lista de veículos */}
      <div className="px-6 mt-4 flex flex-col gap-4">

        {/* ITEM 1 */}
        <div className="flex items-center justify-between border-b border-gray-300 pb-3">
          <div className="flex items-center gap-3">
            <img src="/assets/placa.svg" alt="Placa" className="w-20" />
            <img src="/assets/caminhao.svg" alt="Caminhão" className="w-20" />
          </div>

          <img
            src="/assets/arrow-right.svg"
            alt="Ir"
            className="w-8 cursor-pointer"
            onClick={() => navigate("/selecionar-roda")}
          />
        </div>

        {/* ITEM 2 */}
        <div className="flex items-center justify-between border-b border-gray-300 pb-3">
          <div className="flex items-center gap-3">
            <img src="/assets/placa.svg" alt="Placa" className="w-20" />
            <img src="/assets/caminhao.svg" alt="Caminhão" className="w-20" />
          </div>

          <img
            src="/assets/arrow-right.svg"
            alt="Ir"
            className="w-8 cursor-pointer"
            onClick={() => navigate("/selecionar-roda")}
          />
        </div>

      </div>

      {/* Botão de adicionar */}
      <div className="flex justify-center mt-6">
        <img
          src="/assets/add.svg"
          alt="Adicionar"
          className="w-12 cursor-pointer"
          onClick={() => navigate("/registrar-veiculo")}
        />
      </div>

    </div>
  );
}
