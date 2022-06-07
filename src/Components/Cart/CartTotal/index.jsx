import { ThemeCartTotal } from "./style";

function CartTotal({ cart, setCart }) {
  const totalValue = cart.reduce(
    (acum, currentValue) => acum + currentValue.price,
    0
  );
  return (
    <ThemeCartTotal>
      <div className="divTotal">
        <h3>Total</h3>
        <span className="valueTotal">
          {totalValue.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </div>
      <button onClick={() => setCart([])} className="btnRemoveAll">
        Remover Todos
      </button>
    </ThemeCartTotal>
  );
}

export default CartTotal;
