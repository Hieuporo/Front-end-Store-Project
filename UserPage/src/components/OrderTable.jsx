import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import axios from "axios";
import OrderItem from "./OrderItem";

const OrderTable = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    try {
      var user = JSON.parse(window.sessionStorage.getItem("user"));
      const { data } = await axios.get("https://localhost:7020/api/Order", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setOrders(data);
      const total = data.cartItems.reduce(
        (totalPrice, cartItem) =>
          totalPrice + cartItem.quantity * cartItem.productItem.price,
        0
      );

      setTotalPrice(total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="checkout-right" style={{ marginBottom: "60px" }}>
      <table className="timetable_sub">
        <thead>
          <tr>
            <th>SL No.</th>
            <th>Product</th>
            <th>Price</th>
            <th>Shipping</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order, i) => (
              <OrderItem key={i} index={i + 1} order={order} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
