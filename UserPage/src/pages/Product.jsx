import { useEffect, useState } from "react";
import Star from "../components/Star";
import SmallProductItem from "../components/SmallProductItem";
import "../css/easy-responsive-tabs.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { useAppContext } from "../context/appContext";
import Rating from "@mui/material/Rating";
import ReviewItem from "../components/ReviewItem";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const { fetchCart, setFetchCart } = useAppContext();

  const navigate = useNavigate();

  const handleChangeQuantity = (event) => {
    const selectedQuantity = parseInt(event.target.value);
    setQuantity(selectedQuantity);
  };

  const getProductById = async () => {
    try {
      const { data } = await axios.get(
        `https://localhost:7020/api/Product/productitem/${id}`
      );
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async () => {
    try {
      var user = JSON.parse(window.sessionStorage.getItem("user"));

      const res = await axios.get("https://localhost:7020/api/Cart", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const cardId = res.data.id;

      await axios.post(
        "https://localhost:7020/api/Cart",
        {
          cartId: cardId,
          productItemId: product.id,
          quantity: quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setFetchCart(!fetchCart);
      navigate("/cart");
    } catch (error) {
      console.log(error);
    }
    setFetchCart(!fetchCart);
  };

  useEffect(() => {
    getProductById();
    window.scrollTo(0, 0);
  }, [id]);

  if (product) {
    return (
      <>
        <div className="banner_top innerpage mt-80" id="home">
          <div className="clearfix" />
          <div className="services-breadcrumb_w3ls_agileinfo">
            <div className="inner_breadcrumb_agileits_w3">
              <ul className="short">
                <li>
                  <a href="index.html">Home</a>
                  <i>|</i>
                </li>
                <li>Single</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ads-grid_shop">
          <div className="shop_inner_inf">
            <div className="col-md-6 single-right-left ">
              <div className="grid images_3_of_2">
                <div className="flexslider">
                  <ul className="slides">
                    <li data-thumb="images/d3.jpg">
                      <div className="thumb-image">
                        {" "}
                        <img
                          src={product.imageUrl}
                          data-imagezoom="true"
                          className="img-product"
                        />{" "}
                      </div>
                    </li>
                  </ul>
                  <div className="clearfix" />
                </div>
              </div>
            </div>
            <div
              className="col-md-6 single-right-left simpleCart_shelfItem"
              style={{ marginTop: "70px" }}
            >
              <h3>{product.name}</h3>
              <p>
                <span className="item_price">{product.price} $</span>
              </p>

              <div className="color-quality">
                <div className="d-flex pt-4 align-items-center">
                  <h5
                    className="mr-3"
                    style={{ marginRight: "12px", fontSize: "16px" }}
                  >
                    Quantity
                  </h5>
                  <select
                    className="form-select"
                    style={{ width: "50px", height: "40px" }}
                    onChange={handleChangeQuantity}
                  >
                    {Array.from({ length: 100 }, (_, index) => (
                      <option key={index} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <Link to="/cart">
                <button className="add-to-cart-btn" onClick={addToCart}>
                  ADD TO CART
                </button>
              </Link>
              <div className="occasion-cart">
                <div className="shoe single-item single_page_b">
                  <form action="#" method="post">
                    <input type="hidden" name="cmd" defaultValue="_cart" />
                    <input type="hidden" name="add" defaultValue={1} />
                    <input
                      type="hidden"
                      name="shoe_item"
                      defaultValue="Chikku Loafers"
                    />
                    <input type="hidden" name="amount" defaultValue={405.0} />

                    <a href="#" data-toggle="modal" data-target="#myModal1" />
                  </form>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
            {/*/tabs*/}

            {/*//tabs*/}
            {/* /new_arrivals */}
            <div className="new_arrivals">
              <div className="clearfix" />
            </div>
            {/*//new_arrivals*/}
          </div>
        </div>
      </>
    );
  }
};

export default Product;
