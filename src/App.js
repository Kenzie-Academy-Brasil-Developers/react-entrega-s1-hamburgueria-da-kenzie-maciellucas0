import { useState, useEffect } from "react";
import api from "./services/api";
import ProductList from "./components/ProductList/ProductList";
import Header from "./components/Header/Header";
import KartProduct from "./components/KartProduct/KartProduct";
import { ContainerGeral } from "./components/ProductList/style.js";

import Global from "./styles/global";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => setProducts(response.data));
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <>
      <Global />
      <Header setFilteredProducts={setFilteredProducts} products={products} />
      <ContainerGeral>
        <ProductList
          filteredProducts={filteredProducts}
          setCarrinho={setCarrinho}
        />
        <KartProduct carrinho={carrinho} setCarrinho={setCarrinho} />
      </ContainerGeral>
    </>
  );
}

export default App;
