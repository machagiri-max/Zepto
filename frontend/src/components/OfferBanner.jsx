import "./OfferBanner.css";
import { Link } from "react-router-dom";

function OfferBanner() {
  return (
    <div className="offer-banner">

      <div className="offer-left">

        <span className="offer-tag">
          LIMITED TIME OFFER
        </span>

        <h1>
          GET <span>20% OFF</span>
        </h1>

        <h2>ON YOUR FIRST ORDER</h2>

        <div className="coupon">
          Use Code : <strong>ZSTORE20</strong>
        </div>

        <Link to="/zstore">
          <button className="shop-btn">
            SHOP NOW →
          </button>
        </Link>

      </div>

      <div className="offer-right">

        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=700"
          alt="Groceries"
        />

      </div>

    </div>
  );
}

export default OfferBanner;