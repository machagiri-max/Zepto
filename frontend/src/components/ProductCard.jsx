import "./ProductCard.css";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } = useCart();

  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <h2>₹ {product.price}</h2>

      <button
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;