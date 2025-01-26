import { IconArrowLeft } from "@tabler/icons-react";
import Botao from "../../components/botao";
import "./videos-styles.css";

export default function Videos() {
  return (
    <div className="videos-container">
      <div className="inicio">
        <Botao nome="Voltar" link="/" icone={<IconArrowLeft />} />
      </div>
      <div className="videos">
        <h2>Em breve teremos os vídeos. Aguarde!</h2>
      </div>
    </div>
  );
}
