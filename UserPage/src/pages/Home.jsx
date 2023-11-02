import "bootstrap/dist/js/bootstrap.min.js";
import "../css/font-awesome.css";

// Import Swiper styles
import "swiper/css";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="mt-80">
      <div className="banner_top" id="home">
        <div className="wrapper_top_w3layouts">
          <div className="header_agileits">
            <div className="clearfix" />
          </div>
          <div className="slider">
            <div className="callbacks_container">
              <Slider />
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
      <div className="grids_bottom">
        <div className="style-grids">
          <div className="col-md-6 style-grid style-grid-1">
            <img src="./src/images/b1.jpg" alt="shoe" />
          </div>
        </div>
        <div className="col-md-6 style-grid style-grid-2">
          <div className="style-image-1_info">
            <div className="style-grid-2-text_info">
              <h3>Nike DOWNSHIFTER</h3>
              <p>
                Itaque earum rerum hic tenetur a sapiente delectus reiciendis
                maiores alias consequatur.sed quia non numquam eius modi tempora
                incidunt ut labore et dolore .
              </p>
              <div className="shop-button">
                <a href="shop.html">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="style-image-2">
            <img src="./src/images/b2.jpg" alt="shoe" />
            <div className="style-grid-2-text">
              <h3>Air force</h3>
            </div>
          </div>
        </div>
        <div className="clearfix" />
      </div>
      <div className="grids_sec_2">
        <div className="style-grids_main">
          <div className="col-md-6 grids_sec_2_left">
            <div className="grid_sec_info">
              <div className="style-grid-2-text_info">
                <h3>Sneakers</h3>
                <p>
                  Itaque earum rerum hic tenetur a sapiente delectus reiciendis
                  maiores alias consequatur.sed quia non numquam eius modi
                  tempora incidunt ut labore .
                </p>
                <div className="shop-button">
                  <a href="shop.html">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="style-image-2">
              <img src="./src/images/b4.jpg" alt="shoe" />
              <div className="style-grid-2-text">
                <h3>Air force</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 grids_sec_2_left">
            <div className="style-image-2">
              <img src="./src/images/b3.jpg" alt="shoe" />
              <div className="style-grid-2-text">
                <h3>Air force</h3>
              </div>
            </div>
            <div className="grid_sec_info last">
              <div className="style-grid-2-text_info">
                <h3>Sneakers</h3>
                <p>
                  Itaque earum rerum hic tenetur a sapiente delectus reiciendis
                  maiores alias consequatur.sed quia non numquam eius modi
                  tempora incidunt ut labore .
                </p>
                <div className="shop-button two">
                  <a href="shop.html">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="clearfix" />
        </div>
      </div>
      <div className="mid_slider_w3lsagile">
        <div className="col-md-3 mid_slider_text">
          <h5>Some More Shoes</h5>
        </div>
        <div className="col-md-9 mid_slider_info">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#myCarousel" data-slide-to={1} className="" />
              <li data-target="#myCarousel" data-slide-to={2} className="" />
              <li data-target="#myCarousel" data-slide-to={3} className="" />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="item active">
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
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
      <a
        href="#home"
        id="toTop"
        className="scroll"
        style={{ display: "block" }}
      >
        {" "}
        <span id="toTopHover" style={{ opacity: 1 }}>
          {" "}
        </span>
      </a>
    </div>
  );
};

export default Home;
