import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1>🛒 My Cart</h1>

        <br />

        {cart.length === 0 ? (
          <h2>Your cart is empty.</h2>
        ) : (
          <>
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "white",
                  marginBottom: "15px",
                  padding: "15px",
                  borderRadius: "10px",
                  boxShadow: "0 0 8px lightgray",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    width="80"
                    style={{ borderRadius: "10px" }}
                  />

                  <div>
                    <h3>{item.name}</h3>
                    <p>₹ {item.price}</p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(index)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}

            <hr />

            <h2>Total : ₹ {total}</h2>

            <br />

            <button
              onClick={() => navigate("/payment")}
              style={{
                background: "#6C2BD9",
                color: "white",
                border: "none",
                padding: "15px 30px",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              Proceed To Payment
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Cart;