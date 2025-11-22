import { useNavigate } from "react-router-dom";

export default function RegistrarVeiculo() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col px-6 pt-6">
      {/* Topbar */}
      <div className="flex items-center justify-between w-full mb-10">
        <img
          src="/assets/back.svg"
          alt="Voltar"
          className="w-6 cursor-pointer"
          onClick={() => navigate("/selecionar-veiculo")}
        />

        <div className="flex items-center gap-4">
          <img src="/assets/user.svg" alt="Usuário" className="w-8 h-8 cursor-pointer" />
          <img src="/assets/menu.svg" alt="Menu" className="w-6 h-6 cursor-pointer" />
        </div>
      </div>

      {/* Título */}
      <h1 className="text-center text-3xl font-semibold text-orange-500">
        Registrar Veículo
      </h1>

      <div className="w-full h-[2px] bg-orange-300 my-4"></div>

      {/* Campo de texto */}
      <p className="text-orange-500 mb-2">
        Informe a placa de indentificação do veículo
      </p>

      <input
        type="text"
        placeholder=""
        className="w-full border border-orange-300 p-3 rounded-md outline-none"
      />

      {/* OU */}
      <p className="text-orange-500 text-center my-6 font-semibold">OU</p>

      {/* QR Code */}
      <p className="text-center text-orange-500 mb-4">
        Utilize o QR Code
      </p>

      <div className="flex justify-center">
        <img src="/assets/qr.svg" alt="QR Code" className="w-40 h-40" />
      </div>
    </div>
  );
}
