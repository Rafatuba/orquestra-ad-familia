import Botao from "../../components/botao";
import "./orquestra-styles.css";
import { IconArrowLeft } from "@tabler/icons-react";

export default function Orquestra() {
  return (
    <div>
      <div className="inicio">
        <Botao nome="Voltar" link="/" icone={<IconArrowLeft />} />
      </div>
      <h2>Componentes</h2>
      <div className="orquestra-container">
        <div className="naipes">
          <h3>Flautas</h3>
          <ul>
            <li>Evelin</li>
            <li>Jéssica</li>
            <li>Cristine</li>
            <li>Nataly</li>
          </ul>
        </div>

        <div className="naipes">
          <h3>Clarinetes</h3>
          <ul>
            <li>Itamar Emerson</li>
            <li>Josiane Lopes</li>
            <li>Dyenyffer</li>
            <li>Ivonéia</li>
            <li>João Batista</li>
            <li>Larissa</li>
          </ul>
        </div>

        <div className="naipes">
          <h3>Saxofones</h3>
          <ul>
            <li>Carlos Robert</li>
            <li>Linhares</li>
            <li>Ana Luiza</li>
            <li>Cintia</li>
            <li>Maykon</li>
            <li>Joelmir</li>
            <li>Giovani</li>
            <li>Analice</li>
            <li>Jesiel Lopes</li>
          </ul>
        </div>

        <div className="naipes">
          <h3>Violinos</h3>
          <ul>
            <li>Clara</li>
          </ul>
        </div>

        <div className="naipes">
          <h3>Violoncelo</h3>
          <ul>
            <li>Oséias</li>
          </ul>
        </div>

        <div className="naipes">
          <h3>Trompetes</h3>
          <ul>
            <li>Ágabo Áquila</li>
            <li>Valdir Vieira</li>
            <li>Luís Duarte</li>
            <li>Siqueira</li>
            <li>Ademir</li>
            <li>Gean</li>
            <li>Júlio</li>
            <li>Fernando</li>
            <li>João</li>
            <li>Neyse</li>
          </ul>
        </div>

        <div className="naipes">
          <h3>Trombones</h3>
          <ul>
            <li>Orlando</li>
            <li>Rafael Silva</li>
            <li>Josias</li>
            <li>Daniel</li>
            <li>Mário</li>
            <li>Bruna</li>
            <li>Emerson</li>
          </ul>
        </div>

        <div className="naipes">
          <h3>Tubas</h3>
          <ul>
            <li>Daniel Maciel</li>
            <li>Wender</li>
          </ul>
        </div>

        <div className="naipes">
          <h3>Base</h3>
          <ul>
            <li>João Duarte</li>
            <li>Marcos</li>
            <li>Juliano</li>
            <li>Ismael</li>
            <li>Jr. Medina</li>
          </ul>
        </div>

        <div className="naipes">
          <h3>Regentes</h3>
          <ul>
            <li>Gerson Duarte</li>
            <li>Rafael Silva</li>
            <li>Valdir Vieira</li>
            <li>Siqueira</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
