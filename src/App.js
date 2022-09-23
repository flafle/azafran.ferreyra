import { BrowserRouter, Routes, Route } from "react-router-dom";
import  "./app.css";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Cart from "./containers/cartContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer";
import CartContext from "./context/CartContext";


//categoria p/azafran: 
// const categorias = ["Tapas", "Hojas", "Anillado"]
function App() {
  return (
    <CartContext>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </CartContext>
  );
};

export default App;