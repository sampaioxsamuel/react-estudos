import React from 'react'
import './Header.css'
import { NavLink } from "react-router-dom"; // Usar quando for fazer uma header por exemplo, onde ira dizer qual link esta ativo
// import { Link } from "react-router-dom"; // generico ?


const Header = () => {
    return (
        <nav>
            <NavLink to="/" end >Home</NavLink> | <NavLink to="sobre" >Sobre</NavLink>
            {/* <Link to="/" end >Home</Link> | <Link to="sobre" >Sobre</Link> */}
        </nav>
    )
}

export default Header
