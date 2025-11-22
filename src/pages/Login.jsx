import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/home"); // Navega para a próxima página
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white">
      {/* Ícone SVG */}
      <img
        src="/assets/user.svg"
        alt="Ícone Usuário"
        className="w-32 mb-6"
      />

      {/* Campo Usuário */}
      <input
        type="text"
        placeholder="Usuário"
        className="border border-orange-400 rounded-lg px-4 py-2 w-72 mb-4"
      />

      {/* Campo Senha */}
      <input
        type="password"
        placeholder="Senha"
        className="border border-orange-400 rounded-lg px-4 py-2 w-72 mb-6"
      />

      {/* Botão Entrar */}
      <button
       className="bg-orange-400 text-white font-bold px-8 py-3 rounded-lg cursor-pointer"
       onClick={handleLogin}
      >
        Entrar
      </button>

      </div>
  );
}
