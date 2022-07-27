import { useState, useEffect } from "react";
import api from "./services/api";
import ProductList from "./components/ProductList/ProductList";
import Header from "./components/Header/Header";
import KartProduct from "./components/KartProduct/KartProduct";
import { Main } from "./components/ProductList/style.js";

import Global from "./styles/global";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => setProducts(response.data));
  }, []);

  return (
    <>
      <Global />
      <Header />
      <Main>
        <ProductList products={products} setProducts={setProducts} />
        <KartProduct />
      </Main>
    </>
  );
}

export default App;
