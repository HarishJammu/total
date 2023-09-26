//App.js
import React,{ useState} from "react";
import Signup from "./pages/Signup";
import Home from "./components/Home";
import Login from "./pages/Login";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Earrings from "./pages/Earrings";
import Bestsellers from "./pages/Bestsellers";
import Header from "./components/Header";
import Product from "./ProductsPages/Product";
import Footer from "./components/Footer";
import Bangles from "./pages/Bangles"
import Pendants from "./pages/Pendants";
import Chains from "./pages/Chains";
import BangleDesc from "./ProductsPages/BangleDesc";
import EarringsDesc from "./ProductsPages/EarringsDesc";
import WishList from "./components/WishList";
import Rings from "./pages/Rings";
import ChainDesc from "./ProductsPages/ChainDesc";
import RingsDesc from "./ProductsPages/RingsDesc"
import PendantsDesc from "./ProductsPages/PendantsDesc";
import BestsellersDesc from "./ProductsPages/BestsellersDesc";
import ForgotPassword from "./pages/ForgotPassword";
import HomeDesc from "./ProductsPages/HomeDesc";
import Cart from "./components/Cart";
const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
  };
  const [wishlist, setwishlist] = useState([]);

  const addToWishlist = (product) => {
    setwishlist([...wishlist, product]);
  };

  const removeFromwishlist = (product) => {
    const updatedwishlist = wishlist.filter((item) => item.id !== product.id);
    setwishlist(updatedwishlist);
  };



  
  return (
    <>
    <BrowserRouter>
  
    <Header/>
    <Routes>
      <Route path='/' element={<Home addToWishlist={addToWishlist}/>}/>
      <Route path='/Chains' element={<Chains addToWishlist={addToWishlist}/>}/>
      <Route path='/Rings' element={<Rings addToWishlist={addToWishlist}/>}/>
      <Route path="/WishList" element={<WishList wishlist={wishlist} removeFromwishlist={removeFromwishlist} addToCart={addToCart} />}/>
      <Route path='/Bestsellers' element={<Bestsellers addToWishlist={addToWishlist}/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path="/Cart" element={<Cart cart={cart} removeFromCart={removeFromCart}/>}/>
      <Route path='/Bangles' element={<Bangles addToWishlist={addToWishlist}/>}/>
      <Route path='/Pendants' element={<Pendants addToWishlist={addToWishlist}/>}/>
      <Route path='/Earrings' element={<Earrings addToWishlist={addToWishlist}/>}/>
      <Route path="/pendants/:id" element={<PendantsDesc addToCart={addToCart}/>}/>
      <Route path="/products/:id" element={<HomeDesc addToCart={addToCart}/> }/>
      
      
      <Route path="/bestsellers/:id" element={<BestsellersDesc addToCart={addToCart}/>}/>
      <Route path='/bangles/:id' element={<BangleDesc addToCart={addToCart}/>}/>
      <Route path="/earrings/:id" element={<EarringsDesc addToCart={addToCart}/>}/>
      <Route path='/chains/:id' element={<ChainDesc addToCart={addToCart}/>}/>
      <Route path='/Contactus' element={<ContactUs/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path="/Rings/:_id" element={<RingsDesc/>} />
       
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
