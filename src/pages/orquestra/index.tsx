import Botao from "../../components/botao";
import "./orquestra-styles.css";
import { IconArrowLeft } from "@tabler/icons-react";

export default function Orquestra() {
  return (
    <div className="orquestra-principal">
      <div className="inicio">
        <Botao nome="Voltar" link="/" icone={<IconArrowLeft />} />
      </div>
      <h2>Componentes</h2>
      <div className="orquestra-container">
        <div className="naipes">
          <h3>Flautas</h3>
          <ul>
            <li>Evelin Meireles</li>
            <li>Jéssica Renata</li>
            <li>Claudia Christine</li>
            <li>Nataly Porfírio</li>
          </ul>
        </div>

        <div className="naipes">
          <h3>Clarinetes</h3>
          <ul>
            <li>Gerson Duarte</li>
            <li>Itamar Emerson</li>
            <li>Dyenyffer Stéffany</li>
            <li>Ivonéia Maciel</li>
            <li>Larissa Santana</li>
            <li>João Batista</li>
            <li>Larissa Silva</li>
          </ul>
        </div>

        <div className="naipes">
          <h3>Saxofones</h3>
          <ul>
            <li>Carlos Robert</li>
            <li>Joel Linhares</li>
            <li>Ana Luiza</li>
            <li>Maykm Bruno</li>
            <li>Cinthya Barbosa</li>
            <li>Giovani Amancio</li>
            <li>Analice de Souza</li>
          </ul>
        </div>

        <div className="naipes">
          <h3>Violinos</h3>
          <ul>
            <li>Eliel Vila Nova</li>
            <li>Clara Costa</li>
          </ul>
        </div>

        <div className="naipes">
          <h3>Violoncelo</h3>
          <ul>
            <li>Oséias Guedes</li>
            <li>Harry Stevan</li>
          </ul>
        </div>

        <div className="naipes">
          <h3>Trompetes</h3>
          <ul>
            <li>Ágabo Áquila</li>
            <li>Valdir Vieira</li>
            <li>Luís Duarte</li>
            <li>Cícero Siqueira</li>
            <li>Júlio Bevacqua</li>
            <li>Jean Fernandes</li>
            <li>Fernando Carlos</li>
            <li>João Vitor</li>
            <li>Neisy Teixeira </li>
          </ul>
        </div>

        <div className="naipes">
          <h3>Trombones</h3>
          <ul>
            <li>Orlando</li>
            <li>Rafael Silva</li>
            <li>Josias</li>
            <li>Daniel Siqueira</li>
            <li>Mário Filho</li>
            <li>Bruna Meireles</li>
            <li>Emerson Souza</li>
          </ul>
        </div>

        <div className="naipes">
          <h3>Bombardinos</h3>
          <ul>
            <li>Gildemar Dantas</li>
          </ul>
        </div>

        <div className="naipes">
          <h3>Tubas</h3>
          <ul>
            <li>Daniel Maciel</li>
            <li>Wender de Lima</li>
          </ul>
        </div>

        <div className="naipes">
          <h3>Base</h3>
          <ul>
            <li>João Duarte</li>
            <li>Marcos Aurélio</li>
            <li>Juliano Soares</li>
            <li>Ismael Rondina</li>
            <li>Júnior Medina</li>
          </ul>
        </div>

        <div className="naipes">
          <h3>Regentes</h3>
          <ul>
            <li>Gerson Duarte</li>
            <li>Rafael Silva</li>
            <li>Valdir Vieira</li>
            <li>Cícero Siqueira</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
