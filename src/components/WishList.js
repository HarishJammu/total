// src/components/Cart.js
import React from "react";
import { Link } from "react-router-dom";
import "./WishList.css";
const WishList = ({ wishlist, removeFromwishlist ,addToCart}) => {
  return (
    <div>
      <h2>WishList</h2>
      <div className="Wcontainer">
        {wishlist.map((curElm) => (
          <div className="Wbox" key={curElm.id}>
            <div className="img_box ">
              <img src={curElm.Img} alt={curElm.Title}/>
              </div>
            <div className="Wrow">
              <h4 className="Wheader">{curElm.Title}</h4>
             
            </div>
            <div className="Wrow">
              
              <h5>{curElm.Cat}</h5>
            </div>
            <div>
              <p className="Wprice">{curElm.Price}</p>
            </div>
            <button onClick={() => removeFromwishlist(curElm)}>Remove</button>
            <Link to="/Cart">
            <button onClick={() => addToCart(curElm)}>Add to Cart</button></Link>
            </div>
        ))}
      </div>
    </div>
  );


};

export default WishList;
