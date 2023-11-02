import PropTypes from "prop-types";
import { format } from "date-fns";

const OrderItem = ({ order, index }) => {
  return (
    <tr className="rem1">
      <td className="invert">{index}</td>
      <td className="invert-image">
        {order.products.map((product, i) => (
          <div key={i}>
            {product.product.name} x {product.quantity}
          </div>
        ))}
      </td>
      <td className="invert">
        {format(new Date(order.createdAt), "d-M-yyyy")}
      </td>
      <td className="invert">{order.totalPrice}</td>
      <td className="invert">{order.shipping}</td>
      <td className="invert">{order.status}</td>
    </tr>
  );
};

OrderItem.propTypes = {
  order: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default OrderItem;
