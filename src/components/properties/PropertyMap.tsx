'use client'
import React, { type FC } from 'react'
import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { icon } from 'leaflet'

import { findCountryByCode } from '@/utils/countries'
import CountryFlagAndName from '../card/CountryFlagAndName'
import Title from './Title'

const f = '⇒ PropertyMap.tsx:'

const iconUrl = 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png'

const markerIcon = icon({
  iconUrl: iconUrl,
  iconSize: [20, 30],
})

type PropertyMapProps = { countryCode: string }

const PropertyMap: FC<PropertyMapProps> = ({ countryCode }) => {
  const defaultLocation = [51.505, -0.09] as [number, number]
  const location = findCountryByCode(countryCode)?.location as [number, number]
  console.log(f, 'location →', location)

  return (
    <div className='mt-4'>
      <div className='mb-4'>
        <Title text='Where you will be staying' />
        <CountryFlagAndName countryCode={countryCode} />
      </div>
      <MapContainer
        scrollWheelZoom={false}
        zoomControl={false}
        className='relative z-0 h-[50vh] rounded-lg'
        center={location || defaultLocation}
        zoom={7}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <ZoomControl position='bottomright' />
        <Marker
          position={location || defaultLocation}
          icon={markerIcon}
        />
      </MapContainer>
    </div>
  )
}
export default PropertyMap