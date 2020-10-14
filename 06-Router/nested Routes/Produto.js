import React from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";


const Produto = () => {
  const paramns = useParams();
  return (
    <div>
      <h1>Produto: {paramns.id}</h1>
      <nav>
        <NavLink to="">Descrição</NavLink>
        <NavLink to="avaliacao">Avalicações</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet/>
    </div>
  );
};

export default Produto;
