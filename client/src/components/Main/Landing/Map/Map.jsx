import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import useSWR from 'swr';
import { v4 as uuidv4 } from 'uuid';

const fetcher = (...args) => fetch(...args).then(response => response.json());

const icon = new Icon({
  iconUrl: "/landing.png",
  iconSize: [25,25]
})

function Map() {

  const url = "http://localhost:3000/api/astronomy/landings";
  const {data, error} = useSWR(url, fetcher);

  const landings = data && !error ? data : [];

  return (
    <div className="leaflet-container">
    <MapContainer center={[0, 12]} zoom={2} scrollWheelZoom={true}>
      <TileLayer
        attribution='© <a href="https://stadiamaps.com/">Stadia Maps</a>, © <a href="https://openmaptiles.org/">OpenMapTiles</a> © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
      />

      {landings.map(landing => (
        <Marker 
          key={uuidv4()} 
          position={[landing.reclat, landing.reclong]} 
          icon={icon}
        >
            <Popup>
              <p>{landing.name}</p>
              <p>{landing.reclat}</p>
              <p>{landing.reclong}</p>
            </Popup>
        </Marker>
      ))}

    </MapContainer>
    </div>
  );
};

export default Map
