import { ThemeButton, ThemeContainerCard, ThemeDescription, ThemeImg } from "./styles";
import { toast, Toaster } from "react-hot-toast";

function CardProduct({ name, category, price, img, cart, setCart }) {
  const notifyError = () => {
    toast.error("Item já adicionado" /* , position="top-right" */);
  };
  const notifySuccess = () =>{
    toast.success("Item adicionado ao Carrinho", {
      icon:'😋',
      duration: 5000
    })
  }
  function handleBtn(id) {
    const productCart = {
      /* id, */
      price,
      img,
      name,
      category,
    };
    const checkCart = cart.filter((product) => product.img === id);
    console.log(checkCart);
    if(checkCart.length === 0) { 
      setCart([...cart, productCart])
      notifySuccess()
    }
    else{
      notifyError();
    }
  }

  return (
    <ThemeContainerCard>
      <ThemeImg>
        <img className="img" src={img} alt={`Imagem do produto ${name}`} />
      </ThemeImg>
      <ThemeDescription>
        <h3 className="nameProd">{name}</h3>
        <p className="categoryProd">{category}</p>
        <span className="priceProd">{price.toLocaleString("pt-br",{
          style:"currency",
          currency:"BRL"          
        })}</span>
        <ThemeButton onClick={() => handleBtn(img)}>Adicionar</ThemeButton>
        <Toaster/>
      </ThemeDescription>
    </ThemeContainerCard>
  );
}

export default CardProduct;
