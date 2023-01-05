import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Image from '../images/evil-twin.webp'
import '../css/ProductPage.scss'

import Video from '../components/Video'
import MyVideo from '../images/video.mp4'

function ProductPage({product}) {

  return (

  <>
    <div className="product-page">

      <div className="prod-image">
        <img src={product.image} alt='' />
      </div>

      <div className="prod-details">
        <h1>{product.name}</h1>
        <p>€{product.price}</p>
        <p className='product-description'>{product.desc}</p>
        <button>Add to cart</button>
        <Link to='/checkout'><button>Checkout</button></Link>
      </div>

    </div>

      <div class="image-gallery">
        <img src={product.image} alt="Image 1" />
        <img src={product.image} alt="Image 2" />
        <img src={product.image} alt="Image 3" />
      </div>

      {/* <Video 
        videoUrl={MyVideo}
      /> */}

  </>
  //   <div className="product-page">
  //   <h1>{name}</h1>  
  //   <img src={image} alt={name} />
  //   <p>{description}</p>
  //   <p>Price: {price}</p>
  //   <button>Add to cart</button>
  // </div>
    
  )
}

export default ProductPage