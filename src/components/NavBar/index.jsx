import React from "react";
import "./styles.css";

const NavBar = () => {
    return (
  
<header className="header">
    
<div className="logoAzafran">
  <p>Logoazafran</p>
</div>

<nav className="navbarContainer">
  <ul>
    <li><a href="/#">Inicio</a></li>
    <li><a href="/#">Productos</a></li>
    <li><a href="/#">Contacto</a></li>
  </ul>
</nav>
<div className="carritoContainer">
  <a href=" "><i class="fa-solid fa-cart-shopping"></i></a>
</div>
</header>
  )
};

export default NavBar;
