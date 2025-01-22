import "./header-styles.css";
import Icon from "../../assets/violin-icon.png";

export default function Header() {
  return (
    <div className="header-container">
      <div className="logo">
        <img src={Icon} alt="" />
        <h1>
          Orquestra <br></br>AD Família
        </h1>
      </div>
    </div>
  );
}
