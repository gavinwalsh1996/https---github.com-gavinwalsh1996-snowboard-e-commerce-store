import React from 'react'

//Components 
import Checkout from '../components/Checkout'
import ShoppingCart from '../components/ShoppingCart'
import '../css/ShoppingCartSummary.scss'

function CheckOutPage({total, additem}) {

  return (

    <div style={{paddingTop: '100px', backgroundColor: 'white'}}>

<div className='shopping-cart-summary'>
        <>
          <p>Cart Summary</p>
          <ul>
           {additem.map((item) => (
             <li>
              {item.name}
            </li>
          ))}
             
          </ul>
          <p>Total: €{total}</p>
        </>
        {/* <p>Your cart is empty. Continue shopping!</p> */}
    </div>

    <div className='checkout-form'>
      <Checkout total={total} />
    </div>

    </div>
  )
}

export default CheckOutPage