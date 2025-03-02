import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import CartPage from "./cart/CartPage";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: cart</div>
    <div>Framework: react-18</div>
    <CartPage/>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);