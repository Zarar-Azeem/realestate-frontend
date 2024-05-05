import { LatLngExpression } from 'leaflet'
import React from 'react'
import { Marker, Popup } from 'react-leaflet'

type MapData = {
  latitude:number,
  longitude:number
}

const Marker1 = ({latitude,longitude} : MapData ) => {
  return (
    <Marker position={[latitude,longitude]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
  )
}

export default Marker1