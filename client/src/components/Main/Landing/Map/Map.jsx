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

  const url = "https://morning-temple-08346.herokuapp.com/api/astronomy/landings";
  const {data, error} = useSWR(url, fetcher);

  const landings = data && !error ? data.slice(1,140) : [];

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
          position={[landing.geolocation.latitude, landing.geolocation.longitude]} 
          icon={icon}
        >
            <Popup>
              <p>{landing.name}</p>
            </Popup>
        </Marker>
      ))}

    </MapContainer>
    </div>
  );
};

export default Map
