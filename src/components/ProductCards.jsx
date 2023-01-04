import React from 'react'
import { Link } from 'react-router-dom';


//Styles
import '../css/ProductCards.scss';

//Components
import Ratings from '../components/Ratings';
import ProductPage from '../pages/ProductPage';
import AddToCartBtn from './AddToCartBtn';

function ProductCards ({addToCart,setPrice, setAddItem, setQuantity, quantity, ...object}) { 


  //  function addToCart(object) {
  //    setAddItem((prevAdditem) => [...prevAdditem, object]);
  //    setPrice((prevSetPrice) => [...prevSetPrice, object]);
  //    setQuantity(quantity + 1);  // update quantity
  //  }


  return (

    <div className="card">
      <img src={object.image} alt='Image' />
      {/* Temp fix */}
      <div className="test" style={{display: 'flex'}}> 
      {/* Create link */}
      
      <Link to="/products"><button className='details'>Details</button></Link>
      {/* <button onClick={() => addToCart(object)}>Add to cart</button> */}
      <AddToCartBtn {...object} addToCart={addToCart} />
      </div>
      <h3>{object.name}</h3>
      <p>Directional freeride snowboard</p>
      {/* <span>reviews</span> */}
      <span>€{object.price}</span>
      <Ratings arr={object} />
      {/* <p>{object.id}</p> */}
      <p>{object.types}</p>
    </div>
  )
}

export default ProductCards