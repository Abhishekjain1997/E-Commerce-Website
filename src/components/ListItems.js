import React,{useContext, useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import AuthContext from '../context/auth-context';
import MyNavbar from './navbar/MyNavbar'
import Main from './Body/Main'
import Footer from './footer/Footer'
import Cart from './cart/Cart'
import About from './navbar/About';
import Home from './navbar/Home';
import ContactUs from './navbar/ContactUs';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';


const ListItems = () => {
    const [cartIsShown, setCartIsShown] = useState(false);
    const authCtx= useContext(AuthContext);


    const loggedIn = authCtx.isLoggedIn;

    const showCartHandler = () => {
      setCartIsShown(true);
    };
  
    const hideCartHandler = () => { 
      setCartIsShown(false);
    };

  return (
    <Router>
    <MyNavbar onShowCart={showCartHandler}/>
    <Routes>
    {!loggedIn && <Route path='/login' element={<Login/>}/>}
    {loggedIn && <Route path='/' exact element={<Main/>}/>}
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contactUs' element={<ContactUs/>}/>
    {<Route path='/products/:id' element={<ProductDetails/>}/>}
    <Route path='*' element={<Navigate to='/login'/>}/>
    </Routes>
    {loggedIn && cartIsShown && <Cart onClose={hideCartHandler}/>}
    <Footer/>
    </Router>
  )
}

export default ListItems