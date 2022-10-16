import React, { useEffect, useState } from 'react';
import Card from '../List/Card';
import Create from '../List/Create';
import Delete from '../List/Delete';


function List() {

  const [landings, setLandings] = useState([]);
  //const [id, setId] = useState("");


  useEffect(() => {
    const getLandings = async () => {
      const resp = await fetch("http://localhost:3000/api/astronomy/landings");
      const data = await resp.json();
      setLandings(data);
    }
    getLandings();
  }, [landings]);



  return (
    <div className='list'>
      <section className="forms-container-empty"></section>
      <section className='forms-container'>
        <section className='list-create'>
          {<Create/>}
        </section>

        <section className='list-delete'>
          {<Delete/>}
        </section>
      </section>

      <section className='list-card'>
        {landings.map(landing => (
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