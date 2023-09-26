
import React, { useState, useEffect } from "react";
//import ChainsDetails from "./ChainsDetails";
import { Link } from "react-router-dom";
import '../components/Home.css';
import { BsCurrencyRupee } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import axios from "axios";
const Chains = ({addToWishlist}) => {
  
  const [products, setProducts] = useState([]);
  console.log(products, "get")
  console.log(products)
    useEffect(() => {
      async function fetchProducts() {
        try {
          const response = await axios.get("http://localhost:2000/api/products/Chains"); // Adjust the API endpoint as needed
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
          src="https://www.candere.com/media/catalog/category/Chain.jpg"
          className="d-block w-100 "
          alt="Rings"
        />
      </div>
     
      <div className="product">
        <div className="container">
          {products.map((curElm) => {
            return (
              <Link to={`/chains/${curElm.id}`}>
              <div className="box" key={curElm.id}>
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
                  <h4><BsCurrencyRupee/>{curElm.price}</h4>
                </div>
              </div>
              </Link>
            );
          })}
        </div>
        </div>
      <div className="Banner">
        <img
          style={{ height: 405 }}
          src="https://kinclimg5.bluestone.com/f_webp,c_scale,w_2380,b_rgb:ffffff/product/dynamic_banner/desktop/home/1653672944066-BS_YNecklaces_Desktop_Homepage_Banner.jpg"
          className="d-block w-100 "
          alt="Rings"
        />
      </div>
    </div>
  );
};

export default Chains;
