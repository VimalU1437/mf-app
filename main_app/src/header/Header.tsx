import sharedStore from "../store/mobXstore";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const Header = () => {
  const navigateToCart = () => {};

  return (
    <header className="flex justify-between bg-gradient-to-r from-blue-600 to-black text-white py-6 shadow-lg">
      <div className="max-w-6xl mx-1 px-6 text-left">
        <h1 className="text-4xl font-bold">🛍️ Shopping App</h1>
        <p className="text-lg mt-2 text-gray-300">Built with React</p>
        <p className="text-sm text-gray-400">Source: Main app</p>
      </div>
      <Link to="/cart">
        <div className="pr-9 pt-4 cursor-pointer">
          <p className="text-5xl font-bold">🛒</p>
          <p className="text-5sm h-[20px] w-[20px] text-center text-black relative bottom-[20px] bg-white rounded-[50%] pb-[24px]">
            {sharedStore.productInCart.length}
          </p>
        </div>
      </Link>
    </header>
  );
};

export default observer(Header);
