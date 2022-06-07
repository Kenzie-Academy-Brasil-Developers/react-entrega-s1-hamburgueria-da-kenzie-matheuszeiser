import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import { GlobalStyle } from "./Styles/globals";

function App() {
  const [cart, setCart] = useState([]);
  const [src, setSrc] = useState("");

  return (
    <main className="main">
      <GlobalStyle />
      <>
        <Header src={src} setSrc={setSrc} />
        <div className="body">
          <ProductList
            cart={cart}
            setCart={setCart}
            src={src}
            setSrc={setSrc}
          />
          <Cart setCart={setCart} cart={cart} />
        </div>
      </>
    </main>
  );
}

export default App;
