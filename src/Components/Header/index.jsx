import { ThemeButton, ThemeHeader } from "./styles";

function Header({ src, setSrc }) {
  return (
    <ThemeHeader>
      <div className="title">
        <p className="titleBurguer">Burguer</p>
        <p className="titleKenzie">Kenzie</p>
      </div>
      <form className="form">
        <input
          className="inputSrc"
          value={src}
          placeholder="Digitar Pesquisa"
          onChange={(event) => setSrc(event.target.value)}
        />
      </form>
    </ThemeHeader>
  );
}
export default Header;
