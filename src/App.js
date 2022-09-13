import "./app.css";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ItemListContainer from "./containers/ItemListContainer";
import Cart from './containers/CartContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  
  // const categorias = ["Anillado","Hojas", "Tapas", "Cartucheras", "Encuadernacion"]
  
  return (
   <BrowserRouter>

    <NavBar/>
  
   <Routes>
 
    <Route path="/" element={<ItemListContainer/>} />
    <Route path= "/category/:categoryId" element={<ItemlistContainer/>} /> 
    <Route path="/detail/:productId" element={<ItemDetailContainer/>} />
    <Route path="/cart" element={<Cart/>}/>
    <Route path="*" element= {<NotFound/>} />

   </Routes>
   </BrowserRouter>
  );
};

<itemCount/>

export default App;
