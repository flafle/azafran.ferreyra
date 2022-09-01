import React from "react";
import CartWidget from "../../containers/ItemListContainer/CartWidget";
import "./styles.css";


const NavBar = (propiedades) =>  {
  
  console.log (propiedades);
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
<CartWidget/>
</header>

  )
};

export default NavBar;
