import { PropTypes } from "prop-types";
import ProductList from "./ProductList";
const Product = ({ product, addToCart }) => {
  return (
    <div className="rounded-xl shadow-inner hover:shadow-2xl hover:shadow-gray-500 shadow-gray-300 hover:-rotate-2 hover:scale-105 transition  p-4 flex flex-col items-center  mb-8">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mb-4 scale-75"
      />
      <h2 className="text-sm font-semibold mb-2 text-center ">
        {product.title}
      </h2>
      <p className="text-black mb-3">Price: ${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-900 border-1 border-blue-300 transition hover:border-gray-600 hover:border-2 hover:bg-blue-300 hover:text-black  text-white font-bold py-2 px-4 rounded mt-auto"
      >
        Add to Cart
      </button>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Product;
