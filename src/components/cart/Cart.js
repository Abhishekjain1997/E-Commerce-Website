import { useContext} from 'react';
import classes from './Cart.module.css';
import Modal from '../../UI/Modal';
import CartItem from './CartItem';
import { MyContext } from '../../context/AppContext';


const Cart = (props) => {
 const {cart, removeItem} = useContext(MyContext);


  let totalPrice=0;
  cart.map((item)=>{
    return totalPrice+=item.price;
  })

  const cartItems= (
    <ul>
    {cart.map((product)=>(
        <CartItem key={product.id} imageUrl={product.imageUrl} title={product.title} price={product.price}
        itemRemoveHandler={()=>removeItem(product.id, product._id)}/>
    ))}
    </ul>
  )

  return (
    <Modal onClose={props.onClose}>
    <div> <h1 className={classes.mainHeading}>CART</h1>
    <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.onClose}><h1>+</h1></button>
  </div></div>
    <div className={classes.cartHeadings}>
    <h2><u>ITEM</u></h2>  
    <h2><u>PRICE</u></h2>  
    <h2><u>QUANTITY</u></h2>  
    </div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalPrice}</span>
      </div>
    </Modal>
  );
};

export default Cart;