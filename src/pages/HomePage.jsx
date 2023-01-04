import React from 'react'

//Components
import FilterableTable from '../components/FilterableTable' 


function HomePage({arr, setFilteredSearch, setAddItem, setPrice, quantity, setQuantity, addToCart}) {

  return (

    <div>
      <FilterableTable arr={arr} setFilteredSearch={setFilteredSearch} setAddItem={setAddItem} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity} addToCart={addToCart} />
    </div>

  )
}

export default HomePage