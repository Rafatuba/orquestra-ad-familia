import { IconArrowLeft } from "@tabler/icons-react";
import Botao from "../../components/botao";
import "./videos-styles.css";
import ScrollToTop from "../../components/scrollToTop";

export default function Videos() {
  return (
    <div className="videos-container">
      <div className="inicio">
        <Botao nome="Voltar" link="/" icone={<IconArrowLeft />} />
      </div>
      <div className="videos">
        <div>
          <h3>Cantata de Natal 2024</h3>
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/fGU-kziaPMs?si=qhqZ0ciudZjGkmSw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
