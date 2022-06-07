import { useState } from "react";
import CardCartProduct from "./CardCartProduct";
import CartTotal from "./CartTotal";
import { ThemeAllCart, ThemeEmptyCart, ThemeTopCart } from "./style";

function Cart({ cart, setCart }) {
  console.log(cart);
  return (
    <ThemeAllCart>
      <ThemeTopCart>Carrinho de Compras</ThemeTopCart>
      <div className="cards">
        {cart.length > 0 ? (
          cart.map((product) => (
            <CardCartProduct cart={cart} setCart={setCart} product={product} />
          ))
        ) : (
          <ThemeEmptyCart>
            <h2>Sua sacola está vazia</h2>
            <span className="spanEmptyCart">Adicione itens</span>
          </ThemeEmptyCart>
        )}
      </div>
      <div>{cart.length > 0 ? <CartTotal cart={cart} setCart={setCart} /> : <></>}</div>
    </ThemeAllCart>
  );
}

export default Cart;
