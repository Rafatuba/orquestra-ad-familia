import { NavLink } from "react-router";
import "./botao-styles.css";
import { ReactNode } from "react";

interface BotaoProps {
  nome: string;
  link: string;
  icone?: ReactNode;
  _blank?: boolean;
}

export default function Botao({ link, nome, icone, _blank }: BotaoProps) {
  return (
    <NavLink className="botao" to={link} target={_blank ? "_blank" : undefined}>
      {icone && <span className="icone">{icone}</span>}
      {nome}
    </NavLink>
  );
}
