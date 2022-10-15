import React, { useState } from 'react'

function Card(props) {

  const [landing, setLanding] = useState(props.value);

  return (
    <div className='card'>
      <p>{landing.name}</p>
      <p>{landing.id}</p>
      <p>{landing.recclass}</p>
      <p>{landing.mass}</p>
      
      
    </div>
  )
}

export default Card
