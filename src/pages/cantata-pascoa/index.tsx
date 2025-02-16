import "./cantata-styles.css";
import Botao from "../../components/botao";
import Streaming from "../../components/streamings";
import CantataImg from "../../assets/capa-cantata.jpg";
import { IconDownload, IconArrowLeft } from "@tabler/icons-react";
import ScrollToTop from "../../components/scrollToTop";

export default function CantataPascoa() {
  return (
    <div className="cantata-container">
      <div className="inicio">
        <Botao nome="Voltar" link="/" icone={<IconArrowLeft />} />
      </div>

      <h2>Cantata de Páscoa 2025</h2>

      <img
        src={CantataImg}
        alt=""
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      />

      <Botao
        nome="Baixar Partitura"
        link="/download-partitura-cantata"
        icone={<IconDownload />}
      />

      <Streaming />
      <ScrollToTop />
    </div>
  );
}
