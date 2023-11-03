import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";

const CartItem = ({ cart, index }) => {
  const [quantity, setQuantity] = useState(cart.quantity);
  const { fetchCart, setFetchCart } = useAppContext();

  const reduceQuantity = async () => {
    if (quantity > 1) {
      try {
        var user = JSON.parse(window.sessionStorage.getItem("user"));
        await axios.put(
          `https://localhost:7020/api/Cart/minus`,
          {
            id: cart.id,
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        setQuantity((pre) => pre - 1);
        setFetchCart(!fetchCart);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const plusQuantity = async () => {
    try {
      var user = JSON.parse(window.sessionStorage.getItem("user"));

      await axios.put(
        `https://localhost:7020/api/Cart/plus`,
        {
          id: cart.id,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setQuantity((pre) => pre + 1);
      setFetchCart(!fetchCart);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCartItem = async (id) => {
    var user = JSON.parse(window.sessionStorage.getItem("user"));
    try {
      await axios.delete(`https://localhost:7020/api/Cart/${id}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setFetchCart(!fetchCart);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr className="rem1">
      <td className="invert">{index + 1}</td>
      <td className="invert-image">
        <a href="single.html">
          <img
            src={cart.productItem.imageUrl}
            className="img-responsive img-product-cart"
          />
        </a>
      </td>
      <td className="invert">
        <div className="quantity">
          <div className="quantity-select">
            <div className="entry value-minus" onClick={reduceQuantity}>
              &nbsp;
            </div>
            <div className="entry value">
              <span>{quantity}</span>
            </div>
            <div className="entry value-plus active" onClick={plusQuantity}>
              &nbsp;
            </div>
          </div>
        </div>
      </td>
      <td className="invert">{cart.productItem.name}</td>
      <td className="invert">{cart.productItem.price}</td>
      <td className="invert">
        <div className="rem">
          <div className="close1" onClick={() => deleteCartItem(cart.id)}>
            {" "}
          </div>
        </div>
      </td>
    </tr>
  );
};

CartItem.propTypes = {
  cart: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default CartItem;
