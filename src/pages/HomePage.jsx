import React from 'react'

//Components
import FilterableTable from '../components/FilterableTable' 


function HomePage({arr, setFilteredSearch, setAddItem, setPrice, quantity, setQuantity}) {

  return (

    <div>
      <FilterableTable arr={arr} setFilteredSearch={setFilteredSearch} setAddItem={setAddItem} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity} />
    </div>

  )
}

export default HomePage