import { fetchPropertyDetails } from '@/utils/actions'
import { redirect } from 'next/navigation'
import React, { type FC } from 'react'

const f = '⇒ page.tsx:'

type PropertyDetailPageProps = {
  params: {
    id: string
  }
}

const PropertyDetailPage: FC<PropertyDetailPageProps> = async ({ params }) => {
  const property = await fetchPropertyDetails(params.id)
  if (!property) {
    return redirect('/')
  }
  const { baths, bedrooms, beds, guests } = property
  const details = {
    baths,
    bedrooms,
    beds,
    guests,
  }
  return (
    <div>
      <h1>PropertyDetailPage</h1>
    </div>
  )
}
export default PropertyDetailPage
