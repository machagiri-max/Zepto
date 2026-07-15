import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { cart } = useCart();

  const username = localStorage.getItem("username");

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">🟣 Z Store</Link>
      </div>

      {/* Navigation */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/zstore">Z Store</Link>
        <Link to="/stores">Favourite Stores</Link>
      </div>

      {/* Right Side */}
      <div className="nav-right">
        {username ? (
          <>
            <span
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              👋 {username}
            </span>

            <button
              onClick={() => {
                localStorage.removeItem("username");
                window.location.reload();
              }}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "8px 15px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}

        <Link to="/cart" className="cart">
          <FaShoppingCart />
          <span className="cart-count">{cart.length}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
