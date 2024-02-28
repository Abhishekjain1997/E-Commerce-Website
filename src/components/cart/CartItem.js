import React from 'react'
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <>
    <li className={classes.cartList}>
    <div ><img src={props.imageUrl} alt="albumImage" className={classes.image}/></div>
    <div className={classes.title}><h3>{props.title}</h3></div>
    <h2 className={classes.itemPrice}>{props.price}</h2>
    <span className={classes.quantity}>1</span>
    <button className={classes.removeBtn} onClick={props.itemRemoveHandler}>REMOVE</button>
    </li>
  </> 
  )
}

export default CartItem;