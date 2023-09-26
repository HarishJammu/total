import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import "./Footer.css";
import { AiFillInstagram } from "react-icons/ai";
import playstore from "../images/pay/play.jpg";
import appstore from "../images/pay/app.jpg";
import visa from "../images/pay/pay.png";
import { RiSendPlaneFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <footer className="footer p-6">
        <div className="container-xl">
          <div className="row justify-content-center justify-content-md-center">
            <div className="col-md-3 col-lg-2 mb-4 mb-md-0 ">
             <h3><b>Sign Up for Offer:</b></h3> 
            </div>
            <div className="col-md-4 col-lg-4 mb-4 mb-md-0 ">
            <form className="d-flex" role="search">
        <input className="form-control me-3" type="email" placeholder="Email" aria-label="Email"/>
        <button className="btn btn-outline-success fs-4" type="submit"><RiSendPlaneFill/></button>
      </form>
            </div>
          </div>
     </div>
      </footer>
      <footer className="footer p-5">
        <div className="container-xxl">
          <div className="row justify-content-center justify-content-md-start">
            <div className="col-md-4 col-lg-3 mb-4 mb-md-0 ">
              <h2 className="footer-title mb-3">
                <b>Contact</b>
              </h2>
              <div className="mb-3">
                <p>
                  <b>Address:</b> Banjara Hills, Hyd 8-2-626/2 Road No. 10,
                  Banjara Hills, Hyderabad-500034, Telangana,India
                </p>{" "}
              </div>
              <div className="mb-3">
                <p>
                  <b>Phone:</b>{" "}
                  <a className="footer-tel" href="tel:+1234567890">
                    Call us at +91 98456 23985
                  </a>
                </p>{" "}
              </div>
              <div className="mb-4">
                <p>
                  <b>Hours:</b> From 10 a.m To 7 p.m
                </p>{" "}
              </div>
              <div className="mb-4">
                <p>
                  <b>Email:</b> couturejewellery@support.com{" "}
                </p>
              </div>
              <div className="mb-3">
                <p>
                  <b>Follow Us</b>
                </p>{" "}
              </div>
              <div className="socials d-flex gap-3">
                <div className="buttons">
                  <Link
                    to="https://in.linkedin.com/company/truquest-infotech-llp"
                    className="btn btn-light p-1"
                  >
                    <BsLinkedin />
                  </Link>
                </div>
                <div className="buttons">
                  <Link
                    to="https://www.facebook.com/truquest.infotech/"
                    className="btn btn-light p-1"
                  >
                    <BsFacebook />
                  </Link>
                </div>
                <div className="buttons">
                  <Link
                    to="https://www.instagram.com/truquest.infotech/"
                    className="btn btn-light p-1"
                  >
                    <AiFillInstagram />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-2 mb-3 mb-md-0">
              <h2 className="footer-title mb-3">
                <b>About</b>
              </h2>
              <div className="mb-3">About Us </div>
              <div className="mb-3">Delivery Information</div>
              <div className="mb-3">FAQ's</div>
              <div className="mb-3">Careers</div>
              <div className="mb-3">Management Team</div>
            </div>
            <div className="col-md-3 col-lg-2 mb-3 mb-md-0">
              <h2 className="footer-title mb-3">
                <b>Policies</b>
              </h2>
              <div className="mb-3">Disclaimer</div>
              <div className="mb-3">Privacy Policy </div>
              <div className="mb-3">Shipping Policy</div>
              <div className="mb-3">Return Policy </div>
              <div className="mb-3">Terms & Conditions </div>
              <div className="mb-3">Exchange</div>
            </div>
            <div className="col-md-3 col-lg-2 mb-3 mb-md-0">
              <h2 className="footer-title mb-3">
                <b>Account</b>
              </h2>
              <div className="mb-3"> Profile </div>
              <div className="mb-3">View Cart</div>
              <div className="mb-3"> Help</div>
              <div className="mb-3">Payments </div>
              <div className="mb-3">My Wishlist </div>
              <div className="mb-3">Coupons </div>
            </div>
            <div className="col-md-4 col-lg-3 ">
              <h2 className="footer-title mb-3">
                <b>Install App</b>
              </h2>
              <p className="mb-3">
                Available On Google Play Services & App Store
              </p>
              <div className="className='mb-3 col-md-6 col-12 pay">
                <div className="mb-3">
                  <img src={playstore} alt="" />
                </div>
                <div className="mb-3">
                  <img src={appstore} alt="" />
                </div>
              </div>
              <p className="mb-3">Payment Methods</p>
              <div className="pay">
                <img src={visa} alt="" />
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row">
            <div className="col-12 ">
              <p className="text-center text-md-end fs-5">
                <p>&copy; 2023 Couture jewellery.Developed by <b>Truquest Infotech.</b></p>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
