import React, { type FC } from 'react'
import FormInput from '@/components/form/FormInput'
import FormContainer from '@/components/form/FormContainer'
import { createPropertyAction } from '@/utils/actions'
import { SubmitButton } from '@/components/form/Buttons'

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
          </div>
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
