import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
const AppContext = React.createContext();
import { useNavigate } from "react-router-dom";

function AppProvider({ children }) {
  const [user, setUser] = useState();
  const [fetchCart, setFetchCart] = useState(false);

  const login = async (email, password) => {
    try {
      const res = await axios.post("https://localhost:7020/api/Account/login", {
        email: email,
        password: password,
      });

      Swal.fire({
        icon: "success",
        title: "Successfully logged in",
        showConfirmButton: false,
        timer: 1500,
      });
      window.sessionStorage.setItem("user", JSON.stringify(res.data));
      setUser(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    var userInfo = JSON.parse(window.sessionStorage.getItem("user"));
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  const logout = () => {
    window.sessionStorage.removeItem("user");
    setUser();
  };

  return (
    <AppContext.Provider
      value={{
        login,
        logout,
        user,
        fetchCart,
        setFetchCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => {
  return useContext(AppContext);
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppProvider, useAppContext };
