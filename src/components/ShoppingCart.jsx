import React from 'react';
import { Link } from 'react-router-dom';

//Css
import '../css/ShoppingCart.scss'
import '../css/TypeSelector.scss'

import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ClearIcon from '@mui/icons-material/Clear';

function ShoppingCart({additem, price, setAddItem, setPrice, quantity, setQuantity, removeFromCart, openPopup, isOpen, setIsOpen, closePopup, total}) {

  return (
    <>
      <div id="shopping-cart-popup" className='shopping-cart-popup' style={{ display: isOpen ? 'block' : 'none' }}> 

          <h1>Shopping Cart</h1>
          <h5 style={{color: 'green'}}>Total: €{total}</h5>

          {additem.length > 0 ? (
            <ul>
              {additem.map(item => (
                <>
                <li key={item.id}><span style={{paddingRight: '10rem'}}>{item.name} - €{item.price}</span>
                  
                <button onClick={() => removeFromCart(item)}><ClearIcon sx={{width: '1rem'}}/></button></li>
                </>
              ))}

            </ul>
          ) : (
            <p>Your shopping cart is empty.</p>
          )}
          <span style={{display: 'flex', justifyContent: 'space-between'}}>
            <button onClick={closePopup}>Close</button>
            <Link to="/checkout"><button>Checkout</button></Link>
          </span>
      </div>
        <button style={{border: 'none', backgroundColor: 'transparent', position: 'fixed', right: '0', zIndex: '1000', padding: '1rem 1rem'}} onClick={openPopup}><ShoppingBasketIcon sx={{cursor: 'pointer'}} /> <span style={{color: 'red'}}>{quantity < 1 ? null : quantity}</span></button>
    </>
  );
}

export default ShoppingCart
