import { PropertyCardProps } from '@/utils/types'
import React, { type FC } from 'react'

const f = '⇒ PropertiesList.tsx:'

type PropertiesListProps = Readonly<{
  properties: PropertyCardProps[]
}>

const PropertiesList: FC<PropertiesListProps> = ({ properties }) => {
  return (
    <div>
      <h1>PropertiesList</h1>
    </div>
  )
}
export default PropertiesList
