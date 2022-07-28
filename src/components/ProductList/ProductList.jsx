import Product from "../Product/Product";
import { LiListaProdutos, UlListaProdutos, Botao } from "./style";

const ProductList = ({ filteredProducts, setCarrinho }) => {
  function identificaProduto(item) {
    setCarrinho((oldCarrinho) => [...oldCarrinho, item]);
  }

  return (
    <>
      <UlListaProdutos>
        {filteredProducts.map((item, index) => (
          <LiListaProdutos key={index}>
            <Product item={item}></Product>
            <Botao onClick={() => identificaProduto(item)}>Adicionar</Botao>
          </LiListaProdutos>
        ))}
      </UlListaProdutos>
    </>
  );
};

export default ProductList;
