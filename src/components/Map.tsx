import { LatLngExpression } from 'leaflet'
import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import Marker1 from './Marker'
import 'leaflet/dist/leaflet.css'

const Map = () => {
  
  const data = [
    {
      id: 2204,
      gps: {
        latitude: 39.008355,
        longitude: -77.501839
      }
    },
    {
      id: 7384,
      gps: {
        latitude: 38.241495,
        longitude: -81.559849
      }
    },
    {
      id: 2597,
      
      gps: {
        latitude: 41.39169,
        longitude: -73.595175
      }
    },
    {
      id: 3719,
      
      gps: {
        latitude: 37.745769,
        longitude: -77.472412
      }
    },
    {
      id: 4148,
      gps: {
        latitude: 41.828441,
        longitude: -71.42697
      }
    }
  ]

  const position : LatLngExpression = [51.505, -0.09]
    return (
      <MapContainer center={position} zoom={13}  style={{height:"100%"}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data.map(item => 
        <Marker1 latitude={item.gps.latitude} longitude={item.gps.longitude} key={item.id}/>

      )}
      {/* <Marker position={[39.008355, -77.501839]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[38.241495, -81.559849]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[ 41.39169, -73.595175]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  )
}

export default Map