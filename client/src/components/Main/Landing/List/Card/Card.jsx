import React, { useState } from 'react'

function Card(props) {

  const [landing, setLanding] = useState(props.value);

  return (
    <div className='card'>
      <p className={"name"}>{landing.name}</p>
      <div className="info">
        <p className={"id"}>Id: {landing.id}</p>
        <p className={"nametype"}>¿Tipo válido?: {landing.nametype}</p>
        <p className={"recclass"}>Clase: {landing.recclass}</p>
        <p className={"mass"}>Masa: {landing.mass}</p>
        <p className={"fall"}>¿Cayó?: {landing.fall}</p>
        <p className={"year"}>Año: {landing.year}</p>
        <p className={"reclat"}>Latitud: {landing.reclat}</p>
        <p className={"reclong"}>Longitud: {landing.reclong}</p>
      </div>
      
    </div>
  )
}

export default Card
