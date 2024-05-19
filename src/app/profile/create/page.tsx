import React, { type FC } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const f = '⇒ page.tsx (CreateProfilePage):'

const createProfileAction = async (formData: FormData) => {
  'use server'
  const firstName = formData.get('firstName') as string
  console.log(f, 'firstName →', firstName)
}

const CreateProfilePage: FC = () => {
  return (
    <div>
      <h1 className='mb-8 text-2xl font-semibold capitalize'>new user</h1>
      <div className='max-w-lg rounded-md border p-8'>
        <form
          action={createProfileAction}
          className='space-y-2'
        >
          <div className='space-y-2'>
            <Label htmlFor='firstName'>First Name</Label>
            <Input
              id='firstName'
              name='firstName'
              type='text'
            />
          </div>
          <Button
            type='submit'
            size='lg'
          >
            Create Profile
          </Button>
        </form>
      </div>
    </div>
  )
}
export default CreateProfilePage
