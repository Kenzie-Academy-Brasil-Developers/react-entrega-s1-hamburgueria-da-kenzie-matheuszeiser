import "./style.css";
import { toast, Toaster } from "react-hot-toast"

function CardCartProduct({ cart, setCart, product }) {
  const notifyRemove = () => {
      toast.success("Item Removido do Carrinho", {
          position:"bottom-right",
          icon:'😪'
        })
  }
  
    const handleRemove = (id) => {
    setCart(cart.filter((product) => product.img != id));
    notifyRemove();
  };

  return (
    <div key={product.img} className="cardTotal">
      <figure className="figure">
        <img className="imgCart" src={product.img} />
      </figure>
      <div className="divSup">
        <h4 className="nameProduct">{product.name}</h4>
        <span className="type">{product.category}</span>
      </div>
      <button
        className="btnRemove"
        onClick={() => 
          handleRemove(product.img)
        }
      >
        Remover
      </button>
      <Toaster/>
    </div>
  );
}

export default CardCartProduct;
