import Botao from "../../components/botao";
import { IconArrowLeft } from "@tabler/icons-react";
import "./cantata-natal-styles.css";
import ScrollToTop from "../../components/scrollToTop";

export default function CantataNatal() {
  return (
    <div className="cantata-natal-container">
      <div className="inicio">
        <Botao nome="Voltar" link="/" icone={<IconArrowLeft />} />
      </div>
      <div className="cantata-natal-content">
        <h1>Cantata de Natal 2025</h1>
        <p>Em breve...</p>
      </div>
      <ScrollToTop />
    </div>
  );
}
