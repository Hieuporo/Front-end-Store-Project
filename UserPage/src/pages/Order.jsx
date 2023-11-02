import OrderTable from "../components/OrderTable";

const Order = () => {
  return (
    <div>
      <div className="banner_top innerpage" id="home">
        <div className="wrapper_top_w3layouts"></div>
        {/* //cart details */}

        <div className="clearfix" />
        {/* /banner_inner */}
        <div className="services-breadcrumb_w3ls_agileinfo">
          <div className="inner_breadcrumb_agileits_w3">
            <ul className="short">
              <li>
                <a href="index.html">Home</a>
                <i>|</i>
              </li>
              <li>Order</li>
            </ul>
          </div>
        </div>
        {/* //banner_inner */}
      </div>
      {/* //banner */}
      {/* top Products */}
      <div className="ads-grid_shop">
        <div className="shop_inner_inf">
          <div className="privacy about">
            <h3></h3>
            <OrderTable />
          </div>
        </div>
        {/* //top products */}
        <div className="mid_slider_w3lsagile">
          <div className="col-md-3 mid_slider_text">
            <h5>Some More Shoes</h5>
          </div>
          <div className="col-md-9 mid_slider_info">
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              {/* Indicators */}
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to={0} className="" />
                <li
                  data-target="#myCarousel"
                  data-slide-to={1}
                  className="active"
                />
                <li data-target="#myCarousel" data-slide-to={2} className="" />
                <li data-target="#myCarousel" data-slide-to={3} className="" />
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="item">
                  <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail">
                        <img
                          src="./src/images/g1.jpg"
                          alt="Image"
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail">
                        <img
                          src="./src/images/g2.jpg"
                          alt="Image"
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail">
                        <img
                          src="./src/images/g3.jpg"
                          alt="Image"
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail">
                        <img
                          src="./src/images/g4.jpg"
                          alt="Image"
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item active">
                  <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail">
                        <img
                          src="./src/images/g5.jpg"
                          alt="Image"
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail">
                        <img
                          src="./src/images/g6.jpg"
                          alt="Image"
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail">
                        <img
                          src="./src/images/g2.jpg"
                          alt="Image"
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail">
                        <img
                          src="./src/images/g1.jpg"
                          alt="Image"
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail">
                        <img
                          src="./src/images/g1.jpg"
                          alt="Image"
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail">
                        <img
                          src="./src/images/g2.jpg"
                          alt="Image"
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail">
                        <img
                          src="./src/images/g3.jpg"
                          alt="Image"
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail">
                        <img
                          src="./src/images/g4.jpg"
                          alt="Image"
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail">
                        <img
                          src="./src/images/g1.jpg"
                          alt="Image"
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail">
                        <img
                          src="./src/images/g2.jpg"
                          alt="Image"
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail">
                        <img
                          src="./src/images/g3.jpg"
                          alt="Image"
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail">
                        <img
                          src="./src/images/g4.jpg"
                          alt="Image"
                          style={{ maxWidth: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* The Modal */}
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
      <a
        href="#home"
        id="toTop"
        className="scroll"
        style={{ display: "block" }}
      >
        <span id="toTopHover" style={{ opacity: 1 }}></span>
      </a>
    </div>
  );
};

export default Order;
