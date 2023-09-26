import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../components/Home.css';
import { BsCurrencyRupee } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import "../components/Video.css";
import axios from "axios";
//import EarringsDetails from "./EarringsDetails";

const Earrings = ({addToWishlist}) => {

  const [products, setProducts] = useState([]);
  console.log(products, "get")
    useEffect(() => {
      async function fetchProducts() {
        try {
          const response = await axios.get("http://localhost:2000/api/products/Earrings"); // Adjust the API endpoint as needed
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
          style={{ height: 400 }}
          src="https://kinclimg3.bluestone.com/f_webp,c_scale,w_2380,b_rgb:ffffff/product/dynamic_banner/desktop/home/1524040411201-ENCASED_HPB_banner.jpg"
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
                  src={require("../assets/videos/BIDG0385D05-VIDEO-23701.mp4")}
                  type="video/mp4"
                />
              </video>
            </div>
          </td>
          <td>
            <div className="product-page">
              <video controls autoPlay muted loop className="product-video">
                <source
                  src={require("../assets/videos/BIPM0019D04-VIDEO-4530.mp4")}
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
              <Link to={`/earrings/${curElm.id}`}>
              <div className="box" key={curElm.id}>
                <div className="img_box ">
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
                  
                  <h3>{curElm.name}</h3>
                  <h4><BsCurrencyRupee/>{curElm.price}</h4>
                </div>
              </div></Link>
            );
          })}
        </div>
        </div>
            <div className="Banner">
        <img
          style={{ height: 400 }}
          src="https://kinclimg4.bluestone.com/f_webp,c_scale,w_2380,b_rgb:ffffff/product/dynamic_banner/desktop/home/1543818926472-Star-Light_Collection_Sep-2018-_HPB%20(1).jpg"
          className="d-block w-100 "
          alt="Rings"
        />
      </div>
      </div>
   
  );
};

export default Earrings;
