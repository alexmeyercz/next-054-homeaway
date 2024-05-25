import {
  fetchProfile,
  updateProfileAction,
  updateProfileImageAction,
} from '@/utils/actions'
import React, { type FC } from 'react'
import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/FormInput'
import { createProfileAction } from '@/utils/actions'
import { SubmitButton } from '@/components/form/Buttons'
import ImageInputContainer from '@/components/form/ImageInputContainer'

const f = '⇒ page.tsx (ProfilePage):'

const ProfilePage: FC = async () => {
  const profile = await fetchProfile()
  return (
    <section>
      <h1>edit profile</h1>
      <div className='max-w-lg space-y-6 rounded-md border p-8'>
        <ImageInputContainer
          image={profile.profileImage}
          name={profile.username}
          action={updateProfileImageAction}
          text='Update Profile Image'
        />
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
