import FavoriteToggleButton from '@/components/card/FavoriteToggleButton'
import PropertyRating from '@/components/card/PropertyRating'
import BookingCalendar from '@/components/properties/BookingCalendar'
import BreadCrumbs from '@/components/properties/BreadCrumbs'
import ImageContainer from '@/components/properties/ImageContainer'
import PropertyDetails from '@/components/properties/PropertyDetails'
import ShareButton from '@/components/properties/ShareButton'
import UserInfo from '@/components/properties/UserInfo'
import { fetchPropertyDetails } from '@/utils/actions'
import { paths } from '@/utils/paths'
import { Separator } from '@/components/ui/separator'
import { redirect } from 'next/navigation'
import React, { type FC } from 'react'
import Amenities from '@/components/properties/Amenities'
import Description from '@/components/properties/Description'
import { Skeleton } from '@/components/ui/skeleton'
import dynamic from 'next/dynamic'

const f = '⇒ page.tsx:'

const DynamicMap = dynamic(
  () => import('@/components/properties/PropertyMap'),
  {
    ssr: false,
    loading: () => <Skeleton className='h-[400px] w-full' />,
  },
)

type PropertyDetailPageProps = {
  params: {
    id: string
  }
}

const PropertyDetailPage: FC<PropertyDetailPageProps> = async ({ params }) => {
  const property = await fetchPropertyDetails(params.id)
  if (!property) {
    return redirect(paths.home())
  }
  const { baths, bedrooms, beds, guests } = property
  const details = {
    baths,
    bedrooms,
    beds,
    guests,
  }
  const firstName = property.profile.firstName
  const profileImage = property.profile.profileImage

  console.log(f, 'property.country →', property.country)

  return (
    <section>
      <BreadCrumbs name={property.name} />
      <header className='mt-4 flex items-center justify-between'>
        <h1>{property.name}</h1>
        <div className='flex items-center gap-x-4'>
          <ShareButton
            name={property.name}
            propertyId={property.id}
          />
          <FavoriteToggleButton propertyId={property.id} />
        </div>
      </header>
      <ImageContainer
        mainImage={property.image}
        name={property.name}
      />
      <section className='mt-12 gap-x-12 lg:grid lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <div className='flex items-center gap-x-4'>
            <h1 className='mb-0 text-xl font-bold'>{property.name} </h1>
            <PropertyRating
              inPage
              propertyId={property.id}
            />
          </div>
          <PropertyDetails details={details} />
          <UserInfo profile={{ firstName, profileImage }} />
          <Separator className='mt-4' />
          <Description description={property.description} />
          <Amenities amenities={property.amenities} />
          {/* <DynamicMap countryCode={property.country} /> */}
        </div>
        <div className='flex flex-col items-center lg:col-span-4'>
          {/* calendar */}
          <BookingCalendar />
        </div>
      </section>
    </section>
  )
}
export default PropertyDetailPage
