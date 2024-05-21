'use server'

import { profileSchema } from './schemas'

const f = '⇒ actions.ts:'

export const createProfileAction = async (
  prevState: any,
  formData: FormData,
) => {
  try {
    const rawData = Object.fromEntries(formData)
    const validatedFields = profileSchema.parse(rawData)
    console.log(f, 'validatedFields →', validatedFields)
    return { message: 'profile created' }
  } catch (error) {
    console.log(f, 'error →', error)
    return { message: 'there was an error' }
  }
}
