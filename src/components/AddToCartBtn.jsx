import React from 'react'

function AddToCartBtn({addToCart, ...object}) {

  return (
    <>
        <button onClick={() => addToCart(object)}>Add to cart</button>
    </>
  )
}

export default AddToCartBtn