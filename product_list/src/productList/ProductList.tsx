import "../index.css";
import { Product } from "mainApp/types";
import sharedStore from "mainApp/mobXStore";
import Spinner from "mainApp/spinner";
import { observer } from "mobx-react-lite";

const ProductList: React.FC = observer(() => {
  const onClickOneProduct = (product: Product) => {
    sharedStore.setProductViewValue(product);
  };
  const { isProductViewLoading, productList } = sharedStore;

  return (
    <div className="w-1/2">
      <header className="bg-gradient-to-r from-green-600 to-black p-4">
        <h4 className="text-xl font-bold">ProductList</h4>
        <p className="text-sm">Build with React</p>
        <p className="text-sm">Source: Product list</p>
      </header>
      {isProductViewLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap justify-center bg-gray-200">
          {productList.map((product: Product) => (
            <div
              key={product.id}
              onClick={() => onClickOneProduct(product)}
              className="flex flex-col transition-transform transform scale-100 hover:scale-105 pointer-events-auto cursor-pointer justify-between p-4 h-100 w-70 max-w-sm m-2 bg-white text-black-500 p-4 rounded-xl shadow-2xl"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-xl font-bold mt-2">{product.title}</h2>
              <p className="text-sm text-gray-400">{product.category}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-lg font-semibold">${product.price}</p>
                <span className="text-yellow-400">⭐ {product.rating}</span>
              </div>
              <p
                className={`mt-1 text-sm ${
                  product.stock > 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </p>
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  alert("Not implemented");
                }}
                className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default ProductList;
