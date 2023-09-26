import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsCurrencyRupee } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import "./All.css";
import axios from "axios";

const Bangles = ({ addToWishlist }) => {
  const [products, setProducts] = useState([]);
console.log(products, "get")
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://localhost:2000/api/products/Bangles");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div>
      {/* Your existing JSX code for the product listing page */}
      <div className="product">
        <div className="container">
          {products.map((curElm) => (
            <Link to={`/bangles/${curElm.id}`} key={curElm.id}>
              {/* Render each product item here */}
              <div className="box">
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
                      <Link to={`/bangles/${curElm.id}`}>
                        <BsEye />
                      </Link>
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
                  <h4>
                    <BsCurrencyRupee />
                    {curElm.price}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bangles;
