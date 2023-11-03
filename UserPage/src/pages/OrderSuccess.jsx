import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const OrderSuccess = () => {
  const { id } = useParams();

  const confirmPayment = async () => {
    var user = JSON.parse(window.sessionStorage.getItem("user"));
    try {
      await axios.post(
        `https://localhost:7020/api/Order/confirmpayment/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    confirmPayment();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
        marginBottom: "80px",
      }}
    >
      <img
        src="https://i.etsystatic.com/9814993/r/il/bffb12/2296566514/il_fullxfull.2296566514_nh8l.jpg"
        style={{
          width: "1000px",
          height: "620px",
        }}
      />
    </div>
  );
};

export default OrderSuccess;
