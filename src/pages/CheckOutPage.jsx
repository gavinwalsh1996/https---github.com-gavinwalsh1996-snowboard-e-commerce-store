import React from 'react'

//Components 
import Checkout from '../components/Checkout'
//Css
import '../css/ShoppingCartSummary.scss'

function CheckOutPage({total, additem, setAddItem, removeFromCart}) {


  return (

    <div style={{paddingTop: '100px', backgroundColor: 'white'}}>

      <div className='shopping-cart-summary'>
        <>
          <p>Cart Summary</p>
          <ul>
            {additem.map((item) => (
              <li>
                {item.name + ' Snowboard'} 
              </li>
            ))}
                  
          </ul>
            <p>Total: €{total}</p>
        </>
      </div>

      <div className='checkout-form'>
        <Checkout total={total} removeFromCart={removeFromCart} additem={additem}/>
      </div>

    </div>
  )
}

export default CheckOutPage