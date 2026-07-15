import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Milk",
    price: 45,
    image: "https://picsum.photos/300?31",
  },
  {
    id: 2,
    name: "Bread",
    price: 40,
    image: "https://picsum.photos/300?32",
  },
  {
    id: 3,
    name: "Eggs",
    price: 95,
    image: "https://picsum.photos/300?33",
  },
  {
    id: 4,
    name: "Rice",
    price: 250,
    image: "https://picsum.photos/300?34",
  },
  {
    id: 5,
    name: "Sugar",
    price: 55,
    image: "https://picsum.photos/300?35",
  },
  {
    id: 6,
    name: "Tea",
    price: 180,
    image: "https://picsum.photos/300?36",
  },
];

function ZStore() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1>🏪 Z Store</h1>

        <p>Fast delivery from our own warehouse.</p>

        <br />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ZStore;