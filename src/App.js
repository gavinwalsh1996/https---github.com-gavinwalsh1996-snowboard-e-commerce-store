  import React from 'react'

  //Components
  // import PokemonRow from './components/PokemonRow'
  import FilterableTable from './components/FilterableTable'
  import SearchBar from './components/SearchBar'
  // import Button from './components/Button'

  //Images
  import thunderBolt from './images/thunderbolt.webp'
  import goliath from './images/goliath.webp'
  import partyWave from './images/partywave.webp' 
  import surfer from './images/surfer.webp'
  import evilTwin from './images/evil-twin.webp'

  function App() {

   //Pokemon Data
  const bulbasaur = {
    id: 1,
    name: "Thunder Bolt",
    types: "grass",
    sprite: "https:pokemon.com/pictures/bulbasaur.png"
  }

   //Snowboard Array
  const SnowboardArray = [
     {
       id: 1,
       name: "Thunder Bolt",
       availability: "in stock",
       shape: "directional",
       Level: "Expert",
       size: "156",
       price: "500",
       sprite: thunderBolt,
     },
     {
       id: 2,
       name: "Surfer",
       availability: "in stock",
       shape: "directional",
       Level: "Expert",
       size: "154",
       price: "800",
       sprite: surfer,
     },
     {
       id: 3,
       name: "Goliath",
       availability: "in stock",
       shape: "directional-twin",
       Level: "Expert",
       size: "156",
       price: "700",
       sprite: goliath,
     },
     {
       id: 4,
       name: "Evil Twin",
       availability: "in stock",
       shape: "twin",
       Level: "Expert",
       size: "156",
       price: "500",
       sprite: evilTwin,
     },
     {
       id: 5,
       name: "Party Wave",
       availability: "in stock",
       shape: "directional",
       Level: "Expert",
       size: "157",
       price: "600",
       sprite: partyWave,
     },
 ]

    return (
      <>
        <SearchBar arr={SnowboardArray}/>
        {/* <PokemonRow obj={bulbasaur}/> */}
        <FilterableTable arr={SnowboardArray}/>
      </>
    )
  }

  export default App





// Filterable table


// import React, { useState, useEffect, useMemo } from 'react'

// //Item component
// import Item from './testcomponents/Item';


// function App() {

//   // Array of objects for different categories
//   var defaultSports = [
//     { name: "Table Tennis", category: "indoor" },
//     { name: "Football", category: "outdoor" },
//     { name: "Swimming", category: "aquatics" },
//     { name: "Chess", category: "indoor" },
//     { name: "Rugby", category: "outdoor" },
//     { name: "Golf", category: "outdoor" },
//     { name: "darts", category: "indoor" }
//   ];

//     // State to display all items
//     const [sportList, setSportList] = useState([]);

//     // State for filtered items
//     const [selectedCategory, setSelectedCategory] = useState();
  
//   // Use effect to out default sports into sports list when the page renders
//   useEffect(() => {
//     setSportList(defaultSports);
//   }, []);

//   // Function to update selected category state with dropdown menu selection
//   function handleCategoryChange(event) {
//     setSelectedCategory(event.target.value);
//   }

//   // Function to get the selected category from the state
//   function getFilteredList() {
//     if (!selectedCategory) {
//       return sportList;
//     }
//     return sportList.filter((item) => item.category === selectedCategory);
//   }

//   // Use memo hook is used to prevent multiple calls. Only calls function when state changes
//   // Everything is now stored in FilteredList variable
//   let filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);


//   return (
//     <div className="app">
//       <div className="filter-container">
//         <div>Filter by Category:</div>
//         <div>
//           <select 
//           onChange={handleCategoryChange}
//           name='category-list'
//           id='category-list'
//           >
//             <option value=''>All</option>
//             <option value='outdoor'>Outdoor</option>
//             <option value='indoor'>Indoor</option>
//             <option value='aquatics'>Aquatics</option>
//           </select>
//         </div>
//       </div>
//       <div className="sport-list">
//         {/* Map array and display the filtered items from the Item component */}
//         {filteredList.map((item, index) => (
//           <Item {...item} key={index} />
//         ))}
//       </div>
//     </div>
//   );

// }

// export default App