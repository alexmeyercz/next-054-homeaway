import React, { type FC } from 'react'
import {
  fetchRentalDetails,
  updatePropertyImageAction,
  updatePropertyAction,
} from '@/utils/actions'
import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/FormInput'
import CategoriesInput from '@/components/form/CategoriesInput'
import PriceInput from '@/components/form/PriceInput'
import TextAreaInput from '@/components/form/TextAreaInput'
import CountriesInput from '@/components/form/CountriesInput'
import CounterInput from '@/components/form/CounterInput'
import AmenitiesInput from '@/components/form/AmenitiesInput'
import { SubmitButton } from '@/components/form/Buttons'
import { redirect } from 'next/navigation'
import { type Amenity } from '@/utils/amenities'
import ImageInputContainer from '@/components/form/ImageInputContainer'

const f = '⇒ page.tsx:'

type EditRentalPageProps = {
  params: { id: string }
}

const EditRentalPage: FC<EditRentalPageProps> = async ({ params }) => {
  const property = await fetchRentalDetails(params.id)
  const {
    amenities,
    baths,
    bedrooms,
    beds,
    category,
    country,
    createdAt,
    description,
    guests,
    id,
    image,
    name,
    price,
    profileId,
    tagline,
    updatedAt,
  } = property

  const defaultAmenities: Amenity[] = JSON.parse(amenities)

  return (
    <section>
      <h1>Edit Property</h1>
      <div className='rounded-md border p-8 '>
        <ImageInputContainer
          name={name}
          image={image}
          text='Update Image'
          action={updatePropertyImageAction}
        >
          <input
            type='hidden'
            name='id'
            value={id}
          />
        </ImageInputContainer>
        <FormContainer action={updatePropertyAction}>
          <input
            type='hidden'
            name='id'
            value={id}
          />
          <div className='mb-4 mt-8 grid gap-8 md:grid-cols-2'>
            <FormInput
              name='name'
              type='text'
              label='Name (20 limit)'
              defaultValue={name}
            />
            <FormInput
              name='tagline'
              type='text'
              label='Tagline'
              defaultValue={tagline}
            />
            <PriceInput defaultValue={price} />
            <CategoriesInput
              defaultValue={category}
              name='category'
            />
            <CountriesInput defaultValue={country} />
          </div>
        </FormContainer>
      </div>
      <TextAreaInput
        name='description'
        label='Description'
        defaultValue={description}
        rows={3}
      />
      <h3>Accommodation Details</h3>
      <CounterInput
        detail='guests'
        defaultValue={guests}
      />
      <CounterInput
        detail='bedrooms'
        defaultValue={bedrooms}
      />
      <CounterInput
        detail='beds'
        defaultValue={beds}
      />
      <CounterInput
        detail='baths'
        defaultValue={baths}
      />
      <h3>Amenities</h3>
      <AmenitiesInput defaultValue={defaultAmenities} />
      <SubmitButton
        text='Update Property'
        className='mt-12'
      />
    </section>
  )
}
export default EditRentalPage
