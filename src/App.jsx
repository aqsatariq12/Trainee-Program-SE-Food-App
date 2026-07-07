import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/customer/Home";
import MenuItemDetail from "./pages/customer/MenuItemDetail";
import Offers from "./pages/customer/Offers";
import RestaurantDetail from "./pages/customer/RestaurantDetail";
import OrderTracking from "./pages/customer/OrderTracking";
import Login from "./pages/customer/Login";
import Cart from "./pages/customer/Cart";
import Signup from "./pages/customer/Signup";
import AuthLayout from "./components/common/AuthLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuItemDetail />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/restaurants" element={<RestaurantDetail />} />
          <Route path="/track-order" element={<OrderTracking />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
