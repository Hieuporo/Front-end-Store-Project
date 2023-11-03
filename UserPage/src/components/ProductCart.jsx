import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import axios from "axios";
import { useAppContext } from "../context/appContext";

const ProductCart = () => {
  const [cart, setCart] = useState([]);
  const { fetchCart, setFetchCart } = useAppContext();
  const [totalPrice, setTotalPrice] = useState(0);

  const getcart = async () => {
    try {
      var user = JSON.parse(window.sessionStorage.getItem("user"));
      const { data } = await axios.get("https://localhost:7020/api/Cart", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setCart(data.cartItems);
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
    getcart();
  }, [fetchCart]);

  return (
    <div className="checkout-right">
      <h4>
        Your shopping cart contains: <span>{cart.length} Products</span>
      </h4>
      <table className="timetable_sub">
        <thead>
          <tr>
            <th>SL No.</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.length > 0 &&
            cart.map((cart, index) => (
              <CartItem key={index} cart={cart} index={index} />
            ))}
          <tr className="rem1">
            <td className="invert">Total</td>
            <td className="invert-image"></td>
            <td className="invert"></td>
            <td className="invert"></td>
            <td className="invert">{totalPrice}</td>
            <td className="invert"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductCart;
