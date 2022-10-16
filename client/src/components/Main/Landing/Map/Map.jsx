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
    <MapContainer center={[20, 12]} zoom={2} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
