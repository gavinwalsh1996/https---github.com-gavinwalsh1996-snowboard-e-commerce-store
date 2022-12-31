import React from 'react'
import '../css/Navbar.scss'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Navbar() {

  return (

    <div className="navbar">
        <ul>
            <li><ShoppingBasketIcon sx={{cursor: 'pointer'}}/></li>
        </ul>
    </div>

  )
}

export default Navbar