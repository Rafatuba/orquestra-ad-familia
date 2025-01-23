import { NavLink } from "react-router";
import Botao from "../../components/botao";
import "./home-styles.css";

export default function Home() {
  return (
    <div className="home-container">
      {/* <nav className="nav-container">
        <Botao nome={"Cantata Páscoa 2025"} link={"/cantatapascoa"} />
        <Botao nome={"A Orquestra"} link={"/"} />
      </nav> */}
      <div className="cards">
        <NavLink to={"/cantatapascoa"}>
          <div className="card cantata-card">Cantata de Páscoa</div>
        </NavLink>
        <NavLink to={"/orquestra"}>
          <div className="card orquestra-card">A Orquestra</div>
        </NavLink>
      </div>
    </div>
  );
}
