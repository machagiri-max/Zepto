import { Link } from "react-router-dom";
import "./StoreCard.css";

function StoreCard({ store }) {
  return (
    <Link to={`/stores/${store.id}`} className="store-card">
      <img src={store.image} alt={store.name} />

      <h2>{store.name}</h2>

      <p>{store.address}</p>
    </Link>
  );
}

export default StoreCard;