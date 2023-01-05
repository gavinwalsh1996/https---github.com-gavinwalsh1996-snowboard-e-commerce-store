import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//Css
import '../css/Navbar.scss'

//Pages
import CheckOutPage from '../pages/CheckOutPage';
import ProductPage from '../pages/ProductPage';
import HomePage from '../pages/HomePage';

function Navbar({arr, setFilteredSearch, setAddItem, setPrice, quantity, setQuantity}) {

  return (

  <>
    <Router>
      <div className="navbar">
      <Link to='/home'><span style={{fontSize: '2rem', textDecoration: 'none', color: 'black'}}>Bataleon.</span></Link>
      </div>

      <Routes>
      <Route path='/home' element={<HomePage arr={arr} setFilteredSearch={setFilteredSearch} setAddItem={setAddItem} setPrice={setPrice} quantity={quantity} setQuantity={setQuantity} />} />
      <Route path='/checkout' element={<CheckOutPage />} />
      <Route path='/products' element={<ProductPage />} />
      </Routes>

    </Router>
    </>

  )
}

export default Navbar