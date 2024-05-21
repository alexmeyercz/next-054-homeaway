import React, { type FC } from 'react'

import FormInput from '@/components/form/FormInput'
import { SubmitButton } from '@/components/form/Buttons'
import FormContainer from '@/components/form/FormContainer'

const f = '⇒ page.tsx (CreateProfilePage):'

const createProfileAction = async (prevState: any, formData: FormData) => {
  'use server'
  const firstName = formData.get('firstName') as string
  console.log(f, 'firstName →', firstName)
  if (firstName !== 'shakeAndBake') {
    return { message: 'Invalid first name' }
  }
  return { message: 'Profile created' }
}

const CreateProfilePage: FC = () => {
  return (
    <div>
      <h1 className='mb-8 text-2xl font-semibold capitalize'>new user</h1>
      <div className='max-w-lg rounded-md border p-8'>
        <FormContainer action={createProfileAction}>
          <div className='space-y-4'>
            <FormInput
              name='firstName'
              type='text'
              
              label='First Name'
            />
            <FormInput
              name='lastName'
              type='text'
              
              label='Last Name'
            />
            <FormInput
              name='username'
              type='text'
              
              label='Username'
            />
            <SubmitButton text='Create Profile' />
          </div>
        </FormContainer>
      </div>
    </div>
  )
}
export default CreateProfilePage
