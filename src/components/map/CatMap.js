import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const CatMap = ({ google, latitude, longitude, cats }) => {
  return (
    <Map
      google={google}
      style={{ width: '100%', height: '100%' }}
      zoom={15}
      initialCenter={{
        lat: latitude,
        lng: longitude
      }}
    >
      {cats.map(r => (
        <Marker
          key={Math.random()}
          title={r.name}
          name={r.name}
          position={{ lat: r.location.lat, lng: r.location.lng }}
        />
      ))}
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCWH5YtzE1mah7kAzEVa0yOLadV7F66qDs'
})(CatMap);