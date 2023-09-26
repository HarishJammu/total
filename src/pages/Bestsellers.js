import { useState, useEffect } from "react";
//import BestsellerProducts from './BestsellerProducts';
import { Link } from "react-router-dom";
import '../components/Home.css';
import { BsCurrencyRupee } from "react-icons/bs";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import axios from "axios";

const Bestsellers = ({addToWishlist}) => {

  const [products, setProducts] = useState([]);
  console.log(products, "get")
    useEffect(() => {
      async function fetchProducts() {
        try {
          const response = await axios.get("http://localhost:2000/api/products/Bestseller");
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
          style={{ height: 405 }}
          src="https://kinclimg3.bluestone.com/f_webp,c_scale,w_2380,b_rgb:ffffff/product/dynamic_banner/desktop/home/1562835330481-Ani_HPB_1190x386_July2019.jpg"
          className="d-block w-100 "
          alt="Rings"
        />
      </div>
      <div className="product">
        <div className="container">
          {products.map((curElm) => {
            return (
              <Link to={`/bestsellers/${curElm.id}`}>
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
                    </li></Link>
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
          src=" https://kinclimg2.bluestone.com/f_webp,c_scale,w_2380,b_rgb:ffffff/product/dynamic_banner/desktop/home/1533120094643-NeoVintage_HPB_Without-pricing-line.jpg"
          className="d-block w-100"
          alt="Rings"
        />
      </div>
    </div>
  )
}

export default Bestsellers