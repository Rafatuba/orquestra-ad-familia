import Botao from "../../components/botao";
import "./partitura-styles.css";

export default function PartituraCantata() {
  return (
    <div className="partitura-container">
      <h2>Faça o download de sua partitura</h2>
      <div className="partitura-naipes">
        <Botao nome="Flautas" link="/" />
        <Botao nome="Clarinetes" link="/" />
        <Botao nome="Saxofones" link="/" />
        <Botao nome="Cordas" link="/" />
        <Botao nome="Trompetes" link="/" />
        <Botao nome="Trombones" link="/" />
        <Botao nome="Tubas" link="/" />
        <Botao nome="Base" link="/" />
      </div>
      <div className="inicio">
        <Botao nome="Voltar" link="/cantatapascoa" />
      </div>
    </div>
  );
}
