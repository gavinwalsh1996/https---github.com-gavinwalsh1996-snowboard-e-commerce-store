import React from 'react'

//Components 
import Checkout from '../components/Checkout'
import ShoppingCart from '../components/ShoppingCart'
import '../css/ShoppingCartSummary.scss'

function CheckOutPage({total, additem}) {
  console.log(additem)

  return (

    <>

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

    <div>
      <Checkout total={total} />
    </div>


    {/* <div>
      {items.length > 0 ? (
        <>
          <p>You have {items.length} items in your cart:</p>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name}: {item.price}
              </li>
            ))}
          </ul>
          <p>Total: {total}</p>
          <button type="submit">Place Order</button>
        </>
      ) : (
        <p>Your cart is empty. Continue shopping!</p>
      )}
    </div> */}

    </>
  )
}

export default CheckOutPage