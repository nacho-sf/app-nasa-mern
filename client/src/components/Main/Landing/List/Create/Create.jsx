import React, { useState } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';

function Create(props) {

  const [landing, setLanding] = useState(props.value);
  const { register, handleSubmit } = useForm();

  const createLanding = async (landing) => {

    try {
      const landFields = {
        name: landing.name,
        id: landing.id,
        nametype: landing.nametype,
        recclass: landing.recclass,
        mass: landing.mass,
        fall: landing.fall,
        year: landing.year,
        reclat: landing.reclat,
        reclong: landing.reclong,
        
      };
      const resp = await axios.post("http://localhost:3000/api/astronomy/landings/create", landFields);
      const data = await resp.data;
      console.log(data);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='create'>
      <form onSubmit={handleSubmit(createLanding)}>
        <input name="name" {...register("name")} placeholder="Nombre..." />
        <input name="id" {...register("id")} placeholder="Id..." />
        <select {...register("nametype")} placeholder="¿Tipo válido?"><option value="Valid">Tipo válido</option></select>
        <input name="recclass" {...register("recclass")} placeholder="Clase..." />
        <input name="mass" {...register("mass")} placeholder="Masa..." />
        <select {...register("fall")} placeholder="¿Cayó?"><option value="Fell">¿Cayó?</option></select>
        <input name="year" {...register("year")} placeholder="Año..." />
        <input name="reclat" {...register("reclat")} placeholder="Latitud..." />
        <input name="reclong" {...register("reclong")} placeholder="Longitud..." />
        
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Create
