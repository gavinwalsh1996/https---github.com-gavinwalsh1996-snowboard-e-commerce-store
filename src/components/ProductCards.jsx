import React, { useState } from 'react'
import { Link } from 'react-router-dom';


//Styles
import '../css/ProductCards.scss';

//Components
import Ratings from '../components/Ratings';
import ProductPage from '../pages/ProductPage';
import AddToCartBtn from './AddToCartBtn';

function ProductCards ({setProduct, addToCart,setPrice, setAddItem, setQuantity, quantity, ...object}) { 

function getObject(object) {
  setProduct(object);
}
 

  return (

    <div className="card">
      <img src={object.image} alt='Image' />
      {/* Temp fix */}
      <div className="test" style={{display: 'flex'}}> 
      {/* Create link */}
      
      <Link to="/products"><button onClick={() => getObject(object)} className='details'>Details</button></Link>
      {/* <button onClick={() => addToCart(object)}>Add to cart</button> */}
      <AddToCartBtn {...object} addToCart={addToCart} />
      
      </div>
      <h3>{object.name}</h3>
      <p>{object.shape}</p>
      {/* <span>reviews</span> */}
      <span>€{object.price}</span>
      <Ratings arr={object} />
      {/* <p>{object.id}</p> */}
      <p>{object.types}</p>
    </div>
  )
}

export default ProductCards