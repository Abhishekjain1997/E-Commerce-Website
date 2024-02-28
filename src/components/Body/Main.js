import React,{useContext} from "react";
import "./Main.css";
import Items from "./Items";
import { MyContext } from "../../context/AppContext";
  

const Main = () => {

  const {productList, addItem} = useContext(MyContext);;

let products = productList.map((product,index)=>(
  <Items key={product.id} id={product.id} title={product.title} imageUrl={product.imageUrl} price={product.price} index={index} onAddHandler={()=>addItem(product.id)}/>
))

  return( 
    <>
    <section>
   <h2 className="heading">COLORS</h2>
    <div className="content-container">
    {products}
    </div>
    </section>
    </>
  )
};

export default Main;