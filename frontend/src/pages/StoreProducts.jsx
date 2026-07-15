import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import stores from "../data/stores";
import products from "../data/products";

function StoreProducts() {
  const { id } = useParams();

  const store = stores.find((s) => s.id === Number(id));

  const storeProducts = products.filter(
    (product) => product.storeId === Number(id)
  );

  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1>{store?.name}</h1>

        <p>{store?.address}</p>

        <br />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {storeProducts.map((product) => (
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

export default StoreProducts;