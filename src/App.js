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
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    api.get("/products").then((response) => setProducts(response.data));
  }, []);

  return (
    <>
      <Global />
      <Header
        products={products}
        setProducts={setProducts}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <ContainerGeral>
        <ProductList products={products} setProducts={setProducts} />
        <KartProduct />
      </ContainerGeral>
    </>
  );
}

export default App;
