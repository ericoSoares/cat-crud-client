import React, { useEffect, useState } from 'react';
import useCatList from '../../hooks/useCatList';
import CatMap from './CatMap';

const MapContainer = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const { data } = useCatList();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, [])

  return (
    <div className="h-screen antialiased font-sans bg-gray-200">
      {latitude && longitude
        ? <CatMap latitude={latitude} longitude={longitude} cats={data} />
        : <div>Geolocation disabled :(</div>}
    </div>
  )
}

export default MapContainer;