import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Details from "./Details";
import  { responsive } from "./Similar";

import "./Product.css";
import "./ProductDetails.css";

const BangleDesc = ({ addToCart }) => {
  const { slug } = useParams();
  const [bangle, setBangle] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    async function fetchBangle() {
      try {
        const response = await axios.get(
          `http://localhost:2000/api/products/Bangles/${slug}` // Fix the typo here
        );
        setBangle(response.data.product);
      } catch (error) {
        console.error("Error fetching bangle:", error);
      }
    }

    fetchBangle();
  }, [slug]);

  const handleTabChange = (index) => {
    setActiveIndex(index);
    carouselRef.current.goToSlide(index);
  };

  const addToCartHandler = () => {
    if (bangle) {
      addToCart(bangle);
    }
  };

  if (!bangle) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <div className="details" key={bangle.id}>
        <div className="big-img">
          <img src={bangle.productPictures[activeIndex]} alt="" />
        </div>
        <div className="box">
          <div className="row">
            <h4 className="header">{bangle.name}</h4>
            <h5>{bangle.category}</h5>
          </div>
          <div>
            <p className="price">{bangle.price}</p>
          </div>
          <Details
            images={bangle.productPictures}
            tab={handleTabChange}
            activeIndex={activeIndex}
          />
          <div className="boxed-text">
            <p>
              <input
                className="search-input fs-5"
                type="text"
                placeholder="Pincode..."
              />
              <button className="search-button fs-5">Update</button>
            </p>
            <p className="dotted-border fs-5">
              Order can be Delivered By <b>(14th Aug)</b>
              <p>(Order before 4pm for same-day-delivery)</p>
            </p>
          </div>
          <button className="cart fs-3" onClick={addToCartHandler}>
            Add to cart
          </button>
          <button className="cart fs-3">Buy</button>
        </div>
      </div>
      <div>
        <h1>Similar Products</h1>
        <Carousel
          ref={carouselRef}
          showDots={true}
          responsive={responsive}
          beforeChange={(oldIndex, newIndex) => setActiveIndex(newIndex)}
        >
          {/* Render similar products here */}
        </Carousel>
      </div>
      <div className="product-details-container">
        <table className="product-details-table fs-4">
          {bangle.details.map((category, categoryIndex) => (
            <tbody key={categoryIndex}>
              <tr>
                <th colSpan="2">{category.category}</th>
              </tr>
              {category.details.map((detail, detailIndex) => (
                <tr key={detailIndex}>
                  <td>{detail.label}</td>
                  <td>{detail.value}</td>
                </tr>
              ))}
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default BangleDesc;
