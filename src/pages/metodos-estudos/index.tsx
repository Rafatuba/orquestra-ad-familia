import Botao from "../../components/botao";
import { IconArrowLeft } from "@tabler/icons-react";
import "./cantata-natal-styles.css";
import ScrollToTop from "../../components/scrollToTop";

export default function MetodosEstudos() {
  return (
    <div className="cantata-natal-container">
      <div className="inicio">
        <Botao nome="Voltar" link="/" icone={<IconArrowLeft />} />
      </div>
      <div className="cantata-natal-content">
        <h1>Métodos e Estudos</h1>
        <p>
          Em breve, uma nova seção de métodos e estudos vai ao ar!
          <br />
          <br /> A Orquestra AD Familia está preparando um cantinho especial pra
          quem quer evoluir no instrumento, tirar dúvidas e fortalecer a base
          musical. <br />
          <br />
          Seja você iniciante ou veterano, sempre tem algo novo pra aprender — e
          a gente acredita que estudo com propósito transforma o som, o coração
          e o louvor. <br />
          <br />
          Aqui, cada nota é uma forma de adoração, e queremos te ajudar a
          oferecer o seu melhor a Deus através da música.
          <br /> <br />
          Fica de olho, porque vem coisa boa por aí. Bora estudar juntos e fazer
          música com excelência e paixão no Reino! <br />
          <br />
          Aguarde!
        </p>
      </div>
      <ScrollToTop />
    </div>
  );
}
