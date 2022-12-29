import React from 'react'

//Styles
import '../ProductCards/ProductCards.scss';

function Table({...object}) {

  return (

    <div className="card">
      <img src={object.sprite} alt='Image' />
      <h3>{object.name}</h3>
      <p>Directional freeride snowboard</p>
      <span>reviews</span>
      <span>price: 600</span>
      <p>{object.id}</p>
      <p>{object.types}</p>
    </div>
  )
}

export default Table