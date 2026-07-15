import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import ZStore from "./pages/ZStore";
import Stores from "./pages/Stores";
import StoreProducts from "./pages/StoreProducts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/zstore" element={<ZStore />} />
      <Route path="/stores" element={<Stores />} />
      <Route path="/stores/:id" element={<StoreProducts />} />
    </Routes>
  );
}

export default App;