import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'

const Location = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  })

  const center = { lat: 56.951266, lng: 24.082570 }

  if(!isLoaded) return <div>Loading</div>
  return (
        <GoogleMap zoom={16} center={center} mapContainerClassName='location'>
            <MarkerF position={center} />
        </GoogleMap>
  )
}

export default Location