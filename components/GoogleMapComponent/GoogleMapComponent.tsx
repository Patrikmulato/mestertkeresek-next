import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

interface GoogleMapComponentInterface {
  containerStyle: {
    width: string
    height: string
  }
  center: {
    lat: number
    lng: number
  }
}

const GoogleMapComponent: React.FC<GoogleMapComponentInterface> = ({ containerStyle, center }) => {
  return (
    <LoadScript googleMapsApiKey={process.env.googleMapKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMapComponent
