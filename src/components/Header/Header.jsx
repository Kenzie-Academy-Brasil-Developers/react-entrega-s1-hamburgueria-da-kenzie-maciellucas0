import { Botao, HeaderStyle, Input } from "./style";
const Header = () => {
  return (
    <>
      <HeaderStyle>
        <div>
          <h1>Burger</h1>
          <span> Kenzie</span>
        </div>

        <Input type="text" placeholder="Digitar Pesquisa"></Input>
        <Botao id="botaoInput">Pesquisar</Botao>
      </HeaderStyle>
    </>
  );
};

export default Header;
