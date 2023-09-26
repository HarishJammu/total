import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Product.css";
//import Details from "./Details";
import Carousel from "react-multi-carousel";
import { AiOutlineHeart } from "react-icons/ai";
import ReactImageMagnify from "react-image-magnify";
import "react-multi-carousel/lib/styles.css";
import Product, { responsive } from "./Similar";
import Pincode from "../components/Pincode";
import RingsDetails from "../pages/RingsDetails";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { addToCart, getProductDetailsById } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const RingsDesc = (props) => {

  const location = useLocation();

  useEffect(() => {
  
    window.scrollTo(0, 0); // Scroll to the top of the page on route change
  }, [location.pathname]);

  const { _id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const myRef = useRef();

  const ring = RingsDetails.find((b) => b._id === parseInt(_id));

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axios.get(`http://localhost:2000/api/product/${_id}`);
        console.log('Data fetched:', _id);
        if (response) {
          console.log(response);
          setProduct(response.data.product || {}); // Ensure product is an object
        } else {
          console.error('Product not found!');
        }
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [_id]);

  useEffect(() => {
    if (myRef.current) {
      myRef.current.children[index].className = "active";
    }
  }, [index]);

const navigate=useNavigate()
  const dispatch=useDispatch();
  //const product=useSelector(state=>state.product);
  const {productId}=useParams();

  useEffect(()=>{
    
    
    const payload={
      params:{
        productId
      }
    }
    dispatch(getProductDetailsById(payload));
    
  },[]);
  console.log(product._id)
  return (
    <div className="app">
      <div>
        <div className="details" key={product._id}>
          <div className="big-img">
            {product.productPictures && product.productPictures.length > 0 && (
              <ReactImageMagnify
                smallImage={{
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: `http://localhost:2000${product.productPictures[0].img}`,
                  width: 400,
                  height: 400,
                }}
                largeImage={{
                  src: `http://localhost:2000${product.productPictures[0].img}`,
                  width: 800,
                  height: 800,
                }}
                enlargedImagePosition="over"
              />
            )}
          </div>
          <div>
            <Link to="/Wishlist">
              <button className="wishlist-icon fs-1">
                <AiOutlineHeart />
              </button>
            </Link>
          </div>
          <div className="box">
            <div className="row">
              <h4 className="header">{product.name}</h4>
              <h5>{product.category}</h5>
            </div>
            <div>
              <p className="price">{product.price}</p>
            </div>



            <div className="boxed-text">
              <Pincode />

              <p className="dotted-border ">
                (Order before 4pm for same-day-delivery)
              </p>
            </div>
            <Link to="/Cart">
              <button
               className="cart fs-3" 
               onClick={() => {
                const {_id,name,price}=product;
                const img=product.productPictures[0].img;
                dispatch(addToCart({_id,name,price,img}));
                //navigate('/Cart');
              }}
                >
                Add to cart
              </button>
            </Link>
            <Link to="/Buy">
              <button className="cart fs-3" >
                Buy
              </button>
            </Link> 
            <p className="query ">
              {" "}
              Any Questions ? Please feel free to Reach us at:
              <b> +91 98456 23985</b>
            </p>
          </div>
        </div>
        <div>
          <h1>Similar Products</h1>

          <Carousel showDots={true} responsive={responsive}>
            {RingsDetails.map((item) => (
              <Link to={`/product/${item.id}`} key={item.id}>
                <Product name={item.Title} url={item.Img} price={item.Price} />
              </Link>
            ))}
          </Carousel>
        </div>
        <div className="product-details-container">
          <table className="product-details-table fs-4">

            <tr>
              <th colSpan="2">PRODUCT DETAILS</th>
            </tr>
            <tbody>
              <tr>
                <td className="col-md-6">productCode</td>
                <td className="col-md-6">{product.productCode}</td>
              </tr>
              <tr>
                <td className="col-md-6">Height</td>
                <td className="col-md-6">{product.height}</td>
              </tr>
              <tr>
                <td className="col-md-6">Width</td>
                <td className="col-md-6">{product.width}</td>
              </tr>
              <tr>
                <td className="col-md-6">Product Weight</td>
                <td className="col-md-6">{product.productWeight}</td>
              </tr>
            </tbody>
            <tr>
              <th colSpan="2">DIAMOND DETAILS</th>
            </tr>
            <tbody>
              <tr>
                <td className="col-md-6">Total Weight</td>
                <td className="col-md-6">{product.totalWeight}</td>
              </tr>
              <tr>
                <td className="col-md-6">Total No.Of Diamonds</td>
                <td className="col-md-6">{product.totalNoOfDiamonds}</td>
              </tr>
            </tbody>
            <tr>
              <th colSpan="2">METAL DETAILS</th>
            </tr>
            <tbody>
              <tr>
                <td className="col-md-6">Type</td>
                <td className="col-md-6">{product.type}</td>
              </tr>
              <tr>
                <td className="col-md-6">Weight</td>
                <td className="col-md-6">{product.productWeight}</td>
              </tr>
            </tbody>
            <tr>
              <th colSpan="2">PRICE BREAKUP</th>
            </tr>
            <tbody>
              <tr>
                <td className="col-md-6">Gold Cost</td>
                <td className="col-md-6">{product.gold}</td>
              </tr>
              <tr>
                <td className="col-md-6">Diamond</td>
                <td className="col-md-6">{product.Diamond}</td>
              </tr>
              <tr>
                <td className="col-md-6">Making Charges</td>
                <td className="col-md-6">{product.makingCharges}</td>
              </tr>
              <tr>
                <td className="col-md-6">GST</td>
                <td className="col-md-6">{product.gst}</td>
              </tr>
              <tr>
                <td className="col-md-6">Total</td>
                <td className="col-md-6">{product.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RingsDesc;
