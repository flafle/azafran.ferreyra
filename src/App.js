import { BrowserRouter, Routes, Route } from "react-router-dom";
import  "./app.css";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer";


//categoria p/azafran: 
// const categorias = ["Tapas", "Hojas", "Anillado"]
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/detail/:productId" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;