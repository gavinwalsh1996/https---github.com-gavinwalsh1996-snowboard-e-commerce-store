import React, { useState } from 'react';

//Css
import '../css/ShoppingCart.scss'
import '../css/TypeSelector.scss'

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function ShoppingCart({additem, price}) {

    //State that holds opens and closes values for cart
  const [isOpen, setIsOpen] = useState(false);

  //Function that uses the setter function to change the state value for the cart to open
  function openPopup() {
    setIsOpen(true);
  }

    //Function that uses the setter function to change the state value for the cart to closed
  function closePopup() {
    setIsOpen(false);
  }

        const total = price.reduce((acc, item) => acc + item.price, 0);



  return (
    <>
      <div id="shopping-cart-popup" className='shopping-cart-popup' style={{ display: isOpen ? 'block' : 'none' }}> 
        <h1>Shopping Cart</h1>
        {/* {price.map((item) => (
            <>
             <h5>Total :</h5>
            <span>{item.price}</span>
              
            </>
            
        ))} */}

    <h5>Total: €{total}</h5>




        {additem.length > 0 ? (
          <ul>
            {additem.map(item => (
              <li key={item.id}>{item.name} - €{item.price}</li>
            ))}

          </ul>
        ) : (
          <p>Your shopping cart is empty.</p>
        )}
        <button onClick={closePopup}>Close</button>
      </div>
      <button onClick={openPopup}><ShoppingBasketIcon sx={{cursor: 'pointer'}}/></button>
    </>
  );
}

export default ShoppingCart
