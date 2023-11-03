import PropTypes from "prop-types";

const OrderItem = ({ order, index }) => {
  return (
    <tr className="rem1">
      <td className="invert">{index}</td>
      <td className="invert-image">
        {order.orderItems.map((orderItem, i) => (
          <div key={i}>
            {orderItem.productItem.name} x {orderItem.quantity}
          </div>
        ))}
      </td>

      <td className="invert">
        {order.orderTotal + order.shippingMethod.price}
      </td>
      <td className="invert">{order.shippingMethod.name}</td>
      <td className="invert">{order.status}</td>
    </tr>
  );
};

OrderItem.propTypes = {
  order: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default OrderItem;
