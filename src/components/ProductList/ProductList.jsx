import Product from "../Product/Product";
import { LiListaProdutos, UlListaProdutos } from "./style";

const ProductList = ({ products, setProducts }) => {
  return (
    <>
      <UlListaProdutos>
        {products.map((item, index) => (
          <LiListaProdutos key={index}>
            <Product item={item}></Product>
          </LiListaProdutos>
        ))}
      </UlListaProdutos>
    </>
  );
};

export default ProductList;
