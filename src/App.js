import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//Components
import ShoppingCart from './components/ShoppingCart'
import ProductPage from './pages/ProductPage'
//Images
import thunderBolt from './images/thunderbolt.webp'
import goliath from './images/goliath.webp'
import partyWave from './images/partywave.webp' 
import surfer from './images/surfer.webp'
import evilTwin from './images/evil-twin.webp'
import Background from './images/background.jpg'
import Thunder from './images/thunder.webp'
//Css
import './css/Navbar.scss'
//Pages
import CheckOutPage from './pages/CheckOutPage';
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
     price: "829",
     rating: '3',
     image: thunderBolt,
     desc: 'The Thunder Bolt takes freeride snowboard design to the next level. Our lightest ever core is paired with premium carbon-infused fiber, cutting edge dampening and a race-grade base that will leave your buddies in the dust. Produced in strictly limited numbers.'
   },
   {
     id: 2,
     name: "Surfer",
     availability: "in stock",
     shape: "directional",
     Level: "Expert",
     size: "154",
     price: "829",
     rating: '10',
     image: surfer,
     desc: 'The Surfer has been turning heads since its launch and continues to set the bar for progressive 3D shapes. The wide, hull-like nose generates unparalleled lift – plowing through deep snow, surfing through slush and mowing over bumps. An aggressive side-cut, combined with the extreme swallow, maximizes edge grip to enable you to get your palms down on the hard pack while naturally sinking the tail in pow.'
   },
   {
     id: 3,
     name: "Goliath",
     availability: "in stock",
     shape: "directional-twin",
     Level: "Expert",
     size: "156",
     price: "599",
     rating: '5',
     image: goliath,
     desc: 'The Goliath is the board that started the 3D revolution. It’s perfectly balanced to excel at in all conditions. The harmony of freestyle agility and freeride power is ideal for solid riders who want one board to do it all. Light, fast and snappy, this 3D directional twin is ready for your all-mountain pursuits.'
   },
   {
     id: 4,
     name: "Evil Twin",
     availability: "in stock",
     shape: "twin",
     Level: "Expert",
     size: "156",
     price: "559",
     rating: '2',
     image: evilTwin,
     desc: 'The Evil Twin has been at the heart of the 3D revolution for nearly two decades. It’s a rider favorite that’s been lovingly upgraded year after year to keep it ahead of the pack. Now rocking carbon milled straight into the core and SideKick™, it turns better than ever on Resort and can still be relied on to destroy every feature in the park.'
   },
   {
     id: 5,
     name: "Party Wave",
     availability: "in stock",
     shape: "directional",
     Level: "Expert",
     size: "157",
     price: "459",
     rating: '8',
     image: partyWave,
     desc: 'The Party Wave is everyone’s favorite fun board. Decades of experience with 3D shapes have enabled us to shift volume from length to width without sacrificing edge-to-edge performance.. It’s designed to be ridden 5-10 cm shorter than your regular deck. It’s a nimble and floaty pocket rocket that dials up the fun all over the mountain.'
   },
   {
     id: 6,
     name: "Thunder",
     availability: "in stock",
     shape: "directional",
     Level: "Expert",
     size: "157",
     price: "589",
     rating: '4',
     image: Thunder,
     desc: 'The Thunder is a straight-up speed freak that’s built for aggressive resort shredding and turbo-charged powder descents. Powerful riders will dig the smooth response we’ve dialed in through generous use of carbon and a beveled top-sheet towards the waist.'
   },
]

 //State 
 const [setFilteredSearch] = useState(''); 
 const [additem, setAddItem] = useState([]);
 const [price, setPrice] = useState([]);
 const [quantity, setQuantity] = useState(0);
 //State that holds opens and closes values for cart
 const [isOpen, setIsOpen] = useState(false);
 const [product, setProduct] = useState()


//Function that uses the setter function to change the state value for the cart to open
function openPopup() {
 setIsOpen(true);
}

//Function that uses the setter function to change the state value for the cart to closed
function closePopup() {
 setIsOpen(false);
}

//Add to cart function
function addToCart(object) {
 setAddItem((prevAdditem) => [...prevAdditem, object]);
 setPrice((prevSetPrice) => [...prevSetPrice, object]);
 setQuantity(quantity + 1);  // update quantity
}

function removeFromCart(item) {
 setAddItem(additem.filter((i) => i !== item));
 setPrice(price.filter((i) => i !== item));
 setQuantity(quantity - 1); 
}


const total = price.map(item => Number(item.price)).reduce((acc, value) => acc + value, 0);
  
  return (

   <div style={{ backgroundImage: `url(${Background})`, backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
      <Router>
        <ShoppingCart additem={additem} price={price} setAddItem={setAddItem} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity} 
        removeFromCart={removeFromCart} openPopup={openPopup} isOpen={isOpen} setIsOpen={setIsOpen} closePopup={closePopup} total={total}/>

        <div className="navbar">
          <Link to='/home'><span style={{fontSize: '2rem', textDecoration: 'none', color: 'black'}}>Bataleon.</span></Link>
          <span style={{padding: '2rem', fontSize: '1.1rem'}}>Snowboards</span>
        </div>

        <Routes>
          <Route path='/home' element={<HomePage arr={SnowboardArray} setFilteredSearch={setFilteredSearch} setAddItem={setAddItem} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity} addToCart={addToCart} setProduct={setProduct} />} />
          <Route path='/checkout' element={<CheckOutPage total={total} additem={additem}/>} />
          <Route path='/products' element={<ProductPage addToCart={addToCart} product={product} />} />
        </Routes>
      </Router>
    </div>

  )
}

export default App