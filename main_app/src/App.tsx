import React, { useEffect, Suspense, useState, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./header/Header";
import sharedStore from "./store/mobXstore";
import { observer } from "mobx-react-lite";
import Spinner from "./spinner/spinner";


import "./index.css";

// const ProductCoupled = React.lazy(() => import("productList/productCoupled"));


const App: React.FC = () => {
  const [ProductCoupled, setProductCoupled] = useState<React.FC>();

  const importProductCoupled =  () => {
    const ProductCoupledModule = React.lazy( async() => {
      try{
        return await import("productList/productCoupled");
      } catch (error) {
        return import("./error/Error");
      }
    });
    try {
      setProductCoupled(ProductCoupledModule);
    } catch (error) {
      console.error("Failed to import ProductCoupled:", error);
    }
  };
  const fetchProducts = async () => {
    try{
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

  useEffect( () => {
    fetchProducts();
    importProductCoupled();
  }, []);

  return (
    <div>
      <Header/>
      <Suspense fallback={<Spinner/>}>
         {ProductCoupled ?  <ProductCoupled/> : <Spinner/> }
      </Suspense>
    </div>
  );
};

const ObserverApp = observer(App);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<ObserverApp />);
