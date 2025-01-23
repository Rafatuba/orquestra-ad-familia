import "./cantata-styles.css";
import Botao from "../../components/botao";
import Streaming from "../../components/streamings";
import CantataImg from "../../assets/capa-cantata.jpg";

export default function CantataPascoa() {
  return (
    <div className="cantata-container">
      <h1>Cantata de Páscoa 2025</h1>

      <img src={CantataImg} alt="" />

      <Botao nome="Baixar Partitura" link="/" />

      <Streaming />

      <div className="inicio">
        <Botao nome="Voltar" link="/" />
      </div>
    </div>
  );
}
