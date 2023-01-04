   import React, { useEffect, useState } from 'react'
   import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

   //Components
   import FilterableTable from './components/FilterableTable'
   import SearchBar from './components/SearchBar'
  //  import Navbar from './components/Navbar'
   import ShoppingCart from './components/ShoppingCart'
   import ProductPage from './pages/ProductPage'
   import CheckOut from './components/Checkout'

   //Images
   import thunderBolt from './images/thunderbolt.webp'
   import goliath from './images/goliath.webp'
   import partyWave from './images/partywave.webp' 
   import surfer from './images/surfer.webp'
   import evilTwin from './images/evil-twin.webp'
   import Background from './images/background.jpg'

   //Test
import './css/Navbar.scss'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

//Pages
import CheckOutPage from './pages/CheckOutPage';
import NavBar from './components/Navbar'
// import ProductPage from '../pages/ProductPage';
import HomePage from './pages/HomePage';



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
      {
        id: 6,
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
    const [quantity, setQuantity] = useState(0);

    // Test
        //State that holds opens and closes values for cart
  const [isOpen, setIsOpen] = useState(false);

  //Function that uses the setter function to change the state value for the cart to open
  function openPopup() {
    setIsOpen(true);
  }

    //Function that uses the setter function to change the state value for the cart to closed
  function closePopup() {
    setIsOpen(false);
  }
  
  function removeFromCart(item) {
    setAddItem(additem.filter((i) => i !== item));
    setPrice(price.filter((i) => i !== item));
    setQuantity(quantity - 1); 
  }


const total = price.map(item => Number(item.price)).reduce((acc, value) => acc + value, 0);
    //Test

     
     return (

      <div style={{ backgroundImage: `url(${Background})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
        <NavBar arr={SnowboardArray} setFilteredSearch={setFilteredSearch} setAddItem={setAddItem} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity}/>
         <ShoppingCart additem={additem} price={price} setAddItem={setAddItem} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity} 
         removeFromCart={removeFromCart} openPopup={openPopup} isOpen={isOpen} setIsOpen={setIsOpen} closePopup={closePopup} total={total}/>
         {/* <FilterableTable arr={SnowboardArray} setFilteredSearch={setFilteredSearch} setAddItem={setAddItem} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity} />
         {/* <SearchBar arr={SnowboardArray}/> */}
         {/* <ProductPage /> */}
         {/* <CheckOut />


      {/* Test */}
      <>
    <Router>
      <div className="navbar">
      <Link to='/home'><span style={{fontSize: '2rem', textDecoration: 'none', color: 'black'}}>Bataleon.</span></Link>
      </div>

      <Routes>
      <Route path='/home' element={<HomePage arr={SnowboardArray} setFilteredSearch={setFilteredSearch} setAddItem={setAddItem} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity} />} />
      <Route path='/checkout' element={<CheckOutPage />} />
      <Route path='/products' element={<ProductPage />} />
      </Routes>

    </Router>
    </>





      </div>

     )
   }

   export default App