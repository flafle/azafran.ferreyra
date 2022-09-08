import "./app.css";
import NavBar from "./components/NavBar";
import Ad from "./components/NavBar/Ad";
import ItemListContainer from "./containers/ItemListContainer";
import itemCount from "../src/components/ItemCount";


function App() {
  
  // const categorias = ["Modelos","Hojas", "Tapas", "Cartucheras", "Encuadernacion"]
  
  return (
    <>
    <NavBar/>
    <ItemListContainer gretting = {"Bienvenid@s a Azafrán"} />
   
   
    <Ad>
      <h1>"Bienvenid@s a Azafrán"</h1>
    </Ad>
    <p>"Mira todos nuestros productos"</p>
    </>
  );
}
<itemCount/>
export default App;
