   import React, { useEffect, useState } from 'react'

   //Components
   import FilterableTable from './components/FilterableTable'
   import SearchBar from './components/SearchBar'
   import Navbar from './components/Navbar'
   import ShoppingCart from './components/ShoppingCart'

   //Images
   import thunderBolt from './images/thunderbolt.webp'
   import goliath from './images/goliath.webp'
   import partyWave from './images/partywave.webp' 
   import surfer from './images/surfer.webp'
   import evilTwin from './images/evil-twin.webp'

   function App() {


    //Snowboard Array
   const SnowboardArray = [
      {
        id: 1,
        name: "Thunder Bolt",
        availability: "in stock",
        shape: "directional",
        Level: "Expert",
        terrain: '',
        size: "156",
        price: "500",
        rating: '3',
        image: thunderBolt,
      },
      {
        id: 2,
        name: "Surfer",
        availability: "in stock",
        shape: "directional",
        Level: "Expert",
        size: "154",
        price: "800",
        rating: '10',
        image: surfer,
      },
      {
        id: 3,
        name: "Goliath",
        availability: "in stock",
        shape: "directional-twin",
        Level: "Expert",
        size: "156",
        price: "700",
        rating: '5',
        image: goliath,
      },
      {
        id: 4,
        name: "Evil Twin",
        availability: "in stock",
        shape: "twin",
        Level: "Expert",
        size: "156",
        price: "500",
        rating: '8',
        image: evilTwin,
      },
      {
        id: 5,
        name: "Party Wave",
        availability: "in stock",
        shape: "directional",
        Level: "Expert",
        size: "157",
        price: "600",
        rating: '8',
        image: partyWave,
      },
  ]
  
    //State 
    const [filteredSearch, setFilteredSearch] = useState(''); 
    const [additem, setAddItem] = useState([]);
    const [price, setPrice] = useState([]);
    
     return (
       <>
         <Navbar />
         <ShoppingCart additem={additem} price={price} />
         <SearchBar arr={SnowboardArray}/>
         <FilterableTable arr={SnowboardArray} setFilteredSearch={setFilteredSearch} setAddItem={setAddItem} setPrice={setPrice} />
       </>
     )
   }

   export default App