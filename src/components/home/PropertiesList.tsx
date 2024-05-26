import { PropertyCardProps } from '@/utils/types'
import React, { type FC } from 'react'
import PropertyCard from '@/components/card/PropertyCard'

const f = '⇒ PropertiesList.tsx:'

type PropertiesListProps = Readonly<{
  properties: PropertyCardProps[]
}>

const PropertiesList: FC<PropertiesListProps> = ({ properties }) => {
  return (
    <section className='mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {properties.map((property) => {
        return (
          <PropertyCard
            key={property.id}
            property={property}
          />
        )
      })}
    </section>
  )
}
export default PropertiesList
