import React from 'react';

import '../css/Checkout.scss'

function CheckoutForm() {
  return (
    <form>
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
      <h2>Shipping Information</h2>
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
      <ul>
          <li>
            name:  4 - $500
          </li>
      </ul>
      <p>Total: 500</p>
      <button type="submit">Place Order</button>
    </form>
  );
}

export default CheckoutForm;



// import React from 'react';

// function CheckoutForm({ cart, total, onSubmit, onChange, formData }) {
//   return (
//     <form onSubmit={onSubmit}>
//       <h2>Billing Information</h2>
//       <label htmlFor="name">
//         Name:
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={onChange}
//         />
//       </label>
//       <br />
//       <label htmlFor="email">
//         Email:
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={onChange}
//         />
//       </label>
//       <br />
//       <label htmlFor="address">
//         Address:
//         <input
//           type="text"
//           id="address"
//           name="address"
//           value={formData.address}
//           onChange={onChange}
//         />
//       </label>
//       <br />
//       <h2>Shipping Information</h2>
//       <label htmlFor="name">
//         Name:
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={onChange}
//         />
//       </label>
//       <br />
//       <label htmlFor="email">
//         Email:
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={onChange}
//         />
//       </label>
//       <br />
//       <label htmlFor="address">
//         Address:
//         <input
//           type="text"
//           id="address"
//           name="address"
//           value={formData.address}
//           onChange={onChange}
//         />
//       </label>
//       <br />
//       <h2>Order Summary</h2>
//       <ul>
//         {cart.map((item) => (
//           <li key={item.name}>
//             {item.name} ({item.quantity}) - ${item.price}
//           </li>
//         ))}
//       </ul>
//       <p>Total: ${total}</p>
//       <button type="submit">Place Order</button>
//     </form>
//   );
// }

// export default CheckoutForm;

