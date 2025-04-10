import { NavLink } from "react-router";

interface CardProps {
  link: string;
  nome: string;
  icone?: string;
  _blank?: boolean;
}

export default function Card({ link, nome, icone, _blank }: CardProps) {
  return (
    <NavLink className="card" to={link} target={_blank ? "_blank" : undefined}>
      {icone && <span className="icone">{icone}</span>}
      {nome}
    </NavLink>
  );
}
