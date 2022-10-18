import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import  "./scss/app.scss";
import CartContext from "./context/CartContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <CartContext>
    <App />
  </CartContext>

);
