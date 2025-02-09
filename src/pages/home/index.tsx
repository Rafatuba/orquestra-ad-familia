import { NavLink } from "react-router";
import "./home-styles.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="cards">
        <NavLink to={"/cantatapascoa"}>
          <div className="card cantata-card" data-aos="flip-left">
            Cantata de Páscoa
          </div>
        </NavLink>
        <NavLink to={"/orquestra"}>
          <div
            className="card orquestra-card"
            data-aos="flip-up"
            data-aos-delay="400"
          >
            A Orquestra
          </div>
        </NavLink>
        <NavLink to={"/videos"}>
          <div
            className="card videos-card"
            data-aos="flip-down"
            data-aos-delay="600"
          >
            Vídeos
          </div>
        </NavLink>
      </div>
    </div>
  );
}
