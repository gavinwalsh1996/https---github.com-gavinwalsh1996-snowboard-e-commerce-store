import React, { useState, useEffect, useMemo } from 'react'

//Components 
import TypeSelector from './TypeSelector'
import ProductCards from './ProductCards/ProductCards'

function FilterablePokedexTable({arr}) {

   // State to store the all items / full product array
 const [allObjects, setAllobjects] = useState([]);

 // State to store the filtered array 'type'
 const [filteredObjects, setFilteredObjects] = useState();

 // Use effect to put the full product array inside the all objects state variable on mount
 useEffect(() => {
  setAllobjects(arr);
 }, []);

 // Function to filter the main array with the selected filter value stored in the state
 function getFilteredList() {
  if (!filteredObjects) {
    return allObjects;
  } 
    return allObjects.filter((object) => object.size === filteredObjects
    )
 }

// Use memo hook is used to prevent multiple calls. Only calls function when state changes
// Everything is now stored in FilteredList variable

   let filteredList = useMemo(getFilteredList, [allObjects, filteredObjects]);


  return (

    <>

        {/* Dropdown selector */}
          <TypeSelector setFilteredObjects={setFilteredObjects}/>

        {/* Product cards */}
        <div className="card-container" style={{display: 'flex', width: '100%', flexWrap: 'wrap', gap: '1rem'}}>
        {filteredList.map((object, index) => (
          <ProductCards {...object} key={index} />
        ))}
        </div>
    </>

  )
}

export default FilterablePokedexTable