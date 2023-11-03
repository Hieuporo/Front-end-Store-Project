import axios from "axios";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import Swal from "sweetalert2";

const OrderDetail = () => {
  const [address, setAddress] = useState("");
  const [shipingMethod, setShipingMethod] = useState();
  const [shippingMethods, setShippingMethods] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const getShippingMethod = async () => {
    try {
      const { data } = await axios.get(
        `https://localhost:7020/api/ShippingMethod`
      );

      setShippingMethods(data);
    } catch (error) {
      console.log(error);
    }
  };

  const createOrder = async () => {
    if (!address && !shipingMethod && !customerName && !phoneNumber) {
      return Swal.fire({
        icon: "error",
        title: "Please fill information",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    try {
      var user = JSON.parse(window.sessionStorage.getItem("user"));

      const { data } = await axios.get("https://localhost:7020/api/Cart", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const cartItemIdlist = data.cartItems.map((cartItem) => cartItem.id);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      const res = await axios.post(
        "https://localhost:7020/api/Order",
        {
          createOrderDto: {
            couponId: 0,
            address,
            ShippingMethodId: shipingMethod,
            customerName,
            phoneNumber,
            cartItemIdlist,
          },
          stripeSetupDto: {
            approvedUrl: "http://localhost:5173/orderSuccess/",
            cancelUrl: "http://localhost:5173",
          },
        },
        config
      );

      window.location.replace(res.data);

      setCustomerName("");
      setPhoneNumber("");
      setAddress("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeShippingMethod = (event) => {
    setShipingMethod(event.target.value);
  };

  useEffect(() => {
    getShippingMethod();
  }, []);

  return (
    <div className="checkout-left">
      <div className="col-md-12 address_form">
        <h4 style={{ marginLeft: "112px", fontSize: "17px" }}>
          Add a new Details
        </h4>
        <div className="creditly-card-form agileinfo_form">
          <section className="creditly-wrapper wrapper">
            <div className="information-wrapper">
              <div className="first-row form-group">
                <div className="card_number_grids">
                  <div className="card_number_grid_right">
                    <div className="controls">
                      <label className="control-label">Address: </label>
                      <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="form-control form-detail"
                        type="text"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                  <div className="clear"> </div>
                </div>
                <div className="controls">
                  <label className="control-label">Shipping Method: </label>
                  <select
                    className="form-control form-detail"
                    style={{
                      height: "38px",
                      fontSize: "14px",
                      opacity: "0.7",
                      padding: "0 0 0 12px",
                    }}
                    onChange={handleChangeShippingMethod}
                  >
                    <option value="">-- Select Shipping Method --</option>
                    {shippingMethods.map((shipingMethod) => {
                      return (
                        <option value={shipingMethod.id} key={shipingMethod.id}>
                          {shipingMethod.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="controls">
                  <label className="control-label">Name: </label>
                  <input
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="form-control form-detail"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="controls">
                  <label className="control-label">Phone Number: </label>
                  <input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="form-control form-detail"
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <button
                className="submit check_out"
                style={{ marginBottom: "20px" }}
                onClick={createOrder}
              >
                Create Order
              </button>
            </div>
          </section>
        </div>
      </div>
      <div className="clearfix"> </div>
      <div className="clearfix" />
    </div>
  );
};

export default OrderDetail;
