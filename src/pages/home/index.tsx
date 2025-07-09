import { NavLink } from "react-router";
import "./home-styles.css";
import ScrollToTop from "../../components/scrollToTop";

export default function Home() {
  return (
    <div className="home-container">
      <div className="cards">
        <NavLink to={"/orquestra"}>
          <div
            className="card orquestra-card"
            data-aos="flip-up"
            data-aos-delay="400"
          >
            A Orquestra
          </div>
        </NavLink>
        <NavLink to={"/agenda"}>
          <div className="card agenda-card" data-aos="flip-up">
            Agenda
          </div>
        </NavLink>
        <NavLink to={"/videos"}>
          <div
            className="card videos-card"
            data-aos="flip-down"
            data-aos-delay="400"
          >
            Vídeos
          </div>
        </NavLink>
        <NavLink to={"/cantatanatal"}>
          <div className="card cantata-card" data-aos="flip-left">
            Cantata de Natal 2025
          </div>
        </NavLink>
        <NavLink to={"/metodosestudos"}>
          <div className="card estudos-card" data-aos="flip-left">
            Métodos e Estudos
          </div>
        </NavLink>
      </div>
      <ScrollToTop />
    </div>
  );
}
