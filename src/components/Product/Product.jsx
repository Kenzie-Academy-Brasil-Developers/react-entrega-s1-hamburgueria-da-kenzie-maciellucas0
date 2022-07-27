import { ImagemListaProdutos, Botao } from "../ProductList/style";

const Product = ({ item }) => {
  return (
    <>
      <ImagemListaProdutos src={item.img} alt="Lanche" />
      <h3>{item.name}</h3>
      <p>{item.category}</p>
      <p id="preco">
        R$ {item.price.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
      </p>
      <Botao>Adicionar</Botao>
    </>
  );
};

export default Product;
