import "../index.css";
import SharedStore from "mainApp/mobXStore";
import { observer } from "mobx-react-lite";




const CartPage = () => {

  const { productInCart, deleteProductInCart } = SharedStore;


  const removeFromCart = (sku: string ) => {
    deleteProductInCart(sku)
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {productInCart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-4">
          {productInCart.map((product) => (
            <div key={product.id} className="flex items-center border-b pb-4 mb-4">
              <img src={product.thumbnail} alt={product.title} className="w-20 h-20 object-cover rounded-lg mr-4" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-gray-600">Price: ${product.price}</p>
                <p className="text-sm text-gray-500">Stock: {product.stock}</p>
              </div>
              <button
                onClick={() => removeFromCart(product.sku)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default observer(CartPage);
// export default CartPage;
