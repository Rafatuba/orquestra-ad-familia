import "./streaming-styles.css";
import YoutubeLogo from "../../assets/youtube.png";
import SpotifyLogo from "../../assets/spotify.png";
import DeezerLogo from "../../assets/deezer.png";
import Drive from "../../assets/drive.png";

export default function Streaming() {
  return (
    <div className="streaming-container">
      <h1>Ouvir:</h1>
      <div className="streaming-links">
        <a
          href="https://youtube.com/playlist?list=OLAK5uy_naELlCKJgAicEhnHXG2_YQ-AkfpBDojWU&si=WnX2XdW7ifBriSrM"
          target="_blank"
          data-aos="fade-right"
        >
          <img src={YoutubeLogo} alt="Youtube" />
        </a>
        <a
          href="https://open.spotify.com/intl-pt/album/4LNdQLdmTmyyVxZsRpfM9I?si=74m4FpFCR1CAknBeBQlS0A"
          target="_blank"
          data-aos="fade-left"
        >
          <img src={SpotifyLogo} alt="Spotify" />
        </a>
        <a
          href="https://deezer.page.link/kTxeW7EKfG6Kr8T99"
          target="_blank"
          data-aos="fade-right"
        >
          <img src={DeezerLogo} alt="Deezer" />
        </a>
        <a
          href="https://drive.google.com/drive/folders/1k3XIBilNsAx9vJ-4mbqt_3HMy5ETmVPd?usp=sharing"
          target="_blank"
          data-aos="fade-left"
        >
          <img src={Drive} alt="Drive" />
        </a>
      </div>
    </div>
  );
}
