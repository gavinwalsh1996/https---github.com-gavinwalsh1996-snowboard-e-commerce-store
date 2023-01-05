import React from 'react'
import { Link } from 'react-router-dom';

//Styles
import '../css/ProductCards.scss';

//Components
import Ratings from '../components/Ratings';
import AddToCartBtn from './AddToCartBtn';

function ProductCards ({setProduct, addToCart,setPrice, setAddItem, setQuantity, quantity, ...object}) { 

  function getObject(object) {
    setProduct(object);
  }
 

  return (

    <div className="card">
      <img src={object.image} alt='' />

      <div className="test" style={{display: 'flex'}}> 
        <Link to="/products"><button onClick={() => getObject(object)} className='details'>Details</button></Link>
        <AddToCartBtn {...object} addToCart={addToCart} />
      </div>

      <h3>{object.name}</h3>
      <p>{object.shape}</p>
      <span>€{object.price}</span>
      <Ratings arr={object} />
      <p>{object.types}</p>
    </div>
  )
}

export default ProductCards