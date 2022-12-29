import React from 'react'

function Item({...item}) {
  return (
    <div className="item-container">
        <div>
            <span className="item-label">Name:</span>
            {item.name}
        </div>
        <div>
            <span className="item-label">Category:</span>
            {item.category}
        </div>
  </div>
  )
}

export default Item