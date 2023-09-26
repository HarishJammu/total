//Home.js
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import ImageGallery from './ImageGallery';
import "./Home.css";
import { BsCurrencyRupee } from "react-icons/bs";
import HomeProducts from "./HomeProducts";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
function Home({addToWishlist}) {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.kalyanjewellers.net/images/banners/diamond_banner.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://kinclimg9.bluestone.com/f_webp,c_scale,w_2380,b_rgb:ffffff/product/dynamic_banner/desktop/home/1603994815300-Florence_1190x380_HPB_.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://kinclimg0.bluestone.com/f_webp,c_scale,w_2380,b_rgb:ffffff/product/dynamic_banner/desktop/home/1591900432497-MT%20Desktop%201190x386.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <center>
        <h1>PRODUCT CATEGORY</h1>
        <h4>So that you don't run out of options to choose from!</h4>
        <hr />
      </center>
      <div className="App">
      <ImageGallery />
    </div>
      <center>
        <h1> Delight Deals of the Day</h1>
        <hr />
      </center>
      <div className="product">
        <div className="container">
          {HomeProducts.map((curElm) => {
            return (
              <Link to={`/products/${curElm.id}`}>
              <div className="box" key={curElm.id}>
                <div className="img_box ">
                  <img src={curElm.Img} alt={curElm.Title}></img>
                  <div className="icon">
                    <li>
                      <BsEye />
                    </li>
                    <Link to="/WishList">
                    <li onClick={() => addToWishlist(curElm)}>
                      <AiOutlineHeart />
                    </li></Link>
                  </div>
                </div>
                <div className="detail">
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4>
                    <BsCurrencyRupee />
                    {curElm.Price}
                  </h4>
                </div>
              </div></Link>
            );
          })}
        </div>
      </div>
      <table className="d-flex justify-content-center">
        <tr>
          <td>
            <div className="Offer">
              <img
                style={{ height: 405 }}
                src="https://www.candere.com/media/catalog/category/Deals.jpg"
                className="d-block p-2 w-100"
                alt="Rings"
              />
            </div>
          </td>
          <td>
            <img
              style={{ height: 405 }}
              src="https://www.candere.com/media/catalog/category/Offer-T_26C.jpg"
              className="d-block p-2 w-100"
              alt="Rings"
            />
          </td>
        </tr>
      </table>

      <center>
        <h1>Collection You Love!</h1>
        <hr />
      </center>
      <table className="d-flex justify-content-center">
        <tr>
          <td>
            <div className="product-page">
              <video controls autoPlay muted loop className="product-video">
                <source
                  src={require("../assets/videos/BISP0356H19-VIDEO-18533.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>
          </td>
          <td>
            <div className="product-page">
              <video controls autoPlay muted loop className="product-video">
                <source
                  src={require("../assets/videos/product-video.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>
          </td>
          <td>
            <div className="product-page">
              <video controls autoPlay muted loop className="product-video">
                <source
                  src={require("../assets/videos/BISI0001R71-VIDEO-21709.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>
          </td>
        </tr>
      </table>
      <div className="Banner">
        <img
          style={{ height: 400 }}
          src="https://kinclimg4.bluestone.com/f_webp,c_scale,w_2380,b_rgb:ffffff/product/dynamic_banner/desktop/home/1523968192504-Pride_HPB_banner.jpg"
          className="d-block w-100"
          alt="Rings"
        />
      </div>

      <table className="d-flex justify-content-center">
        <tr>
          <td>
            <div className="product-page">
              <video controls autoPlay muted loop className="product-video">
                <source
                  src={require("../assets/videos/BIAB0382P18-VIDEO-45173.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>
          </td>
          <td>
            <div className="product-page">
              <video controls autoPlay muted loop className="product-video">
                <source
                  src={require("../assets/videos/BESB0292S04-VIDEO-25921.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>
          </td>
          <td>
            <div className="product-page">
              <video controls autoPlay muted loop className="product-video">
                <source
                  src={require("../assets/videos/BISK0368R03-VIDEO-52765.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>
          </td>
        </tr>
      </table>
      <center>
        <h1>Our Promises</h1>
        <hr />
      </center>
      <div className="brand container-xxl">
        <div className="row justify-content-center justify-content-md-center">
          <div className="col-md-4 col-lg-2 mb-4 mb-md-0 ">
            <img
              src="https://www.josalukkasonline.com/assets/images/certified-images/icon1.webp"
              alt=""
            />
            <span>Safe & Secure </span>
          </div>
          <div className="col-md-4 col-lg-2 mb-4 mb-md-0 ">
            <img
              src="https://www.josalukkasonline.com/assets/images/certified-images/icon2.webp"
              alt=""
            />
            <span>Free Shipping</span>
          </div>
          <div className="col-md-4 col-lg-2 mb-4 mb-md-0 ">
            <img
              src="https://www.josalukkasonline.com/assets/images/certified-images/icon3.webp"
              alt=""
            />
            <span>30-days Return</span>
          </div>
          <div className="col-md-4 col-lg-2 mb-4 mb-md-0 ">
            <img
              src="https://www.josalukkasonline.com/assets/images/certified-images/icon4.webp"
              alt=""
            />
            <span>Certified Diamonds</span>
          </div>

          <div className="col-md-4 col-lg-2 mb-4 mb-md-0 ">
            <img
              src="https://www.josalukkasonline.com/assets/images/certified-images/icon5.webp"
              alt=""
            />
            <span>Bis Hallmarked</span>
          </div>
          <div className="col-md-4 col-lg-2 mb-4 mb-md-0">
            <img
              src="https://www.josalukkasonline.com/assets/images/certified-images/icon6.webp"
              alt=""
            />
            <span>Easy Exchange</span>
          </div>
        </div>
      </div>
      <div className="banner">
        <img
          style={{ height: 400 }}
          src="https://www.candere.com/static/version1692754909/frontend/Codilar/candere_desktop/en_US/Magento_Cms/images/experience_store/Experience_Centre.jpg"
          className="d-block w-100"
          alt="Rings"
        />
      </div>
    
    </>
  );
}

export default Home;
