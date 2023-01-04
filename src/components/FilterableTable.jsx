import React, { useState, useEffect, useMemo } from 'react'

//Components 
import TypeSelector from './TypeSelector'
import ProductCards from './ProductCards'

function FilterableTable({arr, setAddItem, setPrice, quantity, setQuantity}) {

   // State to store the all items / full product array
 const [allObjects, setAllobjects] = useState([]);

 // State to store the filtered array 'type'
 const [filteredObjects, setFilteredObjects] = useState();

 // Use effect to put the full product array inside the all objects state variable on mount
 useEffect(() => {
  setAllobjects(arr);
 }, []);

 // Function to filter the main array with the selected filter value stored in the state
 // Original function that wasn't working.
 //  function getFilteredList() {
 //   if (!filteredObjects) {
 //     return allObjects;  
 //   } 
 //     if (filteredObjects === 'directional' || 'directional-twin' || 'twin' ) {
 //       return allObjects.filter((object) => object.shape === filteredObjects)

 //     } else if (filteredObjects === '154' || '156' || '157' ) {
 //       return allObjects.filter((object) => object.size === filteredObjects)
 //     }
 //  }

 function getFilteredList() {
    if (!filteredObjects) {
      return allObjects;  
    } 
    const allowedSizes = ['154', '156', '157'];
    if (allowedSizes.includes(filteredObjects)) {
      return allObjects.filter((object) => object.size === filteredObjects);
    } else {
      return allObjects.filter((object) => object.shape === filteredObjects);
    }
  }

    // Use memo hook is used to prevent multiple calls. Only calls function when state changes
    // Everything is now stored in FilteredList variable
    let filteredList = useMemo(getFilteredList, [allObjects, filteredObjects]);



  return (

    <>

        {/* Dropdown selector */}
          <TypeSelector setFilteredObjects={setFilteredObjects}/>

        {/* Product cards */}
        <div className="card-container" style={{display: 'flex', justifyContent: 'center', width: '100%', flexWrap: 'wrap', gap: '1rem', paddingTop: '100px'}}>
        {filteredList.map((object, index) => (
          <ProductCards {...object} key={index} setAddItem={setAddItem} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity}/>
        ))}
        </div>
    </>

  )
}

export default FilterableTable