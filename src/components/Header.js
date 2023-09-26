// eslint-disable-next-line
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { BiSolidCart, BiSolidUserCircle } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { IoCall } from "react-icons/io5";
import Marquee from "react-fast-marquee";
import { Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions";
const Header = (props) => {


  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const logOut = () => {
      dispatch(signout());
  }


  const renderLoginLibnks = () => {

      return (
          <Nav>
              <li className="nav-item">
                  <span className="nav-link" onClick={logOut}>SignOut</span>
              </li>
          </Nav>
      )
  }
  const renderUnLOggedLinks = () => {
      return (
          <Nav>
              <li className="nav-item">
                  <Link to='/Login' className="nav-link">SignIn</Link>
              </li>
              <li className="nav-item">
                  <Link to='/signup' className="nav-link">SignUp</Link>
              </li>
          </Nav>
      )
  }
  
  return (
    <>
      <nav>
        <div className="p-2 mb-2 bg-dark text-white text-center fs-5">
        <Marquee speed={100} gradient={false}>
        <h3 className="announcement">
          <span>Today: Gold 18kt/gram = &#x20B9; 3,875.87/-  </span>
          <span> Gold 22kt/gram = &#x20B9; 4,737.23/-  </span>
          <span> Gold 24kt/gram = &#x20B9;5,167.36/-</span></h3>
          </Marquee>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fs-3" href="#">
          {/*<img className="Logo" src={logo} alt='logo'/>*/}<b>Couture Jewels</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-underline fw-bold mx-auto mb-2 mb-lg-0">
          
              <li className="nav-item fs-4">
                <Link to="/Bestsellers" className="nav-link fs-4" href="#">
                  Bestseller
                </Link>
              </li>
              <li className="nav-item fs-4">
                <Link to="/Rings" className="nav-link fs-4">
                  Rings
                </Link>
              </li>
              <li className="nav-item fs-4">
                <Link to="/Earrings" className="nav-link fs-4">
                  Earrings
                </Link>
              </li>
              <li className="nav-item fs-4">
                <Link to="/Pendants" className="nav-link fs-4">
                  Pendants
                </Link>
              </li>
              <li className="nav-item fs-4">
                <Link to="/Chains" className="nav-link fs-4">
                 Chains
                </Link>
              </li>
              <li className="nav-item fs-4">
                <Link to="/Bangles" className="nav-link fs-4" href="#">
                  Bangles
                </Link>
              </li>
             
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-light fs-4" type="submit">
                <BsSearch />
              </button>
            </form>
            <div className="buttons">
              <Link to="/Contactus" className="btn btn-light  fs-5">
                <IoCall className="react-icon"/>
                <b>  Contact</b>
              </Link>
            </div>
            <div className="buttons">
              
            <Nav>
                        {auth.authenticate ? renderLoginLibnks() : renderUnLOggedLinks()}
                    </Nav>
            </div>
          </div>
          <div className="buttons">
            <Link to="/Wishlist" className="btn btn-light  fs-5">
              <AiFillHeart className="react-icon"/>
            </Link>
          </div>
          <div className="buttons">
            <Link to="/Cart" className="btn btn-light  fs-5">
              <BiSolidCart className="react-icon"/>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
