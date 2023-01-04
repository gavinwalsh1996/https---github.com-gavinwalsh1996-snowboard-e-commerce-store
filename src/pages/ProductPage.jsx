import React from 'react'
import Image from '../images/evil-twin.webp'
import '../css/ProductPage.scss'

import Video from '../components/Video'
import MyVideo from '../images/video.mp4'

function ProductPage() {

  return (

  <>
    <div className="product-page">

      <div className="prod-image">
        <img src={Image} alt='' />
      </div>

      <div className="prod-details">
        <h1>Evil Twin</h1>
        <p>Price: 600</p>
        <p>The Thunder Bolt takes freeride snowboard..</p>
        <button>Add to cart</button>
      </div>

    </div>

      <div class="image-gallery">
        <img src={Image} alt="Image 1" />
        <img src={Image} alt="Image 2" />
        <img src={Image} alt="Image 3" />
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