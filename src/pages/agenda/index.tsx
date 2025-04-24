import { IconArrowLeft } from "@tabler/icons-react";
import Botao from "../../components/botao";
import ScrollToTop from "../../components/scrollToTop";
import "./styles-agenda.css";

export default function Agenda() {
  return (
    <div className="agenda-container">
      <div className="inicio">
        <Botao nome="Voltar" link="/" icone={<IconArrowLeft />} />
      </div>
      <h1>Agenda 2025</h1>
      <div className="lista-agenda">
        <ul>
          <li>
            <p>27 a 30/março</p>
            <p className="evento marcado">
              Conferência Compartilhe e Multiplique*
            </p>
          </li>
          <li>
            <p>20/abril</p>
            <p className="evento marcado">Especial de Páscoa - Musical</p>
          </li>
          <li>
            <p>19 e 20/julho</p>
            <p className="evento">Conferência de Avivamento*</p>
          </li>
          <li>
            <p>16/agosto</p>
            <p className="evento">Encontro de Corais</p>
          </li>
          <li>
            <p>29 a 31/agosto</p>
            <p className="evento">Conferência Fortes*</p>
          </li>
          <li>
            <p>25 e 26/outubro</p>
            <p className="evento">Conferência de Mulheres*</p>
          </li>
          <li>
            <p>22/novembro</p>
            <p className="evento">Recital da Escola de Música**</p>
          </li>
          <li>
            <p>27 a 30/novembro</p>
            <p className="evento">Conferência Unificada*</p>
          </li>
          <li>
            <p>06/dezembro</p>
            <p className="evento">Confraternização Coral e Orquestra</p>
          </li>
          <li>
            <p>12/dezembro</p>
            <p className="evento">Evangelismo e Orquestra</p>
          </li>
          <li>
            <p>14/dezembro</p>
            <p className="evento">Culto de Gratidão - Especial</p>
          </li>
          <li>
            <p>21/dezembro</p>
            <p className="evento">Cantata de Natal</p>
          </li>
          <li>
            <p>31/dezembro</p>
            <p className="evento">Culto da Virada - Ceia</p>
          </li>
        </ul>
      </div>
      <div>
        <p>* Verificar quais dias a orquestra participará</p>
        <p>** Verificar se a orquestra participará</p>
      </div>
      <div className="observacoes">
        <p>
          Obs: A Orquestra AD Familia participa todos os domingos do culto das
          18 horas.
        </p>
        <p>
          Os ensaios oficiais permanecem aos sábados, às 15 horas, salvo
          altterações feitas pela direção com antecedência.
        </p>
      </div>
      <ScrollToTop />
    </div>
  );
}
