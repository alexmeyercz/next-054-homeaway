import React, { type FC } from 'react'
import FormInput from '@/components/form/FormInput'
import FormContainer from '@/components/form/FormContainer'
import { createPropertyAction } from '@/utils/actions'
import { SubmitButton } from '@/components/form/Buttons'
import PriceInput from '@/components/form/PriceInput'
import CategoriesInput from '@/components/form/CategoriesInput'
import TextAreaInput from '@/components/form/TextAreaInput'
import CountriesInput from '@/components/form/CountriesInput'
import CounterInput from '@/components/form/CounterInput'
import AmenitiesInput from '@/components/form/AmenitiesInput'
import ImageInput from '@/components/form/ImageInput'

const f = '⇒ page.tsx (CreateRentalsPage):'

const CreateRentalsPage: FC = () => {
  return (
    <section>
      <h1>create property</h1>
      <div className='rounded-md border p-8'>
        <h3>General Info</h3>
        <FormContainer action={createPropertyAction}>
          <div className='mb-4 grid gap-8 md:grid-cols-2'>
            <FormInput
              name='name'
              type='text'
              label='Name (20 limit)'
              defaultValue='Cabin in Latvia'
            />
            <FormInput
              name='tagline'
              type='text '
              label='Tagline (30 limit)'
              defaultValue='Dream Getaway Awaits You Here!'
            />
            <PriceInput defaultValue={200} />
            <CategoriesInput name='category' />
          </div>
          <TextAreaInput
            name='description'
            label='Property Description (10 - 1000 words)'
          />
          <div className='grid gap-8 sm:grid-cols-2'>
            <CountriesInput />
            <ImageInput name='image' />
          </div>
          <h3 className='mt-8'>Accommodation Details</h3>
          <CounterInput detail='guests' />
          <CounterInput detail='bedrooms' />
          <CounterInput detail='beds' />
          <CounterInput detail='baths' />

          <h3 className='mt-8'>Amenities</h3>
          <AmenitiesInput />
          <SubmitButton
            text='Create Property'
            className='mt-12'
          />
        </FormContainer>
      </div>
    </section>
  )
}
export default CreateRentalsPage
