import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import axios from "axios";
import OrderItem from "./OrderItem";

const OrderTable = () => {
  const [orders, setOrders] = useState([]);
  const { fetchOrder } = useAppContext();

  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/order/getAllOrders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, [fetchOrder]);

  return (
    <div className="checkout-right" style={{ marginBottom: "60px" }}>
      <table className="timetable_sub">
        <thead>
          <tr>
            <th>SL No.</th>
            <th>Product</th>
            <th>Created At</th>
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
