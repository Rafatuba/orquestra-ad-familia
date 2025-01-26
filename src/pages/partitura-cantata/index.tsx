import Botao from "../../components/botao";
import "./partitura-styles.css";
import { IconArrowLeft } from "@tabler/icons-react";

export default function PartituraCantata() {
  return (
    <div className="partitura-container">
      <div className="inicio">
        <Botao nome="Voltar" link="/cantatapascoa" icone={<IconArrowLeft />} />
      </div>

      <h2>Faça o download de sua partitura</h2>
      <div className="partitura-naipes">
        <Botao
          nome="Flautas"
          link="https://drive.google.com/drive/folders/19AgmE-F5rsdv7Uyf0PRkSQZhi1WJCc-p?usp=drive_link"
          _blank
        />
        <Botao
          nome="Clarinetes"
          link="https://drive.google.com/drive/folders/1XGMb6PJj7-UTr7DdKqktQ1wgU18n35Yp?usp=drive_link"
          _blank
        />
        <Botao
          nome="Saxofones"
          link="https://drive.google.com/drive/folders/1X--CsrA_BfyVheiuZuCw2W1moxp49LT_?usp=drive_link"
          _blank
        />
        <Botao
          nome="Cordas"
          link="https://drive.google.com/drive/folders/1eMla81TkfaZnHUURSCaEPW57qQ_6-Pvi?usp=drive_link"
          _blank
        />
        <Botao
          nome="Trompetes"
          link="https://drive.google.com/drive/folders/1nldoK6b2TL-W01uFybUN7X6PG9Mkm_U1?usp=drive_link"
          _blank
        />
        <Botao
          nome="Trombones e Tubas"
          link="https://drive.google.com/drive/folders/1r8qObtAR0PUX-O5RKQOaWNkv-A8txqz4?usp=drive_link"
          _blank
        />
        <Botao
          nome="Trompa"
          link="https://drive.google.com/drive/folders/1i_-FrwLvGOBJpVQ35t1qZODd68KOQm6t?usp=drive_link"
          _blank
        />
        <Botao
          nome="Base"
          link="https://drive.google.com/drive/folders/1W3aIE6Y_SBmRA4rXvR_Em1Y-53P8B1tg?usp=drive_link"
          _blank
        />
      </div>
    </div>
  );
}
