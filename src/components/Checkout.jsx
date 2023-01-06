import React from 'react';
import { Link } from 'react-router-dom';

//Css
import '../css/Checkout.scss'


function CheckoutForm({total, removeFromCart, additem}) {

  const handleSubmit = (event) => {
    event.preventDefault();
  }


  return (
    <form action='/checkout' onSubmit={handleSubmit}> 

      <h2>Billing Information</h2>

      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          name="name"
        />
      </label>

      <br />

      <label htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          name="email"
        />
      </label>

      <br />

      <label htmlFor="address">
        Address:
        <input
          type="text"
          id="address"
          name="address"
        />
      </label>

      <br />

      <h2>Order Summary</h2>
      <p>€{total}</p>

      <Link to='/'><button onClick={() => alert('Your order has been processed. Thanks!')} type="submit">{total <= 0 ? 'Your cart is empty: continue shopping' : 'Place Order'}</button></Link>
      

    </form>
  );
}

export default CheckoutForm;




