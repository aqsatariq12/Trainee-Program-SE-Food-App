import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../api/api";
import { fetchSingleOrder, cancelOrder } from "../../redux/slices/orderSlice";
import { toast } from "react-toastify";

export default function OrderDetails() {
  const { id } = useParams();
  const [showCancelModal, setShowCancelModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentOrder, loading } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchSingleOrder(id));
  }, [dispatch, id]);

  const handleCancelOrder = async () => {
    try {
      const result = await dispatch(cancelOrder(id)).unwrap();

      toast.success(result.message || "Order cancelled successfully.");

      setShowCancelModal(false);

      dispatch(fetchSingleOrder(id));
    } catch (error) {
      toast.error(error.message || "Unable to cancel order.");
    }
  };

  if (loading) {
    return <h2 className="text-center text-2xl mt-20">Loading Order...</h2>;
  }

  if (!currentOrder) {
    return <h2 className="text-center text-2xl mt-20">Order Not Found</h2>;
  }
  const canCancel = ["pending", "accepted"].includes(
    currentOrder.current_status,
  );

  return (
    <section className="min-h-screen bg-[#F7F8FA] py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate("/orders")}
          className="mb-6 text-[#FC8A06] font-semibold"
        >
          ← Back to Orders
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-[#FC8A06] to-[#FC8A06] rounded-3xl shadow-xl p-8 mb-10 text-white mb-8">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold">
                Order #{currentOrder.order_id}
              </h1>

              <p className="mt-2 text-lg opacity-90">
                {currentOrder.restaurant.name}
              </p>

              <p className="text-5xl font-extrabold mt-6">
                $ {Number(currentOrder.total_price).toFixed(2)}
              </p>
            </div>

            <div className="flex flex-col items-start md:items-end gap-3">
              <span
                className={`px-5 py-2 rounded-full capitalize font-semibold ${
                  currentOrder.current_status === "pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : currentOrder.current_status === "cancelled"
                      ? "bg-red-100 text-red-700"
                      : currentOrder.current_status === "delivered"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                }`}
              >
                {currentOrder.current_status}
              </span>

              {canCancel && (
                <button
                  onClick={() => setShowCancelModal(true)}
                  className="bg-red-500
hover:bg-red-600
rounded-xl
px-8
py-3
font-semibold
shadow-md
hover:shadow-lg
transition"
                >
                  Cancel Order
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
              <p className="text-gray-500">Restaurant</p>

              <p className="font-semibold">{currentOrder.restaurant.name}</p>
            </div>

            <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
              <p className="text-gray-500">Delivery Address</p>

              <p className="font-semibold">{currentOrder.delivery_address}</p>
            </div>

            <div className="bg-[#FAFAFA] rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
              <p className="text-gray-500">Total Price</p>

              <p className="text-2xl font-bold text-[#FC8A06]">
                $ {currentOrder.total_price}
              </p>
            </div>

            <div>
              <p className="text-gray-500">Created At</p>

              <p className="font-semibold">
                {new Date(currentOrder.created_at).toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Ordered Items */}
        <div
          className="bg-white
rounded-3xl
border
border-gray-100
shadow-sm
hover:shadow-xl
transition
p-6"
        >
          <h2 className="text-2xl font-bold mb-6">Ordered Items</h2>

          <div className="space-y-5">
            {currentOrder.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row gap-5 border border-gray-300 rounded-xl p-4"
              >
                <img
                  src={
                    item.image
                      ? `${BASE_URL}${item.image}`
                      : "https://placehold.co/120x120?text=Food"
                  }
                  alt={item.name}
                  className="w-32 h-32 rounded-2xl object-cover"
                />

                <div className="flex-1">
                  <h3 className="text-2xl font-bold">{item.name}</h3>

                  <p className="mt-2">
                    <span className="bg-[#FFF5E8] text-[#FC8A06] px-4 py-2 rounded-full font-semibold">
                      Qty : {item.quantity}
                    </span>
                  </p>

                  <p>
                    Unit Price :
                    <span className="font-semibold">
                      $ {item.price_at_order}
                    </span>
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-gray-500">Subtotal</p>

                  <p className="text-xl font-bold text-[#FC8A06]">
                    $ {item.subtotal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Status History */}
        <div className="bg-white rounded-2xl shadow p-6 mt-4">
          <h2 className="text-2xl font-bold mb-6">Status History</h2>

          <div className="space-y-6">
            {currentOrder.status_history.map((history) => (
              <div
                key={history.id}
                className="border-l-4 border-[#FC8A06] pl-5"
              >
                <h3 className="font-bold capitalize">{history.status}</h3>

                <p className="text-gray-500">
                  Changed By : {history.changed_by.username}
                </p>

                <p className="text-sm text-gray-400">
                  {new Date(history.timestamp).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showCancelModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <h2 className="text-2xl font-bold text-[#03081F]">Cancel Order</h2>

            <p className="mt-3 text-gray-600 leading-7">
              Are you sure you want to cancel this order? This action cannot be
              undone.
            </p>

            <div className="mt-8 flex justify-end gap-3">
              <button
                onClick={() => setShowCancelModal(false)}
                className="rounded-xl border border-gray-300 px-6 py-3 font-medium hover:bg-gray-100 transition"
              >
                No
              </button>

              <button
                onClick={handleCancelOrder}
                className="rounded-xl bg-red-600 px-6 py-3 font-medium text-white hover:bg-red-700 transition"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
