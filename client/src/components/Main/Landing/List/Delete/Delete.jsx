import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function Delete(props) {

  const [landing, setLanding] = useState(props.value);
  const { register, handleSubmit } = useForm();

  const deleteLanding = async (landing) => {

    try {
      const idField = {
        id: landing.id
      };
      const resp = await axios.delete("http://localhost:3000/api/astronomy/landings/delete", idField);
      const data = await resp.data;
      console.log(data
        );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='delete'>
      <h3>Borrar landing</h3>
      <form onSubmit={handleSubmit(deleteLanding)}>
        <input name="id" {...register("id")} placeholder="Id..." />
        <button type="submit">Borrar</button>
      </form>
    </div>
  )
}

export default Delete