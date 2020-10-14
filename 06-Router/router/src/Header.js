import React from "react";
import "./Header.css";
import { NavLink, useLocation } from "react-router-dom"; // Usar quando for fazer uma header por exemplo, onde ira dizer qual link esta ativo
// import { Link } from "react-router-dom"; // generico ?
/* <Link to="/" end >Home</Link> | <Link to="sobre" >Sobre</Link> */

const Header = () => {
  const location = useLocation();

  // vai acontecer toda vez que mudar a rota
  React.useEffect(() => {
    console.log("mudou a roda");
  }, [location]);

  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>{" "}
      | <NavLink to="sobre">Sobre</NavLink> |{" "}
      <NavLink to="login">Login</NavLink>
    </nav>
  );
};

export default Header;
