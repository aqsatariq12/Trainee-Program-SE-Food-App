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
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";
import DashboardHome from "./pages/admin/DashboardHome";
import ManageMenu from "./pages/admin/ManageMenu";
import ManageOrders from "./pages/admin/ManageOrders";
import Analytics from "./pages/admin/Analytics";
import AdminLayout from "./components/layout/AdminLayout";
import Toast from "./components/common/Toast";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/restaurants" element={<RestaurantDetail />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<Navbar />}>
            <Route path="/track-order" element={<OrderTracking />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<AdminRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<DashboardHome />} />
            <Route path="/manage-menu" element={<ManageMenu />} />
            <Route path="/manage-order" element={<ManageOrders />} />
            <Route path="/analytics" element={<Analytics />} />
          </Route>
        </Route>
      </Routes>
      <Toast/>
    </>
  );
}

export default App;
