import { NavLink } from "react-router";
import "./botao-styles.css";
import { ReactNode } from "react";

interface BotaoProps {
  nome: string;
  link: string;
  icone?: ReactNode;
}

export default function Botao({ link, nome, icone }: BotaoProps) {
  return (
    <NavLink className="botao" to={link}>
      {icone && <span className="icone">{icone}</span>}
      {nome}
    </NavLink>
  );
}
