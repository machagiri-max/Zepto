import Navbar from "../components/Navbar";
import OfferBanner from "../components/OfferBanner";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import categories from "../data/categories";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Fresh Milk",
    price: 45,
    image: "https://picsum.photos/300?21",
  },
  {
    id: 2,
    name: "Brown Bread",
    price: 40,
    image: "https://picsum.photos/300?22",
  },
  {
    id: 3,
    name: "Eggs",
    price: 90,
    image: "https://picsum.photos/300?23",
  },
  {
    id: 4,
    name: "Rice",
    price: 250,
    image: "https://picsum.photos/300?24",
  },
];

function Home() {
  return (
    <>
      <Navbar />

      <div
        style={{
          width: "95%",
          margin: "20px auto",
        }}
      >
        {/* Offer Banner */}
        <OfferBanner />

        {/* Categories */}
        <h2 style={{ marginTop: "40px" }}>🛍 Shop By Category</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "20px",
            marginBottom: "40px",
          }}
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>

        {/* Store Options */}

        <div
          style={{
            display: "flex",
            gap: "25px",
            marginBottom: "50px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: 1,
              minWidth: "350px",
              background: "#f4e9ff",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h2>🏪 Order From Z Store</h2>

            <p
              style={{
                marginTop: "15px",
                fontSize: "18px",
              }}
            >
              Choose from thousands of products delivered in minutes.
            </p>

            <Link to="/zstore">
              <button
                style={{
                  marginTop: "25px",
                  background: "#6C2BD9",
                  color: "white",
                  border: "none",
                  padding: "15px 30px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                Shop Now →
              </button>
            </Link>
          </div>

          <div
            style={{
              flex: 1,
              minWidth: "350px",
              background: "#edf9ef",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h2>⭐ Order From Your Favourite Store</h2>

            <p
              style={{
                marginTop: "15px",
                fontSize: "18px",
              }}
            >
              Shop from your favourite nearby grocery stores.
            </p>

            <Link to="/stores">
              <button
                style={{
                  marginTop: "25px",
                  background: "#1e8e3e",
                  color: "white",
                  border: "none",
                  padding: "15px 30px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                Browse Stores →
              </button>
            </Link>
          </div>
        </div>

        {/* Products */}

        <h2>🔥 Popular Products</h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "25px",
          }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;