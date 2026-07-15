import Navbar from "../components/Navbar";

function Payment() {
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "50px",
          textAlign: "center",
        }}
      >
        <h1>💳 Payment Gateway</h1>

        <br />

        <h2>Demo Payment Page</h2>

        <br />

        <button
          style={{
            background: "green",
            color: "white",
            border: "none",
            padding: "15px 35px",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
          }}
          onClick={() => alert("Order Placed Successfully 🎉")}
        >
          Pay Now
        </button>
      </div>
    </>
  );
}

export default Payment;