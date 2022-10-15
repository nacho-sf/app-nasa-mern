import React, { useEffect, useState } from 'react';
import Card from '../List/Card';
import Create from '../List/Create';


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
{<Create/>}
{landings.map(landing => (<Card 
          value={landing}
          key={crypto.randomUUID()} 
        />
      ))}

    </div>
  );
}

export default List