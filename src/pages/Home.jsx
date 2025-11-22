import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/selecionar-veiculo");
    }, 1500); // 1.5 segundos de delay

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <h1 className="text-3xl font-bold text-orange-500">
        Bem Vindo!
      </h1>
    </div>
  );
}
