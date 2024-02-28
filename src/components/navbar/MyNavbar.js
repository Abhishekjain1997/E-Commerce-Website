import React,{useContext} from 'react'
import { NavLink,useNavigate} from 'react-router-dom';
import classes from "./Navbar.module.css";
import { MyContext } from '../../context/AppContext'; 
import AuthContext from '../../context/auth-context';


const MyNavbar = (props) => {

  const cartCtx= useContext(MyContext);
  let {cart}=cartCtx;
  const authCtx= useContext(AuthContext);
  const navigate= useNavigate();
  const isLoggedIn= authCtx.isLoggedIn;

  const numberOfCartItems=cart.length;
  
  const logoutHandler=()=>{
    authCtx.logout();
    navigate('/home');
  }


  return ( 
    <header>
       <div className={classes.navbar}> 
       <ul className={classes.header}>
       <li><NavLink activeclassname={classes.active} to="/home">HOME</NavLink></li>
       <li><NavLink activeclassname={classes.active} to="/">STORE</NavLink></li>
       <li><NavLink activeclassname={classes.active} to="/about">ABOUT</NavLink></li>
       {!isLoggedIn && <li><NavLink activeclassname={classes.active} to="/login">LOGIN</NavLink></li>}
       <li><NavLink activeclassname={classes.active} to="/contactUs">CONTACT US</NavLink></li>
       {isLoggedIn && <li className={classes.cartData}><button className={classes.cart_holder} id='cart' onClick={props.onShowCart}>CART</button>
       <span className={classes.cart_number}><sup>{numberOfCartItems}</sup></span></li>}
       {isLoggedIn && <li><button onClick={logoutHandler} className={classes.logoutBtn}>LOGOUT</button></li>}
       <div>
       </div>
                 
   </ul>
   </div>
           
            <h1>The Generics</h1>
        </header>
  
  )
}

export default MyNavbar;