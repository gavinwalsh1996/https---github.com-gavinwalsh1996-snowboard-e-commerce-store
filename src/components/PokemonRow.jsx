import React from 'react'

function PokemonRow({obj}) {

  return (

    <div className="container" style={{display: 'flex', width: '100vw', justifyContent: 'center'}}>
        <div className="card" style={{backgroundColor: 'yellow', borderRadius: '10px'}}>
            <h3>{obj.name}</h3>
            <p>{obj.id}</p>
            <p>{obj.types}</p>
            <img src={obj.sprite} alt='Image' />
        </div>
    </div>

  )
}

export default PokemonRow