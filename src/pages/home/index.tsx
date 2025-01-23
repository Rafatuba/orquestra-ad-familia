import { NavLink } from "react-router";
import "./home-styles.css";

export default function Home() {
  return (
    <div className="home-container">
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
