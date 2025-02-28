import React from "react";
import ReactDOM from "react-dom/client";

import ProductCoupled from "./productCoupledView/ProductCoupledView";

import "./index.css";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: product_list</div>
    <div>Framework: react-18</div>
    <ProductCoupled />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);