import { Botao, HeaderStyle, Input } from "./style";
import { useState } from "react";

const Header = (
  products,
  setProducts,
  filteredProducts,
  setFilteredProducts
) => {
  const [valorInput, setValorInput] = useState("");

  function filtrarInput(e) {
    e.preventDefault();

    const itensFiltrados = products.products.filter(
      (item) => item.name === valorInput || item.category === valorInput
    );
    itensFiltrados.map((item, index) => setProducts(item));
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
