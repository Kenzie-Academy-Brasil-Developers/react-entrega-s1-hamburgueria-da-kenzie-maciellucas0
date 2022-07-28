import { Botao, HeaderStyle, Input } from "./style";
import { useState } from "react";

const Header = ({ products, setFilteredProducts }) => {
  const [valorInput, setValorInput] = useState("");

  function filtrarInput(e) {
    e.preventDefault();

    if (valorInput === "") {
      setFilteredProducts(products);
    } else {
      const itensFiltrados = products.filter(
        (item) => item.name === valorInput || item.category === valorInput
      );
      setFilteredProducts(itensFiltrados);
    }
  }

  return (
    <>
      <HeaderStyle>
        <div>
          <h1>Burger</h1>
          <span> Kenzie</span>
        </div>

        <Input
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(event) => setValorInput(event.target.value)}
        ></Input>
        <Botao onClick={filtrarInput} id="botaoInput">
          Pesquisar
        </Botao>
      </HeaderStyle>
    </>
  );
};

export default Header;
