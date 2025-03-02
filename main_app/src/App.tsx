import React, { useEffect, Suspense, useState, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./header/Header";
import sharedStore from "./store/mobXstore";
import { observer } from "mobx-react-lite";
import Spinner from "./spinner/spinner";
import CartPage from "cart/cartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";

// const ProductCoupled = React.lazy(() => import("productList/productCoupled"));

const App: React.FC = () => {
  const [ProductCoupledView, setProductCoupledView] = useState<React.FC>();

  const importProductCoupled = () => {
    const ProductCoupledModule = React.lazy(async () => {
      try {
        return await import("productList/ProductCoupledView");
      } catch (error) {
        return import("./error/Error");
      }
    });
    try {
      setProductCoupledView(ProductCoupledModule);
    } catch (error) {
      console.error("Failed to import ProductCoupled:", error);
    }
  };
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log(data);
      sharedStore.setProductList(data.products);
      sharedStore.setProductViewValue(data.products[0]);
      sharedStore.setIsProductViewLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
    importProductCoupled();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Spinner />}>
              {ProductCoupledView ? <ProductCoupledView /> : <Spinner />}
            </Suspense>
          }
        />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

const ObserverApp = observer(App);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
