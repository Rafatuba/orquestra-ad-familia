import "./streaming-styles.css";
import YoutubeLogo from "../../assets/youtube.png";
import SpotifyLogo from "../../assets/spotify.png";
import DeezerLogo from "../../assets/deezer.png";

export default function Streaming() {
  return (
    <div className="streaming-container">
      <h1>Ouvir:</h1>
      <div className="streaming-links">
        <a
          href="https://youtube.com/playlist?list=OLAK5uy_naELlCKJgAicEhnHXG2_YQ-AkfpBDojWU&si=WnX2XdW7ifBriSrM"
          target="_blank"
        >
          <img src={YoutubeLogo} alt="Youtube" />
        </a>
        <a
          href="https://open.spotify.com/intl-pt/album/4LNdQLdmTmyyVxZsRpfM9I?si=74m4FpFCR1CAknBeBQlS0A"
          target="_blank"
        >
          <img src={SpotifyLogo} alt="Spotify" />
        </a>
        <a href="https://deezer.page.link/kTxeW7EKfG6Kr8T99" target="_blank">
          <img src={DeezerLogo} alt="Deezer" />
        </a>
      </div>
    </div>
  );
}
