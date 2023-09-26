import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import Details from "./Details";
import PendantsData from "./PendantsData";
import { Link } from "react-router-dom";

const PendantsDesc = ({addToCart}) => {
  const { id } = useParams();
  const [index, setIndex] = useState(0);
  const myRef = useRef();

  // Find the bangle with the matching id
  const pendants = PendantsData.find((b) => b.id === parseInt(id));

  useEffect(() => {
    if (myRef.current) {
      myRef.current.children[index].className = "active";
    }
  }, [index]);

  const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  if (!pendants) {
    // Handle the case where the bangle with the specified id is not found
    return <div>pendants not found</div>;
  }

  return (
    <div className="app">
      <div>
        <div className="details" key={pendants.id}>
          <div className="big-img">
            <img src={pendants.Img[index]} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h4 className="header">{pendants.Title}</h4>
              <h5>{pendants.Cat}</h5>
            </div>
            <div>
              <p className="price">{pendants.Price}</p>
            </div>

            <Details images={pendants.Img} tab={handleTab} myRef={myRef} />

            <div className="boxed-text">
              <p>
                <input
                  className="search-input"
                  type="text"
                  placeholder="Pincode..."
                />
                <button className="search-button">Update</button>
              </p>
              <p className="text">
                Available in our store at <b>Khalsa Colony, Sonipat</b> and{" "}
                <colors className="special-text">
                  25 other store(s) View all designs in stores near you
                </colors>
              </p>
              <p className="dotted-border">
                Delivery By <b>Today Evening (24nd Aug)</b> for Pincode 110001
                (Order before 4pm for same-day-delivery)
              </p>
            </div>
            <Link to="/Cart">
            <button className="cart"  onClick={() => addToCart(pendants)} >Add to cart</button>
            </Link>
            <button className="cart">Buy</button>
          </div>
        </div>
        <div className="product-details-container">
          <table className="product-details-table fs-4">
            {pendants.Details.map((category, categoryIndex) => (
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
    </div>
  );
};

export default PendantsDesc;
