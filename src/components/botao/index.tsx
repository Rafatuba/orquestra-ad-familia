import { NavLink } from "react-router";
import "./botao-styles.css";

interface BotaoProps {
  nome: string;
  link: string;
}

export default function Botao({ link, nome }: BotaoProps) {
  return (
    <NavLink className="botao" to={link}>
      {nome}
    </NavLink>
  );
}
