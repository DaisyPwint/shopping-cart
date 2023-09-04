import ItemList from "./component/itemlist/ItemList"
import './App.css';
import Cart from "./component/cart/Cart";

function App() {

  return (
    <div className="container">
      <ItemList/>
      <Cart/>
    </div>
  )
}

export default App
