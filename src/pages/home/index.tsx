import Botao from "../../components/botao";
import "./home-styles.css";

export default function Home() {
  return (
    <div>
      <nav className="nav-container">
        <Botao nome={"Cantata Páscoa 2025"} link={"/cantatapascoa"} />
        <Botao nome={"A Orquestra"} link={"/"} />
      </nav>
    </div>
  );
}
