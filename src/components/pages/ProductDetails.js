import React,{useContext} from 'react'
import classes from "./ProductDetails.module.css"
import { useParams, Link } from 'react-router-dom'
import { MyContext } from '../../context/AppContext'

const ProductDetails = () => {
  const {productList, addItem} = useContext(MyContext);
  const prodId= useParams().id;

  let album;
  for(let i=0; i<productList.length; i++){
    if((`${productList[i].id}`)===prodId){
      console.log("HIII");
      album=productList[i];
    }
  }
  
  return (
    <>
    <div className={classes.cardWrapper}>
      <img className={classes.image} src={album.imageUrl} alt={album.title} />
      <div className={classes.zoom_area}>
      <div className={classes.moreImages}>
      <img className={classes.sampleImg} src={album.imageUrl} alt={album.title} />
      <img className={classes.sampleImg} src={album.imageUrl} alt={album.title} />
      <img className={classes.sampleImg} src={album.imageUrl} alt={album.title} />
      </div>
      </div>
      <div className={classes.details}>
      <h1 className={classes.title}>{album.title}</h1>
      <p className={classes.description}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin varius quam et nunc
      tincidunt, vel feugiat arcu consectetur.</p>
      <div className={classes.starRatings}>
          ★★★★☆
        </div>
        <ul className={classes.reviews}>
        <h3>Reviews:-</h3>
        <li>Nice product. Recommended!!</li>
        <li>Over-Priced.</li>
        <li>Value for money!</li>
        <p>Load more reviews</p>
        </ul>
        <p className={classes.price}>${album.price}</p>
        <div className={classes.btns}>
        <button className={classes.addBtn} type="button" onClick={()=>addItem(album.id)}>
              ADD TO CART
              </button>
        </div>
      </div>
    </div>
    <Link to='/' className={classes.backBtn} type='button'>Go Back</Link>
   </>
  )
}

export default ProductDetails;