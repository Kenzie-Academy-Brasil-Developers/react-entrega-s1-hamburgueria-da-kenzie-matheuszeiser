import { useState, useEffect } from "react";
import api from "../../data/api";
import CardProduct from "./CardProduct";
import { ThemeContainerProducts } from "./styles";

function ProductList({ setCart, cart, src, setSrc }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((resp) => setProducts(resp.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ThemeContainerProducts>
      {products
        ?.filter(
          (product) =>(
            product.name.toLowerCase().includes(src.toLowerCase()) ||
            product.category.toLowerCase().includes(src.toLowerCase())
          )
        )
        .map((product) => (
          <CardProduct
            name={product.name}
            category={product.category}
            price={product.price}
            img={product.img}
            key={product.id}
            setCart={setCart}
            cart={cart}
          />
        ))}
    </ThemeContainerProducts>
  );
}

export default ProductList;
