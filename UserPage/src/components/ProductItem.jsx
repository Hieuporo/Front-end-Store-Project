import Star from "./Star";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <div className="col-md-3 product-men">
      <div className="product-shoe-info shoe">
        <div className="men-pro-item">
          <div className="men-thumb-item">
            <img src={product.imageUrl} alt="" />
            <div className="men-cart-pro">
              <div className="inner-men-cart-pro">
                <Link
                  to={`/product/${product.id}`}
                  className="link-product-add-cart"
                >
                  View
                </Link>
              </div>
            </div>
            <span className="product-new-top">New</span>
          </div>
          <div className="item-info-product">
            <h4>
              <a href="single.html">{product.name}</a>
            </h4>
            <div className="info-product-price">
              <div className="grid_meta">
                <div className="product_price">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span className="money discount">{product.price} $</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
