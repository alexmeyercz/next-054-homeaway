import { fetchProfile, updateProfileAction } from '@/utils/actions'
import React, { type FC } from 'react'
import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/FormInput'
import { createProfileAction } from '@/utils/actions'
import { SubmitButton } from '@/components/form/Buttons'

const f = '⇒ page.tsx (ProfilePage):'

const ProfilePage: FC = async () => {
  const profile = await fetchProfile()
  // console.log(f, 'profile →', profile)
  return (
    <section>
      <h1>edit profile</h1>
      <div className='max-w-lg rounded-md border p-8'>
        <FormContainer action={updateProfileAction}>
          <div className='space-y-4'>
            <FormInput
              name='firstName'
              type='text'
              label='First Name'
              defaultValue={profile.firstName}
            />
            <FormInput
              name='lastName'
              type='text'
              label='Last Name'
              defaultValue={profile.lastName}
            />
            <FormInput
              name='username'
              type='text'
              label='Username'
              defaultValue={profile.username}
            />
            <SubmitButton text='Update Profile' />
          </div>
        </FormContainer>
      </div>
    </section>
  )
}
export default ProfilePage
