import React from 'react';

function ProductDetails({ match }) {
  const productId = match.params.productId;
  // Get product details using the productId

  return (
    <div>
      <h1>Product Name</h1>
      <img src={product.image} alt="Product Image" />
      <p>{product.description}</p>
      <p>Price: €{product.price}</p>
      <button>Add to Cart</button>
    </div>
  )
}

export default ProductDetails;
