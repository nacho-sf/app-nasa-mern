import React, { useState } from 'react';
import Card from '../List/Card';
import Create from '../List/Create';
import Delete from '../List/Delete';
import useFetch from '../../../../hooks/useFetch';

function List() {

  const { loading, result } = useFetch('http://localhost:3000/api/astronomy/landings');

  const [search, setSearch] = useState("");

  return (
    <div className='list'>
      <section className="forms-container-empty"></section>
      <section className='forms-container'>
        <section className='list-container'>
          <h3>Buscar Landing</h3>
          <section className='list-filter'>
            <input onChange={(e) => setSearch(e.target.value)} placeholder="Nombre..."/>
          </section>
        </section>
        <section className='list-create'>
          {<Create/>}
        </section>

        {/*<section className='list-delete'>
          {<Delete/>}
        </section>*/}
      </section>

      <section className='list-card'>
        {loading?<h3>Cargando Landings...</h3>:result.filter((landing) => {
          return search ==='' 
          ? landing 
          : landing.name.includes(search);
        }).map(landing => (
          <Card 
            value={landing}
            key={crypto.randomUUID()} 
          />
        ))}
      </section>
    </div>
  );
}

export default List