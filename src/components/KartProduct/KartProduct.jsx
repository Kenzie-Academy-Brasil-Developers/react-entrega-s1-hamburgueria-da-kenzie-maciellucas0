import {
  BotaoRemoverTudo,
  DivLinha,
  DivTotalPrice,
  Linha,
  PCarrinhoVazio,
  SectionCarrinho,
} from "./style";

const KartProduct = ({ setCarrinho, carrinho, key }) => {
  const price = carrinho.map((item) => item.price);

  function removerTudo() {
    setCarrinho([]);
  }

  function removerSelecionado(item) {
    setCarrinho(carrinho.filter((produto) => produto.id !== item.id));
  }

  return (
    <>
      {carrinho.length === 0 ? (
        <SectionCarrinho>
          <div>
            <h3>Carrinho de compras</h3>
          </div>

          <PCarrinhoVazio>Sua sacola está vazia</PCarrinhoVazio>
          <span>Adicione itens</span>
        </SectionCarrinho>
      ) : (
        <>
          <div id="containerMaior">
            <SectionCarrinho>
              <div>
                <h3>Carrinho de compras</h3>
              </div>
              <ul>
                {carrinho.map((item, index = key) => {
                  return (
                    <li key={index}>
                      <img src={item.img} alt="Comidas" />
                      <div id="divCarrinho">
                        <h2>{item.name}</h2>
                        <button onClick={() => removerSelecionado(item)}>
                          Remover
                        </button>
                      </div>
                      <p id="pcarrinhoCheio">{item.category}</p>
                    </li>
                  );
                })}
              </ul>
            </SectionCarrinho>
            <DivLinha className="div-linha">
              <Linha
                id="linha"
                src={require("./retangulo.png")}
                alt="retangulo"
              />
            </DivLinha>
            <DivTotalPrice>
              <h2>Total</h2>
              <p>
                {`R$ `}
                {price
                  .reduce((acumulador, valorAtual) => valorAtual + acumulador)
                  .toFixed(2)}
              </p>
            </DivTotalPrice>
            <BotaoRemoverTudo onClick={removerTudo}>
              Remover Tudo
            </BotaoRemoverTudo>
          </div>
        </>
      )}
    </>
  );
};

export default KartProduct;
