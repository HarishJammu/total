import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/Video.css";
//import RingsDetails from "./RingsDetails";
import '../components/Home.css';
import { BsCurrencyRupee } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import axios from "axios";
const Rings = ({ addToWishlist }) => {
  const [products, setProducts] = useState([]);
  console.log(products, "get")
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://localhost:2000/api/products/Rings"); // Adjust the API endpoint as needed
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);
  return (
    <div>
      <div className="Banner">
        <img
          style={{ height: 350 }}
          src="https://www.kalyanjewellers.net/images/banners/rings_banner.jpg"
          className="d-block w-100 "
          alt="Rings"
        />
      </div>
      <table className="d-flex justify-content-center">
        <tr>
          <td>
            <div className="product-page">
              <video controls autoPlay muted loop className="product-video">
                <source
                  src={require("../assets/videos/Ringw1.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>
          </td>
          <td>
            <div className="product-page">
              <video controls autoPlay muted loop className="product-video">
                <source
                  src={require("../assets/videos/Ringw2.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>
          </td>
          <td>
            <div className="product-page">
              <video controls autoPlay muted loop className="product-video">
                <source
                  src={require("../assets/videos/Ringw3.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>
          </td>
        </tr>
      </table>
      <div className="product">
        <div className="container">
          {products.map((curElm) => {
            return (
              <Link to={`/Rings/${curElm._id}`}>
                <div className="box" key={curElm._id}>
                  <div className="img_box">
                    {curElm.productPictures.map((productPictures, index) => (
                      <img
                        key={index}
                        src={`http://localhost:2000${productPictures.img}`} // Adjust the URL as needed
                        alt={curElm.name}
                      />
                    ))}
                    <div className="icon">
                      <li>
                        <BsEye />
                      </li>
                      <Link to="/Wishlist">
                        <li onClick={() => addToWishlist(curElm)}>
                          <AiOutlineHeart />
                        </li>
                      </Link>
                    </div>
                  </div>
                  <div className="detail">
                    <p>{curElm.category}</p>
                    <h3>{curElm.name}</h3>
                    <h4><BsCurrencyRupee />{curElm.price}</h4>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <img
          style={{ height: 400 }}
          className="d-block w-100"
          src="https://kinclimg3.bluestone.com/f_webp,c_scale,w_2380,b_rgb:ffffff/product/dynamic_banner/desktop/home/1524809991902-Precious-Promise-_Collection-HPB_low-res..jpg"
          alt="Ringbanner"
        />
      </div>
    </div>
  );
};

export default Rings;
