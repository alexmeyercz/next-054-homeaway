import React, { type FC } from 'react'
import { fetchProperties } from '@/utils/actions'
import PropertiesList from '@/components/home/PropertiesList'
import EmptyList from '@/components/home/EmptyList'
import type { PropertyCardProps } from '@/utils/types'

const f = '⇒ PropertiesContainer.tsx:'

type PropertiesContainerProps = { category?: string; search?: string }

const PropertiesContainer: FC<PropertiesContainerProps> = async ({
  category,
  search,
}) => {
  const properties: PropertyCardProps[] = await fetchProperties({
    category,
    search,
  })

  if (properties.length === 0) {
    return (
      <EmptyList
        heading='No properties found'
        message='Try changing or removing some filters'
        btnText='Clear Filters'
      />
    )
  }
  return <PropertiesList properties={properties} />
}
export default PropertiesContainer
