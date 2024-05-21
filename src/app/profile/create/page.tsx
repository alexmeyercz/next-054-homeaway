import React, { type FC } from 'react'

import FormInput from '@/components/form/FormInput'
import { SubmitButton } from '@/components/form/Buttons'
import FormContainer from '@/components/form/FormContainer'
import { createProfileAction } from '@/utils/actions'

const f = '⇒ page.tsx (CreateProfilePage):'

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
